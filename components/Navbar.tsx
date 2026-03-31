'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Início" },
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fechar menu ao mudar de página
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 clamp(16px, 4vw, 32px)',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease',
        background: scrolled || mobileMenuOpen ? 'rgba(10, 10, 10, 0.95)' : "transparent",
        backdropFilter: scrolled || mobileMenuOpen ? 'blur(20px)' : 'none',
        borderBottom: scrolled || mobileMenuOpen ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', zIndex: 1001 }}>
          <span style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "1.1rem",
            color: "azure",
            letterSpacing: "-0.02em",
          }}>PR<span style={{ color: '#ae00ff' }}>.</span></span>
        </Link>

        {/* Desktop nav */}
        <nav className="nav-desktop" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link ${pathname === l.href ? 'active' : ""}`}
              style={{ color: pathname === l.href ? "#ae00ff" : undefined }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link 
          href="/contato" 
          className="nav-cta"
          style={{
            padding: '8px 20px',
            background: "#ae00ff",
            color: 'azure',
            borderRadius: '4px',
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            textDecoration: "none",
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#9500d9')}
          onMouseLeave={e => (e.currentTarget.style.background = '#ae00ff')}
        >
          Contate-me
        </Link>

        {/* Mobile hamburger */}
        <button
          className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            cursor: 'pointer',
            padding: '8px',
            background: 'none',
            border: 'none',
            zIndex: 1001,
          }}
        >
          {mobileMenuOpen ? (
            <X size={24} color="#ae00ff" />
          ) : (
            <Menu size={24} color="#6b6b6b" />
          )}
        </button>
      </header>

      {/* Mobile menu */}
      <div className={`nav-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={pathname === l.href ? 'active' : ''}
            onClick={() => setMobileMenuOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/contato"
          onClick={() => setMobileMenuOpen(false)}
          style={{
            marginTop: '16px',
            padding: '14px',
            background: "#ae00ff",
            color: 'azure',
            borderRadius: '6px',
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            textDecoration: "none",
            textAlign: 'center',
            border: 'none',
          }}
        >
          Contate-me
        </Link>
      </div>
    </>
  );
}
