import { NextRequest, NextResponse } from 'next/server'

// This middleware causes fast refresh issue
export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (pathname === '/') {
    return NextResponse.redirect('/dashboard')
  } else {
    return NextResponse.next()
  }
}
