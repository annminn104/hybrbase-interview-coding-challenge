import { TemplateUtils } from '@/common/utils';
import envConfig from '@/common/environments';
import { EmailTypeRequest } from '@/global';
import sheets, { sheetId } from './sheets';
import nodemailer from 'nodemailer';
import { ZodError } from 'zod';

export async function POST(request: Request) {
  try {
    const { name, phone, email, company, type } = await request.json();

    if (!name || !email || !type) return Response.json({ message: 'Error missing fields send to email' }, { status: 400 });

    const sendMsg: EmailTypeRequest = {
      from: envConfig.email.send,
      to: email,
      subject: 'noreply: [HYBRBASE] - Thank you for your order',
      html: TemplateUtils.emailSend({ type, name, phone, email, company })
    };

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      port: 465,
      secure: true,
      auth: { user: envConfig.email.send, pass: envConfig.email.password }
    });

    const sendMsgTransporter = transporter.sendMail(sendMsg);

    const sheetAppend = sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Order!A3:E3',
      insertDataOption: 'INSERT_ROWS',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[name, email, phone || '', company || '', type]]
      }
    });

    await Promise.all([sendMsgTransporter, sheetAppend]);

    return Response.json({ message: 'Email send successfully' }, { status: 200 });
  } catch (error) {
    if (error instanceof ZodError) return Response.json({ message: error.message }, { status: 400 });
    return Response.json({ message: error }, { status: 400 });
  }
}
