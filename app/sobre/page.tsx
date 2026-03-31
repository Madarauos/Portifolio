"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Briefcase, GraduationCap, Code2, Users } from "lucide-react";

const skills = [
  { category: "Front-end", items: ["React", "Next.js", "TypeScript", "TailwindCSS", "HTML/CSS"] },
  { category: "Back-end", items: ["Node.js", "PHP", "Python", "REST APIs", "Prisma"] },
  { category: "Banco de Dados", items: ["PostgreSQL", "MySQL", "Supabase", "NeonDB"] },
  { category: "Ferramentas", items: ["Git", "GitHub", "VS Code", "Figma", "Vercel"] },
];

const timeline = [
  {
    year: "2026",
    title: "Sistemas em Produção",
    description: "3+ aplicações web sendo usadas por organizações reais em Campo Grande, MS.",
    type: "work",
  },
  {
    year: "2026",
    title: "Início em TI — UFMS - (Graduando)",
    description: "Curso superior em Tecnologia da Informação na Universidade Federal de MS.",
    type: "education",
  },
  {
    year: "2025-2026",
    title: "Agro Plants Now — Projeto Acadêmico",
    description: "Desenvolvimento de sistema de gestão de vendas para agroindústria, utilizando arquitetura MVC. Atuação em equipe com Scrum, focando em módulos de pedidos e relatórios, incluindo controle de comissões, cupons e relatórios administrativos.",
    type: "education",
  },
  {
    year: "2024–2026",
    title: "Técnico em Desenvolvimento de Sistemas",
    description: "SENAC-MS — Desenvolvimento web, banco de dados e metodologias ágeis.",
    type: "education",
  },
];

export default function SobrePage() {
  return (
    <div style={{ paddingTop: "64px", minHeight: "100vh" }}>

      {/* ── HERO COM FOTO ───────────────────────────────────────────────── */}
      <section className="grid-bg" style={{ padding: "clamp(60px, 10vw, 80px) clamp(20px,5vw,48px) clamp(48px, 8vw, 64px)", borderBottom: "1px solid rgba(174,0,255,0.3)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="about-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 6vw, 80px)", alignItems: "center" }}>
            {/* Texto */}
            <div>
              <span style={{ fontSize: "0.65rem", color: "#6b6b6b", textTransform: "uppercase", letterSpacing: "0.2em" }}>— sobre</span>
              <h1 style={{
                fontFamily: "'Poppins', sans-serif", fontWeight: 800,
                fontSize: "clamp(2rem, 6vw, 4rem)", color: "azure",
                marginTop: 8, letterSpacing: "-0.04em", lineHeight: 0.95,
              }}>
                Quem sou <br />
                <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: "#ae00ff" }}>eu?</span>
              </h1>
              <p style={{ marginTop: 20, fontSize: "clamp(0.8rem, 2vw, 0.95rem)", color: "#6b6b6b", maxWidth: 600, lineHeight: 1.7 }}>
                Desenvolvedor full-stack focado em criar sistemas web que resolvem problemas reais. 
                Atualmente com 3+ aplicações em produção, sendo usadas por organizações em Campo Grande, MS.
              </p>
            </div>
            
            {/* Foto */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ 
                position: "relative",
                width: "clamp(200px, 80%, 320px)",
                aspectRatio: "3/4",
              }}>
                {/* Borda decorativa */}
                <div style={{
                  position: "absolute",
                  inset: -8,
                  border: "2px solid #ae00ff",
                  borderRadius: "8px",
                  transform: "rotate(3deg)",
                  opacity: 0.5,
                }} />
                <div style={{
                  position: "absolute",
                  inset: -4,
                  border: "1px solid rgba(174,0,255,0.3)",
                  borderRadius: "8px",
                  transform: "rotate(-2deg)",
                }} />
                {/* Imagem */}
                <div style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "8px",
                  overflow: "hidden",
                  background: "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}>
                  <Image
                    src="/Paulo.png"
                    alt="Minha foto"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                  {/* Overlay gradient */}
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)",
                  }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DISPONIBILIDADE ────────────────────────────────────── */}
      <section style={{ padding: "clamp(48px, 8vw, 64px) clamp(20px,5vw,48px)", background: "#0d0d0d", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="quick-resume-grid" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "clamp(32px, 6vw, 64px)", alignItems: "center" }}>
            <div>
              <span style={{ fontSize: "0.65rem", color: "#ae00ff", textTransform: "uppercase", letterSpacing: "0.2em" }}>— disponibilidade</span>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(1.3rem, 3vw, 1.6rem)", color: "azure", marginTop: 8, letterSpacing: "-0.03em", lineHeight: 1.2 }}>
                Pronto para trabalhar
              </h2>
            </div>
            <div className="quick-resume-cards" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
              {[
                { icon: Briefcase, label: "Modalidade", value: "CLT · Freelance · Remoto/Híbrido" },
                { icon: Clock, label: "Turno", value: "Tarde (flexível)" },
                { icon: MapPin, label: "Localização", value: "Campo Grande, MS — aberto a remoto" },
                { icon: GraduationCap, label: "Formação", value: "T.I — UFMS (Graduando)" },
                { icon: GraduationCap, label: "Formação", value: "Técnico SENAC-MS" },
              ].map(({ icon: Icon, label, value }, i) => (
                <div key={i} style={{ padding: "16px 20px", background: "#111", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "6px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 32, height: 32, background: "rgba(174,0,255,0.1)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={14} color="#ae00ff" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.6rem", color: "#ae00ff", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 4 }}>{label}</div>
                    <div style={{ fontSize: "clamp(0.7rem, 1.5vw, 0.78rem)", color: "#ccc", fontFamily: "'DM Mono', monospace", lineHeight: 1.5 }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS & TIMELINE ─────────────────────────────────── */}
      <section style={{ padding: "clamp(60px, 10vw, 80px) clamp(20px,5vw,48px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="two-col-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 6vw, 80px)" }}>
            
            {/* Skills */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
                <Code2 size={20} color="#ae00ff" />
                <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(1.2rem, 3vw, 1.4rem)", color: "azure" }}>
                  Tecnologias
                </h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {skills.map((group) => (
                  <div key={group.category}>
                    <div style={{ fontSize: "0.6rem", color: "#ae00ff", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12, fontFamily: "'DM Mono', monospace" }}>
                      {group.category}
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {group.items.map((item) => (
                        <span key={item} style={{
                          padding: "6px 14px",
                          background: "#111",
                          border: "1px solid rgba(255,255,255,0.08)",
                          borderRadius: "100px",
                          fontSize: "clamp(0.65rem, 1.5vw, 0.72rem)",
                          color: "#aaa",
                          fontFamily: "'DM Mono', monospace",
                        }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
                <Users size={20} color="#ae00ff" />
                <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(1.2rem, 3vw, 1.4rem)", color: "azure" }}>
                  Trajetória
                </h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {timeline.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 16, position: "relative" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{
                        width: 12, height: 12,
                        background: item.type === "work" ? "#ae00ff" : "#333",
                        borderRadius: "50%",
                        border: item.type === "work" ? "none" : "2px solid #ae00ff",
                      }} />
                      {i < timeline.length - 1 && (
                        <div style={{ width: 2, flex: 1, background: "rgba(174,0,255,0.2)", marginTop: 8 }} />
                      )}
                    </div>
                    <div style={{ paddingBottom: 24 }}>
                      <div style={{ fontSize: "0.6rem", color: "#ae00ff", fontFamily: "'DM Mono', monospace", marginBottom: 6 }}>{item.year}</div>
                      <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1rem", color: "azure", marginBottom: 6 }}>{item.title}</h3>
                      <p style={{ fontSize: "clamp(0.72rem, 1.5vw, 0.78rem)", color: "#6b6b6b", lineHeight: 1.6 }}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="grid-bg" style={{ padding: "clamp(60px, 10vw, 100px) clamp(20px,5vw,48px)", textAlign: "center", borderTop: "1px solid rgba(174,0,255,0.2)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <span style={{ fontSize: "0.65rem", color: "#ae00ff", textTransform: "uppercase", letterSpacing: "0.2em" }}>— próximo passo</span>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 5vw, 3rem)", color: "azure", marginTop: 12, letterSpacing: "-0.03em", marginBottom: 20 }}>
            Vamos conversar?
          </h2>
          <p style={{ fontSize: "clamp(0.8rem, 2vw, 0.95rem)", color: "#6b6b6b", lineHeight: 1.7, marginBottom: 36 }}>
            Estou disponível para vagas CLT, projetos freelance ou colaborações técnicas. Respondo em até 24 horas.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contato" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "16px 32px", background: "#ae00ff", color: "azure",
              borderRadius: "4px", fontFamily: "'DM Mono', monospace",
              fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.08em",
              textTransform: "uppercase", textDecoration: "none", transition: "all 0.2s ease",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 40px rgba(174,0,255,0.4)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              Entrar em contato <ArrowRight size={14} />
            </Link>
            <Link href="/projetos" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "16px 32px", background: "transparent", color: "azure",
              border: "1px solid rgba(255,255,255,0.1)", borderRadius: "4px",
              fontFamily: "'DM Mono', monospace", fontSize: "0.8rem",
              letterSpacing: "0.08em", textTransform: "uppercase",
              textDecoration: "none", transition: "all 0.2s ease",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#ae00ff"; e.currentTarget.style.color = "#e2a4f4"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "azure"; }}
            >
              Ver projetos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
