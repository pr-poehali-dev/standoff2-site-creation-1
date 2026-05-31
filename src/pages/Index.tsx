import { useState } from "react";
import AuthPage from "@/components/AuthPage";
import HomePage from "@/components/HomePage";
import AboutPage from "@/components/AboutPage";
import ProfilePage from "@/components/ProfilePage";
import Navbar from "@/components/Navbar";
import ParticlesBg from "@/components/ParticlesBg";

export type Page = "home" | "about" | "profile";

export interface User {
  email: string;
}

const Index = () => {
  const [user, setUser] = useState<User | null>(null);
  const [page, setPage] = useState<Page>("home");

  if (!user) {
    return (
      <>
        <ParticlesBg />
        <AuthPage onLogin={(email) => setUser({ email })} />
      </>
    );
  }

  return (
    <>
      <ParticlesBg />
      <div className="relative z-10 min-h-screen">
        <Navbar page={page} setPage={setPage} user={user} onLogout={() => setUser(null)} />
        {page === "home" && <HomePage />}
        {page === "about" && <AboutPage />}
        {page === "profile" && <ProfilePage user={user} />}
      </div>
    </>
  );
};

export default Index;
