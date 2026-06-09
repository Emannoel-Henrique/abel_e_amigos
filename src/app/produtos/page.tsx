import CardProduto from "@/components/CardProduto";
import produtos from "../../../produtos.json";

export default function Produtos() {
    const produtosEmDestaque = produtos;

    return (
        <div className="w-full min-h-screen bg-slate-50 pb-12">
            <div className="text-center my-10">
                <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
                    Todos os Produtos
                </h1>
                <p className="text-slate-500 mt-2">
                    Explore nossa variedade completa de produtos inspirados na banda e seus animatrônicos. De hambúrgueres exclusivos a itens de merchandising, temos algo para todos os fãs. Confira nossas ofertas especiais e encontre o presente perfeito para qualquer ocasião!
                </p>
            </div>
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