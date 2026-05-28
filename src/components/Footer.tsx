import vitalisLogo from '../assets/logo-vitalis.png';

const col = {
  Serviços: ['Ginástica Laboral', 'Avaliação Ergonômica', 'Palestras de Saúde', 'Treinamento Corporativo'],
  Empresa: ['Sobre', 'Como Funciona', 'Contato', 'Solicitar Proposta'],
};

export function Footer() {
  return (
    <footer className="bg-vitalis-dark text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-2 space-y-5">
            <div className="flex items-center gap-2.5">
              <img src={vitalisLogo} alt="logo da empresa vitalis, que se encontra no todo da aplicação" className='w-9' />
              <div className="leading-none">
                <span className="block font-black text-lg tracking-tight">VITALIS</span>
                <span className="block text-[9px] text-white/40 uppercase tracking-widest mt-0.5">
                  Atividade Física e Saúde
                </span>
              </div>
            </div>

            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              Transformando ambientes de trabalho através da saúde, bem-estar e qualidade de vida.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { label: 'Instagram', letter: 'Ig' },
                { label: 'LinkedIn', letter: 'Li' },
                { label: 'WhatsApp', letter: 'Wa' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-vitalis-green transition-colors text-xs font-bold"
                >
                  {s.letter}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(col).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-white/70">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-white/45 hover:text-white text-sm transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-xs">
            © {new Date().getFullYear()} Vitalis – Atividade Física e Saúde. Todos os direitos
            reservados.
          </p>
          <p className="text-white/35 text-xs">Feito com 💚 para uma vida mais saudável</p>
        </div>
      </div>
    </footer>
  );
}
