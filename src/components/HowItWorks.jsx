'use client';
import { siteConfig } from '@/config/site';

const steps = [
  { num: '01', icon: '📱', title: 'Call or Book Online', desc: 'Tell us your tyre size or vehicle reg and location.' },
  { num: '02', icon: '🚐', title: 'We Come to You', desc: 'Our nearest fitter heads to you with correct tyres.' },
  { num: '03', icon: '🔧', title: 'Professional Fitting', desc: 'We fit, balance, and check pressure on-site.' },
  { num: '04', icon: '✅', title: 'Drive Away Safely', desc: 'Fully fitted. No queues. No wasted time.' },
];

export default function HowItWorks() {
  return (
    <section className="hiw section" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Process</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">From your call to driving away safely — effortless.</p>
        </div>
        <div className="hiw__grid">
          {steps.map((step, i) => (
            <div className="hiw__step" key={i}>
              <div className="hiw__num-wrap">
                <span className="hiw__num">{step.num}</span>
              </div>
              <div className="hiw__icon">{step.icon}</div>
              <h3 className="hiw__title">{step.title}</h3>
              <p className="hiw__desc">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="hiw__cta">
          <a href={siteConfig.business.phoneTel} className="btn btn-primary">Call Us Now</a>
          <a href={siteConfig.business.whatsappUrl} className="btn btn-secondary">WhatsApp</a>
        </div>
      </div>
      <style jsx>{`
        .hiw { background: var(--bg-primary); }
        .hiw__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-bottom: 40px; }
        .hiw__step { text-align: center; position: relative; }
        .hiw__num-wrap { display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
        .hiw__num { width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, var(--brand-dark), var(--brand-primary)); color: #0a0a0f; font-family: 'Outfit', sans-serif; font-weight: 800; font-size: 0.85rem; display: flex; align-items: center; justify-content: center; }
        .hiw__icon { font-size: 2.2rem; margin-bottom: 12px; }
        .hiw__title { font-size: 1.05rem; font-weight: 700; margin-bottom: 8px; }
        .hiw__desc { font-size: 0.85rem; color: var(--text-secondary); line-height: 1.55; }
        .hiw__cta { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        @media (max-width: 768px) {
          .hiw__grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
        }
        @media (max-width: 480px) {
          .hiw__grid { grid-template-columns: 1fr; gap: 20px; }
          .hiw__step { display: flex; align-items: flex-start; gap: 16px; text-align: left; }
          .hiw__num-wrap { margin-bottom: 0; }
          .hiw__num { width: 40px; height: 40px; font-size: 0.8rem; flex-shrink: 0; }
          .hiw__icon { display: none; }
          .hiw__cta { flex-direction: column; }
          .hiw__cta .btn { width: 100%; }
        }
      `}</style>
    </section>
  );
}
