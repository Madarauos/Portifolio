"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink} from "lucide-react";

const techStack = ["Next.js", "React", "HTML", "CSS", "JavaScript", "PHP", "Python", "Figma", "MySQL", "PostgreSQL", "TypeScript",];

const projetos = [
  {
    num: "01",
    title: "Sistema de Presença Institucional",
    desc: "Sistema em produção utilizado por instituição real para controle de presença, gerenciamento de participantes e armazenamento de dados em tempo real.",
    tags: ["Next.js", "TypeScript", "Supabase"],
    badge: "Em produção",
    accent: "#ae00ff",
    href: "https://github.com/Madarauos/analia-franco",
  },
  {
    num: "02",
    title: "Plataforma Instituto Infância",
    desc: "Aplicação desenvolvida para instituto social com gerenciamento de usuários, organização de registros e suporte a atividades educacionais.",
    tags: ["Next.js", "TypeScript", "Supabase"],
    badge: "Em produção",
    accent: "#7b6ef6",
    href: "https://github.com/Madarauos/instituto-infancia",
  },
  {
    num: "03",
    title: "Sistema de Gestão de Mocidade",
    desc: "Sistema para organização de grupos e controle de presença, permitindo acompanhamento contínuo de participantes em atividades recorrentes.",
    tags: ["Next.js", "TypeScript", "Supabase"],
    badge: "Em produção",
    accent: "#ff6b35",
    href: "https://github.com/Madarauos/mocidade",
  },
  {
    num: "04",
    title: "Jogo de Damas com Interface Gráfica",
    desc: "Aplicação desktop com interface gráfica desenvolvida em Python, implementando a lógica completa do jogo de damas e interação entre jogadores.",
    tags: ["Python", "PyQt5"],
    badge: "Projeto técnico",
    accent: "#22c55e",
    href: "https://github.com/Madarauos/JOGO_DE_DAMAS",
  },
];

const servicos = [
  {
    title: "Desenvolvimento Full-Stack",
    desc: "Criação de sistemas completos, do frontend ao backend, com foco em performance, escalabilidade e uso real.",
  },
  {
    title: "Sistemas para Instituições",
    desc: "Desenvolvimento de plataformas para gestão de presença, usuários e atividades, utilizadas por organizações reais.",
  },
  {
    title: "APIs & Banco de Dados",
    desc: "Modelagem de dados, integração com APIs e construção de backends eficientes com armazenamento em tempo real.",
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
                dispoinivel para projetosa
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
      
    </div>
  );

}