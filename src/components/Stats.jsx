'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
    { value: 15000, suffix: '+', label: 'Tyres Fitted' },
    { value: 4.9, suffix: '★', label: 'Average Rating', decimals: 1 },
    { value: 500, suffix: '+', label: '5-Star Reviews' },
    { value: 24, suffix: '/7', label: 'Coverage' },
];

function AnimatedNumber({ value, suffix, decimals = 0 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started.current) {
                started.current = true;
                const duration = 2000;
                const startTime = performance.now();
                const animate = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    setCount(eased * value);
                    if (progress < 1) requestAnimationFrame(animate);
                };
                requestAnimationFrame(animate);
            }
        }, { threshold: 0.3 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value]);
    const display = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString();
    return <span ref={ref}>{display}{suffix}</span>;
}

export default function Stats() {
    return (
        <section className="stats section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Track Record</span>
                    <h2 className="section-title">Numbers That Keep Us Rolling</h2>
                </div>
                <div className="stats__grid">
                    {stats.map((s, i) => (
                        <div className="stats__item" key={i}>
                            <div className="stats__value gold-text">
                                <AnimatedNumber value={s.value} suffix={s.suffix} decimals={s.decimals} />
                            </div>
                            <div className="stats__label">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
        .stats { background: var(--bg-primary); }
        .stats__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .stats__item { text-align: center; padding: 28px 16px; background: var(--bg-glass); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); transition: all var(--transition-smooth); }
        .stats__item:hover { border-color: var(--border-gold); box-shadow: var(--shadow-gold); }
        .stats__value { font-size: 2.4rem; font-weight: 900; font-family: 'Outfit', sans-serif; margin-bottom: 6px; }
        .stats__label { font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.1em; }
        @media (max-width: 768px) { .stats__grid { grid-template-columns: repeat(2, 1fr); gap: 12px; } .stats__value { font-size: 1.8rem; } .stats__item { padding: 20px 12px; } }
        @media (max-width: 480px) { .stats__value { font-size: 1.5rem; } .stats__label { font-size: 0.7rem; } .stats__item { padding: 16px 10px; } }
      `}</style>
        </section>
    );
}
