import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { cn } from '../lib/utils';

const steps = [
  {
    n: '01',
    title: 'Diagnóstico',
    desc: 'Realizamos uma análise completa do ambiente de trabalho, perfil dos colaboradores e necessidades específicas da empresa.',
    bg: 'bg-vitalis-green',
    ring: 'ring-vitalis-green/25',
  },
  {
    n: '02',
    title: 'Planejamento',
    desc: 'Desenvolvemos um programa personalizado com cronograma, metodologias e objetivos claros alinhados à realidade da sua empresa.',
    bg: 'bg-vitalis-orange',
    ring: 'ring-vitalis-orange/25',
  },
  {
    n: '03',
    title: 'Implementação',
    desc: 'Executamos o programa com acompanhamento contínuo, relatórios periódicos e ajustes garantindo os melhores resultados.',
    bg: 'bg-vitalis-blue',
    ring: 'ring-vitalis-blue/25',
  },
];

export function Process() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="como-funciona" ref={ref} className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-5">
        {/* Header */}
        <div className={cn('text-center mb-16 space-y-4 reveal', isVisible && 'visible')}>
          <span className="inline-flex items-center gap-2 bg-vitalis-blue/10 text-vitalis-blue text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
            Como Funciona
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-vitalis-dark">
            Processo{' '}
            <span className="gradient-text">simples e eficaz</span>
          </h2>
          <p className="text-vitalis-gray max-w-lg mx-auto leading-relaxed">
            Seguimos um método comprovado para garantir resultados reais para a sua empresa.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[16.5%] right-[16.5%] h-0.5 bg-gradient-to-r from-vitalis-green via-vitalis-orange to-vitalis-blue opacity-20" />

          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <div
                key={step.n}
                className={cn('text-center space-y-5 reveal', isVisible && 'visible')}
                style={{ transitionDelay: `${i * 130}ms` }}
              >
                <div className="relative inline-block">
                  <div
                    className={cn(
                      'w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg ring-8',
                      step.bg,
                      step.ring,
                    )}
                  >
                    <span className="text-white font-black text-2xl">{step.n}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-vitalis-dark">{step.title}</h3>
                <p className="text-vitalis-gray text-sm leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className={cn('text-center mt-14 reveal', isVisible && 'visible')}
          style={{ transitionDelay: '400ms' }}
        >
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-vitalis-dark text-white font-bold px-8 py-4 rounded-full hover:bg-vitalis-dark/90 transition-all hover:shadow-xl hover:-translate-y-px"
          >
            Solicitar Diagnóstico Gratuito
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
