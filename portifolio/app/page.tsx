"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Download, Github, Linkedin, MapPin, Clock, Briefcase } from "lucide-react";

const stack = ["Next.js", "React", "TypeScript", "PostgreSQL", "Supabase", "Prisma", "PHP", "Python", "TailwindCSS"];

const projetos = [
  {
    num: "01",
    title: "Sistema de Presença Institucional",
    problem: "Instituição registrava presença manualmente, gerando erros e retrabalho.",
    role: "Desenvolvimento completo solo — do banco de dados à interface.",
    impact: "Sistema em uso ativo, com scanner de código de barras para registro instantâneo de presença.",
    tags: ["Next.js", "React", "TypeScript", "NeonDB", "Prisma", "TailwindCSS"],
    badge: "Produção",
    accent: "#ae00ff",
    image: "/analia-franco/Login_analia.png",
    github: "https://github.com/Madarauos/analia-franco",
    live: null,
  },
  {
    num: "03",
    title: "Sistema de Gestão de Mocidade",
    problem: "Grupo sem controle estruturado de membros e frequência em atividades recorrentes.",
    role: "Desenvolvimento solo com entrega e suporte contínuo.",
    impact: "Controle de presença e exportação de relatórios para Google Drive em uso real.",
    tags: ["Next.js", "React", "TypeScript", "Supabase"],
    badge: "Produção",
    accent: "#35b5ff",
    image: "/mocidade/Dashboard.png",
    github: "https://github.com/Madarauos/mocidade",
    live: null,
  },
    {
      num: "02",
      title: "Plataforma Instituto Infância",
      problem: "Instituto social sem sistema para organizar participantes e gerar relatórios.",
      role: "Desenvolvedor full-stack responsável por toda a arquitetura e entrega.",
      impact: "Exportação automatizada de relatórios para Google Drive, eliminando processo manual.",
      tags: ["Next.js", "React", "TypeScript", "Supabase"],
      badge: "Produção",
      accent: "#ad6ef6",
      image: "/infancia/Dashboard.png",
      github: "https://github.com/Madarauos/instituto-infancia",
      live: null,
    },
];

const servicos = [
  { title: "Desenvolvimento Full-Stack", desc: "Aplicações web completas com Next.js, React, TypeScript e bancos PostgreSQL, Supabase ou NeonDB via Prisma." },
  { title: "Autenticação e Permissões", desc: "Login, cadastro, recuperação de senha e controle de acesso por nível de usuário." },
  { title: "APIs e Integrações", desc: "APIs REST e integrações com serviços externos como Google Drive API para automação de relatórios." },
  { title: "Funcionalidades Específicas", desc: "Scanner de código de barras, leitura de QR code, geração e exportação de dados." },
  { title: "UI Responsiva", desc: "Interfaces limpas e responsivas com TailwindCSS, funcionando bem em mobile e desktop." },
  { title: "Metodologia Ágil", desc: "Experiência com Scrum: sprints, planejamento, dailies e entregas contínuas." },
];

export default function Home() {
  return (
    <div style={{ paddingTop: "64px" }}>

      <section className="grid-bg" style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 48px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "20%", right: "10%", width: 400, height: 400, background: "radial-gradient(circle, rgba(174,0,255,0.07) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "20%", left: "5%", width: 300, height: 300, background: "radial-gradient(circle, rgba(173,110,246,0.08) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

        <div style={{ maxWidth: 900, opacity: 0, animation: "fadeUp 0.8s ease 0.2s forwards" }}>

          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
            <div style={{ width: 8, height: 8, background: "#ae00ff", borderRadius: "50%", animation: "blink 1s step-end infinite" }} />
            <span style={{ fontSize: "0.7rem", color: "#6b6b6b", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "DM Mono, monospace" }}>
              disponível para contratação
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.2rem, 6vw, 5.5rem)",
            lineHeight: 1,
            letterSpacing: "-0.04em",
            color: "azure",
            marginBottom: 24,
          }}>
            Desenvolvedor<br />
            <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: "#ae00ff" }}>Full-Stack</span>
          </h1>

          <p style={{
            maxWidth: 600,
            fontSize: "1rem",
            lineHeight: 1.75,
            color: "#8a8a8a",
            fontFamily: "'DM Mono', monospace",
            marginBottom: 36,
          }}>
            Construo sistemas web usados em produção por organizações reais — com foco em Next.js, React, TypeScript e PostgreSQL. Entrego do banco de dados à interface, com ênfase em usabilidade e valor ao negócio.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
            <Link href="/projetos" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 28px", background: "#ae00ff", color: "azure",
              borderRadius: "4px", fontFamily: "'DM Mono', monospace",
              fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.08em",
              textTransform: "uppercase", textDecoration: "none", transition: "all 0.2s ease",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(174,0,255,0.35)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              Ver Projetos <ArrowRight size={14} />
            </Link>

            <a href="/resume.pdf" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 28px", background: "transparent", color: "azure",
              border: "1px solid rgba(174,0,255,0.4)", borderRadius: "4px",
              fontFamily: "'DM Mono', monospace", fontSize: "0.78rem",
              letterSpacing: "0.08em", textTransform: "uppercase",
              textDecoration: "none", transition: "all 0.2s ease",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#ae00ff"; e.currentTarget.style.color = "#e2a4f4"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(174,0,255,0.4)"; e.currentTarget.style.color = "azure"; }}
            >
              <Download size={14} /> Currículo PDF
            </a>

            <Link href="/contato" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 28px", background: "transparent", color: "azure",
              border: "1px solid rgba(255,255,255,0.1)", borderRadius: "4px",
              fontFamily: "'DM Mono', monospace", fontSize: "0.78rem",
              letterSpacing: "0.08em", textTransform: "uppercase",
              textDecoration: "none", transition: "all 0.2s ease",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#ae00ff"; e.currentTarget.style.color = "#e2a4f4"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "azure"; }}
            >
              Falar comigo
            </Link>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
            <a href="https://github.com/Madarauos" target="_blank" rel="noopener noreferrer" style={{
              display: "flex", alignItems: "center", gap: 6,
              color: "#555", fontSize: "0.75rem", textDecoration: "none",
              fontFamily: "'DM Mono', monospace", transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#ae00ff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#555")}
            >
              <Github size={14} /> GitHub
            </a>
            <a href="#" style={{
              display: "flex", alignItems: "center", gap: 6,
              color: "#555", fontSize: "0.75rem", textDecoration: "none",
              fontFamily: "'DM Mono', monospace", transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#ae00ff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#555")}
            >
              <Linkedin size={14} /> LinkedIn
            </a>
            <span style={{ width: 1, height: 16, background: "#2a2a2a" }} />
            <span style={{ display: "flex", alignItems: "center", gap: 5, color: "#444", fontSize: "0.72rem", fontFamily: "'DM Mono', monospace" }}>
              <MapPin size={12} /> Campo Grande, MS
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 5, color: "#444", fontSize: "0.72rem", fontFamily: "'DM Mono', monospace" }}>
              <Briefcase size={12} /> CLT · Freelance · Remoto
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 5, color: "#444", fontSize: "0.72rem", fontFamily: "'DM Mono', monospace" }}>
              <Clock size={12} /> Turno tarde
            </span>
          </div>
        </div>
      </section>

      <section style={{ padding: "64px 48px", background: "#0a0a0a", borderTop: "1px solid rgba(174,0,255,0.15)", borderBottom: "1px solid rgba(174,0,255,0.15)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, alignItems: "center" }}>
          <div>
            <span style={{ fontSize: "0.65rem", color: "#ae00ff", textTransform: "uppercase", letterSpacing: "0.2em" }}>— resumo rápido</span>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "1.6rem", color: "azure", marginTop: 8, letterSpacing: "-0.03em", lineHeight: 1.2 }}>
              Em 30 segundos
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { label: "Stack principal", value: "Next.js · React · TypeScript · PostgreSQL" },
              { label: "Formação", value: "Técnico em Desenvolvimento de Sistemas — SENAC-MS (2024–2026)" },
              { label: "Sistemas em produção", value: "3+ aplicações usadas por organizações reais" },
              { label: "Disponibilidade", value: "CLT · Freelance · Remoto/Híbrido · Turno tarde" },
              { label: "Localização", value: "Campo Grande, MS — aberto a remoto" },
              { label: "Idiomas", value: "Português nativo · Inglês básico (leitura técnica)" },
            ].map((item, i) => (
              <div key={i} style={{
                padding: "16px 20px",
                background: "#111",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "6px",
              }}>
                <div style={{ fontSize: "0.6rem", color: "#ae00ff", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: "0.78rem", color: "#ccc", fontFamily: "'DM Mono', monospace", lineHeight: 1.5 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)", padding: "14px 0", overflow: "hidden", background: "#111" }}>
        <div className="animate-marquee" style={{ display: "flex", gap: 48, width: "max-content" }}>
          {[...stack, ...stack].map((t, i) => (
            <span key={i} style={{
              fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.85rem",
              color: i % 2 === 0 ? "azure" : "#ae00ff",
              textTransform: "uppercase", letterSpacing: "0.1em",
              display: "flex", alignItems: "center", gap: 40,
            }}>
              {t}<span style={{ color: "#2a2a2a" }}>●</span>
            </span>
          ))}
        </div>
      </div>

      <section style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, flexWrap: "wrap", gap: 16 }}>
            <div>
              <span style={{ fontSize: "0.65rem", color: "#6b6b6b", textTransform: "uppercase", letterSpacing: "0.2em" }}>— projetos em produção</span>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "azure", marginTop: 8, letterSpacing: "-0.03em" }}>
                Sistemas Reais
              </h2>
            </div>
            <Link href="/projetos" style={{ color: "#ae00ff", textDecoration: "none", fontSize: "0.75rem", letterSpacing: "0.1em", display: "flex", alignItems: "center", gap: 6 }}>
              ver todos <ArrowRight size={12} />
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            {projetos.map((p) => (
              <div key={p.num} className="card-hover" style={{
                background: "#111", border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "8px", padding: "32px", display: "flex", flexDirection: "column",
                position: "relative", overflow: "hidden",
              }}>
                {/* accent glow */}
                <div style={{ position: "absolute", top: 0, right: 0, width: 120, height: 120, background: `radial-gradient(circle, ${p.accent}12 0%, transparent 70%)`, pointerEvents: "none" }} />

                {/* header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "#333" }}>{p.num}</span>
                  <span style={{
                    fontSize: "0.6rem", color: "#ae00ff",
                    border: "1px solid #ae00ff33", padding: "3px 10px",
                    borderRadius: "999px", fontFamily: "'DM Mono', monospace",
                    display: "flex", alignItems: "center", gap: 6,
                  }}>
                    {p.badge}
                    <div style={{ width: 4, height: 4, background: "#ae00ff", borderRadius: "50%", animation: "blink 1s step-end infinite" }} />
                  </span>
                  <ExternalLink size={14} color="#333" />
                </div>

                {p.image && (
                  <div style={{ width: "100%", height: 130, borderRadius: "6px", overflow: "hidden", marginBottom: 20, position: "relative" }}>
                    <Image src={p.image} alt={p.title} fill style={{
                      objectFit: "cover", objectPosition: "top",
                      maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
                      WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
                    }} />
                    <div style={{ position: "absolute", top: 10, left: 10, width: 32, height: 32, background: `${p.accent}70`, border: `1px solid ${p.accent}90`, borderRadius: "6px", zIndex: 2 }} />
                  </div>
                )}

                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1rem", color: "azure", marginBottom: 16 }}>{p.title}</h3>

                {/* problema / responsabilidade / impacto */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                  {[
                    { label: "Problema", text: p.problem },
                    { label: "Meu papel", text: p.role },
                    { label: "Impacto", text: p.impact },
                  ].map(({ label, text }) => (
                    <div key={label} style={{ display: "flex", gap: 8 }}>
                      <span style={{ fontSize: "0.6rem", color: p.accent, fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.08em", whiteSpace: "nowrap", paddingTop: 2 }}>{label}</span>
                      <span style={{ fontSize: "0.75rem", color: "#666", lineHeight: 1.5 }}>{text}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto", paddingBottom: 20 }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{
                      padding: "3px 10px", border: "1px solid #333",
                      borderRadius: "100px", fontSize: "0.62rem", color: "#555",
                      fontFamily: "'DM Mono', monospace",
                    }}>{tag}</span>
                  ))}
                </div>

                {/* footer links */}
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

      <section style={{ padding: "80px 48px 120px", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontSize: "0.65rem", color: "#6b6b6b", textTransform: "uppercase", letterSpacing: "0.2em" }}>— serviços</span>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3rem)", color: "azure", marginTop: 8, letterSpacing: "-0.03em", marginBottom: 56 }}>
            O que eu faço
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 1 }}>
            {servicos.map((s, i) => (
              <div key={i} style={{
                padding: "40px 32px",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                borderRight: "1px solid rgba(255,255,255,0.05)",
                transition: "background 0.2s ease",
              }}
                onMouseEnter={e => (e.currentTarget.style.background = "#141414")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "#ae00ff", marginBottom: 12 }}>{String(i + 1).padStart(2, "0")}</div>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "azure", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: "0.78rem", color: "#6b6b6b", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "120px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, background: "radial-gradient(circle, rgba(174,0,255,0.04) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
        <span style={{ fontSize: "0.65rem", color: "#6b6b6b", textTransform: "uppercase", letterSpacing: "0.2em" }}>— vamos trabalhar juntos</span>
        <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "azure", margin: "16px 0 32px", letterSpacing: "-0.04em", lineHeight: 1 }}>
          Tem um projeto<br />
          <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: "#ae00ff" }}>em mente?</span>
        </h2>
        <p style={{ color: "#6b6b6b", maxWidth: 400, margin: "0 auto 40px", fontSize: "0.9rem", lineHeight: 1.6 }}>
          Aberto para CLT, freelance e colaborações. Respondo em até 24h.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contato" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "16px 36px", background: "#ae00ff", color: "azure",
            borderRadius: "4px", fontFamily: "'DM Mono', monospace",
            fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.1em",
            textTransform: "uppercase", textDecoration: "none", transition: "all 0.2s ease",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 10px 40px rgba(174,0,255,0.35)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            Entrar em contato <ArrowRight size={14} />
          </Link>
          <a href="/resume.pdf" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "16px 36px", background: "transparent", color: "azure",
            border: "1px solid rgba(174,0,255,0.4)", borderRadius: "4px",
            fontFamily: "'DM Mono', monospace", fontSize: "0.8rem",
            letterSpacing: "0.1em", textTransform: "uppercase",
            textDecoration: "none", transition: "all 0.2s ease",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#ae00ff"; e.currentTarget.style.color = "#e2a4f4"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(174,0,255,0.4)"; e.currentTarget.style.color = "azure"; }}
          >
            <Download size={14} /> Baixar Currículo
          </a>
        </div>
      </section>
    </div>
  );
}