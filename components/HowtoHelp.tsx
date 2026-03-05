import Image from "next/image";
import HelpCard from "./HelpCard";

export default function HowtoHelp() {
  const helpers = [
    {
      title: "Doar Ração",
      description:
        "Ajude a encher a barriguinha dos animais com ração, vou até você e recolho sua doação em um horário que preferir.",
      icon: "/img/whatsappicon.png",
      link: "https://wa.me/5567981373765?text=Olá,%20quero%20ajudar%20o%20projeto%20Patas%20Solidárias!",
    },
    {
      title: "ONG",
      description:
        "Você pode ajudar de outras formas, com um lar temporário ou até mesmo com uma adoção!",
      icon: "/img/Polly.jpg",
      link: "https://www.instagram.com/ongpolly.caesegatos/",
    },

    {
      title: "Divulgue",
      description:
        "Você também pode compartilhar o projeto com seus amigos e conhecidos, fazendo com que alcancemos muito mais visibilidade!",
      icon: "/img/paw-print.png",
      link: "https://patas-solidarias.vercel.app/",
      isShareable: true,
    },
  ];

  return (
    <section className="min-h-svh max-w-svw md:py-0 py-10 flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-5">
        <div className="flex flex-col items-start text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Saiba como ajudar!
          </h1>

          <p className="text-lg md:text-xl text-justify text-gray-600 mb-8 leading-relaxed max-w-lg">
            Você pode contribuir de diversas formas. Toda arrecadação e esforço
            são destinados integralmente à ONG parceira, transformando a vida
            diária dos animais resgatados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {helpers.map((item, index) => (
            <HelpCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              link={item.link}
              isShareable={item.isShareable}
            />
          ))}
          <div className="flex items-center justify-center w-full h-full">
          <Image
          className="object-contain"
            src="/img/Gato.png"
            alt="Gato desenhado a linhas"
            height={300}
            width={300}
          ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}
