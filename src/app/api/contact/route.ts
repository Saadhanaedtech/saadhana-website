import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Server configuration error." },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);


  try {
    const body = await request.json();

    const {
      fullName,
      email,
      company,
      message,
      website,
    } = body;

    // Honeypot (spam protection)
    if (website) {
      return NextResponse.json(
        { success: true },
        { status: 200 }
      );
    }

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Saadhana EdTech <noreply@saadhanaedtech.com>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `New Website enquiry from ${fullName}`,
      html: `
      <div style="font-family:Arial,Helvetica,sans-serif;background:#f8fafc;padding:40px;">
        <div style="max-width:700px;margin:auto;background:#ffffff;border-radius:12px;padding:40px;border:1px solid #e5e7eb;">

          <h2 style="margin-top:0;color:#0f172a;">
            New Website Enquiry
          </h2>

          <p style="color:#64748b;">
            A visitor has submitted the contact form from the
            <strong>Saadhana EdTech</strong> website.
          </p>

          <hr style="margin:24px 0;border:none;border-top:1px solid #e5e7eb;">

          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;font-weight:bold;width:180px;">Name</td>
              <td>${fullName}</td>
            </tr>

            <tr>
              <td style="padding:10px 0;font-weight:bold;">Email</td>
              <td>
                <a href="mailto:${email}">
                  ${email}
                </a>
              </td>
            </tr>

            <tr>
              <td style="padding:10px 0;font-weight:bold;">Institution / Company</td>
              <td>${company || "-"}</td>
            </tr>

            <tr>
              <td style="padding:10px 0;font-weight:bold;vertical-align:top;">Message</td>
              <td>${message.replace(/\n/g, "<br/>")}</td>
            </tr>
          </table>

          <hr style="margin:24px 0;border:none;border-top:1px solid #e5e7eb;">

          <p style="font-size:12px;color:#94a3b8;">
            This email was automatically generated from the
            Saadhana EdTech website contact form.
          </p>

        </div>
      </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Unable to send email.",
      },
      {
        status: 500,
      }
    );
  }
}