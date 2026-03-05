import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-primary md:min-h-svh flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Ajude um amigo de quatro patas 🐾
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
            Sua doação pode transformar a vida de animais acolhidos.
          </p>

          <Link href="/como-ajudar" >
          <button className="bg-accent  text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
            Quero Ajudar
          </button>
          </Link>
        </div>

        <div>
          <img
            src="https://cdn.pixabay.com/photo/2024/04/05/20/17/ai-generated-8678181_1280.jpg"
            alt="Cachorro e gato"
            className="w-full max-w-md mx-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
