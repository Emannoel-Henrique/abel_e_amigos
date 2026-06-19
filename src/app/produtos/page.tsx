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
    <main className="relative min-h-screen overflow-hidden bg-[#fff7ed]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.35),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(239,68,68,0.16),transparent_30%),linear-gradient(180deg,#fff7ed_0%,#ffffff_48%,#f8fafc_100%)]" />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <header className="overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl shadow-slate-900/20">
          <div className="relative px-6 py-10 sm:px-10 lg:px-12">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#f59e0b,transparent_28%),radial-gradient(circle_at_85%_10%,#ef4444,transparent_30%)]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-amber-300 ring-1 ring-white/15">
                  <Sparkles className="h-4 w-4" />
                  Cardápio oficial
                </div>

                <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl">
                  Cardápio e atrações do Rato Burguer
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                  Lanches, bebidas, doces e lembranças para transformar sua visita
                  em uma experiência de respeito. O queijo tremeu aqui.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/15">
                  <p className="text-3xl font-black text-white">
                    {produtosBase.length}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-300">
                    produtos
                  </p>
                </div>

                <div className="rounded-3xl bg-amber-400 p-5 text-slate-950">
                  <p className="text-3xl font-black">{totalDestaques}</p>
                  <p className="mt-1 text-sm font-black">
                    destaques
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="relative z-10 -mt-8 rounded-[2rem] border border-white/70 bg-white/90 p-5 shadow-xl shadow-orange-950/10 backdrop-blur sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Pesquisar por lanche, bebida, sobremesa..."
                className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm font-medium text-slate-900 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-200/60"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <SlidersHorizontal className="h-4 w-4 text-slate-500" />

                <select
                  id="ordenar-preco"
                  value={ordenacaoPreco}
                  onChange={(e) => setOrdenacaoPreco(e.target.value)}
                  className="bg-transparent text-sm font-bold text-slate-800 outline-none"
                >
                  <option value="relevante">Mais relevantes</option>
                  <option value="menor-preco">Menor preço</option>
                  <option value="maior-preco">Maior preço</option>
                </select>
              </div>

              {filtrosAtivos && (
                <button
                  onClick={limparFiltros}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-950 hover:text-white"
                >
                  <RotateCcw className="h-4 w-4" />
                  Limpar
                </button>
              )}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-6">
            {listaCategorias.map((categoria) => {
              const Icon = categoria.icon
              const isActive = categoriaSelecionada === categoria.nome
              const totalItens = obterTotalCategoria(categoria.nome)

              return (
                <button
                  key={categoria.nome}
                  onClick={() => setCategoriaSelecionada(categoria.nome)}
                  className={`group inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black transition-all ${
                    isActive
                      ? "bg-slate-950 text-white shadow-lg shadow-slate-900/20"
                      : "bg-slate-100 text-slate-600 hover:-translate-y-0.5 hover:bg-amber-100 hover:text-amber-950"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{categoria.nome}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] ${
                      isActive
                        ? "bg-white/15 text-white"
                        : "bg-white text-slate-500"
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
            <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-700">
              Resultado
            </p>
            <h2 className="mt-1 text-2xl font-black text-slate-950">
              {produtosOrdenados.length === 1
                ? "1 produto encontrado"
                : `${produtosOrdenados.length} produtos encontrados`}
            </h2>
          </div>

          <p className="max-w-md text-sm text-slate-500">
            Clique nas categorias para navegar pelo cardápio sem se perder no
            labirinto do queijo.
          </p>
        </div>

        {produtosOrdenados.length > 0 ? (
          <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
          <section className="rounded-[2rem] border border-white/70 bg-white p-10 text-center shadow-xl shadow-orange-950/5">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-amber-100 text-3xl">
              🐭
            </div>

            <h3 className="mt-5 text-2xl font-black text-slate-950">
              Nenhum produto encontrado
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              Não encontramos nada com esse filtro. O rato procurou no estoque,
              na cozinha e até atrás da geladeira.
            </p>

            <button
              onClick={limparFiltros}
              className="mt-6 rounded-2xl bg-slate-950 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-amber-500 hover:text-slate-950"
            >
              Ver todos os produtos
            </button>
          </section>
        )}
      </section>
    </main>
  )
}