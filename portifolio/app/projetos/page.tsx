"use client";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const todosProjetos = [
  {
    id: "01",
    title: "Sistema de Presença Institucional",
    desc: "Sistema em produção utilizado por instituição real para controle de presença, gerenciamento de participantes e armazenamento de dados em tempo real. Possui funcionalidade de scanner de código de barras para efetuar o registro de presença.",
    tags: ["Next.js", "React", "TypeScript", "NeonDB", "Prisma", "TailwindCSS"],
    filters: ["SaaS"],
    badge: "Em uso real",
    year: "2026",
    accent: "#ae00ff",
    image: "/analia-franco/Login_analia.png",
    live: "#",
    github: "https://github.com/Madarauos/analia-franco",
  },
  {
    id: "02",
    title: "Plataforma Instituto Infância",
    desc: "Aplicação desenvolvida para instituto social com gerenciamento de usuários, organização de registros e suporte a atividades educacionais. Possui funcionalidade de exportação de relatórios para o Google Drive.",
    tags: ["Next.js", "React", "TypeScript", "Supabase"],
    filters: ["SaaS"],
    badge: "Em uso real",
    year: "2026",
    accent: "#ad6ef6",
    image: "/infancia/Dashboard.png",
    live: "#",
    github: "https://github.com/Madarauos/instituto-infancia",
  },
  {
    id: "03",
    title: "Sistema de Gestão de Mocidade",
    desc: "Sistema para organização de grupos e controle de presença, permitindo acompanhamento contínuo de participantes em atividades recorrentes. Possui funcionalidade de exportação de relatórios para o Google Drive.",
    tags: ["Next.js", "React", "TypeScript", "Supabase"],
    filters: ["SaaS"],
    badge: "Em uso real",
    year: "2026",
    accent: "#35b5ff",
    image: "/mocidade/Dashboard.png",
    live: "#",
    github: "https://github.com/Madarauos/mocidade",
  },
  {
    id: "04",
    title: "Jogo de Damas com Interface Gráfica",
    desc: "Aplicação desktop com interface gráfica desenvolvida em Python, implementando a lógica completa do jogo de damas e interação entre jogadores.",
    tags: ["Python", "PyQt5"],
    filters: ["Lógica & Algoritmos", "Acadêmico"],
    badge: "Projeto técnico",
    year: "2024",
    accent: "#22c55e",
    image: '/pd.avf',
    live: "#",
    github: "https://github.com/Madarauos/JOGO_DE_DAMAS",
  },
  {
    id: "05",
    title: "Agro Plants Now",
    desc: "Sistema de gerenciamento de vendas desenvolvido em equipe no curso técnico, com controle de pedidos, comissão de vendedores, gestão de clientes, cupons de desconto e relatórios administrativos. Arquitetura MVC em PHP com metodologia Scrum.",
    tags: ["PHP", "CSS", "MySQL", "MVC", "PHPMailer", "reCaptcha"],
    filters: ["Web App", "Acadêmico"],
    badge: "Projeto acadêmico",
    year: "2024",
    accent: "#f97316",
    image: null,
    live: "#",
    github: "https://github.com/Madarauos/agro_plants_NOW",
  },
];

const categorias = ["Todos", "SaaS", "Web App", "Lógica & Algoritmos", "Acadêmico"];

export default function ProjetosPage() {

  const [active, setActive] = useState("Todos");

  const filtered = active === 'Todos'
    ? todosProjetos
    : todosProjetos.filter(p => p.filters.includes(active));

  return (
    <div style={{ paddingTop: '64px', minHeight: '100vh' }}>
      <section style={{ padding: '80px 48px 60px', borderBottom: '1px solid rgba(127, 11, 216, 0.3)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <span style={{ fontSize: '0.65rem', color: '#6b6b6b', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
            - portifólio
          </span>
          <h1 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            color: 'azure',
            marginTop: 8,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
          }}>
            Todos os <br />
            <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#ae00ff' }}>Projetos</span>
          </h1>
        </div>
      </section>

      <section style={{ padding: '32px 48px', borderBottom: '1px solid rgba(255,255,255,0.04)', background: '#0d0d0d' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {categorias.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{
              padding: '8px 18px',
              borderRadius: '100px',
              border: `1px solid ${active === cat ? "#ae00ff" : "rgba(255,255,255,0.08)"}`,
              background: active === cat ? "#ae00ff" : "transparent",
              color: active === cat ? "azure" : "#6b6b6b",
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.7rem',
              letterSpacing: '0.08em',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section style={{ padding: '64px 48px 120px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
            {filtered.map((p, i) => (
              <div key={i} className="card-hover" style={{
                background: '#111',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '8px',
                padding: '32px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0, right: 0,
                  width: 120, height: 120,
                  background: `radial-gradient(circle, ${p.accent}10 0%, transparent 70%)`,
                  pointerEvents: 'none',
                }} />
                
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
                {p.filters.map(f => (
                    <span key={f} style={{
                    padding: "6px 15px",
                    background: `${p.accent}15`,
                    border: `1px solid ${p.accent}30`,
                    borderRadius: "100px",
                    fontSize: "0.6rem",
                    color: p.accent,
                    fontFamily: "'DM Mono', monospace",
                    letterSpacing: "0.08em",
                    }}>{f}</span>
                ))}
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                {p.badge === 'Em uso real' ? (
                    <span style={{
                    fontSize: '0.6rem', color: '#ae00ff',
                    border: '1px solid #ae00ff33', padding: '3px 10px',
                    borderRadius: '999px', fontFamily: "'DM Mono', monospace",
                    display: 'flex', alignItems: 'center', gap: 6,
                    }}>
                    {p.badge}
                    <div style={{ width: 4, height: 4, background: '#ae00ff', borderRadius: '50%', animation: 'blink 1s step-end infinite' }} />
                    </span>
                ) : p.badge === 'Projeto acadêmico' ? (
                    <span style={{
                    fontSize: '0.6rem', color: '#f97316',
                    border: '1px solid #f9731640', padding: '3px 10px',
                    borderRadius: '999px', fontFamily: "'DM Mono', monospace",
                    }}>{p.badge}</span>
                ) : (
                    <span style={{
                    fontSize: '0.6rem', color: '#22c55e',
                    border: '1px solid #22c55e40', padding: '3px 10px',
                    borderRadius: '999px', fontFamily: "'DM Mono', monospace",
                    }}>{p.badge}</span>
                )}
                <span style={{ fontSize: "0.65rem", color: "#333", fontFamily: "'DM Mono', monospace" }}>{p.year}</span>
                </div>

                {p.image && (
                <div style={{
                    width: '100%',
                    height: 140,
                    borderRadius: '6px',
                    overflow: 'hidden',
                    marginBottom: 16,
                    position: 'relative',
                }}>
                    <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'top',
                        maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                    }}
                    />
                    <div style={{
                    position: 'absolute',
                    top: 12, left: 12,
                    width: 35, height: 35,
                    background: `${p.accent}70`,
                    border: `1px solid ${p.accent}90`,
                    borderRadius: '8px',
                    zIndex: 2,
                    }} />
                </div>
                )}
                <h3 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  color: "azure",
                  marginBottom: 10,
                }}>{p.title}</h3>

                <p style={{ fontSize: "0.78rem", color: "#6b6b6b", lineHeight: 1.6, marginBottom: 24 }}>{p.desc}</p>

                {/* Tags de tecnologia */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 'auto', marginBottom: 28 }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{
                      padding: "3px 10px",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "100px",
                      fontSize: "0.62rem",
                      color: "#6b6b6b",
                      fontFamily: "'DM Mono', monospace",
                    }}>{tag}</span>
                  ))}
                </div>

                {/* Footer: links */}
                <div style={{ display: "flex", gap: 16, borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 20 }}>
                  <a href={p.live} target="_blank" rel="noopener noreferrer" style={{
                    display: "flex", alignItems: "center", gap: 6,
                    color: "#ae00ff", fontSize: "0.7rem", textDecoration: "none",
                    fontFamily: "'DM Mono', monospace",
                  }}>
                    <ExternalLink size={12} /> demo
                  </a>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" style={{
                    display: "flex", alignItems: "center", gap: 6,
                    color: "#6b6b6b", fontSize: "0.7rem", textDecoration: "none",
                    fontFamily: "'DM Mono', monospace",
                    transition: "color 0.2s",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = "azure")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#6b6b6b")}
                  >
                    <Github size={12} /> código
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}