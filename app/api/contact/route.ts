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
  plan: string;
  billing: string;
  enquiry: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phonePattern = /^\+?[0-9\s\-()]{7,25}$/;

function getSubmission(body: unknown): ContactSubmission {
  const values =
    body && typeof body === "object"
      ? body
      : {};

  const value = (field: string) => {
    const candidate = (values as Record<string, unknown>)[field];

    return typeof candidate === "string"
      ? candidate.trim()
      : "";
  };

  return {
    name: value("name"),
    business: value("business"),
    contact: value("contact"),
    help: value("help"),
    message: value("message"),
    website: value("website"),
    plan: value("plan"),
    billing: value("billing"),
    enquiry: value("enquiry"),
  };
}

function validateSubmission(
  submission: ContactSubmission,
): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!submission.name || submission.name.length > 200) {
    errors.name = "Enter a valid name.";
  }

  if (!submission.business || submission.business.length > 200) {
    errors.business = "Enter a valid business name.";
  }

  const hasValidContact =
    emailPattern.test(submission.contact) ||
    phonePattern.test(submission.contact);

  if (
    !submission.contact ||
    submission.contact.length > 320 ||
    !hasValidContact
  ) {
    errors.contact = "Enter a valid email address or phone number.";
  }

  if (!helpOptions.has(submission.help)) {
    errors.help = "Choose a valid help option.";
  }

  if (!submission.message || submission.message.length > 5000) {
    errors.message = "Enter a message of up to 5,000 characters.";
  }

  if (submission.plan && !["starter", "growth", "pro", "enterprise"].includes(submission.plan)) errors.plan = "Choose a valid plan.";
  if (submission.billing && !["monthly", "annual"].includes(submission.billing)) errors.billing = "Choose a valid billing interval.";
  if (submission.enquiry && submission.enquiry !== "trial") errors.enquiry = "Choose a valid enquiry type.";

  return errors;
}

function getEmailSubject(submission: ContactSubmission): string {
  if (submission.enquiry === "trial") return `Free trial enquiry · ${submission.business}`;
  if (submission.plan) return `${submission.plan[0].toUpperCase()}${submission.plan.slice(1)} plan enquiry · ${submission.business}`;
  switch (submission.help) {
    case "Request a demo":
      return `New demo request · ${submission.business}`;

    case "Pricing and plans":
      return `Pricing enquiry · ${submission.business}`;

    case "AkiliBiz Desktop support":
      return `Desktop support request · ${submission.business}`;

    case "General enquiry":
      return `New business enquiry · ${submission.business}`;

    default:
      return `New AkiliBiz enquiry · ${submission.business}`;
  }
}

export async function POST(request: Request) {
  let submission: ContactSubmission;

  try {
    submission = getSubmission(await request.json());
  } catch {
    return Response.json(
      { error: "Invalid form submission." },
      { status: 400 },
    );
  }

  /*
   * Honeypot.
   *
   * Bots that populate this hidden field receive a successful response,
   * but no email is sent.
   */
  if (submission.website) {
    return Response.json({ success: true });
  }

  const errors = validateSubmission(submission);

  if (Object.keys(errors).length > 0) {
    return Response.json(
      {
        error: "Please correct the highlighted fields.",
        errors,
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error(
      "Contact email environment variables are not configured.",
    );

    return Response.json(
      { error: "Unable to send your message." },
      { status: 500 },
    );
  }

  const submittedAt = new Date();

  const { html, text } = buildAkiliBizContactEmail({
    ...submission,
    submittedAt,
    logoUrl: new URL("/Logo.png", config.siteUrl).toString(),
    siteUrl: config.siteUrl,
    plan: submission.plan,
    billing: submission.billing,
    enquiry: submission.enquiry,
  });

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from,
      to: [to],

      subject: getEmailSubject(submission),

      html,
      text,

      ...(emailPattern.test(submission.contact)
        ? {
            replyTo: submission.contact,
          }
        : {}),
    });

    if (error) {
      console.error(
        "Resend failed to send contact email:",
        error,
      );

      return Response.json(
        { error: "Unable to send your message." },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error(
      "Unexpected contact email error:",
      error,
    );

    return Response.json(
      { error: "Unable to send your message." },
      { status: 500 },
    );
  }

  return Response.json({ success: true });
}
