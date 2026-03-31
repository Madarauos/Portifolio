"use client";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const todosProjetos = [
  {
    id: "01",
    title: "Sistema de Presença Institucional",
    problem: "Instituição registrava presença manualmente, gerando erros e retrabalho.",
    role: "Desenvolvimento completo solo — banco de dados, back-end e interface.",
    impact: "Sistema em uso ativo com scanner de código de barras para registro instantâneo.",
    tags: ["Next.js", "React", "TypeScript", "NeonDB", "Prisma", "TailwindCSS"],
    filters: ["SaaS"],
    badge: "Em uso real",
    year: "2026",
    accent: "#ae00ff",
    image: "/analia-franco/Login_analia.png",
    live: null,
    github: "https://github.com/Madarauos/analia-franco",
  },
  {
    id: "03",
    title: "Sistema de Gestão de Mocidade",
    problem: "Grupo sem controle estruturado de membros e frequência em atividades recorrentes.",
    role: "Desenvolvimento solo com entrega e suporte contínuo.",
    impact: "Controle de presença e exportação de relatórios para Google Drive em uso real.",
    tags: ["Next.js", "React", "TypeScript", "Supabase"],
    filters: ["SaaS"],
    badge: "Em uso real",
    year: "2026",
    accent: "#35b5ff",
    image: "/mocidade/Dashboard.png",
    live: null,
    github: "https://github.com/Madarauos/mocidade",
  },
  {
    id: "02",
    title: "Plataforma Instituto Infância",
    problem: "Instituto social sem sistema para organizar participantes e gerar relatórios.",
    role: "Desenvolvedor full-stack responsável por toda a arquitetura e entrega.",
    impact: "Exportação automatizada de relatórios para Google Drive, eliminando processo manual.",
    tags: ["Next.js", "React", "TypeScript", "Supabase"],
    filters: ["SaaS"],
    badge: "Em uso real",
    year: "2026",
    accent: "#ad6ef6",
    image: "/infancia/Dashboard.png",
    live: null,
    github: "https://github.com/Madarauos/instituto-infancia",
  },
  {
    id: "05",
    title: "Agro Plants Now",
    problem: "Projeto acadêmico simulando sistema real de gestão de vendas para agroindústria.",
    role: "Desenvolvedor em equipe com metodologia Scrum — responsável por módulos de pedidos e relatórios.",
    impact: "Sistema MVC completo com controle de pedidos, comissões, cupons e relatórios administrativos.",
    tags: ["PHP", "CSS", "MySQL", "MVC", "PHPMailer", "reCaptcha"],
    filters: ["Web App", "Acadêmico"],
    badge: "Projeto acadêmico",
    year: "2024",
    accent: "#f97316",
    image: null,
    live: null,
    github: "https://github.com/Madarauos/agro_plants_NOW",
  },
  {
    id: "04",
    title: "Jogo de Damas com Interface Gráfica",
    problem: "Projeto de estudo para aprofundar lógica de programação e interfaces desktop.",
    role: "Desenvolvimento solo da lógica do jogo e da interface gráfica em Python.",
    impact: "Implementação completa das regras do jogo com interface jogável entre dois jogadores.",
    tags: ["Python", "PyQt5"],
    filters: ["Lógica & Algoritmos", "Acadêmico"],
    badge: "Projeto técnico",
    year: "2024",
    accent: "#22c55e",
    image: null,
    live: null,
    github: "https://github.com/Madarauos/JOGO_DE_DAMAS",
  },
];

const categorias = ["Todos", "SaaS", "Web App", "Lógica & Algoritmos", "Acadêmico"];

const badgeColor: Record<string, string> = {
  "Em uso real":      "#ae00ff",
  "Projeto técnico":  "#22c55e",
  "Projeto acadêmico":"#f97316",
};

export default function ProjetosPage() {
  const [active, setActive] = useState("Todos");

  const filtered = active === "Todos"
    ? todosProjetos
    : todosProjetos.filter(p => p.filters.includes(active));

  const emProducao   = todosProjetos.filter(p => p.badge === "Em uso real").length;
  const academicos   = todosProjetos.filter(p => p.badge !== "Em uso real").length;
  const stacksUnicas = [...new Set(todosProjetos.flatMap(p => p.tags))].length;

  return (
    <div style={{ paddingTop: "64px", minHeight: "100vh" }}>

      <section className="grid-bg" style={{ padding: "80px 48px 60px", borderBottom: "1px solid rgba(174,0,255,0.3)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontSize: "0.65rem", color: "#6b6b6b", textTransform: "uppercase", letterSpacing: "0.2em" }}>— portfólio</span>
          <h1 style={{
            fontFamily: "'Poppins', sans-serif", fontWeight: 800,
            fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "azure",
            marginTop: 8, letterSpacing: "-0.04em", lineHeight: 0.95,
          }}>
            Todos os <br />
            <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: "#ae00ff" }}>Projetos</span>
          </h1>

          {/* stats rápidas */}
          <div style={{ display: "flex", gap: 32, marginTop: 32, flexWrap: "wrap" }}>
            {[
              { value: emProducao,   label: "em produção"       },
              { value: academicos,   label: "projetos de estudo" },
              { value: stacksUnicas, label: "tecnologias usadas" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "2rem", color: "#ae00ff", lineHeight: 1 }}>{value}+</div>
                <div style={{ fontSize: "0.68rem", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "24px 48px", borderBottom: "1px solid rgba(255,255,255,0.04)", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 8, flexWrap: "wrap" }}>
          {categorias.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{
              padding: "8px 18px", borderRadius: "100px",
              border: `1px solid ${active === cat ? "#ae00ff" : "rgba(255,255,255,0.08)"}`,
              background: active === cat ? "#ae00ff" : "transparent",
              color: active === cat ? "azure" : "#6b6b6b",
              fontFamily: "'DM Mono', monospace", fontSize: "0.7rem",
              letterSpacing: "0.08em", cursor: "pointer", transition: "all 0.2s ease",
            }}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section style={{ padding: "64px 48px 120px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))", gap: 24 }}>
            {filtered.map((p, i) => (
              <div key={i} className="card-hover" style={{
                background: "#111", border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "8px", padding: "32px", position: "relative",
                overflow: "hidden", display: "flex", flexDirection: "column",
              }}>
                <div style={{ position: "absolute", top: 0, right: 0, width: 120, height: 120, background: `radial-gradient(circle, ${p.accent}10 0%, transparent 70%)`, pointerEvents: "none" }} />

                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
                  {p.filters.map(f => (
                    <span key={f} style={{
                      padding: "4px 12px", background: `${p.accent}15`,
                      border: `1px solid ${p.accent}30`, borderRadius: "100px",
                      fontSize: "0.6rem", color: p.accent,
                      fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em",
                    }}>{f}</span>
                  ))}
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <span style={{
                    fontSize: "0.6rem", color: badgeColor[p.badge] ?? "#ae00ff",
                    border: `1px solid ${badgeColor[p.badge] ?? "#ae00ff"}33`,
                    padding: "3px 10px", borderRadius: "999px",
                    fontFamily: "'DM Mono', monospace",
                    display: "flex", alignItems: "center", gap: 6,
                  }}>
                    {p.badge}
                    {p.badge === "Em uso real" && (
                      <div style={{ width: 4, height: 4, background: "#ae00ff", borderRadius: "50%", animation: "blink 1s step-end infinite" }} />
                    )}
                  </span>
                  <span style={{ fontSize: "0.65rem", color: "#333", fontFamily: "'DM Mono', monospace" }}>{p.year}</span>
                </div>

                {p.image && (
                  <div style={{ width: "100%", height: 130, borderRadius: "6px", overflow: "hidden", marginBottom: 20, position: "relative" }}>
                    <Image src={p.image} alt={p.title} fill style={{
                      objectFit: "cover", objectPosition: "top",
                      maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
                      WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
                    }} />
                    <div style={{ position: "absolute", top: 10, left: 10, width: 30, height: 30, background: `${p.accent}70`, border: `1px solid ${p.accent}90`, borderRadius: "6px", zIndex: 2 }} />
                  </div>
                )}

                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "azure", marginBottom: 16 }}>{p.title}</h3>

                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                  {[
                    { label: "Problema", text: p.problem },
                    { label: "Meu papel", text: p.role   },
                    { label: "Impacto",   text: p.impact  },
                  ].map(({ label, text }) => (
                    <div key={label} style={{ display: "flex", gap: 8 }}>
                      <span style={{ fontSize: "0.58rem", color: p.accent, fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.08em", whiteSpace: "nowrap", paddingTop: 2 }}>{label}</span>
                      <span style={{ fontSize: "0.74rem", color: "#666", lineHeight: 1.5 }}>{text}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto", marginBottom: 20 }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{
                      padding: "3px 10px", border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "100px", fontSize: "0.62rem", color: "#6b6b6b",
                      fontFamily: "'DM Mono', monospace",
                    }}>{tag}</span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: 16, borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 16 }}>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" style={{
                    display: "flex", alignItems: "center", gap: 6,
                    color: "#6b6b6b", fontSize: "0.7rem", textDecoration: "none",
                    fontFamily: "'DM Mono', monospace", transition: "color 0.2s",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = "azure")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#6b6b6b")}
                  >
                    <Github size={12} /> código
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" style={{
                      display: "flex", alignItems: "center", gap: 6,
                      color: "#ae00ff", fontSize: "0.7rem", textDecoration: "none",
                      fontFamily: "'DM Mono', monospace",
                    }}>
                      <ExternalLink size={12} /> demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}