import envConfig from '@/common/environments';
import { google } from 'googleapis';

export const sheetId: string = envConfig.googleSheet.sheetId;

const client = new google.auth.JWT(envConfig.googleSheet.clientEmail, undefined, envConfig.googleSheet.privateKey, [
  'https://www.googleapis.com/auth/spreadsheets'
]);

const sheets = google.sheets({ version: 'v4', auth: client });

export default sheets;
