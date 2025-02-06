"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function Header() {
  const pathname = usePathname()
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { href: "/aboutus", label: "About us" },
    { href: "/servicesprovided", label: "Services" },
    { href: "/usecases", label: "Use Cases" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
  ]

  return (
    <header className="w-full border-b border-[#191A23]/10 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 z-20">
            <Image
              src="/icon-dark.png"
              alt="Positivus Logo"
              width={140}
              height={24}
              className="h-6 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 rounded-md text-sm transition-colors group"
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <span
                  className={`relative z-10 text-base ${
                    pathname === link.href || hoveredLink === link.href
                      ? "text-[#191A23]"
                      : "text-[#191A23]/70 group-hover:text-[#191A23]"
                  }`}
                >
                  {link.label}
                </span>
                <span
                  className={`absolute inset-0 bg-[#B9FF66] rounded-md transition-opacity duration-200 ${
                    pathname === link.href || hoveredLink === link.href
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </Link>
            ))}
            <Button
              variant="outline"
              className="rounded-md border-[#191A23] text-[#191A23] hover:bg-[#B9FF66] hover:text-[#191A23] hover:border-[#B9FF66] text-base"
            >
              Request a quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden z-20 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6 text-[#191A23]" /> : <Menu className="h-6 w-6 text-[#191A23]" />}
          </button>

          {/* Mobile Menu Overlay */}
          <div
            className={cn(
              "fixed inset-0 bg-white z-10 transition-transform duration-300 ease-in-out md:hidden",
              isMenuOpen ? "translate-x-0" : "translate-x-full",
            )}
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 rounded-md text-lg font-medium transition-colors group"
                  onClick={() => setIsMenuOpen(false)}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <span
                    className={`relative z-10 ${
                      pathname === link.href || hoveredLink === link.href
                        ? "text-[#191A23]"
                        : "text-[#191A23]/70 group-hover:text-[#191A23]"
                    }`}
                  >
                    {link.label}
                  </span>
                  <span
                    className={`absolute inset-0 bg-[#B9FF66] rounded-md transition-opacity duration-200 ${
                      pathname === link.href || hoveredLink === link.href
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              ))}
              <Button
                variant="outline"
                className="rounded-md border-[#191A23] text-[#191A23] hover:bg-[#B9FF66] hover:text-[#191A23] hover:border-[#B9FF66]"
                onClick={() => setIsMenuOpen(false)}
              >
                Request a quote
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

