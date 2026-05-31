import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/254f06a7-3f65-4a15-b055-c18d65df7d99/files/7f292b5e-69d9-4aa6-82b9-2711bcbb8114.jpg";

const features = [
  { icon: "Crosshair", title: "Аимбот", desc: "Точное автоприцеливание с настройкой скорости и зоны захвата цели" },
  { icon: "Eye", title: "Wallhack", desc: "Видишь врагов сквозь стены — никто не зайдёт незамеченным" },
  { icon: "Zap", title: "No Recoil", desc: "Полное устранение отдачи оружия для идеальной точности" },
  { icon: "Shield", title: "Анти-бан", desc: "Продвинутая система обхода античита — играй безопасно" },
  { icon: "Settings", title: "ESP меню", desc: "Отображение HP, никнеймов, расстояния до врагов" },
  { icon: "Cpu", title: "Speed hack", desc: "Управление скоростью передвижения персонажа" },
];

const HomePage = () => {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="hero-bg relative min-h-[90vh] flex items-center overflow-hidden scanlines">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, #0a0a0f 100%)" }} />

        {/* Decorative lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)" }} />
          <div className="absolute bottom-1/3 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.15), transparent)" }} />
          <div className="absolute top-0 left-1/4 w-px h-full" style={{ background: "linear-gradient(180deg, transparent, rgba(139,92,246,0.15), transparent)" }} />
          <div className="absolute top-0 right-1/4 w-px h-full" style={{ background: "linear-gradient(180deg, transparent, rgba(139,92,246,0.1), transparent)" }} />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-8 animate-fade-in-up"
              style={{
                background: "rgba(139,92,246,0.15)",
                border: "1px solid rgba(139,92,246,0.4)",
                color: "#a78bfa",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              Версия 3.2.1 — Активна
            </div>

            <h1
              className="font-black leading-none mb-6 animate-fade-in-up delay-100"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: "clamp(3rem, 8vw, 6rem)",
                color: "#ffffff",
              }}
            >
              DOMINATE
              <br />
              <span style={{ color: "#7c3aed", textShadow: "0 0 40px rgba(124,58,237,0.8)" }}>
                STANDOFF 2
              </span>
            </h1>

            <p
              className="text-lg mb-10 max-w-xl animate-fade-in-up delay-200"
              style={{ color: "rgba(200,200,220,0.7)", lineHeight: 1.7 }}
            >
              KomaruDLC — профессиональный инструмент для максимального
              превосходства над соперниками. Обходит античит, работает стабильно.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <button
                className="cyber-btn flex items-center gap-3 px-8 py-4 rounded-xl text-white font-bold text-lg"
                style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.1em" }}
                onClick={() => window.open("https://t.me/entpere", "_blank")}
              >
                <Icon name="Download" size={22} />
                СКАЧАТЬ БЕСПЛАТНО
              </button>

              <button
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all hover:opacity-80"
                style={{
                  background: "rgba(139,92,246,0.1)",
                  border: "1px solid rgba(139,92,246,0.3)",
                  color: "#a78bfa",
                  fontFamily: "'Exo 2', sans-serif",
                }}
              >
                <Icon name="Play" size={18} />
                Как установить
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-14 animate-fade-in-up delay-400">
              {[
                { val: "50K+", label: "Активных пользователей" },
                { val: "99.8%", label: "Аптайм" },
                { val: "0", label: "Банов за 30 дней" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="text-3xl font-black"
                    style={{ fontFamily: "'Rajdhani', sans-serif", color: "#a78bfa" }}
                  >
                    {s.val}
                  </div>
                  <div className="text-xs" style={{ color: "rgba(167,139,250,0.5)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6" style={{ background: "#0a0a0f" }}>
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-black mb-3"
              style={{ fontFamily: "'Rajdhani', sans-serif", color: "#ffffff" }}
            >
              ВОЗМОЖНОСТИ
            </h2>
            <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, transparent, #7c3aed, transparent)" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="feature-card glass-card rounded-2xl p-6 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "both", opacity: 0 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.3)" }}
                >
                  <Icon name={f.icon} size={22} style={{ color: "#a78bfa" }} />
                </div>
                <h3
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                >
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(167,139,250,0.55)" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section
        className="py-20 px-6 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, #0a0a0f 50%, rgba(109,40,217,0.08) 100%)" }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)", filter: "blur(40px)" }}
        />
        <div className="relative z-10">
          <h2
            className="text-4xl font-black text-white mb-4"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            ГОТОВ К ИГРЕ?
          </h2>
          <p className="text-base mb-8" style={{ color: "rgba(167,139,250,0.6)" }}>
            Скачай KomaruDLC бесплатно и начни доминировать прямо сейчас
          </p>
          <button
            className="cyber-btn inline-flex items-center gap-3 px-12 py-5 rounded-xl text-white font-black text-xl animate-glow"
            style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.12em" }}
            onClick={() => window.open("https://t.me/entpere", "_blank")}
          >
            <Icon name="Download" size={26} />
            СКАЧАТЬ СЕЙЧАС
          </button>
          <p className="mt-4 text-xs" style={{ color: "rgba(139,92,246,0.35)" }}>
            Бесплатно · Windows · Версия 3.2.1
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;