import { NextResponse } from 'next/server';

export async function POST() {
  const res = NextResponse.json({ success: true });
  res.cookies.delete('user-id');
  res.cookies.delete('user-role');
  res.cookies.delete('user-email');
  return res;
}
