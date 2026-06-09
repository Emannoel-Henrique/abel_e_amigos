"use client"

import React from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

// Importação Dinâmica de MapaContato com SSR desabilitado (ssr: false)
const MapaContato = dynamic(() => import("@/components/MapaContato"), {
  ssr: false,
  loading: () => (
    <div className="h-[300px] w-full bg-slate-100 flex items-center justify-center text-slate-500 font-medium">
      Carregando mapa...
    </div>
  ),
})

export default function Contato() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
  }

  return (
    <div className="w-full min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Cabeçalho Principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight">
            Fale Conosco
          </h1>
          <p className="text-slate-500 mt-3 text-lg">
            Tem alguma dúvida, sugestão ou quer apenas dar um oi? Estamos prontos para atender você.
          </p>
        </div>

        {/* Grid Principal: 1 Coluna em dispositivos móveis | 2 Colunas em telas largas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Coluna Esquerda: Informações e Mapa */}
          <div className="space-y-8">

            {/* Canais de Atendimento e Redes Sociais */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800">
                  Canais de Atendimento
                </CardTitle>
                <CardDescription>
                  Entre em contato diretamente através dos nossos telefones, e-mail ou redes sociais.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">

                {/* Lista de Contatos */}
                <div className="space-y-4">

                  {/* E-mail */}
                  <div className="flex items-center space-x-4 text-slate-600">
                    <div className="p-3 bg-slate-100 rounded-full">
                      <Mail className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-500">E-mail</p>
                      <p className="text-slate-800 font-medium text-sm">contato@papelariarabisco.com.br</p>
                    </div>
                  </div>

                  {/* Telefones */}
                  <div className="flex items-center space-x-4 text-slate-600">
                    <div className="p-3 bg-slate-100 rounded-full">
                      <Phone className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-500">Telefones</p>
                      <p className="text-slate-800 font-medium">(11) 4002-8922 / (11) 99999-8888</p>
                    </div>
                  </div>

                  {/* Endereço Físico */}
                  <div className="flex items-center space-x-4 text-slate-600">
                    <div className="p-3 bg-slate-100 rounded-full">
                      <MapPin className="h-5 w-5 text-slate-700" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-500">Endereço</p>
                      <p className="text-slate-800 font-medium">Av. Paulista, 1000 - Bela Vista, São Paulo - SP</p>
                    </div>
                  </div>

                </div>

                <hr className="border-slate-200" />

                {/* Bloco de Redes Sociais com Ícones SVG Robustos */}
                <div>
                  <p className="text-sm font-semibold text-slate-500 mb-3">Redes Sociais</p>
                  <div className="flex space-x-4">

                    {/* Instagram */}
                    <a
                      href="<https://instagram.com>"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors text-slate-700 inline-block"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>

                    {/* Facebook */}
                    <a
                      href="<https://facebook.com>"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors text-slate-700 inline-block"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>

                    {/* Youtube */}
                    <a
                      href="<https://youtube.com>"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors text-slate-700 inline-block"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                      </svg>
                    </a>

                  </div>
                </div>

              </CardContent>
            </Card>

            {/* Bloco do Mapa com Leaflet Integrado */}
            <Card className="overflow-hidden h-[302px] border border-slate-200 shadow-sm relative z-10">
              <CardContent className="p-0 h-full w-full">
                <MapaContato />
              </CardContent>
            </Card>

          </div>

          {/* Coluna Direita: Formulário de Envio */}
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800">
                  Envie uma Mensagem
                </CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e retornaremos o contato em até 24 horas úteis.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Campo Nome */}
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome Completo</Label>
                    <Input id="nome" placeholder="Digite seu nome completo" required />
                  </div>

                  {/* Campo E-mail */}
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seuemail@exemplo.com.br" required />
                  </div>

                  {/* Campo Assunto */}
                  <div className="space-y-2">
                    <Label htmlFor="assunto">Assunto</Label>
                    <Input id="assunto" placeholder="Ex: Dúvida sobre entrega, sugestão de produtos" required />
                  </div>

                  {/* Campo Mensagem */}
                  <div className="space-y-2">
                    <Label htmlFor="mensagem">Mensagem</Label>
                    <Textarea
                      id="mensagem"
                      placeholder="Digite detalhadamente a sua mensagem..."
                      className="min-h-[150px] resize-none"
                      required
                    />
                  </div>

                  {/* Botão de Envio */}
                  <Button type="submit" className="w-full font-semibold">
                    Enviar Mensagem
                  </Button>

                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  )
}