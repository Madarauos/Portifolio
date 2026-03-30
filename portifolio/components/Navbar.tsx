'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", label: "Início" },
    { href: "/projetos", label: "Projetos" },
    { href: "/sobre", label: "Sobre" },
    { href: "/contato", label:"contate-me"},

]

export default function Navbar() {

    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () =>  window.removeEventListener("scroll", onScroll);

    }, []);

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: '0 32px',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: 'all 0.3s ease',
            background: scrolled ? 'rgba(10, 10, 10, 0.9)' : "transparent",
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
        }}>
            <Link href="/" style={{ textDecoration: 'none'}}>
                <span style={{
                    fontFamily: "'Syne', San-serif",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    color:"azure",
                    letterSpacing: "-0.02em",
                }}>PR<span style={{color: '#ae00ff'}}></span>.</span>
            </Link>

            <nav style={{ display:'flex', gap:'32px', alignItems:'center'}}>
                {links.map((l) => (
                    <Link
                     key={l.href}
                     href={l.href}
                     className={`nav-link ${pathname === l.href ? 'active' : ""}`}
                     style={{ color: pathname === l.href ? "#ae00ff" : undefined}}>
                        {l.label}
                     </Link>
                ))}
            </nav>
            <a href="/contato" style={{
                padding: '8px 20px',
                background: "#ae00ff",
                color: 'azure',
                borderRadius: '4px',
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: "color",
                transition: 'all 0.2s ease'}}
                onMouseEnter={e => (e.currentTarget.style.background = '#ac4bd9')}
                onMouseLeave={e => (e.currentTarget.style.background = '#ae00ff')}
            >Contate-me</a>
        </header>
    );

}