export type AkiliBizContactEnquiry = {
  name: string;
  business: string;
  contact: string;
  help: string;
  message: string;
  submittedAt?: Date;
};

type ContactEmailTemplateOptions = AkiliBizContactEnquiry & {
  logoUrl: string;
  siteUrl?: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatSubmittedAt(date: Date): string {
  return new Intl.DateTimeFormat("en-UG", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Africa/Kampala",
  }).format(date);
}

function getContactLink(contact: string): string | null {
  const value = contact.trim();

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return `mailto:${value}`;
  }

  const phone = value.replace(/[^\d+]/g, "");

  if (/^\+?\d{7,15}$/.test(phone)) {
    return `tel:${phone}`;
  }

  return null;
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
  const contactLink = getContactLink(contact);

  const safe = {
    name: escapeHtml(name),
    business: escapeHtml(business),
    contact: escapeHtml(contact),
    help: escapeHtml(help),
    message: escapeHtml(message).replace(/\n/g, "<br />"),
    logoUrl: escapeHtml(logoUrl),
    siteUrl: siteUrl ? escapeHtml(siteUrl) : "",
    submittedAt: escapeHtml(formatSubmittedAt(submittedAt)),
    contactLink: contactLink ? escapeHtml(contactLink) : "",
  };

  const contactAction = safe.contactLink
    ? `
      <a
        href="${safe.contactLink}"
        style="
          display:inline-block;
          padding:12px 18px;
          border-radius:10px;
          background:#0b67c2;
          color:#ffffff;
          font-size:14px;
          font-weight:700;
          line-height:20px;
          text-decoration:none;
        "
      >
        Reply to enquiry
      </a>
    `
    : "";

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>New AkiliBiz enquiry</title>
</head>

<body
  style="
    margin:0;
    padding:0;
    background:#f4f7fa;
    color:#102235;
    font-family:Arial,Helvetica,sans-serif;
  "
>
  <table
    role="presentation"
    width="100%"
    cellspacing="0"
    cellpadding="0"
    border="0"
    style="background:#f4f7fa;"
  >
    <tr>
      <td style="padding:32px 16px;">

        <table
          role="presentation"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          border="0"
          align="center"
          style="
            width:100%;
            max-width:620px;
            margin:0 auto;
            background:#ffffff;
            border:1px solid #e5eaf0;
            border-radius:18px;
          "
        >

          <!-- Header -->
          <tr>
            <td
              style="
                padding:22px 28px;
                border-bottom:1px solid #edf1f5;
              "
            >
              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
              >
                <tr>
                  <td>
                    <img
                      src="${safe.logoUrl}"
                      alt="AkiliBiz"
                      width="108"
                      style="
                        display:block;
                        width:108px;
                        max-width:108px;
                        height:auto;
                        border:0;
                      "
                    />
                  </td>

                  <td align="right">
                    <span
                      style="
                        display:inline-block;
                        padding:7px 10px;
                        border-radius:999px;
                        background:#eef6ff;
                        color:#0b67c2;
                        font-size:11px;
                        font-weight:700;
                        letter-spacing:.04em;
                        text-transform:uppercase;
                      "
                    >
                      New enquiry
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Hero -->
          <tr>
            <td style="padding:30px 28px 24px;">

              <p
                style="
                  margin:0 0 8px;
                  color:#0b67c2;
                  font-size:13px;
                  font-weight:700;
                "
              >
                ${safe.help}
              </p>

              <h1
                style="
                  margin:0;
                  color:#102235;
                  font-size:27px;
                  line-height:34px;
                  font-weight:700;
                  letter-spacing:-.4px;
                "
              >
                ${safe.business}
              </h1>

              <p
                style="
                  margin:7px 0 0;
                  color:#65758b;
                  font-size:15px;
                  line-height:22px;
                "
              >
                ${safe.name} reached out through the AkiliBiz website.
              </p>

            </td>
          </tr>

          <!-- Lead information -->
          <tr>
            <td style="padding:0 28px 24px;">

              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="
                  background:#f8fafc;
                  border:1px solid #e8edf3;
                  border-radius:12px;
                "
              >
                <tr>
                  <td style="padding:17px 18px;">

                    <p
                      style="
                        margin:0 0 5px;
                        color:#7b8798;
                        font-size:11px;
                        font-weight:700;
                        text-transform:uppercase;
                        letter-spacing:.06em;
                      "
                    >
                      Contact
                    </p>

                    ${
                      safe.contactLink
                        ? `
                          <a
                            href="${safe.contactLink}"
                            style="
                              color:#0b67c2;
                              font-size:15px;
                              font-weight:700;
                              line-height:22px;
                              text-decoration:none;
                            "
                          >
                            ${safe.contact}
                          </a>
                        `
                        : `
                          <p
                            style="
                              margin:0;
                              color:#102235;
                              font-size:15px;
                              font-weight:700;
                            "
                          >
                            ${safe.contact}
                          </p>
                        `
                    }

                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:0 28px 28px;">

              <p
                style="
                  margin:0 0 10px;
                  color:#526173;
                  font-size:12px;
                  font-weight:700;
                  letter-spacing:.05em;
                  text-transform:uppercase;
                "
              >
                Their message
              </p>

              <div
                style="
                  padding:20px;
                  background:#ffffff;
                  border:1px solid #e4eaf0;
                  border-left:4px solid #0b67c2;
                  border-radius:10px;
                "
              >
                <p
                  style="
                    margin:0;
                    color:#25384d;
                    font-size:15px;
                    line-height:25px;
                  "
                >
                  ${safe.message}
                </p>
              </div>

            </td>
          </tr>

          <!-- CTA -->
          ${
            contactAction
              ? `
                <tr>
                  <td style="padding:0 28px 30px;">
                    ${contactAction}
                  </td>
                </tr>
              `
              : ""
          }

          <!-- Footer -->
          <tr>
            <td
              style="
                padding:20px 28px;
                border-top:1px solid #edf1f5;
                background:#fafbfd;
              "
            >
              <p
                style="
                  margin:0;
                  color:#8a96a6;
                  font-size:12px;
                  line-height:18px;
                "
              >
                Received ${safe.submittedAt} · Uganda time
              </p>

              ${
                safe.siteUrl
                  ? `
                    <p
                      style="
                        margin:7px 0 0;
                        font-size:12px;
                        line-height:18px;
                      "
                    >
                      <a
                        href="${safe.siteUrl}"
                        style="
                          color:#0b67c2;
                          font-weight:700;
                          text-decoration:none;
                        "
                      >
                        Open AkiliBiz website →
                      </a>
                    </p>
                  `
                  : ""
              }

            </td>
          </tr>

        </table>

        <p
          style="
            max-width:620px;
            margin:15px auto 0;
            color:#9aa4b2;
            font-size:11px;
            line-height:17px;
            text-align:center;
          "
        >
          AkiliBiz website enquiry notification
        </p>

      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = `New AkiliBiz enquiry

${help}

Business: ${business}
Name: ${name}
Contact: ${contact}

Message:
${message}

Received: ${formatSubmittedAt(submittedAt)} (Uganda time)`;

  return { html, text };
}
