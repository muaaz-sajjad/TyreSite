'use client';

const areas = [
    'Greater London', 'Surrey', 'Buckinghamshire', 'Hertfordshire',
    'Kent', 'Essex', 'Berkshire', 'Bedfordshire',
    'Oxfordshire', 'West Sussex', 'East Sussex', 'Cambridgeshire', 'Hampshire',
];

export default function AreasWeCover() {
    return (
        <section className="areas section" id="areas">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Coverage</span>
                    <h2 className="section-title">Areas We Cover</h2>
                    <p className="section-subtitle">Central London to surrounding counties — we keep drivers moving.</p>
                </div>
                <div className="areas__grid">
                    {areas.map((a, i) => (
                        <div className="areas__card" key={i}>
                            <span className="areas__pin">📍</span>
                            <span className="areas__name">{a}</span>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
        .areas { background: var(--bg-secondary); }
        .areas__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .areas__card { background: var(--bg-glass); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 16px 14px; display: flex; align-items: center; gap: 8px; transition: all var(--transition-smooth); cursor: default; }
        .areas__card:hover { border-color: var(--border-gold); background: rgba(201,168,76,0.06); }
        .areas__pin { font-size: 1rem; flex-shrink: 0; }
        .areas__name { font-weight: 500; font-size: 0.88rem; white-space: nowrap; }
        .areas__card:hover .areas__name { color: var(--gold-primary); }
        @media (max-width: 768px) { .areas__grid { grid-template-columns: repeat(2, 1fr); gap: 10px; } .areas__card { padding: 14px 12px; } .areas__name { font-size: 0.82rem; } }
        @media (max-width: 480px) { .areas__grid { grid-template-columns: repeat(2, 1fr); gap: 8px; } .areas__card { padding: 12px 10px; } .areas__name { font-size: 0.78rem; } .areas__pin { font-size: 0.85rem; } }
      `}</style>
        </section>
    );
}
