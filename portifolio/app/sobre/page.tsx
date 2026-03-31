"use client";
import { Download, ArrowRight, Github, Linkedin, MapPin, Briefcase, Clock } from "lucide-react";
import Link from "next/link";

const skills = [
  { name: "React / Next.js",          level: 90 },
  { name: "TypeScript / JavaScript",  level: 88 },
  { name: "TailwindCSS / CSS",        level: 85 },
  { name: "PHP / MySQL",              level: 82 },
  { name: "PostgreSQL / Supabase",    level: 80 },
  { name: "Python",                   level: 78 },
];

const timeline = [
  {
    year: "2026",
    role: "Sistema de Presença Institucional",
    place: "Projeto real · Em produção",
    desc: "Sistema com scanner de código de barras para controle de presença, utilizado por instituição real.",
    highlight: true,
  },
  {
    year: "2026",
    role: "Plataforma Instituto Infância",
    place: "Projeto real · Em produção",
    desc: "Aplicação social com gerenciamento de usuários e exportação de relatórios para o Google Drive.",
    highlight: false,
  },
  {
    year: "2025",
    role: "Sistema de Gerenciamento de Vendas",
    place: "Projeto real · Em produção",
    desc: "Sistema completo com controle de pedidos, comissão de vendedores, gestão de clientes e relatórios.",
    highlight: false,
  },
  {
    year: "2026–atual",
    role: "Bacharelado em Tecnologia da Informação",
    place: "UFMS — Universidade Federal de Mato Grosso do Sul",
    desc: "Graduação em andamento com foco em sistemas, algoritmos e fundamentos de engenharia de software.",
    highlight: false,
  },
  {
    year: "2024–2026",
    role: "Técnico em Desenvolvimento de Sistemas",
    place: "SENAC-MS",
    desc: "Formação técnica com projetos em PHP MVC, Python e metodologia Scrum.",
    highlight: false,
  },
];

const diferenciais = [
  { icon: "⚡", title: "Sistemas em produção", desc: "3+ aplicações usadas por organizações reais — não apenas portfólio de estudo." },
  { icon: "🎯", title: "Entrega completa", desc: "Do banco de dados à interface, solo ou em equipe, com foco em valor ao negócio." },
  { icon: "🛠", title: "Clean code", desc: "Código legível, manutenível e escalável com boas práticas desde a formação." },
  { icon: "📈", title: "Aprendizado contínuo", desc: "Graduação em T.I na UFMS em paralelo a projetos reais — base sólida e prática." },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "64px", minHeight: "100vh" }}>

      <section style={{
        padding: "80px 48px",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 80, maxWidth: 1100, margin: "0 auto", alignItems: "start",
      }}>
        <div>
          <span style={{ fontSize: "0.65rem", color: "#6b6b6b", textTransform: "uppercase", letterSpacing: "0.2em" }}>— sobre mim</span>
          <h1 style={{
            fontFamily: "'Poppins', sans-serif", fontWeight: 800,
            fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "azure",
            marginTop: 8, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 32,
          }}>
            Um dev que<br />
            <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: "#ae00ff" }}>resolve problemas reais</span>
          </h1>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              "Sou Paulo, desenvolvedor full-stack baseado em Campo Grande — MS. Construo sistemas web usados em produção por organizações reais, do banco de dados à interface.",
              "Stack principal: Next.js, React, TypeScript e PostgreSQL. Tenho também base sólida em PHP e Python. Graduando em T.I na UFMS, com formação técnica pelo SENAC-MS.",
              "Trabalho bem solo ou em equipe, com metodologia Scrum e foco em entrega de valor. Disponível para CLT, freelance e remoto.",
            ].map((text, i) => (
              <p key={i} style={{ fontSize: "0.88rem", color: "#6b6b6b", lineHeight: 1.75, margin: 0 }}>{text}</p>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 28, marginBottom: 32 }}>
            {[
              { icon: MapPin,    text: "Campo Grande, MS — aberto a remoto" },
              { icon: Briefcase, text: "CLT · Freelance · Remoto/Híbrido"   },
              { icon: Clock,     text: "Disponível no turno tarde"           },
            ].map(({ icon: Icon, text }) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Icon size={13} color="#ae00ff" />
                <span style={{ fontSize: "0.78rem", color: "#555", fontFamily: "'DM Mono', monospace" }}>{text}</span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="/resume.pdf" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "12px 24px", background: "#ae00ff", color: "azure",
              borderRadius: "4px", fontFamily: "'DM Mono', monospace",
              fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.08em",
              textTransform: "uppercase", textDecoration: "none",
            }}>
              <Download size={13} /> Currículo PDF
            </a>
            <Link href="/contato" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "12px 24px", background: "transparent", color: "azure",
              border: "1px solid rgba(255,255,255,0.1)", borderRadius: "4px",
              fontFamily: "'DM Mono', monospace", fontSize: "0.75rem",
              letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none",
            }}>
              falar comigo <ArrowRight size={13} />
            </Link>
          </div>

          <div style={{ display: "flex", gap: 16, marginTop: 24 }}>
            <a href="https://github.com/Madarauos" target="_blank" rel="noopener noreferrer" style={{
              display: "flex", alignItems: "center", gap: 6,
              color: "#444", fontSize: "0.75rem", textDecoration: "none",
              fontFamily: "'DM Mono', monospace", transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#ae00ff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#444")}
            >
              <Github size={14} /> GitHub
            </a>
            <a href="#" style={{
              display: "flex", alignItems: "center", gap: 6,
              color: "#444", fontSize: "0.75rem", textDecoration: "none",
              fontFamily: "'DM Mono', monospace", transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#ae00ff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#444")}
            >
              <Linkedin size={14} /> LinkedIn
            </a>
          </div>
        </div>

        <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
          <div style={{
            width: 320, height: 440,
            background: "linear-gradient(135deg, #1a1a1a 0%, #111 100%)",
            border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px",
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60%", background: "radial-gradient(ellipse at bottom, rgba(174,0,255,0.08) 0%, transparent 70%)" }} />
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "6rem", color: "#1e1e1e" }}>PR</span>
          </div>

          <div style={{ position: "absolute", top: 20, right: -20, background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "10px 16px" }}>
            <div style={{ fontSize: "0.62rem", color: "#6b6b6b" }}>disponível</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 2 }}>
              <div style={{ width: 6, height: 6, background: "#ae00ff", borderRadius: "50%", animation: "blink 1.5s step-end infinite" }} />
              <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.8rem", color: "azure" }}>para projetos</span>
            </div>
          </div>

          <div style={{ position: "absolute", bottom: 30, left: -20, background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "10px 16px" }}>
            <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#ae00ff" }}>3+</div>
            <div style={{ fontSize: "0.62rem", color: "#6b6b6b" }}>sistemas em produção</div>
          </div>
        </div>
      </section>

      <section style={{ padding: "16px 48px 0", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {[
            { label: "Graduação", value: "T.I — UFMS (em andamento)" },
            { label: "Técnico",   value: "Desenvolvimento de Sistemas — SENAC-MS (2024–2026)" },
            { label: "Idiomas",   value: "Português nativo · Inglês (leitura técnica)" },
          ].map(({ label, value }) => (
            <div key={label} style={{
              padding: "12px 20px", background: "#111",
              border: "1px solid rgba(255,255,255,0.05)", borderRadius: "6px",
              display: "flex", gap: 10, alignItems: "center",
            }}>
              <span style={{ fontSize: "0.6rem", color: "#ae00ff", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "'DM Mono', monospace" }}>{label}</span>
              <span style={{ fontSize: "0.75rem", color: "#888", fontFamily: "'DM Mono', monospace" }}>{value}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "80px 48px", background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.04)", marginTop: 48 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>

          <div>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "1.8rem", color: "azure", marginBottom: 40, letterSpacing: "-0.03em" }}>
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
                    <div style={{ height: "100%", width: `${s.level}%`, background: "linear-gradient(90deg, #ae00ff, #ad6ef6)", borderRadius: 2, transition: "width 1s ease" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "1.8rem", color: "azure", marginBottom: 40, letterSpacing: "-0.03em" }}>
              Trajetória
            </h2>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1, background: "rgba(255,255,255,0.06)" }} />
              {timeline.map((t, i) => (
                <div key={i} style={{ paddingLeft: 28, paddingBottom: 32, position: "relative" }}>
                  <div style={{
                    position: "absolute", left: -4, top: 4,
                    width: 8, height: 8,
                    background: t.highlight ? "#ae00ff" : "#2a2a2a",
                    borderRadius: "50%",
                    border: `1px solid ${t.highlight ? "#ae00ff" : "rgba(255,255,255,0.1)"}`,
                  }} />
                  <div style={{ fontSize: "0.63rem", color: "#ae00ff", fontFamily: "'DM Mono', monospace", marginBottom: 4 }}>{t.year}</div>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "azure" }}>{t.role}</div>
                  <div style={{ fontSize: "0.7rem", color: "#555", marginTop: 2 }}>{t.place}</div>
                  <div style={{ fontSize: "0.73rem", color: "#444", marginTop: 5, lineHeight: 1.5 }}>{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 48px 120px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "1.8rem", color: "azure", marginBottom: 48, letterSpacing: "-0.03em" }}>
            Por que me contratar
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 1 }}>
            {diferenciais.map((v, i) => (
              <div key={i} style={{ padding: "36px 28px", border: "1px solid rgba(255,255,255,0.05)", transition: "background 0.2s ease" }}
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