'use client';
import { useEffect, useRef } from 'react';
import { siteConfig } from '@/config/site';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (el) {
      el.classList.add('hero--visible');
    }
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero__bg">
        <div className="hero__gradient" />
        <div className="hero__particles">
          {[
            [5, 12, 0.2, 3.1], [15, 78, 1.4, 4.5], [25, 34, 2.8, 5.2], [35, 56, 0.7, 3.8], [45, 91, 3.5, 6.1],
            [55, 23, 1.1, 4.3], [65, 67, 4.2, 5.7], [75, 45, 0.5, 3.4], [85, 82, 2.3, 6.5], [95, 15, 3.9, 4.8],
            [10, 50, 1.8, 5.5], [20, 88, 4.6, 3.3], [30, 29, 0.9, 6.8], [40, 71, 3.1, 4.1], [50, 42, 2.5, 5.9],
            [60, 95, 0.3, 3.6], [70, 18, 4.0, 6.3], [80, 63, 1.6, 4.7], [90, 37, 3.7, 5.1], [3, 85, 2.0, 3.9],
          ].map(([l, t, d, dur], i) => (
            <div
              key={i}
              className="hero__particle"
              style={{
                left: `${l}%`,
                top: `${t}%`,
                animationDelay: `${d}s`,
                animationDuration: `${dur}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="hero__content container">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Available 24/7 Across London &amp; Surrounding Areas
        </div>

        <h1 className="hero__title">
          PREMIUM MOBILE<br />
          TYRE FITTING —<br />
          <span className="brand-text">ANYTIME, ANYWHERE</span>
        </h1>

        <p className="hero__subtitle">
          Expert tyre fitting, repair &amp; replacement delivered to your doorstep.
          Home, office, or roadside — we come to you with professional equipment
          and premium tyres from top brands.
        </p>

        <div className="hero__actions">
          <a href={siteConfig.business.phoneTel} className="btn btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call Us Now
          </a>
          <a href={siteConfig.business.whatsappUrl} className="btn btn-secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#25d366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>

        <div className="hero__badges">
          <div className="hero__trust-badge">
            <span className="hero__trust-icon">🕐</span>
            24/7 Service
          </div>
          <div className="hero__trust-badge">
            <span className="hero__trust-icon">⚡</span>
            30-Min Response
          </div>
          <div className="hero__trust-badge">
            <span className="hero__trust-icon">🛡️</span>
            Fully Insured
          </div>
          <div className="hero__trust-badge">
            <span className="hero__trust-icon">💳</span>
            All Cards
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <div className="hero__scroll-line" />
      </div>

      <style jsx>{`
        .hero { position: relative; min-height: 100vh; display: flex; align-items: center; overflow: hidden; padding-top: 80px; }
        .hero__bg { position: absolute; inset: 0; z-index: 0; }
        .hero__gradient { position: absolute; inset: 0; background: radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(201,168,76,0.05) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(30,30,60,0.3) 0%, transparent 50%), var(--bg-primary); }
        .hero__particles { position: absolute; inset: 0; }
        .hero__particle { position: absolute; width: 2px; height: 2px; background: var(--brand-primary); border-radius: 50%; opacity: 0; animation: particleFloat ease-in-out infinite; }
        @keyframes particleFloat { 0%,100% { opacity: 0; transform: translateY(0); } 50% { opacity: 0.6; transform: translateY(-30px); } }
        .hero__content { position: relative; z-index: 1; max-width: 800px; opacity: 0; transform: translateY(40px); transition: all 1s cubic-bezier(0.4,0,0.2,1); }
        .hero--visible .hero__content { opacity: 1; transform: translateY(0); }
        .hero__badge { display: inline-flex; align-items: center; gap: 8px; padding: 8px 18px; background: rgba(201,168,76,0.08); border: 1px solid var(--border-brand); border-radius: 50px; font-size: 0.8rem; font-weight: 500; color: var(--brand-light); margin-bottom: 32px; animation: fadeIn 1s ease 0.3s both; }
        .hero__badge-dot { width: 8px; height: 8px; background: #4ade80; border-radius: 50%; animation: pulseGlow 2s infinite; box-shadow: 0 0 8px rgba(74,222,128,0.5); flex-shrink: 0; }
        .hero__title { font-size: clamp(2.2rem, 6vw, 4.5rem); font-weight: 900; line-height: 1.05; letter-spacing: -0.03em; margin-bottom: 24px; animation: fadeIn 1s ease 0.5s both; }
        .hero__subtitle { font-size: 1.15rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 40px; max-width: 600px; animation: fadeIn 1s ease 0.7s both; }
        .hero__actions { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 48px; animation: fadeIn 1s ease 0.9s both; }
        .hero__badges { display: flex; flex-wrap: wrap; gap: 10px; animation: fadeIn 1s ease 1.1s both; }
        .hero__trust-badge { display: flex; align-items: center; gap: 6px; padding: 8px 14px; background: var(--bg-glass); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); font-size: 0.82rem; font-weight: 500; color: var(--text-secondary); backdrop-filter: blur(10px); white-space: nowrap; }
        .hero__trust-icon { font-size: 1rem; }
        .hero__scroll-indicator { position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); }
        .hero__scroll-line { width: 1px; height: 40px; background: linear-gradient(to bottom, var(--brand-primary), transparent); animation: float 2s ease-in-out infinite; }

        @media (max-width: 768px) {
          .hero { padding-top: 80px; min-height: auto; padding-bottom: 50px; }
          .hero__badge { font-size: 0.7rem; padding: 6px 12px; margin-bottom: 20px; }
          .hero__title { font-size: 1.8rem; margin-bottom: 16px; }
          .hero__subtitle { font-size: 0.95rem; margin-bottom: 28px; }
          .hero__actions { margin-bottom: 28px; gap: 10px; }
          .hero__actions .btn { flex: 1; min-width: 140px; }
          .hero__badges { gap: 8px; }
          .hero__trust-badge { padding: 6px 10px; font-size: 0.72rem; gap: 4px; }
          .hero__trust-icon { font-size: 0.85rem; }
          .hero__scroll-indicator { display: none; }
        }
        @media (max-width: 480px) {
          .hero { padding-top: 70px; padding-bottom: 40px; }
          .hero__title { font-size: 1.5rem; }
          .hero__subtitle { font-size: 0.88rem; margin-bottom: 24px; line-height: 1.6; }
          .hero__actions { flex-direction: column; }
          .hero__actions .btn { width: 100%; }
          .hero__badges { gap: 6px; }
          .hero__trust-badge { padding: 6px 8px; font-size: 0.68rem; }
        }
      `}</style>
    </section>
  );
}
