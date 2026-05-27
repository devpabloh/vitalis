import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { cn } from '../lib/utils';
import professora from "../assets/professoraAna.png"

const highlights = [
  'Redução de até 40% nos afastamentos por doenças ocupacionais',
  'Melhora comprovada no clima e engajamento da equipe',
  'Programas baseados em evidências científicas',
  'Atendimento presencial e online para todo o Brasil',
];

export function About() {
  const { ref: leftRef, isVisible: leftVis } = useScrollAnimation<HTMLDivElement>();
  const { ref: rightRef, isVisible: rightVis } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div ref={leftRef} className={cn('relative reveal-left', leftVis && 'visible')}>
            <div className="relative z-10 bg-vitalis-light rounded-3xl overflow-hidden p-8">
              {/* Photo placeholder */}
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-vitalis-green/20 to-vitalis-blue/10 flex items-center justify-center mb-6">
                <img src={professora} alt="Foto da professora Ana" className='w-80' />
              </div>

              {/* Cert badges */}
              <div className="grid grid-cols-2 gap-2.5">
                {['CREF Registrada', 'Pós-Graduada', 'Ergonomia Laboral', '+15 Anos de Exp.'].map(
                  (c) => (
                    <div
                      key={c}
                      className="bg-white rounded-xl px-3 py-2.5 flex items-center gap-2 shadow-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-vitalis-green flex-shrink-0" />
                      <span className="text-xs font-semibold text-vitalis-dark">{c}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-vitalis-orange/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-vitalis-blue/15 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div ref={rightRef} className={cn('space-y-6 reveal-right', rightVis && 'visible')}>
            <span className="inline-flex items-center gap-2 bg-vitalis-orange/10 text-vitalis-orange text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
              Sobre a Profissional
            </span>

            <h2 className="text-4xl font-black text-vitalis-dark leading-tight">
              Saúde corporativa como{' '}
              <span className="gradient-text-warm">filosofia de vida</span>
            </h2>

            <p className="text-vitalis-gray leading-relaxed">
              Com mais de 15 anos dedicados à saúde corporativa, desenvolvo programas personalizados
              que transformam ambientes de trabalho em espaços de bem-estar, energia e qualidade de
              vida.
            </p>

            <p className="text-vitalis-gray leading-relaxed">
              Especializada em Ginástica Laboral e Ergonomia, atendo empresas de todos os portes,
              adaptando cada programa às necessidades reais dos colaboradores e à cultura
              organizacional.
            </p>

            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-vitalis-green/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-vitalis-green"
                      fill="none"
                      viewBox="0 0 16 16"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l3 3 7-7" />
                    </svg>
                  </span>
                  <span className="text-vitalis-dark text-sm leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-vitalis-green text-white font-bold px-8 py-4 rounded-full hover:bg-vitalis-green-dark transition-all hover:shadow-xl hover:-translate-y-px"
            >
              Fale Comigo
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
