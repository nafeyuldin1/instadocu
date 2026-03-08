import s from '@/styles/marketing.module.css';

export default function PhotoStrip() {
  return (
    <section className={s.photoStrip}>
      <div className="wrap tc">
        <div className="sec-tag tag-blue">✦ Built for the Field</div>
        <h2 className="sec-h2">Used by <span className="hl-blue">Professionals</span> Everywhere</h2>
        <p className="sec-p" style={{marginBottom:48}}>From high-rise construction sites to residential installations — Instadocu keeps every team connected.</p>
        <div className={s.photoGrid}>
          {[
            {src:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',lbl:'Construction Sites',tall:true},
            {src:'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',lbl:'Electrical Work'},
            {src:'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80',lbl:'HVAC Installation'},
            {src:'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',lbl:'Office Planning'},
            {src:'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80',lbl:'Plumbing Projects'},
          ].map((p,i) => (
            <div key={i} className={`${s.photoItem} ${p.tall ? s.photoItemTall : ''}`}>
              <img src={p.src} alt={p.lbl} />
              <div className={s.photoLabel}>{p.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
