import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

// 1. Tipagem das propriedades do produto
interface CardProdutoProps {
  id: string | number;
  title: string;
  description: string;
  price: number;
  imageSrc: string;
  destaque?: boolean;
}

export default function CardProduto({
  title,
  description,
  price,
  imageSrc,
  id,
  destaque
}: CardProdutoProps) {

  // 2. Formatação de moeda BRL nativa
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden">
      {/* Selo de destaque absoluto sobreposto no canto superior direito do card */}
      {destaque && (
        <Badge variant="secondary" className="absolute top-3 right-3 z-30 shadow-sm">
          Destaque
        </Badge>
      )}

      {/* Container de imagem do produto com Image do Next.js para otimização e SEO */}
      <div className="relative w-full aspect-video mt-4">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain p-2"
          sizes="(max-width: 768px) 100vw, 384px"
        />
      </div>

      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-sm text-slate-500">
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter>
        {/* Exibição do botão com o preço formatado */}
        <Button className="w-full font-semibold">{formattedPrice}</Button>
      </CardFooter>
    </Card>
  )
}