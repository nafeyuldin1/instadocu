import s from '@/styles/marketing.module.css';

export default function Showcase() {
  return (
    <>
      <section className={s.showcase}>
        <div className="wrap">
          <div className={s.showcaseGrid}>
            <div style={{position:'relative'}}>
              <div className={s.docMock}>
                <div className={s.dmHeader}>
                  <div className={s.dmHDots}>
                    <div className={s.dmHDot} style={{background:'rgba(255,255,255,.3)'}} />
                    <div className={s.dmHDot} style={{background:'rgba(255,255,255,.2)'}} />
                    <div className={s.dmHDot} style={{background:'rgba(255,255,255,.15)'}} />
                  </div>
                  <div className={s.dmHTitle}>Documents — Project Amsterdam Centrum</div>
                </div>
                <div className={s.dmBody}>
                  {[{ic:'📋',n:'Floor Plan Rev3.pdf',b:'Shared',bc:'dmRbShared'},{ic:'📐',n:'Electrical Schema.dwg',b:'Pending',bc:'dmRbPending'},{ic:'🔒',n:'Safety Cert 2026.pdf',b:'Approved',bc:'dmRbApproved'},{ic:'📊',n:'Budget Overview.xlsx',b:'Draft',bc:'dmRbDraft'}].map((r,i) => (
                    <div key={i} className={s.dmRow}>
                      <div className={s.dmRIcon} style={{background:i%2===0?'var(--blue-lt)':'var(--orange-lt)'}}>{r.ic}</div>
                      <div className={s.dmRName}>{r.n}</div>
                      <div className={`${s.dmRBadge} ${s[r.bc]}`}>{r.b}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`${s.hvFloat2} ${s.hf3}`}>
                <span style={{fontSize:16}}>✅</span>
                <div><div className={s.hfTxt}>Auto-organized</div><div className={s.hfSub}>By project & type</div></div>
              </div>
            </div>
            <div>
              <div className="sec-tag tag-blue">✦ Document Hub</div>
              <h2 className="sec-h2">All Documents, <span className="hl-blue">Perfectly Organized</span></h2>
              <p className="sec-p">No more digging through email attachments or shared drives. Every document is auto-categorized by project, type and date — searchable in seconds.</p>
              <ul className="check-list">
                <li>Drag-and-drop upload with 20+ supported formats</li>
                <li>AI-powered auto-tagging and categorization</li>
                <li>Full-text search across all documents</li>
                <li>Version history with change tracking</li>
              </ul>
              <a href="#pricing"><button className={s.scBtn}>Organize Your Documents →</button></a>
            </div>
          </div>
        </div>
      </section>

      <section className={s.showcase2}>
        <div className="wrap">
          <div className={`${s.showcaseGrid} ${s.showcaseGridRev}`}>
            <div style={{position:'relative'}}>
              <div className={s.portalMock}>
                <div className={s.pmBar}>
                  <div className={s.dmHDots}>
                    <div className={s.dmHDot} style={{background:'rgba(255,255,255,.2)'}} />
                    <div className={s.dmHDot} style={{background:'rgba(255,255,255,.15)'}} />
                    <div className={s.dmHDot} style={{background:'rgba(255,255,255,.1)'}} />
                  </div>
                  <div className={s.dmHTitle}>Client Portal — De Vries Installatie</div>
                </div>
                <div className={s.pmBody}>
                  <div className={s.pmStatRow}>
                    <div className={s.pmStatCard} style={{background:'rgba(42,92,186,.15)'}}>
                      <div className={s.pmStatN}>12</div><div className={s.pmStatL}>Total Documents</div>
                    </div>
                    <div className={s.pmStatCard} style={{background:'rgba(232,105,44,.15)'}}>
                      <div className={s.pmStatN}>3</div><div className={s.pmStatL}>Pending Review</div>
                    </div>
                  </div>
                  <div className={s.pmDocList}>
                    {[{ic:'📋',n:'Installation Report.pdf',b:'View',bc:'rbB'},{ic:'📐',n:'Floor Plan Final.dwg',b:'Approved',bc:'rbG'},{ic:'✍️',n:'Sign-off Form.pdf',b:'Sign',bc:'rbO'}].map((r,i) => (
                      <div key={i} className={s.pmDocRow}>
                        <div className={s.pmDrIcon}>{r.ic}</div>
                        <div className={s.pmDrName}>{r.n}</div>
                        <div className={`${s.pmDrBadge} ${s[r.bc]}`}>{r.b}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={`${s.hvFloat2} ${s.hf4}`}>
                <span style={{fontSize:16}}>🔗</span>
                <div><div className={s.hfTxt}>Secure Link</div><div className={s.hfSub}>No account needed</div></div>
              </div>
            </div>
            <div>
              <div className="sec-tag tag-orange">✦ Client Portals</div>
              <h2 className="sec-h2">Give Clients Their <span className="hl-orange">Own Portal</span></h2>
              <p className="sec-p">Share a branded, secure portal with every client. They can view documents, approve deliveries and sign forms — without creating an account.</p>
              <ul className="check-list">
                <li>Branded portals with your company logo</li>
                <li>No account creation required for clients</li>
                <li>Real-time document status updates</li>
                <li>Built-in approval workflows</li>
              </ul>
              <a href="#pricing"><button className={`${s.scBtn} ${s.scBtnDark}`}>Create Client Portals →</button></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
