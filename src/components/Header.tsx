"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const links = [
  { href: "/", label: "Home" },
  { href: "/produtos", label: "Produtos" },
  { href: "/contato", label: "Contato" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-500/20 bg-[#120907]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
            <Image
              src="/logo/logo.png"
              alt="Logo Abel e Amigos"
              width={52}
              height={52}
              className="h-10 w-auto object-contain"
            />
          </div>

          <div className="leading-tight">
            <h1 className="text-base font-black text-white sm:text-lg">
              Abel e Amigos
            </h1>
            <p className="hidden text-xs font-semibold text-amber-300 sm:block">
              Animatronic Burgers
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => {
            const active = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${
                  active
                    ? "bg-amber-400 text-[#120907] shadow-lg shadow-amber-900/30"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <button
          className="rounded-2xl bg-white/10 p-3 text-white ring-1 ring-white/10 transition hover:bg-amber-400 hover:text-[#120907] md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-white/10 bg-[#120907] px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link) => {
              const active = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-black transition-all ${
                    active
                      ? "bg-amber-400 text-[#120907]"
                      : "bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </nav>
      )}
    </header>
  )
}