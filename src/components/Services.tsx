import type { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { cn } from '../lib/utils';

interface Service {
  icon: ReactNode;
  title: string;
  desc: string;
  iconBg: string;
  iconColor: string;
}

const services: Service[] = [
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-7 h-7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="24" cy="10" r="6" fill="currentColor" stroke="none" opacity="0.9" />
        <path
          d="M24 18C16 18 11 24 11 30H37C37 24 32 18 24 18Z"
          fill="currentColor"
          stroke="none"
          opacity="0.8"
        />
        <path d="M11 30L8 42M37 30L40 42" />
      </svg>
    ),
    title: 'Ginástica Laboral',
    desc: 'Sessões práticas no ambiente de trabalho para prevenir lesões, aliviar tensões musculares e melhorar a postura dos colaboradores.',
    iconBg: 'bg-vitalis-green/10',
    iconColor: 'text-vitalis-green',
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-7 h-7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="10" y="14" width="28" height="28" rx="3" />
        <path d="M18 8h12v10H18z" />
        <path d="M16 26l4 4 10-8" strokeWidth="3" />
      </svg>
    ),
    title: 'Avaliação Ergonômica',
    desc: 'Análise completa dos postos de trabalho para identificar riscos ergonômicos e propor melhorias que aumentam conforto e saúde.',
    iconBg: 'bg-vitalis-orange/10',
    iconColor: 'text-vitalis-orange',
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-7 h-7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="8" y="8" width="32" height="22" rx="3" />
        <path d="M20 30v8M28 30v8M14 38h20" />
        <path d="M16 20h16M16 15h10" />
      </svg>
    ),
    title: 'Palestras de Saúde',
    desc: 'Apresentações educativas sobre ergonomia, qualidade de vida, alimentação saudável e prevenção de doenças ocupacionais.',
    iconBg: 'bg-vitalis-blue/10',
    iconColor: 'text-vitalis-blue',
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-7 h-7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="24" cy="24" r="15" />
        <path d="M24 13v11l7 4" strokeWidth="3" />
        <circle cx="24" cy="24" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: 'Programa Personalizado',
    desc: 'Planos de bem-estar corporativo criados sob medida para o perfil, rotina e necessidades específicas da sua empresa.',
    iconBg: 'bg-vitalis-green/10',
    iconColor: 'text-vitalis-green',
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-7 h-7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="24" cy="8" r="5" fill="currentColor" stroke="none" opacity="0.9" />
        <line x1="24" y1="14" x2="24" y2="34" strokeWidth="3" />
        <path d="M14 22L24 26L34 22" />
        <path d="M18 34L15 44M30 34L33 44" />
      </svg>
    ),
    title: 'Análise Postural',
    desc: 'Avaliação individual da postura dos colaboradores com relatórios detalhados e planos de correção personalizados.',
    iconBg: 'bg-vitalis-orange/10',
    iconColor: 'text-vitalis-orange',
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-7 h-7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="16" cy="14" r="5" fill="currentColor" stroke="none" opacity="0.7" />
        <circle cx="32" cy="14" r="5" fill="currentColor" stroke="none" opacity="0.7" />
        <circle cx="24" cy="10" r="5" fill="currentColor" stroke="none" opacity="0.9" />
        <path d="M8 34c0-8 6-13 8-13s4 2 8 2 6-2 8-2 8 5 8 13" />
      </svg>
    ),
    title: 'Treinamento Corporativo',
    desc: 'Capacitação de líderes e equipes em saúde ocupacional, prevenção de acidentes e promoção do bem-estar no trabalho.',
    iconBg: 'bg-vitalis-blue/10',
    iconColor: 'text-vitalis-blue',
  },
];

export function Services() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="servicos" ref={ref} className="py-16 md:py-24 bg-vitalis-light">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className={cn('text-center mb-16 space-y-4 reveal', isVisible && 'visible')}>
          <span className="inline-flex items-center gap-2 bg-vitalis-green/10 text-vitalis-green text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-vitalis-dark">
            Soluções completas para{' '}
            <span className="gradient-text">saúde corporativa</span>
          </h2>
          <p className="text-vitalis-gray max-w-xl mx-auto leading-relaxed">
            Desenvolvemos programas integrados que cuidam do bem-estar físico e mental da sua equipe.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={cn('bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-default reveal', isVisible && 'visible')}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div
                className={cn(
                  'w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110',
                  s.iconBg,
                  s.iconColor,
                )}
              >
                {s.icon}
              </div>
              <h3 className="font-bold text-vitalis-dark text-lg mb-2 group-hover:text-vitalis-green transition-colors">
                {s.title}
              </h3>
              <p className="text-vitalis-gray text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
