import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
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
      from: "Saadhana Website <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `New enquiry from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Institution / Company:</strong> ${company || "-"}</p>

        <hr />

        <p>${message.replace(/\n/g, "<br/>")}</p>
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