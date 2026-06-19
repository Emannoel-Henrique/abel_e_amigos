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
    <Card className="group relative h-full overflow-hidden rounded-[1.75rem] border border-white/70 bg-white p-0 shadow-lg shadow-orange-950/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-950/15">
      {destaque && (
        <Badge className="absolute right-4 top-4 z-20 rounded-full border-0 bg-amber-400 px-3 py-1 text-xs font-black text-slate-950 shadow-lg shadow-amber-900/20">
          Destaque
        </Badge>
      )}

      <div className="relative m-4 mb-0 aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.35),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <Image
          src={src}
          alt={title}
          fill
          className="object-contain p-8 transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 320px"
          onError={() => setSrc("/placeholder.png")}
        />
      </div>

      <CardHeader className="p-5 pb-3">
        <CardTitle className="line-clamp-2 text-xl font-black leading-tight text-slate-950">
          {title}
        </CardTitle>

        <CardDescription className="line-clamp-2 min-h-[40px] text-sm leading-5 text-slate-500">
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="border-0 bg-transparent p-5 pt-0">
        <Button className="h-11 w-full rounded-2xl bg-slate-950 text-base font-black text-white shadow-lg shadow-slate-900/15 transition hover:bg-amber-500 hover:text-slate-950">
          {formattedPrice}
        </Button>
      </CardFooter>
    </Card>
  )
}