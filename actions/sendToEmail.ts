'use server';

import nodemailer from 'nodemailer';

type Props = {
  to: string;
  subject: string;
  text: string;
};
export async function sendToEmail({ to, subject, text }: Props) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'aymanechaaba1@gmail.com',
      pass: process.env.NODEMAILER_PASS || 'ozvo hrxc eahj rgeg', // secret key
    },
  });

  const res = await transporter.sendMail({
    from: `Tadakir.net Clone" <aymanechaaba1@gmail.com>`,
    to,
    subject,
    text,
  });
  return res.messageId;
}