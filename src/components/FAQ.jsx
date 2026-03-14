'use client';
import { useState } from 'react';
import { faqs } from '@/data/faqs';

export default function FAQ() {
    const [open, setOpen] = useState(null);
    return (
        <section className="faq section" id="faq" aria-label="Frequently Asked Questions">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">FAQ</span>
                    <h2 className="section-title">Frequently Asked Questions</h2>
                </div>
                <div className="faq__list">
                    {faqs.map((f, i) => (
                        <div className={`faq__item ${open === i ? 'faq__item--open' : ''}`} key={i}>
                            <button className="faq__question" id={`faq-q-${i}`} aria-expanded={open === i} aria-controls={`faq-answer-${i}`} onClick={() => setOpen(open === i ? null : i)}>
                                <span className="faq__num">{String(i + 1).padStart(2, '0')}</span>
                                <span className="faq__q-text">{f.q}</span>
                                <span className="faq__toggle">{open === i ? '−' : '+'}</span>
                            </button>
                            <div className="faq__answer" id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-q-${i}`} aria-hidden={open !== i}><p>{f.a}</p></div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
        .faq { background: var(--bg-primary); }
        .faq__list { max-width: 800px; margin: 0 auto; }
        .faq__item { border-bottom: 1px solid var(--border-subtle); }
        .faq__question { width: 100%; display: flex; align-items: center; gap: 12px; padding: 18px 0; background: none; color: var(--text-primary); font-size: 0.95rem; font-weight: 500; text-align: left; transition: color var(--transition-fast); }
        .faq__question:hover { color: var(--brand-primary); }
        .faq__num { font-family: 'Outfit', sans-serif; font-weight: 700; color: var(--brand-primary); font-size: 0.8rem; min-width: 24px; flex-shrink: 0; }
        .faq__q-text { flex: 1; line-height: 1.4; }
        .faq__toggle { font-size: 1.3rem; color: var(--brand-primary); min-width: 20px; text-align: center; flex-shrink: 0; }
        .faq__answer { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, padding 0.4s ease; }
        .faq__item--open .faq__answer { max-height: 300px; padding-bottom: 18px; }
        .faq__answer p { color: var(--text-secondary); font-size: 0.88rem; line-height: 1.65; padding-left: 36px; }
        .faq__item--open .faq__question { color: var(--brand-primary); }
        @media (max-width: 768px) {
          .faq__question { font-size: 0.88rem; padding: 14px 0; gap: 10px; }
          .faq__answer p { font-size: 0.82rem; padding-left: 34px; }
        }
        @media (max-width: 480px) {
          .faq__question { font-size: 0.82rem; }
          .faq__answer p { padding-left: 0; font-size: 0.8rem; }
          .faq__num { display: none; }
        }
      `}</style>
        </section>
    );
}
