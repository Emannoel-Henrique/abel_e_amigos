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
    <div className="flex h-[330px] w-full items-center justify-center bg-[#1d0f0a] text-sm font-black text-amber-300">
      Carregando mapa...
    </div>
  ),
})

const canais = [
  {
    titulo: "E-mail",
    valor: "contato@abeleamigos.com.br",
    descricao: "Respondemos em até 24h úteis",
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
    descricao: "Venha visitar nossa hamburgueria",
    icon: MapPin,
  },
]

export default function Contato() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#120907] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(251,191,36,0.30),transparent_30%),radial-gradient(circle_at_90%_15%,rgba(239,68,68,0.22),transparent_30%),linear-gradient(180deg,#120907_0%,#1d0f0a_48%,#070303_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.08] bg-[linear-gradient(45deg,#fff_1px,transparent_1px),linear-gradient(-45deg,#fff_1px,transparent_1px)] bg-[size:34px_34px]" />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_380px] lg:items-end">
          <div className="rounded-[2rem] border border-amber-400/20 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-sm font-black text-[#160b08]">
              <Sparkles className="h-4 w-4" />
              Atendimento Abel e Amigos
            </div>

            <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Fale com a gente
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-amber-100/75 sm:text-lg">
              Dúvidas sobre produtos, reservas, eventos ou sugestões? Manda uma
              mensagem que nossa equipe responde antes do rato roubar o queijo.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full bg-amber-400 px-4 py-2 text-sm font-black text-[#160b08]">
                Atendimento rápido
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-amber-100 ring-1 ring-white/10">
                Loja temática
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-amber-100 ring-1 ring-white/10">
                Animatronic Burgers
              </span>
            </div>
          </div>

          <Card className="border border-amber-400/20 bg-[#1d0f0a]/90 p-0 text-white shadow-2xl shadow-black/25">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-amber-400 p-3 text-[#160b08]">
                  <Clock className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm font-black text-amber-300">
                    Horário de atendimento
                  </p>

                  <h2 className="mt-1 text-2xl font-black text-white">
                    Seg. a Sáb. das 10h às 22h
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-amber-100/60">
                    Domingos e feriados podem ter programação especial.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <Card className="border border-amber-400/20 bg-[#1d0f0a]/90 p-0 text-white shadow-xl shadow-black/25 backdrop-blur-xl">
              <CardHeader className="p-6 pb-2">
                <CardTitle className="text-2xl font-black text-white">
                  Canais de atendimento
                </CardTitle>

                <CardDescription className="text-amber-100/60">
                  Escolha o melhor jeito de falar com a nossa equipe.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 p-6">
                {canais.map((canal) => {
                  const Icon = canal.icon

                  return (
                    <div
                      key={canal.titulo}
                      className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-black/20 p-4 transition-all hover:-translate-y-1 hover:border-amber-400/40 hover:bg-black/30"
                    >
                      <div className="rounded-2xl bg-amber-400 p-3 text-[#160b08] transition-transform group-hover:scale-105">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-black text-white">
                          {canal.titulo}
                        </p>

                        <p className="break-words text-sm font-semibold text-amber-100/80">
                          {canal.valor}
                        </p>

                        <p className="text-xs text-amber-100/45">
                          {canal.descricao}
                        </p>
                      </div>
                    </div>
                  )
                })}

                <div className="rounded-3xl bg-amber-400 p-5 text-[#160b08]">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5" />
                    <p className="font-black">Redes sociais</p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#160b08]/10 px-4 py-2 text-sm font-black transition hover:bg-[#160b08] hover:text-white"
                    >
                      Instagram
                    </a>

                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#160b08]/10 px-4 py-2 text-sm font-black transition hover:bg-[#160b08] hover:text-white"
                    >
                      Facebook
                    </a>

                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#160b08]/10 px-4 py-2 text-sm font-black transition hover:bg-[#160b08] hover:text-white"
                    >
                      YouTube
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border border-amber-400/20 bg-[#1d0f0a]/90 p-0 text-white shadow-xl shadow-black/25">
              <div className="flex flex-col gap-3 border-b border-white/10 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg font-black text-white">
                    Nossa localização
                  </h2>

                  <p className="text-sm text-amber-100/55">
                    Av. Paulista, 1000 - São Paulo
                  </p>
                </div>

                <div className="w-fit rounded-full bg-amber-400 px-3 py-1 text-xs font-black text-[#160b08]">
                  Aberto hoje
                </div>
              </div>

              <CardContent className="h-[330px] p-0">
                <MapaContato />
              </CardContent>
            </Card>
          </div>

          <Card className="relative overflow-hidden border border-amber-400/20 bg-[#1d0f0a]/95 p-0 text-white shadow-2xl shadow-black/30">
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500" />

            <CardHeader className="p-6 pb-3 sm:p-7 sm:pb-3">
              <CardTitle className="text-3xl font-black text-white">
                Envie uma mensagem
              </CardTitle>

              <CardDescription className="text-amber-100/60">
                Preencha o formulário e retornaremos em até 24 horas úteis.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-6 pt-3 sm:p-7 sm:pt-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nome" className="font-black text-white">
                      Nome completo
                    </Label>

                    <Input
                      id="nome"
                      placeholder="Seu nome"
                      required
                      className="h-12 rounded-2xl border-white/10 bg-black/25 px-4 text-white placeholder:text-amber-100/35 focus-visible:ring-amber-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-black text-white">
                      E-mail
                    </Label>

                    <Input
                      id="email"
                      type="email"
                      placeholder="voce@email.com"
                      required
                      className="h-12 rounded-2xl border-white/10 bg-black/25 px-4 text-white placeholder:text-amber-100/35 focus-visible:ring-amber-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="assunto" className="font-black text-white">
                    Assunto
                  </Label>

                  <Input
                    id="assunto"
                    placeholder="Reserva, produto, evento, sugestão..."
                    required
                    className="h-12 rounded-2xl border-white/10 bg-black/25 px-4 text-white placeholder:text-amber-100/35 focus-visible:ring-amber-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem" className="font-black text-white">
                    Mensagem
                  </Label>

                  <Textarea
                    id="mensagem"
                    placeholder="Conta pra gente o que você precisa..."
                    className="min-h-[180px] resize-none rounded-2xl border-white/10 bg-black/25 p-4 text-white placeholder:text-amber-100/35 focus-visible:ring-amber-400"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="h-12 w-full rounded-2xl bg-amber-400 text-base font-black text-[#160b08] shadow-lg shadow-amber-950/30 transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Enviar mensagem
                  <Send className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-center text-xs text-amber-100/45">
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