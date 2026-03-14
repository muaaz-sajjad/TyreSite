'use client';
import { useRef, useEffect, useState } from 'react';

const reviews = [
  { name: 'James Walker', text: 'Absolutely brilliant service! Called at 11pm with a flat and the fitter arrived within 40 minutes. Professional, quick, and fair price.', rating: 5 },
  { name: 'Sarah Mitchell', text: 'Had a blowout on the M25 during rush hour. Mobiluxe Tyres came out and sorted everything in under an hour. Lifesavers!', rating: 5 },
  { name: 'Dean Acres', text: 'Exceptional service for my Mercedes. They sourced the exact tyre I needed and had it fitted within 90 minutes. Professional and knowledgeable.', rating: 5 },
  { name: 'Priya Sharma', text: 'Used them for my fleet of delivery vans. They come to our depot and handle everything. Saves us so much time. Competitive pricing too!', rating: 5 },
  { name: 'Mark Doherty', text: 'Quick, no fuss, no overcharging. The technician came, did the job perfectly. This is how service should be. Will use again.', rating: 5 },
  { name: 'Helen Shaw', text: 'Stranded with two flat tyres on a Sunday evening. Both replaced within an hour. WhatsApp booking was so easy and convenient.', rating: 5 },
];

export default function Reviews() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', updateScrollButtons);
      updateScrollButtons();
      return () => el.removeEventListener('scroll', updateScrollButtons);
    }
  }, []);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="reviews section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Real feedback from drivers we&apos;ve helped — day or night.</p>
        </div>
        <div className="reviews__rating-bar">
          <div className="reviews__stars">★★★★★</div>
          <span className="reviews__score">4.9</span>
          <span className="reviews__count">Based on 420+ reviews</span>
        </div>
        <div className="reviews__wrapper">
          {canScrollLeft && <button className="reviews__arrow reviews__arrow--left" onClick={() => scroll(-1)}>‹</button>}
          <div className="reviews__scroll" ref={scrollRef}>
            {reviews.map((r, i) => (
              <div className="reviews__card glass-card" key={i}>
                <div className="reviews__card-stars">{'★'.repeat(r.rating)}</div>
                <p className="reviews__card-text">&ldquo;{r.text}&rdquo;</p>
                <div className="reviews__card-author">
                  <div className="reviews__card-avatar">{r.name.split(' ').map(n => n[0]).join('')}</div>
                  <div>
                    <div className="reviews__card-name">{r.name}</div>
                    <div className="reviews__card-source">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="#4285f4"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34a853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#fbbc05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#ea4335" /></svg>
                      Google Review
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {canScrollRight && <button className="reviews__arrow reviews__arrow--right" onClick={() => scroll(1)}>›</button>}
        </div>
      </div>
      <style jsx>{`
        .reviews { background: var(--bg-secondary); }
        .reviews__rating-bar { display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 40px; flex-wrap: wrap; }
        .reviews__stars { color: var(--brand-primary); font-size: 1.4rem; letter-spacing: 2px; }
        .reviews__score { font-size: 1.5rem; font-weight: 800; font-family: 'Outfit', sans-serif; }
        .reviews__count { color: var(--text-muted); font-size: 0.9rem; }
        .reviews__wrapper { position: relative; }
        .reviews__scroll { display: flex; gap: 20px; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; padding: 8px 4px 16px; -webkit-overflow-scrolling: touch; }
        .reviews__scroll::-webkit-scrollbar { display: none; }
        .reviews__card { min-width: 300px; max-width: 300px; scroll-snap-align: start; display: flex; flex-direction: column; gap: 14px; cursor: default; flex-shrink: 0; }
        .reviews__card-stars { color: var(--brand-primary); font-size: 1rem; letter-spacing: 2px; }
        .reviews__card-text { color: var(--text-secondary); font-size: 0.88rem; line-height: 1.65; flex: 1; }
        .reviews__card-author { display: flex; align-items: center; gap: 12px; margin-top: 8px; padding-top: 14px; border-top: 1px solid var(--border-subtle); }
        .reviews__card-avatar { width: 36px; height: 36px; border-radius: 50%; background: linear-gradient(135deg, var(--brand-dark), var(--brand-primary)); display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 700; color: #0a0a0f; flex-shrink: 0; }
        .reviews__card-name { font-weight: 600; font-size: 0.85rem; }
        .reviews__card-source { display: flex; align-items: center; gap: 4px; font-size: 0.72rem; color: var(--text-muted); margin-top: 2px; }
        .reviews__arrow { position: absolute; top: 50%; transform: translateY(-50%); width: 40px; height: 40px; border-radius: 50%; background: rgba(201,168,76,0.15); border: 1px solid var(--border-brand); color: var(--brand-primary); font-size: 1.4rem; display: flex; align-items: center; justify-content: center; z-index: 10; transition: all var(--transition-fast); backdrop-filter: blur(10px); }
        .reviews__arrow:hover { background: rgba(201,168,76,0.3); }
        .reviews__arrow--left { left: -20px; }
        .reviews__arrow--right { right: -20px; }
        @media (max-width: 768px) {
          .reviews__card { min-width: 260px; max-width: 260px; }
          .reviews__arrow { display: none; }
          .reviews__rating-bar { gap: 8px; margin-bottom: 24px; }
          .reviews__stars { font-size: 1.1rem; }
          .reviews__score { font-size: 1.2rem; }
          .reviews__count { font-size: 0.8rem; width: 100%; text-align: center; }
        }
        @media (max-width: 480px) {
          .reviews__card { min-width: 240px; max-width: 240px; }
        }
      `}</style>
    </section>
  );
}
