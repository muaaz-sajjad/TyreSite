'use client';
import { siteConfig } from '@/config/site';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const serviceLinks = ['Mobile Tyre Fitting', 'Mobile Tyre Repair', 'Tyre Replacement', 'Fleet Tyre Check', 'Wheel Balancing', 'Locking Wheel Nut Removal', 'TPMS Valve Replacement'];
    const brands = ['Michelin', 'Pirelli', 'Continental', 'Bridgestone', 'Hankook', 'Kumho', 'Nexen', 'Yokohama'];

    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__col footer__col--brand">
                        <div className="footer__logo">
                            <img src="/logo-transparent.png" alt="Mobiluxe Tyres Logo" className="footer__logo-img" />
                        </div>
                        <p className="footer__tagline">Premium 24/7 mobile tyre fitting across London &amp; surrounding counties.</p>
                        <div className="footer__quote-cta">
                            <a href={siteConfig.business.whatsappUrl} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                Get a Free Quote
                            </a>
                        </div>
                    </div>
                    <div className="footer__col">
                        <h4 className="footer__heading">Contact</h4>
                        <ul className="footer__links">
                            <li style={{ lineHeight: '1.4', marginBottom: '8px' }}>
                                <span>📍 {siteConfig.business.address}</span>
                            </li>
                            <li><a href={siteConfig.business.phoneTel}>📞 {siteConfig.business.phone}</a></li>
                            <li><a href={siteConfig.business.whatsappUrl}>💬 WhatsApp</a></li>
                            <li><a href={'mailto:' + siteConfig.business.email}>✉️ Email Us</a></li>
                            <li><a href={siteConfig.business.whatsappUrl}>📅 Same Day Appointments</a></li>
                        </ul>
                    </div>
                    <div className="footer__col">
                        <h4 className="footer__heading">Services</h4>
                        <ul className="footer__links">
                            {serviceLinks.map((s, i) => <li key={i}><a href="#services">{s}</a></li>)}
                        </ul>
                    </div>
                    <div className="footer__col">
                        <h4 className="footer__heading">Tyre Brands</h4>
                        <ul className="footer__links">
                            {brands.map((b, i) => <li key={i}><span>{b}</span></li>)}
                        </ul>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p>© {currentYear} Mobiluxe Tyres. All rights reserved.</p>
                </div>
            </div>
            <style jsx>{`
        .footer { background: var(--bg-secondary); padding: 60px 0 0; border-top: 1px solid var(--border-subtle); }
        .footer__top { display: grid; grid-template-columns: 1.3fr 1fr 1fr 1fr; gap: 36px; padding-bottom: 36px; }
        .footer__logo { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
        .footer__logo-img { height: 140px; width: auto; object-fit: contain; }
        .footer__brand { font-family: 'Outfit', sans-serif; font-size: 1.1rem; font-weight: 800; letter-spacing: 0.15em; display: block; line-height: 1.1; }
        .footer__brand-sub { font-size: 0.55rem; letter-spacing: 0.35em; color: var(--text-muted); display: block; }
        .footer__tagline { font-size: 0.82rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 20px; }
        .footer__quote-cta { margin-top: 16px; }
        .footer__heading { font-size: 0.82rem; font-weight: 700; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.1em; }
        .footer__links { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .footer__links a { font-size: 0.82rem; color: var(--text-muted); transition: color var(--transition-fast); }
        .footer__links a:hover { color: var(--brand-primary); }
        .footer__bottom { border-top: 1px solid var(--border-subtle); padding: 20px 0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
        .footer__bottom p { font-size: 0.75rem; color: var(--text-muted); }
        @media (max-width: 900px) {
          .footer__top { grid-template-columns: 1fr 1fr; gap: 28px; }
        }
        @media (max-width: 500px) {
          .footer { padding: 40px 0 0; }
          .footer__top { grid-template-columns: 1fr; gap: 24px; }
          .footer__bottom { flex-direction: column; text-align: center; }
        }
      `}</style>
        </footer>
    );
}
