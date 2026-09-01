export type AkiliBizContactEnquiry = {
  name: string;
  business: string;
  contact: string;
  help: string;
  message: string;
  submittedAt?: Date;
};

type ContactEmailTemplateOptions = AkiliBizContactEnquiry & {
  /**
   * An absolute URL to the AkiliBiz logo in the marketing site's public folder.
   * Email clients cannot reliably load a relative `/images/...` path.
   */
  logoUrl: string;
  siteUrl?: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatSubmittedAt(date: Date): string {
  return new Intl.DateTimeFormat("en-UG", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Africa/Kampala",
  }).format(date);
}

export function buildAkiliBizContactEmail({
  name,
  business,
  contact,
  help,
  message,
  logoUrl,
  siteUrl,
  submittedAt = new Date(),
}: ContactEmailTemplateOptions): { html: string; text: string } {
  const safe = {
    name: escapeHtml(name),
    business: escapeHtml(business),
    contact: escapeHtml(contact),
    help: escapeHtml(help),
    message: escapeHtml(message).replace(/\n/g, "<br />"),
    logoUrl: escapeHtml(logoUrl),
    siteUrl: siteUrl ? escapeHtml(siteUrl) : "",
    submittedAt: escapeHtml(formatSubmittedAt(submittedAt)),
  };

  const rows = [
    ["Name", safe.name],
    ["Business", safe.business],
    ["Email or phone", safe.contact],
    ["Help needed", safe.help],
    ["Received", `${safe.submittedAt} (Uganda time)`],
  ]
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding: 11px 0; color: #667085; font-size: 13px; line-height: 18px; vertical-align: top; width: 132px;">${label}</td>
          <td style="padding: 11px 0; color: #102235; font-size: 14px; font-weight: 600; line-height: 20px; vertical-align: top;">${value}</td>
        </tr>`,
    )
    .join("");

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New AkiliBiz enquiry</title>
  </head>
  <body style="margin: 0; padding: 0; background: #f7f3ed; color: #102235; font-family: Arial, Helvetica, sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background: #f7f3ed;">
      <tr>
        <td style="padding: 36px 16px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width: 640px; margin: 0 auto; overflow: hidden; border: 1px solid #e7e0d8; border-radius: 24px; background: #ffffff;">
            <tr>
              <td style="padding: 28px 32px; background: #06131f;">
                <img src="${safe.logoUrl}" alt="AkiliBiz" width="144" style="display: block; max-width: 144px; height: auto; border: 0;" />
              </td>
            </tr>
            <tr>
              <td style="padding: 36px 32px 18px;">
                <p style="margin: 0 0 10px; color: #e56e18; font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;">Website enquiry</p>
                <h1 style="margin: 0; color: #102235; font-size: 28px; font-weight: 700; letter-spacing: -0.5px; line-height: 34px;">A new business wants to talk.</h1>
                <p style="margin: 14px 0 0; color: #667085; font-size: 15px; line-height: 23px;">${safe.name} submitted an enquiry through the AkiliBiz contact form.</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 32px 28px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-top: 1px solid #ece6df; border-bottom: 1px solid #ece6df;">${rows}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 0 32px 32px;">
                <div style="border-left: 4px solid #e56e18; border-radius: 0 12px 12px 0; background: #fff7ef; padding: 16px 18px;">
                  <p style="margin: 0 0 7px; color: #9a4a10; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;">Their message</p>
                  <p style="margin: 0; color: #273747; font-size: 15px; line-height: 24px;">${safe.message}</p>
                </div>
              </td>
            </tr>
            ${safe.siteUrl ? `<tr><td style="padding: 0 32px 34px;"><a href="${safe.siteUrl}" style="color: #0d5f8b; font-size: 13px; font-weight: 700; text-decoration: none;">View AkiliBiz website &rarr;</a></td></tr>` : ""}
          </table>
          <p style="max-width: 640px; margin: 18px auto 0; color: #8a8f98; font-size: 12px; line-height: 18px; text-align: center;">This email was sent from the AkiliBiz website contact form.</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = `New AkiliBiz website enquiry\n\nName: ${name}\nBusiness: ${business}\nEmail or phone: ${contact}\nHelp needed: ${help}\nReceived: ${formatSubmittedAt(submittedAt)} (Uganda time)\n\nMessage:\n${message}`;

  return { html, text };
}