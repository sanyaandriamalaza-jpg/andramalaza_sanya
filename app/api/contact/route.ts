import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP_HOST,
  port: Number(process.env.MAILTRAP_PORT) || 587,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASSWORD,
  },
});

  await transporter.sendMail({
    from: email,
    to: process.env.MAILTRAP_USER,
    subject: `Contact Portfolio — ${name}`,
    text: message,
  });

  return NextResponse.json({ success: true });
}
