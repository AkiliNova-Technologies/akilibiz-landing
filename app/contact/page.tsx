"use client";

import * as React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";

import { MarketingWideContainer } from "@/components/marketing/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { config } from "@/lib/config";

const helpOptions = [
  "General enquiry",
  "Request a demo",
  "Pricing and plans",
  "AkiliBiz Desktop support",
  "Something else",
];

function buildWhatsAppChatUrl(): string {
  if (!config.whatsappChatUrl) return "";
  const params = new URLSearchParams();
  if (config.whatsappDemoMessage)
    params.set("text", config.whatsappDemoMessage);
  return `${config.whatsappChatUrl}?${params.toString()}`;
}

function WhatsAppIcon() {
  return (
    <svg
      className="h-5 w-5 fill-current text-current"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState("");
  const whatsappUrl = buildWhatsAppChatUrl();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError("");
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (!response.ok) throw new Error("Contact form delivery failed.");
      setSubmitted(true);
    } catch {
      setSubmitError(
        "We couldn’t send your message just now. Please try again or contact us on WhatsApp.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="overflow-x-clip bg-surface-warm text-ink-900">
      <section className="relative min-h-[500px] overflow-hidden bg-[#06131f] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Image
          src="/images/marketing/akilibiz-business-team.jpg"
          alt="African business owners working together at a computer"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06131f]/95 via-[#06131f]/88 via-55% to-[#06131f]/35" />
        <MarketingWideContainer className="relative z-10 flex min-h-[340px] items-center">
          <div className="max-w-3xl text-white">
            <h1 className="mt-5 font-[family-name:var(--font-sora)] text-4xl font-semibold leading-[1.01] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Let’s move your business forward.
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
              Whether you are evaluating AkiliBiz, setting up your team, or need
              help with the desktop application, tell us what you need and we’ll
              point you in the right direction.
            </p>
          </div>
        </MarketingWideContainer>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <MarketingWideContainer className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-12">
          <article className="rounded-[30px] border border-ink-100 bg-white p-6 shadow-[0_20px_50px_-38px_rgba(16,34,53,.32)] sm:p-8">
            {submitted ? (
              <div
                className="flex min-h-[540px] flex-col items-center justify-center gap-4 py-10 text-center"
                aria-live="polite">
                <Image
                  src="/mail-sent.svg"
                  alt="Message sent"
                  width={570}
                  height={512}
                  className="h-auto w-48 sm:w-56"
                />
                <h2 className="font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
                  Thank you for reaching out
                </h2>
                <p className="max-w-sm text-sm leading-relaxed text-ink-500">
                  Our team will review your message and follow up using the
                  details you provided.
                </p>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                  <Button
                    variant="secondary"
                    onClick={() => setSubmitted(false)}>
                    Send another message
                  </Button>
                  {whatsappUrl && (
                    <Button asChild variant="secondary">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer">
                        <WhatsAppIcon />
                        Chat on WhatsApp
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
                      Tell us what you need
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-ink-500">
                      We’ll use the details below to respond with the most
                      useful next step.
                    </p>
                  </div>
                </div>
                <form
                  className="mt-8 flex flex-col gap-5 border-t border-ink-100 pt-8"
                  onSubmit={handleSubmit}
                  noValidate>
                  <p className="sr-only" aria-live="polite">
                    {isSubmitting ? "Sending enquiry…" : submitError}
                  </p>
                  <div className="sr-only" aria-hidden="true">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        autoComplete="name"
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="business">Business name</Label>
                      <Input
                        id="business"
                        name="business"
                        autoComplete="organization"
                        required
                        placeholder="Your business name"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="contact">Email or phone</Label>
                    <Input
                      id="contact"
                      name="contact"
                      required
                      placeholder="you@business.com or phone number"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="help">What would you like help with?</Label>
                    <Select name="help" required>
                      <SelectTrigger
                        id="help"
                        aria-label="What would you like help with?">
                        <SelectValue placeholder="Choose an option" />
                      </SelectTrigger>
                      <SelectContent>
                        {helpOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell us a bit more about your business and what you need."
                      className="min-h-[150px]"
                    />
                  </div>
                  <div className="mt-2 flex flex-col items-start gap-3">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto"
                      disabled={isSubmitting}>
                      {isSubmitting ? "Sending enquiry…" : "Send enquiry"}
                    </Button>
                  </div>
                  {submitError && (
                    <p className="text-sm text-brand-700">{submitError}</p>
                  )}
                </form>
              </>
            )}
          </article>

          <aside className="flex flex-col gap-4 lg:pt-6">
            <div className="rounded-[30px] border border-white/10 bg-[#102235] p-6 text-white shadow-[0_24px_60px_-36px_rgba(6,19,31,.72)] sm:p-8">
              <h2 className="font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight">
                A clearer way to get started.
              </h2>
              <ol className="mt-8 grid gap-5">
                {[
                  "Tell us about your business",
                  "Choose the help you need",
                  "Get a practical next step from our team",
                ].map((step, index) => (
                  <li
                    key={step}
                    className="flex items-center gap-3 text-sm leading-6 text-white/75">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-xs font-semibold text-brand-200">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <div className="mt-8">
                <p className="text-sm leading-6 text-white/60">
                  Supporting businesses digitising daily operations across
                  Uganda.
                </p>
              </div>
            </div>
          </aside>
        </MarketingWideContainer>
      </section>
    </main>
  );
}
