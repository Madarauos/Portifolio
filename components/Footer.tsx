"use client";
import Link from "next/link";
import { Github, Linkedin, Mail, Briefcase } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "clamp(24px, 5vw, 40px) clamp(16px, 4vw, 48px)",
      background: "#0a0a0a",
    }}>
      <div className="footer-inner" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "24px",
        maxWidth: 1100,
        margin: "0 auto",
      }}>
        {/* Marca */}
        <div>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1rem", color: "azure" }}>
            PR<span style={{ color: "#ae00ff" }}>.</span>
          </span>
          <p style={{ fontSize: "0.7rem", color: "#6b6b6b", marginTop: 6 }}>
            &copy; {year} Paulo Rojas. Feito com as mãos e com bastante café.
          </p>
        </div>

        {/* Ícones sociais */}
        <div style={{ display: "flex", gap: "16px" }}>
          {[
            { icon: Github, href: "https://github.com/PauloRojas18", label: "Github" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/paulo-rojas-b7b77a3a1/", label: "Linkedin" },
            { icon: Briefcase, href: "https://www.infojobs.com.br/candidate/cv/detail2.aspx", label: "Infojobs" },
            { icon: Mail, href: "mailto:paulootaviogalala@gmail.com?subject=Contato via Portfólio", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a 
              key={label} 
              href={href} 
              aria-label={label} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: "#6b6b6b", 
                transition: "color 0.2s ease",
                padding: "4px",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#ae00ff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#6b6b6b")}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Nav links */}
        <nav style={{ display: "flex", gap: "clamp(12px, 3vw, 24px)", flexWrap: "wrap", justifyContent: "center" }}>
          {["/", "/projetos", "/sobre", "/contato"].map((href, i) => {
            const labels = ["início", "projetos", "sobre", "contato"];
            return (
              <Link 
                key={href} 
                href={href} 
                className="nav-link" 
                style={{ fontSize: "0.65rem" }}
              >
                {labels[i]}
              </Link>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
