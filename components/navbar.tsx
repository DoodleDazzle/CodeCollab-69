"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Brain } from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'

export function Navbar() {
  return (
    <nav className="auto-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Brain className="h-6 w-6 text-primary" />
          <span className="font-bold">CodeCollab AI</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Link href="/signin">
            <Button variant="ghost" className ="rounded-full">Sign In</Button>
          </Link>
          <Link href="/signup">
          <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#FF073A] text-white hover:bg-[#D00630] h-9 rounded-full px-3 text-s">
  
  Get Started
</button>

          </Link>
        </div>
      </div>
    </nav>
  )
}