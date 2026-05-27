import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCounter } from '../hooks/useCounter';
import { cn } from '../lib/utils';
import info from "../data/info.json"

const items = [
  { n: info.quantidadeDeEmpresasParceiras, suffix: '+', label: 'Empresas Atendidas', icon: '🏢' },
  { n: info.colaboradoresImpactados, suffix: '+', label: 'Colaboradores Beneficiados', icon: '👥' },
  { n: info.experiencia, suffix: '+', label: 'Anos de Experiência', icon: '🏆' },
  { n: info.satisfacaoDosClientes, suffix: '%', label: 'Taxa de Satisfação', icon: '⭐' },
];

function StatItem({
  n,
  suffix,
  label,
  icon,
  active,
}: (typeof items)[0] & { active: boolean }) {
  const count = useCounter(n, 1800, active);
  return (
    <div className="text-center space-y-1.5">
      <div className="text-3xl">{icon}</div>
      <div className="text-4xl font-black text-white tabular-nums">
        {count.toLocaleString('pt-BR')}
        {suffix}
      </div>
      <div className="text-white/75 text-sm font-medium">{label}</div>
    </div>
  );
}

export function Stats() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="bg-vitalis-green py-16 relative overflow-hidden">
      {/* Decorative rings */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-72 h-72 rounded-full border border-white/10 -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full border border-white/10 translate-y-1/2" />
      </div>

      <div
        className={cn(
          'relative z-10 max-w-5xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-10 transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        )}
      >
        {items.map((item) => (
          <StatItem key={item.label} {...item} active={isVisible} />
        ))}
      </div>
    </section>
  );
}
