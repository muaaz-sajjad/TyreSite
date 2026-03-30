'use client';
import { siteConfig } from '@/config/site';

const brands = ['Michelin', 'Pirelli', 'Continental', 'Bridgestone', 'Hankook', 'Kumho', 'Nexen', 'Yokohama', 'Goodyear', 'Dunlop', 'Falken', 'Maxxis'];

export default function CarBrands() {
    return (
        <section className="brands section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Premium Selection</span>
                    <h2 className="section-title">Tyres From Leading Manufacturers</h2>
                    <p className="section-subtitle">Premium, mid-range, and budget tyres for every vehicle.</p>
                </div>
                <div className="brands__grid">
                    {brands.map((b, i) => (
                        <div className="brands__item" key={i}>
                            <span className="brands__name">{b}</span>
                        </div>
                    ))}
                </div>
                <div className="brands__cta">
                    <a href={siteConfig.business.phoneTel} className="btn btn-primary">Call Us Now</a>
                </div>
            </div>
            <style jsx>{`
        .brands { background: var(--bg-secondary); }
        .brands__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .brands__item { background: var(--bg-glass); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 22px 16px; text-align: center; transition: all var(--transition-smooth); cursor: default; }
        .brands__item:hover { border-color: var(--border-brand); background: rgba(201,168,76,0.06); }
        .brands__name { font-family: 'Outfit', sans-serif; font-size: 0.95rem; font-weight: 600; color: var(--text-secondary); }
        .brands__item:hover .brands__name { color: var(--brand-primary); }
        .brands__cta { text-align: center; margin-top: 32px; }
        @media (max-width: 768px) { .brands__grid { grid-template-columns: repeat(3, 1fr); gap: 10px; } .brands__item { padding: 16px 10px; } .brands__name { font-size: 0.82rem; } }
        @media (max-width: 480px) { .brands__grid { grid-template-columns: repeat(2, 1fr); gap: 8px; } .brands__item { padding: 14px 8px; } .brands__name { font-size: 0.78rem; } }
      `}</style>
        </section>
    );
}
