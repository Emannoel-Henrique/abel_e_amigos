"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ShoppingBag, Star } from "lucide-react"

interface CardProdutoProps {
  id: string | number
  title: string
  description: string
  price: number
  imageSrc: string
  destaque?: boolean
}

export default function CardProduto({
  title,
  description,
  price,
  imageSrc,
  destaque,
}: CardProdutoProps) {
  const [src, setSrc] = useState(imageSrc)

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price)

  return (
    <Card className="group relative flex h-full w-full flex-col overflow-hidden rounded-[2rem] border border-amber-500/15 bg-[#1d0f0a]/95 p-0 text-white shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-950/40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.18),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {destaque && (
        <Badge className="absolute right-4 top-4 z-20 gap-1 rounded-full border-0 bg-amber-400 px-3 py-1 text-xs font-black text-[#160b08] shadow-lg shadow-amber-950/30">
          <Star className="h-3 w-3 fill-current" />
          Destaque
        </Badge>
      )}

      <div className="relative m-4 mb-0 aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-amber-100 via-orange-100 to-red-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.65),transparent_45%)]" />

        <Image
          src={src}
          alt={title}
          fill
          className="relative z-10 object-contain p-7 transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
          onError={() => setSrc("/placeholder.png")}
        />
      </div>

      <CardHeader className="relative z-10 flex-1 p-5 pb-3">
        <CardTitle className="line-clamp-2 text-xl font-black leading-tight text-white">
          {title}
        </CardTitle>

        <CardDescription className="line-clamp-2 min-h-10 text-sm leading-5 text-amber-100/70">
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="relative z-10 p-5 pt-0">
        <Button className="h-12 w-full rounded-2xl bg-amber-400 text-base font-black text-[#160b08] shadow-lg shadow-amber-950/30 transition hover:bg-white">
          <ShoppingBag className="mr-2 h-4 w-4" />
          {formattedPrice}
        </Button>
      </CardFooter>
    </Card>
  )
}