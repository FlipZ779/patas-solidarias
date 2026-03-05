"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, PawPrint } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 md:py-6 lg:py-8 flex justify-between items-center">
        <div className="font- text-2xl font-cherrybomb md:text-3xl lg:text-4xl font text-primary hover:scale-105 transition">
          
          <Link href="/" className="flex items-center"><PawPrint />Patas Solidárias <PawPrint /> </Link>
        </div>

        <nav className="hidden md:flex gap-8 text-dark font-medium">
          <Link href="/sobre" className="hover:scale-105 transition ">
            Sobre
          </Link>
          <Link href="/doacoes" className="hover:scale-105 transition">
            Doações
          </Link>
          <Link href="/como-ajudar" className="hover:scale-105 transition">
            Como Ajudar
          </Link>
        </nav>

        

        <button className="md:hidden bg-green-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full shadow-lg md:hidden z-10 bg-white px-6 pb-6 space-y-4 text-dark font-medium">
          <Link onClick={()=> setIsOpen(false)} href="/sobre" className="block">
            Sobre
          </Link>
          <Link onClick={()=> setIsOpen(false)} href="/doacoes" className="block">
            Doações
          </Link>
          <Link onClick={()=> setIsOpen(false)} href="/como-ajudar" className="block">
            Como Ajudar
          </Link>
        </div>
      )}
    </header>
  );
}
