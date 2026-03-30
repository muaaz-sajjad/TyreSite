'use client';
import { siteConfig } from '@/config/site';

export default function TrustContent() {
    const features = [
        '24/7 Mobile Tyre Fitting — day or night',
        'Locking Wheel Nut Removal with specialist tools',
        'Any size tyre from budget to premium brands',
        'Emergency callouts across London & counties',
        'Professional fitting, balancing & safety checks',
        'No hidden fees — transparent pricing always',
    ];

    return (
        <section className="trust section">
            <div className="container">
                <div className="trust__grid">
                    <div className="trust__content">
                        <span className="section-label">Why Mobiluxe Tyres</span>
                        <h2 className="trust__title">
                            Trusted Mobile Tyre Fitters Across
                            <span className="brand-text"> London &amp; Beyond</span>
                        </h2>
                        <p className="trust__text">
                            A flat tyre never happens at a convenient time. Whether you&apos;re rushing to work,
                            picking up the kids, or stuck on the motorway late at night — standing roadside
                            or queuing at a garage is stressful and unsafe.
                        </p>
                        <p className="trust__text">
                            That&apos;s why our premium mobile tyre fitting service comes directly to you. Our
                            certified technicians arrive fully equipped to repair punctures, replace damaged
                            tyres, and fit brand-new tyres from top manufacturers — all on the spot.
                        </p>
                        <ul className="trust__list">
                            {features.map((f, i) => (
                                <li key={i} className="trust__list-item">
                                    <span className="trust__check">✓</span>
                                    {f}
                                </li>
                            ))}
                        </ul>
                        <div className="trust__actions">
                            <a href={siteConfig.business.phoneTel} className="btn btn-primary">Call Us Now</a>
                            <a href={siteConfig.business.whatsappUrl} className="btn btn-secondary">WhatsApp Us</a>
                        </div>
                    </div>
                    <div className="trust__visual">
                        <div className="trust__card-stack">
                            <div className="trust__vcard">
                                <div className="trust__vicon">🏆</div>
                                <div><div className="trust__vlabel">Premium Service</div><div className="trust__vval brand-text">Since 2020</div></div>
                            </div>
                            <div className="trust__vcard">
                                <div className="trust__vicon">🛞</div>
                                <div><div className="trust__vlabel">Tyres Fitted</div><div className="trust__vval brand-text">15,000+</div></div>
                            </div>
                            <div className="trust__vcard">
                                <div className="trust__vicon">⭐</div>
                                <div><div className="trust__vlabel">Customer Rating</div><div className="trust__vval brand-text">4.9 / 5.0</div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
        .trust { background: var(--bg-secondary); }
        .trust__grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 60px; align-items: center; }
        .trust__title { font-size: clamp(1.5rem, 3.5vw, 2.6rem); margin-bottom: 24px; line-height: 1.15; }
        .trust__text { color: var(--text-secondary); font-size: 1rem; line-height: 1.7; margin-bottom: 16px; }
        .trust__list { list-style: none; margin: 28px 0 36px; display: grid; gap: 14px; }
        .trust__list-item { display: flex; align-items: flex-start; gap: 12px; font-size: 0.92rem; color: var(--text-secondary); line-height: 1.5; }
        .trust__check { width: 22px; height: 22px; border-radius: 50%; background: rgba(201,168,76,0.15); color: var(--brand-primary); display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 700; flex-shrink: 0; margin-top: 2px; }
        .trust__actions { display: flex; gap: 12px; flex-wrap: wrap; }
        .trust__visual { display: flex; justify-content: center; }
        .trust__card-stack { display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 360px; }
        .trust__vcard { background: var(--bg-glass); backdrop-filter: blur(20px); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 24px 20px; display: flex; align-items: center; gap: 14px; transition: all var(--transition-smooth); }
        .trust__vcard:hover { border-color: var(--border-brand); transform: translateX(8px); box-shadow: var(--shadow-brand); }
        .trust__vicon { font-size: 1.8rem; flex-shrink: 0; }
        .trust__vlabel { font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.1em; }
        .trust__vval { font-size: 1.2rem; font-weight: 800; font-family: 'Outfit', sans-serif; }
        @media (max-width: 900px) {
          .trust__grid { grid-template-columns: 1fr; gap: 36px; }
          .trust__card-stack { flex-direction: row; max-width: 100%; gap: 12px; }
          .trust__vcard { flex-direction: column; text-align: center; flex: 1; padding: 18px 12px; gap: 8px; }
          .trust__vcard:hover { transform: translateY(-4px); }
        }
        @media (max-width: 600px) {
          .trust__card-stack { flex-direction: column; }
          .trust__vcard { flex-direction: row; text-align: left; }
          .trust__title { font-size: 1.4rem; }
          .trust__text { font-size: 0.9rem; }
          .trust__list-item { font-size: 0.85rem; }
          .trust__actions { flex-direction: column; }
          .trust__actions .btn { width: 100%; }
        }
      `}</style>
        </section>
    );
}
