import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { cn } from '../lib/utils';

const videos = [
  {
    id: 'dQw4w9WgXcQ', // substitua pelos IDs reais do YouTube
    title: 'Ginástica Laboral para Escritório',
    duration: '8 min',
    category: 'Iniciante',
    categoryColor: 'bg-vitalis-green/10 text-vitalis-green',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Exercícios para Coluna e Postura',
    duration: '12 min',
    category: 'Intermediário',
    categoryColor: 'bg-vitalis-orange/10 text-vitalis-orange',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Alongamento para Home Office',
    duration: '6 min',
    category: 'Iniciante',
    categoryColor: 'bg-vitalis-green/10 text-vitalis-green',
  },
];

export function Videos() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <section id="videos" ref={ref} className="py-24 bg-vitalis-light">
      <div className="max-w-6xl mx-auto px-5">

        {/* Header */}
        <div className={cn('text-center mb-14 space-y-4 reveal', isVisible && 'visible')}>
          <span className="inline-flex items-center gap-2 bg-vitalis-blue/10 text-vitalis-blue text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
            Aulas em Vídeo
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-vitalis-dark">
            Aprenda com a <span className="gradient-text">Ana</span>
          </h2>
          <p className="text-vitalis-gray max-w-lg mx-auto leading-relaxed">
            Vídeos práticos para você levar os exercícios para o seu dia a dia no trabalho.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <div
              key={i}
              className={cn(
                'bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 reveal',
                isVisible && 'visible',
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Thumbnail / Player */}
              <div className="relative aspect-video bg-vitalis-dark cursor-pointer group" onClick={() => setPlaying(video.id)}>
                {playing === video.id ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                    title={video.title}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                    />
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-vitalis-green ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    {/* Duration badge */}
                    <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                      {video.duration}
                    </span>
                  </>
                )}
              </div>

              {/* Info */}
              <div className="p-5 space-y-2">
                <span className={cn('text-xs font-bold px-3 py-1 rounded-full', video.categoryColor)}>
                  {video.category}
                </span>
                <h3 className="font-bold text-vitalis-dark leading-snug">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}