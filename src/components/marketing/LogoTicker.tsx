import s from '@/styles/marketing.module.css';

const LOGOS = [
  {ic:'⚡',n:'ElektroTech'},{ic:'🔧',n:'VerwarmPro'},{ic:'🏗',n:'BouwConnect'},{ic:'💧',n:'HydroFix'},{ic:'🔌',n:'KabelWerk'},{ic:'📐',n:'PlanCraft'},
  {ic:'⚡',n:'ElektroTech'},{ic:'🔧',n:'VerwarmPro'},{ic:'🏗',n:'BouwConnect'},{ic:'💧',n:'HydroFix'},{ic:'🔌',n:'KabelWerk'},{ic:'📐',n:'PlanCraft'},
];

export default function LogoTicker() {
  return (
    <section className={s.tickerBand} style={{padding:'32px 0'}}>
      <div className={s.tickerLbl}>Trusted by leading installation companies across the Netherlands</div>
      <div className={s.tickerTrack}>
        <div className={s.tickerSlide}>
          {LOGOS.map((l,i) => (
            <div key={i} className={s.tickItem}>
              <div className={s.tickIc}>{l.ic}</div>
              <div className={s.tickName}>{l.n}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
