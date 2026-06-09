import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full h-16 bg-white border-b border-sIate-2ee px-36 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo/logo.png"
            alt="Logo da empresa"
            width={50}
            height={50}
            className="h-8 w-auto object-contain"
          />
          <h1 className="text-lg font-bold text-blue-600">
            Abel e amigos
          </h1>
        </div>


        <nav className="flex space-x-6">
          <Link href="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/produtos" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Produtos
          </Link>
          <Link href="/contato" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Contato
          </Link>
        </nav>

    </header>
  );
}
