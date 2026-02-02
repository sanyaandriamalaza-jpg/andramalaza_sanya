import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: email,
    to: process.env.MAIL_USER,
    subject: `Contact Portfolio — ${name}`,
    text: message,
  });

  return NextResponse.json({ success: true });
}
