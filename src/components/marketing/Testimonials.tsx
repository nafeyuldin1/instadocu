import s from '@/styles/marketing.module.css';

const REVIEWS = [
  {stars:'★★★★★',q:'"Installatie dosier transformed how we handle project documentation. What used to take hours now takes minutes."',name:'Jan de Vries',role:'Director, ElektroTech BV',av:'JV',color:'#2563eb'},
  {stars:'★★★★★',q:'"The client portal feature alone saved us 10 hours per week. Clients love the transparency."',name:'Sarah Bakker',role:'Project Manager, HydroFix',av:'SB',color:'#7c3aed'},
  {stars:'★★★★★',q:'"Finally, a document platform that understands construction. The mobile app is a game-changer on-site."',name:'Mark Peters',role:'Owner, Peters Installatie',av:'MP',color:'#059669'},
  {stars:'★★★★★',q:'"We manage 500+ documents per project. Installatie dosier handles it all without breaking a sweat."',name:'Lisa Jansen',role:'Operations, BouwConnect',av:'LJ',color:'#dc2626'},
  {stars:'★★★★★',q:'"The digital signatures feature eliminated our paper-based approval process entirely."',name:'Tom Hendriks',role:'CEO, KabelWerk NL',av:'TH',color:'#0891b2'},
  {stars:'★★★★★',q:'"ISO 27001 certified and GDPR compliant — exactly what we needed for our enterprise clients."',name:'Anna Smit',role:'CTO, PlanCraft',av:'AS',color:'#15803d'},
];

export default function Testimonials() {
  return (
    <section className={s.testimonials} id="testimonials">
      <div className="wrap tc">
        <div className="sec-tag tag-blue">✦ Reviews</div>
        <h2 className="sec-h2">Loved by <span className="hl-blue">Installation Professionals</span></h2>
        <p className="sec-p">See why 1,200+ companies across the Netherlands trust Installatie dosier for their document management.</p>
        <div className={s.testiGrid}>
          {REVIEWS.map((r,i) => (
            <div key={i} className={`${s.testiCard} reveal rd${(i%4)+1}`}>
              <div className={s.testiStars}>{r.stars}</div>
              <div className={s.testiQuote}>{r.q}</div>
              <div className={s.testiAuthor}>
                <div className={s.testiAv} style={{background:r.color}}>{r.av}</div>
                <div><div className={s.testiName}>{r.name}</div><div className={s.testiRole}>{r.role}</div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
