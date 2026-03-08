import s from '@/styles/marketing.module.css';

const STEPS = [
  {n:'01',t:'Upload & Organize',d:'Drag-and-drop files. AI auto-tags by project, type & date. 20+ formats supported.'},
  {n:'02',t:'Collaborate & Review',d:'Assign reviewers, leave inline comments, and track every change with version history.'},
  {n:'03',t:'Share & Approve',d:'Send secure links to clients. They can view, comment & e-sign — all without creating an account.'},
  {n:'04',t:'Deliver & Archive',d:'Auto-generate delivery reports. Archive completed projects with full audit trails for compliance.'},
];

export default function HowItWorks() {
  return (
    <section className={s.how} id="how">
      <div className={s.howBgImg}><img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=60" alt="" /></div>
      <div className={s.howRadial} />
      <div className="wrap tc" style={{position:'relative',zIndex:2}}>
        <div className="sec-tag tag-white">✦ How It Works</div>
        <h2 className="sec-h2" style={{color:'#fff'}}>From Chaos to <span className="hl-orange">Control</span> in 4 Steps</h2>
        <p className="sec-p" style={{color:'rgba(255,255,255,.45)'}}>Getting started takes less than 5 minutes. No complex setup, no training required.</p>
        <div className={s.stepsGrid}>
          <div className={s.stepsConnector} />
          {STEPS.map((step,i) => (
            <div key={i} className={`${s.step} reveal rd${i+1}`}>
              <div className={s.stepCircle}>
                <div className={s.stepCircleInner}><div className={s.stepNum}>{step.n}</div></div>
              </div>
              <h3 className={s.stepH3}>{step.t}</h3>
              <p className={s.stepP}>{step.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
