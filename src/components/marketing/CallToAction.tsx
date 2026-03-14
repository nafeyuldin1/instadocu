import s from '@/styles/marketing.module.css';

export default function CallToAction() {
  return (
    <section className={s.cta}>
      <div className={s.ctaBg}><img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=60" alt="" /></div>
      <div className={s.ctaOverlay} />
      <div className="wrap">
        <div className={s.ctaInner}>
          <h2 className={s.ctaH2}>Ready to Fix Your Document Chaos?</h2>
          <p className={s.ctaP}>Join 1,200+ installation professionals who already manage their documents smarter with Installatie dosier. Start your free trial today — no credit card required.</p>
          <div className={s.ctaBtns}>
            <a href="#pricing"><button className={s.btnHeroPrimary}>Start Free Trial →</button></a>
            <a href="#how"><button className={s.btnHeroGhost}>▶ Watch Demo</button></a>
          </div>
          <div className={s.ctaRating}>
            <span className={s.ctaStars}>★★★★★</span>
            <span className={s.ctaRatingTxt}><strong>4.9/5</strong> from 280+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
