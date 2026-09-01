import { Resend } from "resend";

import { buildAkiliBizContactEmail } from "@/components/templates/akilibiz-contact-email-template";
import { config } from "@/lib/config";

const helpOptions = new Set([
  "General enquiry",
  "Request a demo",
  "Pricing and plans",
  "AkiliBiz Desktop support",
  "Something else",
]);

type ContactSubmission = {
  name: string;
  business: string;
  contact: string;
  help: string;
  message: string;
  website: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getSubmission(body: unknown): ContactSubmission {
  const values = body && typeof body === "object" ? body : {};
  const value = (field: string) => {
    const candidate = (values as Record<string, unknown>)[field];
    return typeof candidate === "string" ? candidate.trim() : "";
  };

  return {
    name: value("name"),
    business: value("business"),
    contact: value("contact"),
    help: value("help"),
    message: value("message"),
    website: value("website"),
  };
}

function validateSubmission(submission: ContactSubmission) {
  const errors: Record<string, string> = {};

  if (!submission.name || submission.name.length > 200) errors.name = "Enter a valid name.";
  if (!submission.business || submission.business.length > 200) {
    errors.business = "Enter a valid business name.";
  }
  if (!submission.contact || submission.contact.length > 320) {
    errors.contact = "Enter a valid email address or phone number.";
  }
  if (!helpOptions.has(submission.help)) errors.help = "Choose a valid help option.";
  if (!submission.message || submission.message.length > 5000) {
    errors.message = "Enter a message of up to 5,000 characters.";
  }

  return errors;
}

export async function POST(request: Request) {
  let submission: ContactSubmission;

  try {
    submission = getSubmission(await request.json());
  } catch {
    return Response.json({ error: "Invalid form submission." }, { status: 400 });
  }

  if (submission.website) {
    return Response.json({ success: true });
  }

  const errors = validateSubmission(submission);
  if (Object.keys(errors).length > 0) {
    return Response.json({ error: "Please correct the highlighted fields.", errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error("Contact email environment variables are not configured.");
    return Response.json({ error: "Unable to send your message." }, { status: 500 });
  }

  const { html, text } = buildAkiliBizContactEmail({
    ...submission,
    submittedAt: new Date(),
    logoUrl: new URL("/Logo.png", config.siteUrl).toString(),
    siteUrl: config.siteUrl,
  });

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      subject: `New AkiliBiz enquiry: ${submission.help} — ${submission.name}`,
      html,
      text,
      ...(emailPattern.test(submission.contact) ? { replyTo: submission.contact } : {}),
    });

    if (error) {
      console.error("Resend failed to send contact email:", error);
      return Response.json({ error: "Unable to send your message." }, { status: 500 });
    }
  } catch (error) {
    console.error("Unexpected contact email error:", error);
    return Response.json({ error: "Unable to send your message." }, { status: 500 });
  }

  return Response.json({ success: true });
}
