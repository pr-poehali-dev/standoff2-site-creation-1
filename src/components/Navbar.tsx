import Icon from "@/components/ui/icon";
import { Page, User } from "@/pages/Index";

interface Props {
  page: Page;
  setPage: (p: Page) => void;
  user: User;
  onLogout: () => void;
}

const Navbar = ({ page, setPage, user, onLogout }: Props) => {
  const links: { id: Page; label: string; icon: string }[] = [
    { id: "home", label: "Главная", icon: "Home" },
    { id: "about", label: "О чите", icon: "Info" },
    { id: "profile", label: "Профиль", icon: "User" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-4"
      style={{
        background: "rgba(10,10,15,0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(139,92,246,0.2)",
        boxShadow: "0 2px 30px rgba(139,92,246,0.08)",
      }}
    >
      {/* Logo */}
      <button
        onClick={() => setPage("home")}
        className="flex items-center gap-2 group"
      >
        <span className="text-2xl">⚡</span>
        <span
          className="text-xl font-bold tracking-wider"
          style={{ fontFamily: "'Rajdhani', sans-serif", color: "#a78bfa" }}
        >
          KomaruDLC
        </span>
      </button>

      {/* Links */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <button
            key={l.id}
            onClick={() => setPage(l.id)}
            className={`nav-link flex items-center gap-1.5 text-sm font-medium transition-colors ${
              page === l.id ? "active" : ""
            }`}
            style={{
              color: page === l.id ? "#a78bfa" : "rgba(200,200,220,0.7)",
              fontFamily: "'Exo 2', sans-serif",
            }}
          >
            <Icon name={l.icon} size={15} />
            {l.label}
          </button>
        ))}
      </div>

      {/* User */}
      <div className="flex items-center gap-3">
        <div
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs"
          style={{
            background: "rgba(139,92,246,0.1)",
            border: "1px solid rgba(139,92,246,0.2)",
            color: "rgba(167,139,250,0.8)",
          }}
        >
          <Icon name="User" size={12} />
          <span style={{ maxWidth: 120, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {user.email}
          </span>
        </div>
        <button
          onClick={onLogout}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all hover:opacity-80"
          style={{
            background: "rgba(139,92,246,0.08)",
            border: "1px solid rgba(139,92,246,0.2)",
            color: "rgba(167,139,250,0.7)",
          }}
        >
          <Icon name="LogOut" size={13} />
          <span className="hidden sm:inline">Выйти</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
