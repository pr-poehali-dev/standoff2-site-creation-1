import { useState } from "react";
import Icon from "@/components/ui/icon";
import { User } from "@/pages/Index";

interface Props {
  user: User;
}

const ProfilePage = ({ user }: Props) => {
  const [tab, setTab] = useState<"info" | "license" | "settings">("info");

  const avatar = user.email.slice(0, 2).toUpperCase();

  return (
    <div className="min-h-screen py-16 px-6" style={{ background: "#0a0a0f" }}>
      <div className="container mx-auto max-w-3xl">

        {/* Profile header */}
        <div className="glass-card glow-border rounded-2xl p-8 mb-6 animate-fade-in-up flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black flex-shrink-0 animate-glow"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
              color: "#ffffff",
              fontFamily: "'Rajdhani', sans-serif",
              boxShadow: "0 0 30px rgba(124,58,237,0.4)",
            }}
          >
            {avatar}
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-3xl font-black text-white mb-1" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              {user.email.split("@")[0]}
            </h1>
            <p className="text-sm mb-3" style={{ color: "rgba(167,139,250,0.6)" }}>{user.email}</p>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.3)", color: "#4ade80" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Лицензия активна
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.3)", color: "#a78bfa" }}
              >
                <Icon name="Crown" size={11} />
                Premium
              </span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div
          className="flex rounded-xl overflow-hidden mb-6 animate-fade-in-up delay-100"
          style={{ background: "rgba(15,10,30,0.8)", border: "1px solid rgba(139,92,246,0.2)" }}
        >
          {(["info", "license", "settings"] as const).map((t) => {
            const labels = { info: "Информация", license: "Лицензия", settings: "Настройки" };
            const icons = { info: "User", license: "Key", settings: "Settings" };
            return (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-all"
                style={{
                  background: tab === t ? "rgba(124,58,237,0.25)" : "transparent",
                  color: tab === t ? "#a78bfa" : "rgba(167,139,250,0.4)",
                  borderBottom: tab === t ? "2px solid #7c3aed" : "2px solid transparent",
                  fontFamily: "'Exo 2', sans-serif",
                }}
              >
                <Icon name={icons[t]} size={14} />
                {labels[t]}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        {tab === "info" && (
          <div className="space-y-4 animate-fade-in-up">
            {[
              { icon: "Mail", label: "Email", val: user.email },
              { icon: "Calendar", label: "Дата регистрации", val: "31 мая 2024" },
              { icon: "Globe", label: "Версия чита", val: "KomaruDLC v3.2.1" },
              { icon: "Cpu", label: "Платформа", val: "Windows 11 x64" },
            ].map((row) => (
              <div
                key={row.label}
                className="glass-card feature-card rounded-xl px-6 py-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span style={{ color: "#7c3aed" }}>
                    <Icon name={row.icon} size={16} />
                  </span>
                  <span className="text-sm" style={{ color: "rgba(167,139,250,0.5)" }}>{row.label}</span>
                </div>
                <span className="text-sm font-semibold text-white">{row.val}</span>
              </div>
            ))}
          </div>
        )}

        {tab === "license" && (
          <div className="animate-fade-in-up">
            <div className="glass-card glow-border rounded-2xl p-8 text-center mb-5">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.3)" }}>
                <Icon name="ShieldCheck" size={28} style={{ color: "#4ade80" }} />
              </div>
              <h3 className="text-2xl font-black text-white mb-2" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                Premium Лицензия
              </h3>
              <p className="text-sm mb-6" style={{ color: "rgba(167,139,250,0.5)" }}>
                Активна до 31 декабря 2024
              </p>
              <div
                className="inline-block px-4 py-2 rounded-lg font-mono text-sm mb-6"
                style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.3)", color: "#a78bfa" }}
              >
                KOMARU-XXXX-XXXX-XXXX
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { val: "∞", label: "Функции" },
                  { val: "24/7", label: "Поддержка" },
                  { val: "Бесплатно", label: "Обновления" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-xl font-black" style={{ color: "#a78bfa", fontFamily: "'Rajdhani', sans-serif" }}>{s.val}</div>
                    <div className="text-xs" style={{ color: "rgba(167,139,250,0.4)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "settings" && (
          <div className="space-y-4 animate-fade-in-up">
            {[
              { label: "Уведомления об обновлениях", on: true },
              { label: "Автозапуск при старте", on: false },
              { label: "Стелс-режим интерфейса", on: true },
              { label: "Телеметрия (анонимная)", on: false },
            ].map((s) => (
              <div
                key={s.label}
                className="glass-card feature-card rounded-xl px-6 py-4 flex items-center justify-between"
              >
                <span className="text-sm text-white">{s.label}</span>
                <div
                  className="w-12 h-6 rounded-full relative cursor-pointer transition-all"
                  style={{
                    background: s.on ? "rgba(124,58,237,0.6)" : "rgba(60,60,80,0.6)",
                    border: s.on ? "1px solid rgba(139,92,246,0.6)" : "1px solid rgba(100,100,120,0.4)",
                    boxShadow: s.on ? "0 0 10px rgba(124,58,237,0.4)" : "none",
                  }}
                >
                  <div
                    className="absolute top-0.5 w-5 h-5 rounded-full transition-all"
                    style={{
                      background: s.on ? "#a78bfa" : "#555",
                      left: s.on ? "calc(100% - 1.375rem)" : "2px",
                      boxShadow: s.on ? "0 0 8px rgba(167,139,250,0.8)" : "none",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
