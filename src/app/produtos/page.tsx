"use client"

import { useMemo, useState } from "react"
import {
  CakeSlice,
  Coffee,
  Gift,
  RotateCcw,
  Search,
  SlidersHorizontal,
  Sparkles,
  Star,
  Utensils,
} from "lucide-react"
import CardProduto from "@/components/CardProduto"
import produtos from "../../../produtos.json"

interface ProdutoProps {
  id: string | number
  title: string
  description: string
  price: number
  imageSrc: string
  destaque: boolean
  categoria?: string
}

const listaCategorias = [
  { nome: "Todos", icon: Star },
  { nome: "Lanches", icon: Utensils },
  { nome: "Acompanhamentos", icon: Sparkles },
  { nome: "Bebidas", icon: Coffee },
  { nome: "Sobremesas", icon: CakeSlice },
  { nome: "Lembranças & Experiências", icon: Gift },
]

export default function Produtos() {
  const produtosBase = produtos as ProdutoProps[]

  const [searchTerm, setSearchTerm] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos")
  const [ordenacaoPreco, setOrdenacaoPreco] = useState("relevante")

  const limparFiltros = () => {
    setSearchTerm("")
    setCategoriaSelecionada("Todos")
    setOrdenacaoPreco("relevante")
  }

  const produtosOrdenados = useMemo(() => {
    const termo = searchTerm.toLowerCase().trim()

    const filtrados = produtosBase.filter((produto) => {
      const correspondeTexto =
        produto.title.toLowerCase().includes(termo) ||
        produto.description.toLowerCase().includes(termo) ||
        produto.categoria?.toLowerCase().includes(termo)

      const correspondeCategoria =
        categoriaSelecionada === "Todos" ||
        produto.categoria === categoriaSelecionada

      return correspondeTexto && correspondeCategoria
    })

    return [...filtrados].sort((a, b) => {
      if (ordenacaoPreco === "menor-preco") return a.price - b.price
      if (ordenacaoPreco === "maior-preco") return b.price - a.price

      return Number(b.destaque) - Number(a.destaque)
    })
  }, [searchTerm, categoriaSelecionada, ordenacaoPreco, produtosBase])

  const obterTotalCategoria = (categoria: string) => {
    if (categoria === "Todos") return produtosBase.length
    return produtosBase.filter((p) => p.categoria === categoria).length
  }

  const filtrosAtivos =
    searchTerm !== "" ||
    categoriaSelecionada !== "Todos" ||
    ordenacaoPreco !== "relevante"

  const totalDestaques = produtosBase.filter((produto) => produto.destaque).length

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#120907] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(251,191,36,0.28),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(239,68,68,0.22),transparent_28%),linear-gradient(180deg,#120907_0%,#1d0f0a_45%,#070303_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.08] bg-[linear-gradient(45deg,#fff_1px,transparent_1px),linear-gradient(-45deg,#fff_1px,transparent_1px)] bg-[size:34px_34px]" />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <header className="rounded-[2rem] border border-amber-400/20 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-end">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-sm font-black text-[#160b08]">
                <Sparkles className="h-4 w-4" />
                Cardápio oficial
              </div>

              <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Cardápio e atrações do Rato Burguer
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-amber-100/75 sm:text-lg">
                Lanches, bebidas, doces e lembranças para transformar sua visita
                em uma experiência animatrônica de respeito.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
                <p className="text-3xl font-black text-white">
                  {produtosBase.length}
                </p>
                <p className="mt-1 text-sm font-semibold text-amber-100/70">
                  produtos
                </p>
              </div>

              <div className="rounded-3xl bg-amber-400 p-5 text-[#160b08]">
                <p className="text-3xl font-black">{totalDestaques}</p>
                <p className="mt-1 text-sm font-black">destaques</p>
              </div>
            </div>
          </div>
        </header>

        <section className="relative z-10 mt-6 rounded-[2rem] border border-amber-400/20 bg-[#1d0f0a]/90 p-4 shadow-xl shadow-black/25 backdrop-blur-xl sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-amber-300" />

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Pesquisar por lanche, bebida, sobremesa..."
                className="h-13 w-full rounded-2xl border border-white/10 bg-black/25 pl-12 pr-4 text-sm font-semibold text-white outline-none transition placeholder:text-amber-100/40 focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex h-13 items-center gap-2 rounded-2xl border border-white/10 bg-black/25 px-4">
                <SlidersHorizontal className="h-4 w-4 text-amber-300" />

                <select
                  id="ordenar-preco"
                  value={ordenacaoPreco}
                  onChange={(e) => setOrdenacaoPreco(e.target.value)}
                  className="w-full bg-transparent text-sm font-black text-white outline-none"
                >
                  <option className="text-black" value="relevante">
                    Mais relevantes
                  </option>
                  <option className="text-black" value="menor-preco">
                    Menor preço
                  </option>
                  <option className="text-black" value="maior-preco">
                    Maior preço
                  </option>
                </select>
              </div>

              {filtrosAtivos && (
                <button
                  onClick={limparFiltros}
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 text-sm font-black text-white transition hover:bg-amber-400 hover:text-[#160b08]"
                >
                  <RotateCcw className="h-4 w-4" />
                  Limpar
                </button>
              )}
            </div>
          </div>

          <div className="mt-6 flex gap-2 overflow-x-auto border-t border-white/10 pt-5 pb-1 sm:flex-wrap sm:overflow-visible">
            {listaCategorias.map((categoria) => {
              const Icon = categoria.icon
              const isActive = categoriaSelecionada === categoria.nome
              const totalItens = obterTotalCategoria(categoria.nome)

              return (
                <button
                  key={categoria.nome}
                  onClick={() => setCategoriaSelecionada(categoria.nome)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-black transition-all ${
                    isActive
                      ? "bg-amber-400 text-[#160b08] shadow-lg shadow-amber-950/30"
                      : "bg-white/10 text-amber-100 hover:bg-white/15"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{categoria.nome}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] ${
                      isActive
                        ? "bg-[#160b08]/15 text-[#160b08]"
                        : "bg-black/25 text-amber-100"
                    }`}
                  >
                    {totalItens}
                  </span>
                </button>
              )
            })}
          </div>
        </section>

        <div className="mb-6 mt-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-300">
              Resultado
            </p>

            <h2 className="mt-1 text-2xl font-black text-white">
              {produtosOrdenados.length === 1
                ? "1 produto encontrado"
                : `${produtosOrdenados.length} produtos encontrados`}
            </h2>
          </div>

          <p className="max-w-md text-sm text-amber-100/55">
            No celular, deslize as categorias para o lado. O rato deixou tudo
            responsivo, finalmente trabalhando direito.
          </p>
        </div>

        {produtosOrdenados.length > 0 ? (
          <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {produtosOrdenados.map((produto) => (
              <CardProduto
                key={produto.id}
                id={produto.id}
                title={produto.title}
                description={produto.description}
                price={produto.price}
                imageSrc={produto.imageSrc}
                destaque={produto.destaque}
              />
            ))}
          </section>
        ) : (
          <section className="rounded-[2rem] border border-amber-400/20 bg-[#1d0f0a]/90 p-8 text-center shadow-xl shadow-black/25 sm:p-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-amber-400 text-3xl">
              🐭
            </div>

            <h3 className="mt-5 text-2xl font-black text-white">
              Nenhum produto encontrado
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-amber-100/60">
              Não encontramos nada com esse filtro. O rato procurou no estoque,
              na cozinha e até atrás da geladeira.
            </p>

            <button
              onClick={limparFiltros}
              className="mt-6 rounded-2xl bg-amber-400 px-6 py-3 text-sm font-black text-[#160b08] transition hover:bg-white"
            >
              Ver todos os produtos
            </button>
          </section>
        )}
      </section>
    </main>
  )
}