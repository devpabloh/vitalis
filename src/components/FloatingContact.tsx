import { useState } from 'react';
import { cn } from '../lib/utils';
import professoraContato from '../assets/professoraAnaAtendendoTelefone-removebg-preview.png'
import professoraContatoMostrar from '../assets/professoraAnaMostrandoChat-removebg-preview.png'
import info from "../data/info.json"

export function FloatingContact() {
  // Um único estado booleano controla se o menu está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);

  return (
    // fixed = posição fixa na tela, independente do scroll
    // z-50 = fica na frente de todos os outros elementos
    <div className="fixed bottom-0 right-0 z-50">

      {/*
        relative aqui = ponto de referência para o posicionamento absolute dos sub-botões.
        Sem esse relative, o absolute dos sub-botões se ancoraria na janela inteira.
      */}
      <div className="relative">

      {/* ── Sub-botões (WhatsApp e Email) ─────────────────── */}
      {/*
        absolute → sai do fluxo normal e se posiciona em relação ao pai relative
        bottom-[55%] → 55% a partir da base da imagem (ajuste até alinhar com a mão)
        right-10     → 40px da borda direita da imagem (ajuste horizontal fino)

        ↕ Mude bottom-[X%] para subir ou descer os botões
        ↔ Mude right-X    para mover para esquerda ou direita
      */}
      <div
        className={cn(
          'absolute bottom-[55%] right-40 flex flex-col items-end gap-3 transition-all duration-300 z-10',
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none',
        )}
      >
         <a href={info.instagram}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Ver Instagram"
  className="flex items-center gap-3 group"
>
  <span className="bg-white text-vitalis-dark text-sm font-medium px-3 py-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
    Instagram
  </span>
  <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }}
  >
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  </div>
</a>
        {/* WhatsApp */}
        {/*
          target="_blank" abre em nova aba
          rel="noopener noreferrer" é segurança obrigatória ao usar target="_blank":
            - noopener  → a nova página não pode acessar o window da sua página
            - noreferrer → não envia o endereço da sua página para o destino
        */}
        <a
          href={info.linkWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar pelo WhatsApp"
          className="flex items-center gap-3 group"
        >
          {/*
            group + group-hover: quando o <a> recebe hover, os filhos com
            "group-hover:opacity-100" também reagem — sem JavaScript!
          */}
          <span className=" bg-white text-vitalis-dark text-sm font-medium px-3 py-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            WhatsApp
          </span>
          <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            {/* Ícone SVG nativo — sem biblioteca externa */}
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.138.563 4.14 1.537 5.876L0 24l6.31-1.515A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.956 0-3.793-.535-5.373-1.464l-.385-.228-3.742.898.94-3.634-.25-.397A9.938 9.938 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
          </div>
        </a>

        {/* Email */}
        <a
          href={info.linkEmail}
          aria-label="Enviar e-mail"
          className="flex items-center gap-3 group"
        >
          <span className="bg-white text-vitalis-dark text-sm font-medium px-3 py-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            E-mail
          </span>
          <div className="w-12 h-12 bg-vitalis-blue rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
        </a>
      </div>

      {/* ── Botão principal (toggle) ───────────────────────── */}
      {/*
        O botão não tem fundo nem borda — a imagem É o elemento visual.
        aria-label muda conforme o estado para acessibilidade.
        aria-expanded informa ao navegador/leitor de tela se o menu está aberto.

        Operador ternário na src:
          isOpen ? imagemAberta : imagemFechada
          → React re-renderiza e troca o src automaticamente ao mudar o estado
      */}
      <img
          src={isOpen ? professoraContatoMostrar : professoraContato}
          alt={isOpen ? 'Professora mostrando opções de contato' : 'Professora disponível para contato'}
          onClick={() => setIsOpen((prev) => !prev)}
          role='button'
          aria-label={isOpen ? 'Fechar opções de contato' : 'Abrir opções de contato'}
          aria-expanded={isOpen}
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setIsOpen((prev) => !prev)}
          className="w-32 md:w-50 h-auto drop-shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        />
      </div>
    </div>
  );
}
