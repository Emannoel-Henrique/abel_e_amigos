"use client"

import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Correção de compatibilidade dos ícones do Leaflet com Next.js
// Redefinimos os ativos do marcador padrão apontando diretamente para as CDNs oficiais
const DefaultIcon = L.icon({
  iconUrl: "<https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png>",
  shadowUrl: "<https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png>",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

L.Marker.prototype.options.icon = DefaultIcon

export default function MapaContato() {
  // Coordenadas da Avenida Paulista, 1000 - Bela Vista, São Paulo - SP
  const position: [number, number] = [-23.561349, -46.652190]

  return (
    <div className="h-[300px] w-full z-10 relative">
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="<https://www.openstreetmap.org/copyright>">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <div className="text-slate-800 font-medium text-xs">
              <strong>Papelaria Rabisco</strong> <br />
              Av. Paulista, 1000.
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}