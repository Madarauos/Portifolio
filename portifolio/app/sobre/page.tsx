"use client";
import { Download, ArrowRight } from "lucide-react";
import Link from "next/link";

const skills = [
  { name: "React / Next.js", level: 90 },
  { name: "TypeScript / JavaScript", level: 88 },
  { name: "PHP / MySQL", level: 82 },
  { name: "Python", level: 78 },
  { name: "TailwindCSS / CSS", level: 85 },
  { name: "PostgreSQL / Supabase", level: 80 },
];

const timeline = [
  {
    year: "2026",
    role: "Sistema de Presença Institucional",
    place: "Em produção",
    desc: "Sistema com scanner de código de barras para controle de presença, utilizado por instituição real.",
  },
  {
    year: "2026",
    role: "Plataforma Instituto Infância",
    place: "Em produção",
    desc: "Aplicação social com gerenciamento de usuários e exportação de relatórios para o Google Drive.",
  },
  {
    year: "2025",
    role: "Sistema de Gerenciamento de Vendas",
    place: "Em produção",
    desc: "Sistema completo de controle de pedidos, comissão de vendedores, gestão de clientes e geração de relatórios administrativos.",
  },
  {
    year: "2024",
    role: "Técnico em Desenvolvimento de Sistemas",
    place: "SENAC-MS",
    desc: "Formação técnica com projetos acadêmicos em PHP MVC, Python e metodologia Scrum.",
  },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "64px", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{
        padding: "80px 48px 80px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        maxWidth: 1100,
        margin: "0 auto",
        alignItems: "start",
      }}>
        <div>
          <span style={{ fontSize: "0.65rem", color: "#6b6b6b", textTransform: "uppercase", letterSpacing: "0.2em" }}>— sobre mim</span>
          <h1 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            color: "azure",
            marginTop: 8,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            marginBottom: 32,
          }}>
            Um dev que<br />
            <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: "#ae00ff" }}>resolve problemas reais</span>
          </h1>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              "Sou Paulo, desenvolvedor full-stack baseado em Campo Grande — MS. Transformo ideias em sistemas digitais que funcionam de verdade, usados por instituições e organizações reais.",
              "Trabalho com React, Next.js, TypeScript e Node.js no front e back, integrando bancos como PostgreSQL, Supabase e NeonDB. Tenho também base sólida em PHP e Python.",
              "Quando não estou codando, estou estudando novas stacks, contribuindo com projetos e buscando sempre resolver problemas com código limpo e interfaces que fazem sentido.",
            ].map((text, i) => (
              <p key={i} style={{ fontSize: "0.88rem", color: "#6b6b6b", lineHeight: 1.75 }}>{text}</p>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 40, flexWrap: "wrap" }}>
            <a href="/resume.pdf" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "12px 24px",
              background: "#ae00ff", color: "azure",
              borderRadius: "4px",
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.75rem", fontWeight: 500,
              letterSpacing: "0.08em", textTransform: "uppercase",
              textDecoration: "none",
            }}>
              <Download size={13} /> curriculum
            </a>
            <Link href="/contato" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "12px 24px",
              background: "transparent", color: "azure",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "4px",
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.08em", textTransform: "uppercase",
              textDecoration: "none",
            }}>
              falar comigo <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Avatar placeholder */}
        <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
          <div style={{
            width: 320, height: 420,
            background: "linear-gradient(135deg, #1a1a1a 0%, #111 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              height: "60%",
              background: "radial-gradient(ellipse at bottom, rgba(174,0,255,0.08) 0%, transparent 70%)",
            }} />
            <span style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: "6rem",
              color: "#1e1e1e",
            }}>PR</span>
          </div>

          {/* Floating badges */}
          <div style={{
            position: "absolute", top: 20, right: -20,
            background: "#1a1a1a",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "8px",
            padding: "10px 16px",
          }}>
            <div style={{ fontSize: "0.65rem", color: "#6b6b6b" }}>disponível</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 2 }}>
              <div style={{ width: 6, height: 6, background: "#ae00ff", borderRadius: "50%", animation: "blink 1.5s step-end infinite" }} />
              <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.8rem", color: "azure" }}>para projetos</span>
            </div>
          </div>

          <div style={{
            position: "absolute", bottom: 30, left: -20,
            background: "#1a1a1a",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "8px",
            padding: "10px 16px",
          }}>
            <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#ae00ff" }}>3+</div>
            <div style={{ fontSize: "0.62rem", color: "#6b6b6b" }}>sistemas em produção</div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section style={{ padding: "80px 48px", background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
          <div>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800, fontSize: "1.8rem",
              color: "azure", marginBottom: 40, letterSpacing: "-0.03em",
            }}>
              Habilidades técnicas
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {skills.map(s => (
                <div key={s.name}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontSize: "0.8rem", color: "azure" }}>{s.name}</span>
                    <span style={{ fontSize: "0.7rem", color: "#6b6b6b", fontFamily: "'DM Mono', monospace" }}>{s.level}%</span>
                  </div>
                  <div style={{ height: 2, background: "rgba(255,255,255,0.06)", borderRadius: 2 }}>
                    <div style={{
                      height: "100%",
                      width: `${s.level}%`,
                      background: "linear-gradient(90deg, #ae00ff, #ad6ef6)",
                      borderRadius: 2,
                      transition: "width 1s ease",
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800, fontSize: "1.8rem",
              color: "azure", marginBottom: 40, letterSpacing: "-0.03em",
            }}>
              Trajetória
            </h2>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1, background: "rgba(255,255,255,0.06)" }} />
              {timeline.map((t, i) => (
                <div key={i} style={{ paddingLeft: 28, paddingBottom: 36, position: "relative" }}>
                  <div style={{
                    position: "absolute", left: -4, top: 4,
                    width: 8, height: 8,
                    background: i === 0 ? "#ae00ff" : "#2a2a2a",
                    borderRadius: "50%",
                    border: `1px solid ${i === 0 ? "#ae00ff" : "rgba(255,255,255,0.1)"}`,
                  }} />
                  <div style={{ fontSize: "0.65rem", color: "#ae00ff", fontFamily: "'DM Mono', monospace", marginBottom: 4 }}>{t.year}</div>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1rem", color: "azure" }}>{t.role}</div>
                  <div style={{ fontSize: "0.72rem", color: "#6b6b6b", marginTop: 2 }}>{t.place}</div>
                  <div style={{ fontSize: "0.75rem", color: "#555", marginTop: 6, lineHeight: 1.5 }}>{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "80px 48px 120px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800, fontSize: "1.8rem",
            color: "azure", marginBottom: 48, letterSpacing: "-0.03em",
          }}>
            Meus valores
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 1 }}>
            {[
              { icon: "⚡", title: "Funciona de verdade", desc: "Sistemas em produção, usados por pessoas reais — não apenas portfólio" },
              { icon: "🎨", title: "Design matters", desc: "Interface limpa e código sólido não são excludentes" },
              { icon: "🛠", title: "Clean code", desc: "Código legível, manutenível e escalável acima de tudo" },
              { icon: "📈", title: "Sempre aprendendo", desc: "Curiosidade como combustível para crescer a cada projeto" },
            ].map((v, i) => (
              <div key={i} style={{
                padding: "36px 28px",
                border: "1px solid rgba(255,255,255,0.05)",
                transition: "background 0.2s ease",
              }}
                onMouseEnter={e => (e.currentTarget.style.background = "#0d0d0d")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <div style={{ fontSize: "2rem", marginBottom: 16 }}>{v.icon}</div>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1rem", color: "azure", marginBottom: 8 }}>{v.title}</h3>
                <p style={{ fontSize: "0.78rem", color: "#6b6b6b", lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}