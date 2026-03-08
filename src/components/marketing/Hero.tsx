import s from '@/styles/marketing.module.css';

export default function Hero() {
  return (
    <section className={s.hero}>
      <div className={s.heroBgImg}><img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80" alt="" /></div>
      <div className={s.heroOverlay} />
      <div className={s.heroGrid} />
      <div className={s.heroAccentLine} />

      <div className={s.heroInner}>
        <div>
          <div className={s.heroEyebrow}>
            <div className={s.eyebrowPulse} />
            <span className={s.eyebrowTxt}>Trusted by 1,200+ Installation Professionals</span>
          </div>

          <h1 className={s.heroH1}>
            All Your <span className={s.h1Blue}>Installation</span>
            <span className={s.line2}>Documents in</span>
            <span className={s.line2}><span className={s.h1Orange}>One Fixed Place</span></span>
          </h1>

          <p className={s.heroDesc}>
            Instadocu eliminates document chaos for electricians, plumbers and construction teams. Manage 2,200+ project files, share client portals instantly, and keep your entire team aligned — from office to on-site.
          </p>

          <div className={s.heroBtns}>
            <a href="#pricing"><button className={s.btnHeroPrimary}>Start Free Trial →</button></a>
            <a href="#how"><button className={s.btnHeroGhost}>▶ How It Works</button></a>
          </div>

          <div className={s.heroTrust}>
            <div className={s.trustAvs}>
              {[{c:'#15803d',l:'JA'},{c:'#7c3aed',l:'MP'},{c:'#2563eb',l:'AK'},{c:'#059669',l:'SV'},{c:'#dc2626',l:'RB'}].map((a,i) => (
                <div key={i} className={s.trustAv} style={{background:a.c}}>{a.l}</div>
              ))}
            </div>
            <div className={s.trustWords}><strong>1,200+</strong> professionals trust Instadocu daily<br/>★★★★★ 4.9 rating</div>
          </div>
        </div>

        <div className={s.heroVisual}>
          <div className={s.heroMockup}>
            <div className={s.hmBar}>
              <div className={s.hmDots}>
                <div className={s.hmDot} style={{background:'#ff5f56'}} />
                <div className={s.hmDot} style={{background:'#ffbd2e'}} />
                <div className={s.hmDot} style={{background:'#27c93f'}} />
              </div>
              <div className={s.hmTitle}>Instadocu — Admin Dashboard</div>
            </div>
            <div className={s.hmBody}>
              <div className={s.hmSb}>
                {[{ic:'⊞',l:'Dashboard',a:true},{ic:'📄',l:'Documents'},{ic:'👥',l:'Clients'},{ic:'📊',l:'Reports'},{ic:'📅',l:'Schedule'},{ic:'🔧',l:'Equipment'},{ic:'⚙',l:'Settings'}].map((item,i) => (
                  <div key={i} className={`${s.hmSi} ${item.a ? s.hmSiActive : ''}`}>
                    <span className={s.hmSiIc}>{item.ic}</span>{item.l}
                  </div>
                ))}
              </div>
              <div className={s.hmMain}>
                <div className={s.hmStats}>
                  <div className={s.hmStat}><div className={s.hmStatN} style={{color:'var(--orange)'}}>2,241</div><div className={s.hmStatL}>Documents</div></div>
                  <div className={s.hmStat}><div className={s.hmStatN} style={{color:'var(--blue)'}}>48</div><div className={s.hmStatL}>Projects</div></div>
                  <div className={s.hmStat}><div className={s.hmStatN} style={{color:'#15803d'}}>99.9%</div><div className={s.hmStatL}>Uptime</div></div>
                </div>
                <div className={s.hmCard}>
                  <div className={s.hmClbl}>RECENT DOCUMENTS</div>
                  {[{ic:'📋',n:'KNX Schema Bouwdeel F.pdf',b:'Shared ✓',bc:'rbG'},{ic:'📐',n:'Electrical Layout Floor 3.dwg',b:'Pending',bc:'rbO'},{ic:'🔒',n:'Safety Certificate 2026.pdf',b:'Approved',bc:'rbB'},{ic:'📊',n:'Project Budget Q1.xlsx',b:'Draft',bc:'rbO'}].map((r,i) => (
                    <div key={i} className={s.hmRow}>
                      <div className={s.hmRi} style={{background:i%2===0?'rgba(42,92,186,.2)':'rgba(232,105,44,.2)'}}>{r.ic}</div>
                      <div className={s.hmRn}>{r.n}</div>
                      <div className={`${s.hmRb} ${s[r.bc]}`}>{r.b}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`${s.hvFloat} ${s.hf1}`}>
            <div className={s.hfIcon}>✅</div>
            <div><div className={s.hfTxt}>Document Approved</div><div className={s.hfSub}>Client signed off · Just now</div></div>
          </div>
          <div className={`${s.hvFloat} ${s.hf2}`}>
            <div className={s.hfIcon}>📄</div>
            <div><div className={s.hfTxt2}>2,241 Docs</div><div className={s.hfSub2}>Centrally managed</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
