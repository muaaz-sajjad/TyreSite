'use client';

const features = [
    { icon: '⚡', title: '30-Minute Response', desc: 'Our mobile tyre team reaches most locations within 30 minutes — fast and reliable.' },
    { icon: '💰', title: 'Fair Pricing', desc: "No hidden fees, no surprise charges. Honest, transparent pricing every time." },
    { icon: '🌙', title: '24/7 Emergency Service', desc: "Available around the clock for emergency tyre callouts across London & beyond." },
];

export default function WhyChooseUs() {
    return (
        <section className="why section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Our Promise</span>
                    <h2 className="section-title">Simply Call Us &amp; We Handle the Rest</h2>
                </div>
                <div className="why__grid">
                    {features.map((f, i) => (
                        <div className="why__card" key={i}>
                            <div className="why__icon-wrap"><span className="why__icon">{f.icon}</span></div>
                            <h3 className="why__title">{f.title}</h3>
                            <p className="why__desc">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
        .why { background: var(--bg-secondary); }
        .why__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .why__card { background: linear-gradient(145deg, rgba(201,168,76,0.06), rgba(201,168,76,0.02)); border: 1px solid var(--border-brand); border-radius: var(--radius-lg); padding: 32px 24px; text-align: center; transition: all var(--transition-smooth); }
        .why__card:hover { transform: translateY(-6px); box-shadow: var(--shadow-brand); }
        .why__icon-wrap { width: 56px; height: 56px; border-radius: 50%; background: rgba(201,168,76,0.12); display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; }
        .why__icon { font-size: 1.5rem; }
        .why__title { font-size: 1.05rem; font-weight: 700; margin-bottom: 10px; }
        .why__desc { font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6; }
        @media (max-width: 768px) {
          .why__grid { grid-template-columns: 1fr; max-width: 100%; gap: 12px; }
          .why__card { display: flex; align-items: center; gap: 16px; text-align: left; padding: 20px; }
          .why__icon-wrap { margin: 0; flex-shrink: 0; width: 48px; height: 48px; }
          .why__icon { font-size: 1.3rem; }
          .why__title { margin-bottom: 4px; font-size: 0.95rem; }
          .why__desc { font-size: 0.82rem; }
        }
      `}</style>
        </section>
    );
}
