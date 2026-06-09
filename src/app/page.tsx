import Carrossel from "@/components/Carrosel"
import CardProduto from "@/components/CardProduto"
import produtos from "../../produtos.json"

export default function Home() {

const produtosEmDestaque = produtos.filter(produto => produto.destaque === true);

  return (
    <div className="w-full min-h-screen bg-slate-50 pb-12">
      {/* Carrossel de Banner no Topo */}
      <Carrossel />

      {/* Título da Seção */}
      <div className="text-center my-10">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
          Produtos em destaque
        </h1>
        <p className="text-slate-500 mt-2">
          Os produtos mais incríveis e divertidos para você e seus amigos. Confira nossas ofertas especiais e encontre o presente perfeito para qualquer ocasião!
        </p>
      </div>

      {/* Grid Responsivo para os Cards:
          1 coluna no celular | 2 colunas no tablet | 3 colunas em telas grandes
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">

      {produtosEmDestaque.map((produto) => (
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
      
      </div>
    </div>
  )
}