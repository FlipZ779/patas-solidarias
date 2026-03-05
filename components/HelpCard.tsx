"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type HelpCardProps = {
  link: string;
  icon: string;
  title: string;
  description: string;
  isShareable?: boolean;
};

export default function HelpCard({
  link,
  icon,
  title,
  description,
  isShareable,
}: HelpCardProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: `Patas Solidárias - ${title}`,
      text: description,
      url: link,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(link);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error("Erro ao compartilhar:", err);
    }
  };

  const cardContent = (
    <div className="group flex flex-col justify-center items-center text-center md:min-w-50 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <div className="mb-3 p-2 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
        {icon && (
          <Image
            src={icon}
            alt={title}
            width={45}
            height={45}
            className="object-contain"
          />
        )}
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">{description}</p>

      <span
        className={`mt-auto pt-4 font-medium text-sm transition-colors ${copied ? "text-green-600" : "text-blue-600 group-hover:underline"}`}
      >
        {isShareable
          ? copied
            ? "✓ Link copiado!"
            : "Compartilhar com amigos →"
          : "Saber mais →"}
      </span>
    </div>
  );

  if (isShareable) {
    return (
      <Link
        href=""
        onClick={handleShare}
        className="block w-full h-full text-left focus:outline-none"
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full"
    >
      {cardContent}
    </Link>
  );
}
