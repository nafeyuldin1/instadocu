import s from '@/styles/marketing.module.css';

export default function StatsBand() {
  return (
    <section className={s.statsBand} style={{padding:'72px 0'}}>
      <div className="wrap">
        <div className={s.statsGrid}>
          {[{n:'2,200',s:'+',l:'Documents Managed'},{n:'48',s:'K',l:'Users Worldwide'},{n:'99.9',s:'%',l:'Uptime Guaranteed'},{n:'4.9',s:'★',l:'Average Rating'}].map((st,i) => (
            <div key={i} className={s.statItem}>
              <div className={s.statN}>{st.n}<span>{st.s}</span></div>
              <div className={s.statL}>{st.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
