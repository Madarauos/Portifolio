"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink} from "lucide-react";

const techStack = ["Next.js", "React", "HTML", "CSS", "JavaScript", "PHP", "Python", "Figma", "MySQL", "PostgreSQL", "TypeScript", "Prisma", "TailwindCSS"];

const projetos = [
  {
    num: "01",
    title: "Sistema de Presença Institucional",
    desc: "Sistema em produção utilizado por instituição real para controle de presença, gerenciamento de participantes e armazenamento de dados em tempo real. Possui funcionalidade de scanner de código de barras para efetuar o registro de presença.",
    tags: ["Next.js", "React", "TypeScript", "NeonDB","Prisma", "JavaScript", "TailwindCSS"],
    badge: "Em uso real",
    accent: "#ae00ff",
    image: '/analia-franco/Login_analia.png',
    href: "https://github.com/Madarauos/analia-franco",
  },
  {
    num: "02",
    title: "Plataforma Instituto Infância",
    desc: "Aplicação desenvolvida para instituto social com gerenciamento de usuários, organização de registros e suporte a atividades educacionais. Possui funcionalidade de exportação de relatórios para o Google Drive.",
    tags: ["Next.js", "React", "TypeScript", "Supabase", "JavaScript",],
    badge: "Em uso real",
    accent: "#ad6ef6",
    image: '/infancia/Dashboard.png',
    href: "https://github.com/Madarauos/instituto-infancia",
  },
  {
    num: "03",
    title: "Sistema de Gestão de Mocidade",
    desc: "Sistema para organização de grupos e controle de presença, permitindo acompanhamento contínuo de participantes em atividades recorrentes. Possui funcionalidade de exportação de relatórios para o Google Drive.",
    tags: ["Next.js", "React", "TypeScript", "Supabase", "JavaScript",],
    badge: "Em uso real",
    accent: "#35b5ff",
    image: '/mocidade/Dashboard.png',
    href: "https://github.com/Madarauos/mocidade",
  },
];

const servicos = [
  {
    title: "Desenvolvimento Full-Stack",
    desc: "Desenvolvimento de aplicações web completas com Next.js, React, TypeScript e JavaScript, integrado a bancos de dados PostgreSQL, Supabase ou NeonDB utilizando Prisma como ORM, com implementação completa de operações CRUD.",
  },
  {
    title: "Autenticação e Controle de Usuários",
    desc: "Sistemas de login, cadastro, recuperação de senha e gerenciamento de permissões para diferentes níveis de acesso.",
  },
  {
    title: "APIs e Integrações",
    desc: "Criação e consumo de APIs REST, integração com serviços externos como Google Drive API para exportação de relatórios e automação de processos.",
  },
  {
    title: "Funcionalidades Específicas",
    desc: "Implementação de recursos como scanner de código de barras, leitura de QR code, geração de relatórios e exportação de dados.",
  },
  {
    title: "UI Responsiva e Moderna",
    desc: "Desenvolvimento de interfaces limpas e responsivas com TailwindCSS, garantindo boa experiência em dispositivos móveis e desktop.",
  },
  {
    title: "Metodologias Ágeis",
    desc: "Experiência com metodologia Scrum, trabalhando com sprints, planejamento, daily meetings e entregas contínuas para garantir qualidade e prazos.",
  },
];

export default function Home(){


  return (
    <div style={{ paddingTop: "64px" }}>
      <section className="grid-bg" style={{
        minHeight: "100vh",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 48px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: "absolute", top: '20%', right:'10%',
          width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(221, 0, 255, 0.06) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none',
        }}/>

        <div style={{
          position: 'absolute', bottom: '20%', left:'5%',
          width: 300, height: 300,
          background: 'radial-gradient(circle, rgba(183, 110, 246, 0.08) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none',
        }}/>

        <div style={{ maxWidth: 900, opacity: 0, animation: 'fadeUp 0.8s ease 0.2s forwards'}}>
          <div style={{ display: 'flex', alignItems:'center', gap: 8, marginBottom: 24}}>
            <div style={{ width:8, height: 8, background: '#ae00ff', borderRadius: '50%', animation: 'blink 1s step-end infinite'}}/>
            <span style={{ fontSize: '0.7rem', color: '#6b6b6b', letterSpacing:'0.2em', textTransform: 'uppercase', fontFamily:"DM Mono, monospace"}}>
                dispoinível para projetos
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            color: 'azure',
            marginBottom: 32,
          }}>
            Developer <br />
          </h1>
          <p style={{
            maxWidth: 520,
            fontSize: '1rem',
            lineHeight: 1.7,
            color: '#6b6b6b',
            fontFamily: "'DM Mono', monospace",
            marginBottom: 48,
          }}>
            Olá, sou Paulo. Transformo ideias em sistemas digitais que resolvem problemas reais — do conceito ao código. Trabalho com React, Node.js e desenvolvimento full-stack.
          </p>

          <div style={{display: 'flex', gap: 16, flexWrap: 'wrap'}}>
            <Link href={'/projetos'} style={{
              display: 'inline-flex', alignItems:'center', gap: 8,
              padding: '14px 28px',
              background: '#ae00ff', color: 'azure',
              borderRadius: '4px',
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.8rem', fontWeight: 500,
              letterSpacing: "0.08rem", textTransform: 'uppercase',
              textDecoration:'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {e.currentTarget.style.background = "#ae00ff"; e.currentTarget.style.transform = "translateY(-2px)";}}  
            onMouseLeave={e => {e.currentTarget.style.background = "#ae00ff"; e.currentTarget.style.transform = "translateY(0)";}}  
            
            >
            Ver Projetos <ArrowRight size={14}/>
            </Link>
            <Link href='/contato' style={{
              display:'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 28px',
              background: 'transparent', color:'azure',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '4px',
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.8rem',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.2s ease', 
            }}
            onMouseEnter={e => {e.currentTarget.style.borderColor = '#ae00ff'; e.currentTarget.style.color = '#e2a4f4'; }}
            onMouseLeave={e => {e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'azure'; }}
            >
              Falar comigo
            </Link>
          </div>
        </div>
      </section>

      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "16px 0",
        overflow: "hidden",
        background: "#111",}}>
        <div className="animate-marquee" style={{
          display:'flex', gap:48, width: 'max-content'
        }}>
          {[...techStack, ...techStack].map((t,i) => (
            <span key={i} style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: '0.85rem',
              color: i % 2 === 0 ? 'azure' : '#ae00ff',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              display: 'flex', alignItems: 'center', gap: 40,
            }}>
              {t}<span style={{color: '#2a2a2a'}}>●</span>
            </span>
          ))}
        </div>
      </div>

      <section style={{padding: '120px 48px'}}>
        <div style={{ maxWidth: 1100, margin: '0 auto'}}>
          <div style={{ display:'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 16}}>
            <div>
              <span style={{fontSize: '0.65rem', color: '#6b6b6b', textTransform: 'uppercase', letterSpacing: '0.2em' }}>-projetos selecionados</span>
              <h2 style={{fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color:"azure", marginTop: 8, letterSpacing:'-0.03em'}}>
                Trabalhos em Destaque
              </h2>
            </div>
            <Link href='/projetos' style={{color:'#ae00ff', textDecoration:'none', fontSize:'0.75rem', letterSpacing:'0.1em', display:'flex', alignItems:'center', gap: 6}} >
              ver todos <ArrowRight size={12}/>
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {projetos.map((p) => (
              <Link key={p.num} href={p.href} style={{textDecoration: 'none'}}>
              <div className="card-hover" style={{
                background: '#111',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '8px',
                padding: '32px',
                height: '100%',
                cursor: 'pointer',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column', 
              }}>
               
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: '#333' }}>{p.num}</span>
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
                  ) : (
                    <span style={{
                      fontSize: '0.6rem', color: '#6a00ff',
                      border: '1px solid #6a00ff6c', padding: '3px 10px',
                      borderRadius: '999px', fontFamily: "'DM Mono', monospace"
                    }}>{p.badge}</span>
                  )}
                  <ExternalLink size={14} color="#333" />
                </div>

                {p.image && (
                  <div style={{
                    width: '100%',
                    height: 140,
                    borderRadius: '6px',
                    overflow: 'hidden',
                    marginBottom: 0,
                    position: 'relative',
                  }}>
                    <Image src={p.image} alt={p.title} fill style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      display: 'block',
                      maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',}} />
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

                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: 'azure', margin: 0 }}>{p.title}</h3>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.78rem', color: '#6b6b6b', marginTop: 8, lineHeight: 1.6 }}>{p.desc}</p>
                <div style={{
                  display:'flex',
                  flexWrap: 'wrap',
                  gap: 9,
                  marginTop: 'auto',
                  paddingTop: 16,
                }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{
                      padding: '3px 10px',
                      border: '1px solid #585858',
                      borderRadius: '100px',
                      fontSize: '0.65rem',
                      color: '#585858',
                      fontFamily: "'DM Mono', monospace",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
            ))}
            </div>
        </div>
      </section>

      <section style={{padding:'80px 48px 120px', background:"#0d0d0d"}}>
            <div style={{maxWidth: 1100, margin: '0 auto'}}>
              <span style={{fontSize:'0.65rem', color:'#6b6b6b', textTransform:"uppercase", letterSpacing:"0.2em"}}>-serviços</span>
              <h2 style={{fontFamily:"'Poppins', sans-serif", fontWeight: 800, fontSize:"clamp(2rem, 5vw, 3rem)", color: "azure", marginTop:8, letterSpacing:"-0.03em", marginBottom:56,}}>
                O que eu faço
              </h2>
              <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:1}}>
                  {servicos.map((s,i) => (
                    <div key={i} style={{
                      padding:'40px 32px',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                      borderRight: '1px solid rgba(255, 255, 255, 0.05)',
                      transition: 'background 0.2s ease',
                    }}
                    onMouseEnter={e => {e.currentTarget.style.background = '#141414'}}
                    onMouseLeave={e => {e.currentTarget.style.background = 'transparent'}}
                    >
                      {String(i + 1 ).padStart(2, "0")}
                      <h3 style={{fontFamily:"'Poppins', sans-serif", fontWeight: 700, fontSize:"1.1rem", color:"azure", marginBottom: 10}}>{s.title}</h3>
                      <p style={{fontSize:"0.78rem", color:"#6b6b6b", lineHeight: 1.6}}>{s.desc}</p>
                    </div>
                  ))}
              </div>
            </div>
      </section>

      <section style={{
        padding: '120px 48px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: "50%", left:'50%',
          transform: 'translate(-50%, -50%)',
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(170, 0, 255, 0.04) 0%, transparent 70%)',
          borderRadius:"50%", pointerEvents:'none',
        }} />
          <span style={{fontSize:"0.65rem", color:'#6b6b6b', textTransform:'uppercase', letterSpacing: '0.2em'}}>- Vamos trabalhar juntos</span>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight:800,
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            color: 'azure',
            margin: '16px 0 32px',
            letterSpacing: '-0.04em',
            lineHeight: 1,
          }}>Tem um projeto<br />
          <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle:'italic', color:'#ae00ff'}}>em mente?</span>
          </h2>
          <p style={{color: '#6b6b6b', marginBottom: 40, maxWidth: 400, margin: '0 auto 40px', fontSize: '0.9rem', lineHeight: 1.6}}>
            Estou aberto para freelance, colaborações e oportunidades full-time.
          </p>

          <Link href='/contato' style={{
            display: 'inline-flex',
            alignItems: 'center', gap: 8,
            padding: '16px 36px',
            background: "#ae00ff", color: "#000",
            borderRadius: '4px', 
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.8rem', fontWeight: 500,
            letterSpacing: "0.1em", textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          }}
          
          onMouseEnter={e => {e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 40px rgba(127, 11, 216, 0.3)'; }}
          onMouseLeave={e => {e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >Entrar em contato <ArrowRight size={14}/>
          </Link>
      </section>
    </div>
    
  );

}