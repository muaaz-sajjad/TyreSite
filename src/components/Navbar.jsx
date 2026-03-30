'use client';
import { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const services = [
        { name: 'Mobile Tyre Fitting', href: '#services' },
        { name: 'Mobile Tyre Repair', href: '#services' },
        { name: 'Tyre Replacement', href: '#services' },
        { name: 'Wheel Balancing', href: '#services' },
        { name: 'Locking Wheel Nut Removal', href: '#services' },
        { name: 'Fleet Tyre Check', href: '#services' },
    ];

    return (
        <>
            <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
                <div className="navbar__inner container">
                    <a href="#" className="navbar__logo">
                        <img src="/logo-transparent.png" alt="Mobiluxe Tyres Logo" className="navbar__logo-img" />
                    </a>

                    <ul className="navbar__links">
                        <li><a href="#">Home</a></li>
                        <li
                            className="navbar__dropdown"
                            onMouseEnter={() => setServicesOpen(true)}
                            onMouseLeave={() => setServicesOpen(false)}
                        >
                            <a href="#services">
                                Services
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor">
                                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                </svg>
                            </a>
                            {servicesOpen && (
                                <div className="navbar__dropdown-menu">
                                    {services.map((s) => (
                                        <a key={s.name} href={s.href} className="navbar__dropdown-item">
                                            {s.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </li>
                        <li><a href="#areas">Locations</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                    <div className="navbar__actions">
                        <a href={siteConfig.business.whatsappUrl} className="navbar__whatsapp" aria-label="WhatsApp">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </a>
                        <a href={siteConfig.business.phoneTel} className="btn btn-primary navbar__cta">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                            </svg>
                            {siteConfig.business.phone}
                        </a>
                    </div>

                    <button
                        className={`navbar__hamburger ${mobileOpen ? 'active' : ''}`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileOpen ? 'mobile-menu--open' : ''}`}>
                <div className="mobile-menu__overlay" onClick={() => setMobileOpen(false)} />
                <div className="mobile-menu__drawer">
                    <div className="mobile-menu__header">
                        <img src="/logo.jpeg" alt="Mobiluxe Tyres Logo" className="navbar__logo-img" />
                        <button onClick={() => setMobileOpen(false)} className="mobile-menu__close">✕</button>
                    </div>
                    <div className="mobile-menu__links">
                        <a href="#" onClick={() => setMobileOpen(false)}>Home</a>
                        <a href="#services" onClick={() => setMobileOpen(false)}>Services</a>
                        <a href="#areas" onClick={() => setMobileOpen(false)}>Locations</a>
                        <a href="#faq" onClick={() => setMobileOpen(false)}>FAQ</a>
                        <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
                    </div>
                    <div className="mobile-menu__cta">
                        <a href={siteConfig.business.phoneTel} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                            Call Now: {siteConfig.business.phone}
                        </a>
                        <a href={siteConfig.business.whatsappUrl} className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', marginTop: '12px' }}>
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 16px 0;
          transition: all 0.4s ease;
          background: transparent;
        }
        .navbar--scrolled {
          background: rgba(10, 10, 15, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-subtle);
          padding: 10px 0;
        }
        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar__logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .navbar__logo-img {
          height: 80px;
          width: auto;
          object-fit: contain;
        }
        .navbar__brand {
          font-family: 'Outfit', sans-serif;
          font-size: 1.3rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          background: var(--brand-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
          line-height: 1.1;
        }
        .navbar__brand-sub {
          font-family: 'Outfit', sans-serif;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.35em;
          color: var(--text-secondary);
          display: block;
        }
        .navbar__links {
          display: flex;
          list-style: none;
          gap: 36px;
          align-items: center;
        }
        .navbar__links a {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .navbar__links a:hover {
          color: var(--brand-primary);
        }
        .navbar__dropdown {
          position: relative;
        }
        .navbar__dropdown-menu {
          position: absolute;
          top: 100%;
          left: -20px;
          padding-top: 12px;
        }
        .navbar__dropdown-menu::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 12px;
        }
        .navbar__dropdown-item {
          display: block;
          padding: 10px 20px;
          white-space: nowrap;
          font-size: 0.85rem;
          color: var(--text-secondary) !important;
          background: rgba(17, 17, 24, 0.98);
          border-left: 2px solid transparent;
          transition: all var(--transition-fast);
        }
        .navbar__dropdown-item:first-child {
          border-radius: var(--radius-md) var(--radius-md) 0 0;
        }
        .navbar__dropdown-item:last-child {
          border-radius: 0 0 var(--radius-md) var(--radius-md);
        }
        .navbar__dropdown-item:hover {
          color: var(--brand-primary) !important;
          background: rgba(201, 168, 76, 0.08);
          border-left-color: var(--brand-primary);
        }
        .navbar__actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .navbar__whatsapp {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #25d366;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: transform var(--transition-fast);
        }
        .navbar__whatsapp:hover {
          transform: scale(1.1);
        }
        .navbar__cta {
          font-size: 0.85rem !important;
          padding: 10px 22px !important;
        }
        .navbar__hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          padding: 4px;
        }
        .navbar__hamburger span {
          width: 24px;
          height: 2px;
          background: var(--text-primary);
          transition: all 0.3s ease;
          border-radius: 2px;
        }
        .navbar__hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .navbar__hamburger.active span:nth-child(2) {
          opacity: 0;
        }
        .navbar__hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        /* Mobile Menu */
        .mobile-menu {
          display: none;
        }
        .mobile-menu--open {
          display: block;
        }
        .mobile-menu__overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          z-index: 1001;
        }
        .mobile-menu__drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: 300px;
          max-width: 85vw;
          height: 100vh;
          background: var(--bg-secondary);
          z-index: 1002;
          padding: 24px;
          display: flex;
          flex-direction: column;
          animation: slideInRight 0.3s ease;
        }
        .mobile-menu__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-subtle);
        }
        .mobile-menu__close {
          font-size: 1.4rem;
          color: var(--text-secondary);
          background: none;
        }
        .mobile-menu__links {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }
        .mobile-menu__links a {
          padding: 14px 16px;
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-secondary);
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
        }
        .mobile-menu__links a:hover {
          background: var(--bg-glass);
          color: var(--brand-primary);
        }
        .mobile-menu__cta {
          margin-top: auto;
          padding-top: 24px;
          border-top: 1px solid var(--border-subtle);
        }

        @media (max-width: 900px) {
          .navbar__links,
          .navbar__actions {
            display: none;
          }
          .navbar__hamburger {
            display: flex;
          }
        }
      `}</style>
        </>
    );
}
