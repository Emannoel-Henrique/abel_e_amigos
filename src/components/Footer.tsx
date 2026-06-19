import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-amber-500/20 bg-[#120907] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo/logo.png"
            alt="Logo Abel e Amigos"
            width={48}
            height={48}
            className="h-10 w-auto object-contain"
          />

          <div>
            <p className="font-black">Abel e Amigos</p>
            <p className="text-xs text-amber-100/55">
              Animatronic Burgers
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm text-amber-100/60 sm:items-end">
          <p>&copy; {currentYear} Abel Entertainment. Todos os direitos reservados.</p>

          <div className="flex gap-4">
            <Link href="/produtos" className="hover:text-amber-300">
              Produtos
            </Link>
            <Link href="/contato" className="hover:text-amber-300">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}