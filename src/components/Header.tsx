"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-slate-200">
      {/* Container com padding responsivo */}
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo e título */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/logo/logo.png"
            alt="Logo da empresa"
            width={50}
            height={50}
            className="h-8 w-auto object-contain"
          />
          <h1 className="text-base sm:text-lg font-bold text-blue-600">
            Abel e amigos
          </h1>
        </div>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/produtos"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Produtos
          </Link>
          <Link
            href="/contato"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Contato
          </Link>
        </nav>

        {/* Botão Menu Mobile */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navegação Mobile */}
      {isOpen && (
        <nav className="md:hidden border-t border-slate-200 bg-white px-4 sm:px-6 py-4 flex flex-col space-y-3">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors py-2"
          >
            Home
          </Link>
          <Link
            href="/produtos"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors py-2"
          >
            Produtos
          </Link>
          <Link
            href="/contato"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors py-2"
          >
            Contato
          </Link>
        </nav>
      )}
    </header>
  );
}
