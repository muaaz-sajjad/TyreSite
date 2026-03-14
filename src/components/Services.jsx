'use client';
import { services } from '@/data/services';
import { siteConfig } from '@/config/site';

export default function Services() {
    return (
        <section className="services section" id="services">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">What We Offer</span>
                    <h2 className="section-title">Our Mobile Tyre Services</h2>
                    <p className="section-subtitle">Comprehensive mobile tyre solutions — delivered to your location.</p>
                </div>
                <div className="services__grid">
                    {services.map((s, i) => (
                        <div className="services__card glass-card" key={i}>
                            <div className="services__icon">{s.icon}</div>
                            <h3 className="services__title">{s.title}</h3>
                            <p className="services__desc">{s.desc}</p>
                            <a href={siteConfig.business.phoneTel} className="services__link">Call to book →</a>
                        </div>
                    ))}
                </div>
                <div className="services__cta">
                    <a href={siteConfig.business.phoneTel} className="btn btn-primary">Call Us Now</a>
                </div>
            </div>
            <style jsx>{`
        .services { background: var(--bg-primary); }
        .services__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .services__card { cursor: default; }
        .services__icon { font-size: 2.2rem; margin-bottom: 16px; }
        .services__title { font-size: 1.05rem; font-weight: 700; margin-bottom: 10px; }
        .services__desc { font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 14px; }
        .services__link { font-size: 0.82rem; color: var(--gold-primary); font-weight: 600; }
        .services__card:hover .services__link { color: var(--gold-light); }
        .services__cta { text-align: center; margin-top: 40px; }
        @media (max-width: 900px) { .services__grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } }
        @media (max-width: 500px) {
          .services__grid { grid-template-columns: 1fr; gap: 12px; }
          .services__card { display: flex; flex-direction: row; align-items: flex-start; gap: 16px; }
          .services__icon { margin-bottom: 0; font-size: 1.8rem; flex-shrink: 0; padding-top: 2px; }
          .services__title { font-size: 0.95rem; }
          .services__desc { font-size: 0.82rem; }
        }
      `}</style>
        </section>
    );
}
