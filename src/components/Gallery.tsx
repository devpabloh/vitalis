import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { cn } from '../lib/utils';

// Substitua pelos imports reais das suas fotos
const photos = [
  { src: 'https://placehold.co/600x400/5cb330/white?text=Aula+1', alt: 'Sessão de ginástica laboral' },
  { src: 'https://placehold.co/600x400/1b75bb/white?text=Aula+2', alt: 'Avaliação ergonômica' },
  { src: 'https://placehold.co/600x400/f7931e/white?text=Aula+3', alt: 'Palestra corporativa' },
  { src: 'https://placehold.co/600x400/5cb330/white?text=Aula+4', alt: 'Exercícios em grupo' },
  { src: 'https://placehold.co/600x400/1b75bb/white?text=Aula+5', alt: 'Treinamento postural' },
  { src: 'https://placehold.co/600x400/f7931e/white?text=Aula+6', alt: 'Dinâmica corporativa' },
];

export function Gallery() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="galeria" ref={ref} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">

        {/* Header */}
        <div className={cn('text-center mb-14 space-y-4 reveal', isVisible && 'visible')}>
          <span className="inline-flex items-center gap-2 bg-vitalis-green/10 text-vitalis-green text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
            Galeria
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-vitalis-dark">
            Momentos em <span className="gradient-text">ação</span>
          </h2>
          <p className="text-vitalis-gray max-w-lg mx-auto leading-relaxed">
            Veja como transformamos o ambiente de trabalho das empresas parceiras.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              onClick={() => setSelected(photo.src)}
              className={cn(
                'relative group overflow-hidden rounded-2xl cursor-pointer aspect-[4/3] reveal',
                isVisible && 'visible',
              )}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-vitalis-dark/0 group-hover:bg-vitalis-dark/40 transition-all duration-300 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            alt="Foto ampliada"
            className="max-w-4xl w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
          />
          <button
            className="absolute top-5 right-5 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={() => setSelected(null)}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}