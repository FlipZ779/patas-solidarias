import Image from "next/image"
import DonationCard from "./DonationCard"

export default function Donations() {
  return (
    <section className="min-h-svh bg-secondary flex justify-center items-center py-20 px-6 bg">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl md:text-3xl lg:text-3xl font-extrabold text-gray-900 mb-6 leading-tight">
          O que estamos arrecadando
        </h2>

        <div className="grid md:grid-cols-3 justify-center gap-8 text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
          <DonationCard
            icon="🐶"
            title="Ração"
            description="Ração para cães e gatos adultos ou filhotes."
          />

          <DonationCard
            icon="🧼"
            title="Itens de Higiene"
            description="Tapetes higiênicos e produtos de limpeza."
          />

          <DonationCard
            icon="🧸"
            title="Brinquedos"
            description="Brinquedos em bom estado para cães e gatos."
          />
        </div>
        
          <Image src="/img/CachorroGato.png" alt="cachorro e gato desenhado a linha" width={500} height={100} />
        

      </div>
    </section>
  )
}