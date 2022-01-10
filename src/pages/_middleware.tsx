import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname === '/') {
    return NextResponse.redirect('/dashboard')
  } else {
    return NextResponse.next()
  }
}
