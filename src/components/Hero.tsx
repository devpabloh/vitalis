import professora from '../assets/professoraAna.png'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-vitalis-light via-white to-sky-50" />

      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-16 right-8 md:right-24 w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-full bg-vitalis-green/10 animate-float"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="absolute top-40 right-16 md:right-48 w-44 h-44 rounded-full bg-vitalis-orange/10 animate-float-slow"
          style={{ animationDelay: '1.5s' }}
        />
        <div
          className="absolute bottom-24 left-8 w-52 h-52 rounded-full bg-vitalis-blue/10 animate-float"
          style={{ animationDelay: '0.8s' }}
        />
        <div
          className="absolute -bottom-12 right-1/3 w-72 h-72 rounded-full bg-vitalis-green/5 animate-float-slow"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 pt-28 pb-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-7 hero-enter">
          <span className="inline-flex items-center gap-2 bg-vitalis-green/10 text-vitalis-green text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-vitalis-green animate-pulse" />
            Ginástica Laboral &amp; Saúde Corporativa
          </span>

          <h1 className="text-5xl md:text-6xl font-black text-vitalis-dark leading-[1.05] tracking-tight">
            Equipe mais{' '}
            <span className="gradient-text">saudável</span>
            ,{' '}empresa mais{' '}
            <span className="gradient-text-warm">produtiva</span>
          </h1>

          <p className="text-vitalis-gray text-lg leading-relaxed max-w-md">
            Programas personalizados de ginástica laboral e bem-estar corporativo para reduzir
            afastamentos, melhorar o clima organizacional e aumentar a performance da sua equipe.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contato"
              className="bg-vitalis-green text-white font-bold px-8 py-4 rounded-full hover:bg-vitalis-green-dark transition-all hover:shadow-xl hover:-translate-y-1"
            >
              Quero Começar
            </a>
            <a
              href="#servicos"
              className="border-2 border-vitalis-green/30 text-vitalis-dark font-bold px-8 py-4 rounded-full hover:border-vitalis-green hover:text-vitalis-green transition-all"
            >
              Ver Serviços
            </a>
          </div>

          {/* Trust bar */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2.5">
              {['#5CB330', '#F7931E', '#1B75BB', '#5CB330'].map((c, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
            <span className="text-sm text-vitalis-gray">
              <span className="font-bold text-vitalis-dark">+500 empresas</span> confiam na Vitalis
            </span>
          </div>
        </div>

        {/* Visual */}
        <div
          className="relative flex justify-center items-center hero-enter"
          style={{ animationDelay: '0.25s' }}
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            {/* Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-vitalis-green/20 animate-float" />
            <div
              className="absolute inset-5 rounded-full border-2 border-vitalis-green/25 animate-float"
              style={{ animationDelay: '0.4s' }}
            />
            {/* Main circle */}
            <div className="absolute inset-10 rounded-full bg-vitalis-green flex items-center justify-center shadow-2xl overflow-hidden">
              <img src={professora} alt="Foto da Profissional Ana" className='w-50 object-cover' />
            </div>
          </div>

          {/* Floating badges */}
          <div
            className="absolute -top-4 -right-2 md:right-4 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3 animate-float"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="w-10 h-10 bg-vitalis-orange/15 rounded-xl flex items-center justify-center text-lg">
              💪
            </div>
            <div>
              <div className="text-xs text-vitalis-gray leading-none mb-0.5">Colaboradores</div>
              <div className="font-black text-vitalis-dark">+10.000</div>
            </div>
          </div>

          <div
            className="absolute -bottom-4 -left-2 md:left-4 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3 animate-float"
            style={{ animationDelay: '1.2s' }}
          >
            <div className="w-10 h-10 bg-vitalis-blue/15 rounded-xl flex items-center justify-center text-lg">
              ⭐
            </div>
            <div>
              <div className="text-xs text-vitalis-gray leading-none mb-0.5">Satisfação</div>
              <div className="font-black text-vitalis-dark">95%</div>
            </div>
          </div>

          <div
            className="absolute top-1/2 -translate-y-1/2 -left-8 md:-left-16 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3 animate-float"
            style={{ animationDelay: '0.8s' }}
          >
            <div className="w-10 h-10 bg-vitalis-green/15 rounded-xl flex items-center justify-center text-lg">
              🏢
            </div>
            <div>
              <div className="text-xs text-vitalis-gray leading-none mb-0.5">Empresas</div>
              <div className="font-black text-vitalis-dark">+500</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-vitalis-gray tracking-widest uppercase">Role para baixo</span>
        <div className="w-5 h-9 border-2 border-vitalis-gray/50 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2.5 bg-vitalis-green rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
