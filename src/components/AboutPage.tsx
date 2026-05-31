import Icon from "@/components/ui/icon";

const faq = [
  { q: "Безопасно ли использовать?", a: "KomaruDLC использует продвинутую систему обхода античита. За последние 30 дней — 0 банов среди наших пользователей." },
  { q: "На каких устройствах работает?", a: "Чит работает на Windows 10/11 (64-bit). Поддержка Android в разработке." },
  { q: "Как часто выходят обновления?", a: "Обновления выходят в течение 24 часов после патча игры." },
  { q: "Есть ли поддержка?", a: "Поддержка доступна через Discord и Telegram 24/7." },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen py-16 px-6" style={{ background: "#0a0a0f" }}>
      <div className="container mx-auto max-w-4xl">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
            style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.3)", color: "#a78bfa" }}
          >
            <Icon name="Info" size={12} />О проекте
          </div>
          <h1
            className="text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            О ЧИТЕ
          </h1>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, transparent, #7c3aed, transparent)" }} />
        </div>

        {/* Main info */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="glass-card glow-border rounded-2xl p-8 animate-fade-in-up">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
              style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.3)" }}
            >
              <Icon name="Sword" size={26} fallback="Zap" style={{ color: "#a78bfa" }} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              Что такое KomaruDLC?
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(167,139,250,0.6)" }}>
              KomaruDLC — профессиональный внешний чит для Standoff 2, разработанный командой опытных разработчиков.
              Мы предоставляем инструменты для максимального игрового преимущества с минимальным риском обнаружения.
            </p>
          </div>

          <div className="glass-card glow-border rounded-2xl p-8 animate-fade-in-up delay-100">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
              style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.3)" }}
            >
              <Icon name="Code" size={26} style={{ color: "#a78bfa" }} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              Технологии
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(167,139,250,0.6)" }}>
              Написан на C++ с использованием низкоуровневых системных вызовов.
              Kernel-level обход защиты, memory injection, external rendering через DirectX overlay.
            </p>
          </div>
        </div>

        {/* Version info */}
        <div
          className="glass-card rounded-2xl p-6 mb-12 animate-fade-in-up delay-200"
          style={{ border: "1px solid rgba(139,92,246,0.2)" }}
        >
          <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            <Icon name="GitBranch" size={18} style={{ color: "#a78bfa" }} />
            Последнее обновление — v3.2.1
          </h3>
          <div className="space-y-3">
            {[
              { icon: "Plus", text: "Добавлен новый режим аимбота — Smooth AI", color: "#4ade80" },
              { icon: "RefreshCw", text: "Обновлён обход системы защиты под патч 1.28.0", color: "#a78bfa" },
              { icon: "Bug", text: "Исправлен краш при смене карты на Dust", color: "#f87171" },
              { icon: "Zap", text: "Улучшена производительность ESP на 30%", color: "#facc15" },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3">
                <span
                  className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `${item.color}18`, color: item.color }}
                >
                  <Icon name={item.icon} size={12} />
                </span>
                <span className="text-sm" style={{ color: "rgba(200,200,220,0.7)" }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="animate-fade-in-up delay-300">
          <h2 className="text-3xl font-black text-white mb-6" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            ЧАСТЫЕ ВОПРОСЫ
          </h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <div
                key={i}
                className="feature-card glass-card rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(124,58,237,0.2)", color: "#a78bfa", fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: 14 }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                      {item.q}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(167,139,250,0.55)" }}>
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
