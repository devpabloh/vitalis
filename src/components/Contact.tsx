import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { cn } from '../lib/utils';

const info = [
  { icon: '📧', label: 'Email', value: 'contato@vitalis.com.br' },
  { icon: '📱', label: 'WhatsApp', value: '(11) 99999-9999' },
  { icon: '📍', label: 'Atendimento', value: 'São Paulo e Região' },
  { icon: '⏰', label: 'Horário', value: 'Seg–Sex: 8h–18h' },
];

const inputClass =
  'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-vitalis-dark placeholder-vitalis-gray/50 outline-none focus:border-vitalis-green focus:ring-2 focus:ring-vitalis-green/15 transition-all bg-white';

export function Contact() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contato" ref={ref} className="py-24 bg-vitalis-light">
      <div className="max-w-5xl mx-auto px-5">
        {/* Header */}
        <div className={cn('text-center mb-14 space-y-4 reveal', isVisible && 'visible')}>
          <span className="inline-flex items-center gap-2 bg-vitalis-green/10 text-vitalis-green text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
            Entre em Contato
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-vitalis-dark">
            Vamos transformar{' '}
            <span className="gradient-text">sua empresa</span>
          </h2>
          <p className="text-vitalis-gray max-w-lg mx-auto leading-relaxed">
            Solicite uma proposta gratuita e descubra como melhorar a saúde e produtividade da sua
            equipe.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Info */}
          <div className={cn('md:col-span-2 space-y-4 reveal-left', isVisible && 'visible')}>
            {info.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-xs text-vitalis-gray font-medium mb-0.5">{item.label}</p>
                  <p className="text-vitalis-dark font-semibold text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className={cn('md:col-span-3 reveal-right', isVisible && 'visible')}>
            {sent ? (
              <div className="bg-white rounded-3xl p-10 text-center shadow-sm">
                <div className="w-16 h-16 bg-vitalis-green/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-vitalis-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-vitalis-dark mb-2">Mensagem enviada!</h3>
                <p className="text-vitalis-gray text-sm">Retornaremos em até 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-sm space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-vitalis-dark uppercase tracking-wider mb-2 block">
                      Nome *
                    </label>
                    <input required type="text" placeholder="Seu nome" className={inputClass} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-vitalis-dark uppercase tracking-wider mb-2 block">
                      Empresa
                    </label>
                    <input type="text" placeholder="Nome da empresa" className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-vitalis-dark uppercase tracking-wider mb-2 block">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="seu@email.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-vitalis-dark uppercase tracking-wider mb-2 block">
                      Telefone
                    </label>
                    <input type="tel" placeholder="(11) 99999-9999" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-vitalis-dark uppercase tracking-wider mb-2 block">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Conte-nos sobre sua empresa e como podemos ajudar..."
                    className={cn(inputClass, 'resize-none')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-vitalis-green text-white font-bold py-4 rounded-xl hover:bg-vitalis-green-dark transition-all hover:shadow-xl hover:-translate-y-px"
                >
                  Solicitar Proposta Gratuita
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
