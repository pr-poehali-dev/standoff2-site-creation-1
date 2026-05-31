import { useState } from "react";
import Icon from "@/components/ui/icon";

interface Props {
  onLogin: (email: string) => void;
}

const AuthPage = ({ onLogin }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Заполните все поля");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin(email);
    }, 1200);
  };

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md animate-fade-in-up">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl glass-card glow-border mb-4 animate-float">
            <span className="text-4xl">⚡</span>
          </div>
          <h1
            className="text-5xl font-bold glow-text mb-1"
            style={{ fontFamily: "'Rajdhani', sans-serif", color: "#a78bfa" }}
          >
            KomaruDLC
          </h1>
          <p className="text-sm tracking-[0.3em] uppercase" style={{ color: "rgba(139,92,246,0.6)" }}>
            Standoff 2 Enhancement
          </p>
        </div>

        {/* Card */}
        <div className="glass-card rounded-2xl p-8 glow-border animate-glow">
          <h2
            className="text-2xl font-bold text-white mb-1"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            Вход в систему
          </h2>
          <p className="text-sm mb-8" style={{ color: "rgba(139,92,246,0.5)" }}>
            Введите данные для доступа
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "rgba(139,92,246,0.7)" }}>
                Email
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "rgba(139,92,246,0.5)" }}>
                  <Icon name="Mail" size={16} />
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="cyber-input w-full rounded-xl pl-10 pr-4 py-3 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "rgba(139,92,246,0.7)" }}>
                Пароль
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "rgba(139,92,246,0.5)" }}>
                  <Icon name="Lock" size={16} />
                </span>
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="cyber-input w-full rounded-xl pl-10 pr-12 py-3 text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 transition-opacity hover:opacity-80"
                  style={{ color: "rgba(139,92,246,0.5)" }}
                >
                  <Icon name={showPass ? "EyeOff" : "Eye"} size={16} />
                </button>
              </div>
            </div>

            {error && (
              <p className="text-sm text-red-400 flex items-center gap-2">
                <Icon name="AlertCircle" size={14} />
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="cyber-btn w-full rounded-xl py-3.5 text-white font-bold tracking-widest uppercase text-sm mt-2 disabled:opacity-60"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Проверка...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Icon name="LogIn" size={16} />
                  Войти
                </span>
              )}
            </button>
          </form>
        </div>

        <p className="text-center mt-6 text-xs" style={{ color: "rgba(139,92,246,0.3)" }}>
          © 2024 KomaruDLC. Только для тестирования.
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
