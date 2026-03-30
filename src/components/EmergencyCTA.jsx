'use client';
import { siteConfig } from '@/config/site';

export default function EmergencyCTA() {
    return (
        <section className="ecta section">
            <div className="ecta__bg" />
            <div className="container ecta__inner">
                <div className="ecta__content">
                    <h2 className="ecta__title">Need Emergency Tyre Help?</h2>
                    <p className="ecta__sub">We Are Always Ready <span className="brand-text">24/7</span> for Emergency Tyre Repair &amp; Fitting</p>
                    <div className="ecta__actions">
                        <a href={siteConfig.business.phoneTel} className="btn btn-primary ecta__btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                            Call Now
                        </a>
                        <a href={siteConfig.business.whatsappUrl} className="btn btn-secondary">WhatsApp</a>
                    </div>
                </div>
            </div>
            <style jsx>{`
        .ecta { position: relative; padding: 70px 0; overflow: hidden; }
        .ecta__bg { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.03), rgba(30,30,60,0.2)); border-top: 1px solid var(--border-brand); border-bottom: 1px solid var(--border-brand); }
        .ecta__inner { position: relative; z-index: 1; text-align: center; }
        .ecta__title { font-size: clamp(1.4rem, 4vw, 2.8rem); margin-bottom: 12px; }
        .ecta__sub { font-size: clamp(0.85rem, 2.5vw, 1.1rem); color: var(--text-secondary); margin-bottom: 28px; }
        .ecta__actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .ecta__btn { animation: pulseGlow 3s infinite; }
        @media (max-width: 480px) {
          .ecta { padding: 50px 0; }
          .ecta__actions { flex-direction: column; }
          .ecta__actions .btn { width: 100%; }
        }
      `}</style>
        </section>
    );
}
