import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { cn } from '../lib/utils';
import angelica from '../assets//comentarios/Angelica.jpeg'
import monara from '../assets/comentarios/Monara.png'
import juliaNunes from '../assets/comentarios/julia_nunes.png'

// Substitua pelas fotos reais — podem ser imports de assets
const testimonials = [
  {
    name: 'Angelica Costa',
    role: 'Setor Administrativo',
    company: 'ATI- Agência de Tecnologia de Pernambuco',
    photo: angelica ,
    text: 'Participar do laboral com a professora Ana tem feito toda diferença na minha rotina de trabalho. Além dos exercícios e alongamentos, ela transmite alegria, energia e motivação em cada encontro. É incrível como alguns minutos de cuidado e descontração conseguem deixar o dia mais leve, produtivo e animado.',
    stars: 5,
  },
  {
    name: 'Monara Almeida',
    role: 'Setor Administrativo',
    company: 'ATI- Agência de Tecnologia de Pernambuco',
    photo: monara,
    text: 'Desde que comecei a participar do laboral com a professora Ana, percebi uma grande melhora no meu dia a dia no trabalho. Os exercícios e alongamentos ajudam muito, mas o diferencial é a forma leve, divertida, participativa e motivadora com que ela conduz cada encontro. ',
    stars: 5,
  },
  {
    name: 'Júlia Nunes',
    role: 'Scrum Master',
    company: 'ATI - Agência de Tecnologia de Pernambuco',
    photo: juliaNunes,
    text: 'Tenho gostado bastante das aulas porque elas ajudam a quebrar a rotina de ficar sentado trabalhando o dia inteiro. Acho muito legal que, quando alguém está com alguma dor ou desconforto, ela procura passar exercícios específicos para ajudar naquela situação. Outro ponto que considero bacana é a cultura das palavras do dia, que sempre trazem mensagens positivas e boas energias para a gente, são pequenos momentos que deixam o dia mais leve.',
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={cn('w-4 h-4', i < count ? 'text-vitalis-orange' : 'text-gray-200')}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="depoimentos" ref={ref} className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">

        {/* Header */}
        <div className={cn('text-center mb-14 space-y-4 reveal', isVisible && 'visible')}>
          <span className="inline-flex items-center gap-2 bg-vitalis-orange/10 text-vitalis-orange text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-vitalis-dark">
            O que nossos <span className="gradient-text-warm">clientes</span> dizem
          </h2>
          <p className="text-vitalis-gray max-w-lg mx-auto leading-relaxed">
            Resultados reais de empresas que transformaram sua cultura de saúde.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={cn(
                'bg-vitalis-light rounded-2xl p-6 space-y-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 reveal',
                isVisible && 'visible',
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Aspas decorativas */}
              <svg className="w-8 h-8 text-vitalis-green/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-vitalis-gray text-sm leading-relaxed h-[240px]">{t.text}</p>

              <Stars count={t.stars} />

              {/* Autor */}
              <div className="flex items-center gap-3 pt-2 border-t border-vitalis-green/10">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover ring-2 ring-vitalis-green/20"
                />
                <div>
                  <p className="font-bold text-vitalis-dark text-sm">{t.name}</p>
                  <p className="text-vitalis-gray text-xs">{t.company}</p>
                  <p className="text-vitalis-gray text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}