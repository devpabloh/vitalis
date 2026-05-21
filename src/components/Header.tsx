import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Contato', href: '#contato' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5',
      )}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-vitalis-green flex items-center justify-center shadow transition-transform group-hover:scale-110">
            <svg viewBox="0 0 32 32" fill="white" className="w-5 h-5">
              <circle cx="16" cy="7" r="5" />
              <path d="M16 13c-4 0-7 3-7 7v1h4l2 9h2l2-9h4v-1c0-4-3-7-7-7z" />
            </svg>
          </div>
          <div className="leading-none">
            <span className="block font-black text-lg tracking-tight text-vitalis-dark">
              VITALIS
            </span>
            <span className="block text-[9px] tracking-widest text-vitalis-gray uppercase mt-0.5">
              Atividade Física e Saúde
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-vitalis-dark hover:text-vitalis-green transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-vitalis-green transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contato"
          className="hidden md:inline-flex items-center gap-2 bg-vitalis-green text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-vitalis-green-dark transition-all hover:shadow-lg hover:-translate-y-px"
        >
          Solicitar Proposta
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 flex flex-col gap-1.5"
          aria-label="Menu"
        >
          <span
            className={cn(
              'block w-6 h-0.5 bg-vitalis-dark rounded transition-all duration-300',
              open && 'rotate-45 translate-y-2',
            )}
          />
          <span
            className={cn(
              'block w-6 h-0.5 bg-vitalis-dark rounded transition-all duration-300',
              open && 'opacity-0 scale-x-0',
            )}
          />
          <span
            className={cn(
              'block w-6 h-0.5 bg-vitalis-dark rounded transition-all duration-300',
              open && '-rotate-45 -translate-y-2',
            )}
          />
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 bg-white',
          open ? 'max-h-80 border-t border-gray-100' : 'max-h-0',
        )}
      >
        <nav className="flex flex-col gap-1 p-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl text-vitalis-dark hover:text-vitalis-green hover:bg-vitalis-green/5 font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-2 bg-vitalis-green text-white text-center py-3 rounded-xl font-semibold hover:bg-vitalis-green-dark transition-colors"
          >
            Solicitar Proposta
          </a>
        </nav>
      </div>
    </header>
  );
}
