"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AboutProject() {
  const [current, setCurrent] = useState(0);

  const sections = [
    {
      title: "Sobre o Patas Solidárias 🐾",
      content: `O Patas Solidárias é um projeto de extensão universitária que tem como objetivo arrecadar ração para animais domésticos resgatados e acolhidos por entidades que atuam na proteção de animais em situação de rua e vítimas de maus-tratos. A iniciativa une universidade, estudantes e comunidade em torno de uma causa social urgente: garantir alimentação e cuidado digno a cães e gatos em condição de vulnerabilidade.`,
    },
    {
      title: "Nossa Parceria",
      content: `O projeto atua em parceria com a Associação Polly Cães & Gatos, entidade sem fins lucrativos fundada em 2013 no município de Ivinhema – MS. A ONG desenvolve ações de resgate, acolhimento, tratamento e encaminhamento para adoção responsável.`,
    },
    {
      title: "Por que esse projeto é importante?",
      content: `Segundo estimativas da OMS em 2024, o Brasil possui cerca de 30 milhões de animais abandonados. Muitas ONGs enfrentam dificuldades financeiras para garantir alimentação diária. O apoio da sociedade é essencial para assegurar dignidade e cuidado aos animais.`,
    },
  ];

  function nextSlide() {
    setCurrent((prev) => (prev + 1) % sections.length);
  }

  function prevSlide() {
    setCurrent((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
  }

  return (
    <section className="bg-primary md:min-h-svh flex items-center justify-center px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 ">
        <div className="flex flex-col gap-16">
          <div className="p-5 h-96">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              {sections[current].title}
            </h2>

            <p className="text-lg md:text-xl text-justify text-gray-600 mb-8 leading-relaxed max-w-lg">
              {sections[current].content}
            </p>
          </div>

          <div>
            <button
              onClick={prevSlide}
              className=" absolute left-15 md:top-3/4  top-5/6 -translate-y-1/2 
                 bg-dark text-white p-3 rounded-full 
                 shadow-lg hover:scale-110 transition"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-15 md:right-150  md:top-3/4  top-5/6 -translate-y-1/2 
                 bg-dark text-white p-3 rounded-full 
                 shadow-lg hover:scale-110 transition"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>

        <img
          src="https://plus.unsplash.com/premium_vector-1764604000731-7fe033f9758a?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Cachorro e gato"
          className=" w-full max-w-md mx-auto rounded-2xl"
        />
      </div>
    </section>
  );
}
