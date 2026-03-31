"use client";
import { useState } from "react";
import { Send, Mail, MapPin, Clock, Github, Linkedin, Briefcase, Download } from "lucide-react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_w34pq3s";
const EMAILJS_TEMPLATE_ID = "template_16kttp8";
const EMAILJS_PUBLIC_KEY = "oH_VFPhNaQd_nBbBk";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: form.name, from_email: form.email,
        message: form.message, to_email: "paulootaviogalala@gmail.com",
      }, EMAILJS_PUBLIC_KEY);
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", background: "#111",
    border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px",
    padding: "14px 16px", color: "azure",
    fontFamily: "'DM Mono', monospace", fontSize: "clamp(0.8rem, 2vw, 0.85rem)",
    outline: "none", transition: "border-color 0.2s ease",
    boxSizing: "border-box",
  };

  return (
    <div style={{ paddingTop: "64px", minHeight: "100vh" }}>

      {/* ── HEADER ───────────────────────────────────────────────── */}
      <section className="grid-bg" style={{ padding: "clamp(60px, 10vw, 80px) clamp(20px,5vw,48px) clamp(48px, 8vw, 64px)", borderBottom: "1px solid rgba(174,0,255,0.3)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontSize: "0.65rem", color: "#6b6b6b", textTransform: "uppercase", letterSpacing: "0.2em" }}>— contato</span>
          <h1 style={{
            fontFamily: "'Poppins', sans-serif", fontWeight: 800,
            fontSize: "clamp(2rem, 6vw, 5rem)", color: "azure",
            marginTop: 8, letterSpacing: "-0.04em", lineHeight: 0.95,
          }}>
            Vamos criar algo<br />
            <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: "#ae00ff" }}>incrível juntos</span>
          </h1>
          <p style={{ marginTop: 20, fontSize: "clamp(0.8rem, 2vw, 0.9rem)", color: "#6b6b6b", maxWidth: 480, lineHeight: 1.7 }}>
            Desenvolvedor full-stack disponível para CLT, freelance e colaborações. Respondo em até 24h.
          </p>
        </div>
      </section>

      {/* ── CONTEÚDO ─────────────────────────────────────────────── */}
      <section style={{ padding: "clamp(48px, 8vw, 64px) clamp(20px,5vw,48px) 100px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "clamp(40px, 6vw, 64px)", alignItems: "start" }}>

            {/* ── Coluna esquerda ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>

              {/* Disponibilidade */}
              <div style={{ padding: "20px", background: "#111", border: "1px solid rgba(174,0,255,0.2)", borderRadius: "8px" }}>
                <div style={{ fontSize: "0.6rem", color: "#ae00ff", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12, fontFamily: "'DM Mono', monospace" }}>disponibilidade</div>
                {[
                  { icon: Briefcase, text: "CLT · Freelance · Remoto/Híbrido" },
                  { icon: Clock, text: "Turno tarde" },
                  { icon: MapPin, text: "Campo Grande, MS — aberto a remoto" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <Icon size={13} color="#ae00ff" />
                    <span style={{ fontSize: "clamp(0.7rem, 1.8vw, 0.78rem)", color: "#aaa", fontFamily: "'DM Mono', monospace" }}>{text}</span>
                  </div>
                ))}
              </div>

              {/* Contatos */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { icon: Mail, label: "e-mail", value: "paulootaviogalala@gmail.com" },
                  { icon: Clock, label: "respondo em", value: "até 24 horas" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{ width: 40, height: 40, background: "rgba(174,0,255,0.08)", border: "1px solid rgba(174,0,255,0.2)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={16} color="#ae00ff" />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.6rem", color: "#6b6b6b", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 2 }}>{label}</div>
                      <div style={{ fontSize: "clamp(0.75rem, 1.8vw, 0.82rem)", color: "azure", wordBreak: "break-all" }}>{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Redes + CV */}
              <div>
                <p style={{ fontSize: "0.62rem", color: "#6b6b6b", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>redes sociais</p>
                <div style={{ display: "flex", gap: 10, marginBottom: 18 }}>
                  {[
                    { icon: Github, href: "https://github.com/PauloRojas18", label: "GitHub" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/paulo-rojas-b7b77a3a1/", label: "LinkedIn" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
                      width: 42, height: 42, background: "#111",
                      border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#6b6b6b", transition: "all 0.2s ease", textDecoration: "none",
                    }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "#ae00ff"; e.currentTarget.style.color = "#ae00ff"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#6b6b6b"; }}
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
                <a href="/resume.pdf" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "10px 20px", background: "transparent", color: "azure",
                  border: "1px solid rgba(174,0,255,0.35)", borderRadius: "4px",
                  fontFamily: "'DM Mono', monospace", fontSize: "0.72rem",
                  letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#ae00ff"; e.currentTarget.style.color = "#e2a4f4"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(174,0,255,0.35)"; e.currentTarget.style.color = "azure"; }}
                >
                  <Download size={13} /> Baixar Currículo PDF
                </a>
              </div>
            </div>

            {/* ── Formulário ── */}
            <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "clamp(24px,5vw,48px)" }}>
              {status === "sent" ? (
                <div style={{ textAlign: "center", padding: "60px 0" }}>
                  <div style={{ fontSize: "3rem", marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#ae00ff", marginBottom: 8 }}>Mensagem enviada!</h3>
                  <p style={{ color: "#6b6b6b", fontSize: "0.85rem" }}>Responderei em breve. Obrigado pelo contato!</p>
                </div>
              ) : status === "error" ? (
                <div style={{ textAlign: "center", padding: "60px 0" }}>
                  <div style={{ fontSize: "3rem", marginBottom: 16 }}>❌</div>
                  <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#ff4444", marginBottom: 8 }}>Erro ao enviar</h3>
                  <p style={{ color: "#6b6b6b", fontSize: "0.85rem" }}>Tente novamente ou entre em contato pelo e-mail diretamente.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div>
                    <div style={{ fontSize: "0.65rem", color: "#ae00ff", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12, fontFamily: "'DM Mono', monospace" }}>
                      Envie uma mensagem
                    </div>
                    <p style={{ fontSize: "clamp(0.75rem, 1.8vw, 0.8rem)", color: "#555", marginBottom: 20, lineHeight: 1.6 }}>
                      Seja para uma vaga CLT, projeto freelance ou colaboração — pode mandar.
                    </p>
                  </div>

                  {/* Nome + Email */}
                  <div className="form-name-email" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={{ fontSize: "0.62rem", color: "#6b6b6b", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>nome *</label>
                      <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Seu nome" style={inputStyle}
                        onFocus={e => (e.currentTarget.style.borderColor = "rgba(174,0,255,0.4)")}
                        onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")} />
                    </div>
                    <div>
                      <label style={{ fontSize: "0.62rem", color: "#6b6b6b", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>e-mail *</label>
                      <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="seu@email.com" style={inputStyle}
                        onFocus={e => (e.currentTarget.style.borderColor = "rgba(174,0,255,0.4)")}
                        onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")} />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: "0.62rem", color: "#6b6b6b", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>mensagem *</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Vaga, projeto, colaboração — pode falar sobre o que for..."
                      style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
                      onFocus={e => (e.currentTarget.style.borderColor = "rgba(174,0,255,0.4)")}
                      onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")} />
                  </div>

                  <button type="submit" disabled={status === "sending"} style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    padding: "16px", background: status === "sending" ? "#6b00aa" : "#ae00ff",
                    color: "azure", border: "none", borderRadius: "6px",
                    fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", fontWeight: 500,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    transition: "all 0.2s ease", opacity: status === "sending" ? 0.7 : 1,
                    width: "100%",
                  }}
                    onMouseEnter={e => { if (status !== "sending") { e.currentTarget.style.boxShadow = "0 10px 40px rgba(174,0,255,0.3)"; e.currentTarget.style.transform = "translateY(-2px)"; } }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    <Send size={14} />
                    {status === "sending" ? "enviando..." : "enviar mensagem"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
