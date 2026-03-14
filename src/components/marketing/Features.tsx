import s from '@/styles/marketing.module.css';

const FEATS = [
  {ic:'📄',t:'Smart Document Hub',d:'Upload, organize & find any document in seconds. Supports PDF, DWG, XLS & 20+ formats with instant full-text search.'},
  {ic:'👥',t:'Client Portals',d:'Give each client a branded portal to view, approve & download their project documents — no login hassle.'},
  {ic:'📱',t:'Mobile-First Design',d:'Capture photos, upload documents & check statuses from the job site with our optimized mobile app.'},
  {ic:'✍️',t:'Digital Signatures',d:'Get legally-binding e-signatures on permits, certificates & delivery forms — directly in the platform.'},
  {ic:'🔔',t:'Smart Notifications',d:'Automatic alerts for document approvals, deadlines, and client feedback. Never miss a critical update.'},
  {ic:'🔒',t:'Enterprise Security',d:'ISO 27001 certified, GDPR compliant, end-to-end encryption & hosted on Dutch servers. Your data stays safe.'},
];

export default function Features() {
  return (
    <section className={s.features} id="features">
      <div className="wrap tc">
        <div className="sec-tag tag-blue">✦ Features</div>
        <h2 className="sec-h2">Everything You Need to <span className="hl-blue">Manage Documents</span></h2>
        <p className="sec-p">From upload to client sign-off — Installatie dosier handles every step of your document workflow with power tools built for installation professionals.</p>
        <div className={s.featGrid}>
          {FEATS.map((f,i) => (
            <div key={i} className={`${s.featCard} reveal rd${(i%4)+1}`}>
              <div className={s.featCardContent}>
                <div className={s.featIconBox}>{f.ic}</div>
                <h3 className={s.featH3}>{f.t}</h3>
                <p className={s.featP}>{f.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
