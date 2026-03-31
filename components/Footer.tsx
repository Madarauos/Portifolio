"use client";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { InfoJobsIcon } from "./InfoJobsIcon";

export default function Footer(){

    const year = new Date().getFullYear();
    return (
        <footer style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            padding: '40px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '24px',
            background: '#0a0a0a'
        }}>
            <div>
                <span style={{ fontFamily: "'Syne', Sans-serif", fontWeight: 800, fontSize: "1rem", color:'azure'}}>
                    PR<span style={{color:'#ae00ff'}}>.</span>
                </span>
                <p style={{fontSize: '0.7rem', color:'#6b6b6b', marginTop:'6px'}}>
                    © {year} Paulo Rojas. Feito com as mãos e com bastante café.
                </p>
            </div>

            <div style={{display: 'flex', gap: '20px'}}>
                {[
                    { icon: Github, href:"https://github.com/PauloRojas18", label: 'Github'},
                    { icon: Linkedin, href:"https://www.linkedin.com/in/paulo-rojas-b7b77a3a1/", label: 'Linkedin'},
                    { icon: InfoJobsIcon, href:"https://www.infojobs.com.br/candidate/cv/detail2.aspx", label: 'Infojobs'},
                    { icon: Mail, href:"mailto:paulootaviogalala@gmail.com?subject=Contato via Portfólio", label: 'Email'},
                ].map(({icon: Icon, href, label}) => (
                    <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                    style={{color:'#6b6b6b', transition: 'color 0.2s ease'}}
                    onMouseEnter={e => (e.currentTarget.style.color = "#ae00ff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#6b6b6b")}
                    ><Icon size={18} /></a>
                ))}
            </div>
            <nav style={{display:'flex', gap: '24px'}}>
                {["/", "/projetos", "/sobre", "/contato"].map((href, i) => {
                    const labels = ["início", "projetos", "sobre", "contato"];
                    return (
                        <Link key={href} href={href} className="nav-link" style={{fontSize: '0.65rem'}}>
                            {labels[i]}
                        </Link>
                    );
                })}
            </nav>
        </footer>  
    );
}
