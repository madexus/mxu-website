import { NextRequest, NextResponse } from 'next/server';
import { GoogleAuth } from 'google-auth-library';

const SHEET_ID = '1KweSqxBguLJ_T80IocLRjBUYEH3amHUj_SvmeqiYMm0';
const SHEETS_API = 'https://sheets.googleapis.com/v4/spreadsheets';

async function getAuthClient() {
  const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON || '{}');
  const auth = new GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  return auth.getClient();
}

async function appendToSheet(email: string, offering: string) {
  const client = await getAuthClient();
  const timestamp = new Date().toISOString();
  const row = [timestamp, email, offering, 'madexus.com'];

  const url = `${SHEETS_API}/${SHEET_ID}/values/Sheet1!A:D:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

  const res = await client.request({
    url,
    method: 'POST',
    data: { values: [row] },
  });

  return res.status === 200;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, offering } = body;

    if (!email || !offering) {
      return NextResponse.json({ error: 'Email and offering are required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    const saved = await appendToSheet(email, offering);

    return NextResponse.json({ success: true, saved });
  } catch (err) {
    console.error('Lead capture error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
