"use client"

import React from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react"

const MapaContato = dynamic(() => import("@/components/MapaContato"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[340px] w-full items-center justify-center bg-gradient-to-br from-amber-100 via-orange-50 to-red-100 text-sm font-semibold text-amber-900">
      Carregando mapa...
    </div>
  ),
})

const canais = [
  {
    titulo: "E-mail",
    valor: "contato@abeleamigos.com.br",
    descricao: "Respondemos rapidinho",
    icon: Mail,
  },
  {
    titulo: "Telefone",
    valor: "(11) 4002-8922",
    descricao: "Segunda a sábado",
    icon: Phone,
  },
  {
    titulo: "Endereço",
    valor: "Av. Paulista, 1000 - São Paulo, SP",
    descricao: "Venha visitar a toca",
    icon: MapPin,
  },
]

export default function Contato() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fff7ed]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.35),transparent_35%),radial-gradient(circle_at_top_right,rgba(239,68,68,0.18),transparent_32%),linear-gradient(180deg,#fff7ed_0%,#fff_45%,#f8fafc_100%)]" />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm font-bold text-amber-900 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-amber-600" />
              Atendimento Abel e Amigos
            </div>

            <h1 className="max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Fale com a gente e entre no clima da hamburgueria.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Dúvidas sobre produtos, reservas, eventos ou sugestões? Manda sua
              mensagem que nossa equipe responde antes do rato roubar o queijo.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-slate-900/20">
                Atendimento rápido
              </span>
              <span className="rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-bold text-amber-900">
                Loja temática
              </span>
              <span className="rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-bold text-orange-900">
                Animatronic Burgers
              </span>
            </div>
          </div>

          <Card className="border-0 bg-slate-950 p-0 text-white shadow-2xl shadow-slate-900/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-amber-400 p-3 text-slate-950">
                  <Clock className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-amber-300">
                    Horário de atendimento
                  </p>
                  <h2 className="mt-1 text-2xl font-black">
                    Seg. a Sáb. das 10h às 22h
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Domingos e feriados com programação especial. A banda dos
                    bichinhos toca quando o hambúrguer fica pronto.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 grid gap-7 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-7">
            <Card className="border-white/70 bg-white/90 p-0 shadow-xl shadow-orange-950/5 backdrop-blur">
              <CardHeader className="p-6 pb-2">
                <CardTitle className="text-2xl font-black text-slate-950">
                  Canais de atendimento
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Escolha o melhor jeito de falar com a nossa equipe.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 p-6">
                {canais.map((canal) => {
                  const Icon = canal.icon

                  return (
                    <div
                      key={canal.titulo}
                      className="group flex items-center gap-4 rounded-3xl border border-slate-100 bg-gradient-to-br from-white to-amber-50/60 p-4 transition-all hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-900/10"
                    >
                      <div className="rounded-2xl bg-slate-950 p-3 text-amber-300 transition-transform group-hover:rotate-3 group-hover:scale-105">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-bold text-slate-950">
                          {canal.titulo}
                        </p>
                        <p className="break-words text-sm font-semibold text-slate-700">
                          {canal.valor}
                        </p>
                        <p className="text-xs text-slate-500">
                          {canal.descricao}
                        </p>
                      </div>
                    </div>
                  )
                })}

                <div className="rounded-3xl bg-slate-950 p-5 text-white">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-amber-300" />
                    <p className="font-black">Redes sociais</p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-amber-400 hover:text-slate-950"
                    >
                      Instagram
                    </a>

                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-amber-400 hover:text-slate-950"
                    >
                      Facebook
                    </a>

                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-amber-400 hover:text-slate-950"
                    >
                      YouTube
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-white/70 bg-white p-0 shadow-xl shadow-orange-950/5">
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                <div>
                  <h2 className="text-lg font-black text-slate-950">
                    Nossa localização
                  </h2>
                  <p className="text-sm text-slate-500">
                    Av. Paulista, 1000 - São Paulo
                  </p>
                </div>

                <div className="rounded-full bg-amber-100 px-3 py-1 text-xs font-black text-amber-900">
                  Aberto hoje
                </div>
              </div>

              <CardContent className="h-[340px] p-0">
                <MapaContato />
              </CardContent>
            </Card>
          </div>

          <Card className="relative overflow-hidden border-0 bg-white p-0 shadow-2xl shadow-orange-950/10">
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500" />

            <CardHeader className="p-7 pb-3">
              <CardTitle className="text-3xl font-black text-slate-950">
                Envie uma mensagem
              </CardTitle>
              <CardDescription className="text-slate-600">
                Preencha o formulário e retornaremos em até 24 horas úteis.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-7 pt-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nome" className="font-bold text-slate-800">
                      Nome completo
                    </Label>
                    <Input
                      id="nome"
                      placeholder="Seu nome"
                      required
                      className="h-12 rounded-2xl border-slate-200 bg-slate-50 px-4 focus-visible:ring-amber-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-bold text-slate-800">
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="voce@email.com"
                      required
                      className="h-12 rounded-2xl border-slate-200 bg-slate-50 px-4 focus-visible:ring-amber-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="assunto" className="font-bold text-slate-800">
                    Assunto
                  </Label>
                  <Input
                    id="assunto"
                    placeholder="Reserva, produto, evento, sugestão..."
                    required
                    className="h-12 rounded-2xl border-slate-200 bg-slate-50 px-4 focus-visible:ring-amber-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem" className="font-bold text-slate-800">
                    Mensagem
                  </Label>
                  <Textarea
                    id="mensagem"
                    placeholder="Conta pra gente o que você precisa..."
                    className="min-h-[190px] resize-none rounded-2xl border-slate-200 bg-slate-50 p-4 focus-visible:ring-amber-400"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="h-12 w-full rounded-2xl bg-slate-950 text-base font-black text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-amber-500 hover:text-slate-950"
                >
                  Enviar mensagem
                  <Send className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-center text-xs text-slate-500">
                  Seus dados serão usados apenas para responder sua mensagem.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}