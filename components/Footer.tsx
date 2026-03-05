export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Patas Solidárias 🐾
          </h3>
          <p className="text-white/70">
            Projeto extensionista voltado à arrecadação de doações
            para animais acolhidos por entidades de apoio.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Navegação</h4>
          <ul className="space-y-2 text-white/70">
            <li><a href="/sobre" className="hover:text-white">Sobre</a></li>
            <li><a href="/doacoes" className="hover:text-white">Doações</a></li>
            <li><a href="/como-ajudar" className="hover:text-white">Como Ajudar</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Informações</h4>
          <p className="text-white/70">
            Engenharia de Software <br />
            Projeto Extensionista <br />
            2026
          </p>
        </div>

      </div>

      <div className="border-t border-white/20 mt-10 pt-6 text-center text-white/50 text-sm">
        © 2026 Patas Solidárias. Todos os direitos reservados.
      </div>
    </footer>
  )
}