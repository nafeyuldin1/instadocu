'use client';

import React from 'react';
import styles from '@/styles/admin-dashboard.module.css';

export default function AdminDashboardPage() {
  const chartMonths = ['J','F','M','A','M','J','J','A','S','O','N','D'];
  const chartVals = [22,28,35,42,38,48,40,44,36,52,45,50];
  const maxVal = Math.max(...chartVals);

  return (
    <div className={styles.contentArea}>
      {/* Welcome Row */}
      <div className={styles.welcomeRow}>
        <div>
          <div className={styles.welcomeTitle}>Welcome Back, <span>Jan</span>! 👋</div>
          <div className={styles.welcomeDate}>donderdag 12 februari 2026 · Here's what's happening today</div>
        </div>
        <div className={styles.welcomeActions}>
          <button className={styles.btnSecondary}>📊 Export Report</button>
          <button className={styles.btnPrimary}>➕ New Project</button>
        </div>
      </div>

      {/* Stats Row */}
      <div className={styles.statsRow}>
        <div className={styles.statCard}>
          <div className={styles.statCardTop}>
            <div className={styles.statIcon}>📁</div>
            <div className={`${styles.statTrend} ${styles.statTrendUp}`}>↑ 3% vs last 7 days</div>
          </div>
          <div className={styles.statNum}>45</div>
          <div className={styles.statName}>Active Projects</div>
          <div className={styles.statPeriod}>Updated 2 hours ago</div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statCardTop}>
            <div className={styles.statIcon}>🔧</div>
            <div className={`${styles.statTrend} ${styles.statTrendDown}`}>↓ 3% vs last 7 days</div>
          </div>
          <div className={styles.statNum}>12</div>
          <div className={styles.statName}>Upcoming Maintenance</div>
          <div className={styles.statPeriod}>Next: Feb 18, 2026</div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statCardTop}>
            <div className={styles.statIcon}>📄</div>
            <div className={`${styles.statTrend} ${styles.statTrendUp}`}>↑ 3% vs last 7 days</div>
          </div>
          <div className={styles.statNum}>2,340</div>
          <div className={styles.statName}>Documents</div>
          <div className={styles.statPeriod}>156 added this week</div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statCardTop}>
            <div className={styles.statIcon}>🔐</div>
            <div className={`${styles.statTrend} ${styles.statTrendUp}`}>↑ 8% vs last 7 days</div>
          </div>
          <div className={styles.statNum}>156</div>
          <div className={styles.statName}>Portal Accesses</div>
          <div className={styles.statPeriod}>Active users today</div>
        </div>
      </div>

      {/* Mid Row */}
      <div className={styles.midRow}>
        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <div className={styles.panelTitle}>
              <div className={styles.panelTitleDot}></div>
              Recent Activity
            </div>
            <button className={styles.viewAllBtn}>View all</button>
          </div>
          <div className={styles.panelBody}>
            <div className={styles.actItem}>
              <div className={`${styles.actIconWrap} ${styles.actIconBlue}`}>📄</div>
              <div className={styles.actInfo}>
                <div className={styles.actTitle}>Document uploaded to Residential Complex Amsterdam</div>
                <div className={styles.actMeta}>2 hours ago · <span>Jan de Vries</span></div>
              </div>
            </div>
            <div className={styles.actItem}>
              <div className={`${styles.actIconWrap} ${styles.actIconOrange}`}>🔧</div>
              <div className={styles.actInfo}>
                <div className={styles.actTitle}>Maintenance completed on Shopping Mall Utrecht</div>
                <div className={styles.actMeta}>5 hours ago · <span>Tom Visser</span></div>
              </div>
            </div>
            <div className={styles.actItem}>
              <div className={`${styles.actIconWrap} ${styles.actIconGreen}`}>📁</div>
              <div className={styles.actInfo}>
                <div className={styles.actTitle}>New project created: School Renovation Eindhoven</div>
                <div className={styles.actMeta}>Yesterday · <span>Lucas Vermeer</span></div>
              </div>
            </div>
            <div className={styles.actItem}>
              <div className={`${styles.actIconWrap} ${styles.actIconGray}`}>📷</div>
              <div className={styles.actInfo}>
                <div className={styles.actTitle}>QR code scanned 15 times for Office Building Rotterdam</div>
                <div className={styles.actMeta}>2 days ago · <span>System</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <div className={styles.panelTitle}>
              <div className={styles.panelTitleDot}></div>
              Upcoming Maintenance
            </div>
            <button className={styles.viewAllBtn}>View all</button>
          </div>
          <div className={styles.panelBody}>
            <div className={styles.maintItem}>
              <div className={styles.maintIcon}>⚡</div>
              <div className={styles.maintInfo}>
                <div className={styles.maintTitle}>Quarterly Electrical Inspection</div>
                <div className={styles.maintSub}>Residential Complex Amsterdam · Due: 2026-02-18 · <span>Mark Peters</span></div>
              </div>
              <div className={`${styles.statusPill} ${styles.statusDueSoon}`}>Due Soon</div>
            </div>
            <div className={styles.maintItem}>
              <div className={styles.maintIcon}>💡</div>
              <div className={styles.maintInfo}>
                <div className={styles.maintTitle}>Emergency Lighting Test</div>
                <div className={styles.maintSub}>Office Building Rotterdam · Due: 2026-02-15 · <span>Anna de Jong</span></div>
              </div>
              <div className={`${styles.statusPill} ${styles.statusOverdue}`}>Overdue</div>
            </div>
            <div className={styles.maintItem}>
              <div className={styles.maintIcon}>🔥</div>
              <div className={styles.maintInfo}>
                <div className={styles.maintTitle}>Fire Alarm System Check</div>
                <div className={styles.maintSub}>Shopping Mall Utrecht · Due: 2026-03-01 · <span>Tom Visser</span></div>
              </div>
              <div className={`${styles.statusPill} ${styles.statusOnTrack}`}>On Track</div>
            </div>
            <div className={styles.maintItem}>
              <div className={styles.maintIcon}>❄️</div>
              <div className={styles.maintInfo}>
                <div className={styles.maintTitle}>HVAC System Maintenance</div>
                <div className={styles.maintSub}>School Renovation Eindhoven · Due: 2026-03-10 · <span>Lucas Vermeer</span></div>
              </div>
              <div className={`${styles.statusPill} ${styles.statusOnTrack}`}>On Track</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className={styles.bottomRow}>
        <div className={styles.projectsPanel}>
          <div className={styles.panelHeader}>
            <div className={styles.panelTitle}>
              <div className={styles.panelTitleDot}></div>
              Recent Projects
            </div>
            <button className={styles.viewAllBtn}>View all</button>
          </div>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th}>Project Name</th>
                  <th className={styles.th}>Address</th>
                  <th className={styles.th}>Client</th>
                  <th className={styles.th}>Status</th>
                  <th className={styles.th}>Last Updated</th>
                  <th className={styles.th}>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.tr}>
                  <td className={`${styles.td} ${styles.tdProject}`}>Residential Complex Amsterdam</td>
                  <td className={`${styles.td} ${styles.tdAddress}`}>Keizersgracht 123, 1015 CJ Amsterdam</td>
                  <td className={`${styles.td} ${styles.tdClient}`}>VanderBilt Properties</td>
                  <td className={styles.td}><span className={`${styles.projStatus} ${styles.statusInProgress}`}>In Progress</span></td>
                  <td className={`${styles.td} ${styles.tdAddress}`}>2 days ago</td>
                  <td className={styles.td}><button className={styles.viewBtn}>View</button></td>
                </tr>
                <tr className={styles.tr}>
                  <td className={`${styles.td} ${styles.tdProject}`}>Office Building Rotterdam</td>
                  <td className={`${styles.td} ${styles.tdAddress}`}>Coolsingel 45, 3011 AD Rotterdam</td>
                  <td className={`${styles.td} ${styles.tdClient}`}>Rotterdam Business Center</td>
                  <td className={styles.td}><span className={`${styles.projStatus} ${styles.statusPlanning}`}>Planning</span></td>
                  <td className={`${styles.td} ${styles.tdAddress}`}>5 hours ago</td>
                  <td className={styles.td}><button className={styles.viewBtn}>View</button></td>
                </tr>
                <tr className={styles.tr}>
                  <td className={`${styles.td} ${styles.tdProject}`}>Shopping Mall Utrecht</td>
                  <td className={`${styles.td} ${styles.tdAddress}`}>Vredenburg 89, 3511 BD Utrecht</td>
                  <td className={`${styles.td} ${styles.tdClient}`}>Rotterdam Business Center</td>
                  <td className={styles.td}><span className={`${styles.projStatus} ${styles.statusCompleted}`}>Completed</span></td>
                  <td className={`${styles.td} ${styles.tdAddress}`}>1 week ago</td>
                  <td className={styles.td}><button className={styles.viewBtn}>View</button></td>
                </tr>
                <tr className={styles.tr}>
                  <td className={`${styles.td} ${styles.tdProject}`}>School Renovation Eindhoven</td>
                  <td className={`${styles.td} ${styles.tdAddress}`}>Kleine Berg 12, 5611 JS Eindhoven</td>
                  <td className={`${styles.td} ${styles.tdClient}`}>Eindhoven Municipality</td>
                  <td className={styles.td}><span className={`${styles.projStatus} ${styles.statusReview}`}>Review</span></td>
                  <td className={`${styles.td} ${styles.tdAddress}`}>3 days ago</td>
                  <td className={styles.td}><button className={styles.viewBtn}>View</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className={styles.chartPanel}>
            <div className={styles.panelHeader}>
              <div className={styles.panelTitle}>
                <div className={styles.panelTitleDot}></div>
                Project Status
              </div>
            </div>
            
            <div className={styles.donutWrap}>
              <svg className={styles.donutSvg} viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="75" fill="none" stroke="#f3f4f6" strokeWidth="28"/>
                <circle cx="100" cy="100" r="75" fill="none" stroke="#2A5CBA" strokeWidth="28"
                  strokeDasharray="164.9 306.2" strokeDashoffset="0" strokeLinecap="round"
                  transform="rotate(-90 100 100)"/>
                <circle cx="100" cy="100" r="75" fill="none" stroke="#16a34a" strokeWidth="28"
                  strokeDasharray="141.4 329.6" strokeDashoffset="-164.9" strokeLinecap="round"
                  transform="rotate(-90 100 100)"/>
                <circle cx="100" cy="100" r="75" fill="none" stroke="#E8692C" strokeWidth="28"
                  strokeDasharray="94.2 376.9" strokeDashoffset="-306.3" strokeLinecap="round"
                  transform="rotate(-90 100 100)"/>
                <circle cx="100" cy="100" r="75" fill="none" stroke="#7c3aed" strokeWidth="28"
                  strokeDasharray="47.1 424.1" strokeDashoffset="-400.5" strokeLinecap="round"
                  transform="rotate(-90 100 100)"/>
                <circle cx="100" cy="100" r="75" fill="none" stroke="#9ca3af" strokeWidth="28"
                  strokeDasharray="23.6 447.6" strokeDashoffset="-447.6" strokeLinecap="round"
                  transform="rotate(-90 100 100)"/>
                <text x="100" y="95" textAnchor="middle" fontFamily="Satoshi,sans-serif" fontSize="28" fontWeight="900" fill="#010101">45</text>
                <text x="100" y="115" textAnchor="middle" fontFamily="Satoshi,sans-serif" fontSize="11" fontWeight="500" fill="#7A7A7A">Projects</text>
              </svg>

              <div className={styles.legend}>
                <div className={styles.legendItem}>
                  <div className={styles.legendLeft}>
                    <div className={styles.legendDot} style={{ background: '#2A5CBA' }}></div>
                    <div className={styles.legendName}>In Progress</div>
                  </div>
                  <div className={styles.legendVal}>16 (35%)</div>
                </div>
                <div className={styles.legendItem}>
                  <div className={styles.legendLeft}>
                    <div className={styles.legendDot} style={{ background: '#16a34a' }}></div>
                    <div className={styles.legendName}>Completed</div>
                  </div>
                  <div className={styles.legendVal}>14 (30%)</div>
                </div>
                <div className={styles.legendItem}>
                  <div className={styles.legendLeft}>
                    <div className={styles.legendDot} style={{ background: '#E8692C' }}></div>
                    <div className={styles.legendName}>Planning</div>
                  </div>
                  <div className={styles.legendVal}>9 (20%)</div>
                </div>
                <div className={styles.legendItem}>
                  <div className={styles.legendLeft}>
                    <div className={styles.legendDot} style={{ background: '#7c3aed' }}></div>
                    <div className={styles.legendName}>Review</div>
                  </div>
                  <div className={styles.legendVal}>5 (10%)</div>
                </div>
              </div>
            </div>

            <div className={styles.miniChartPanel}>
              <div className={styles.miniChartTitle}>
                Monthly Activity
                <span>Jan — Dec 2026</span>
              </div>
              <div className={styles.barChart}>
                {chartMonths.map((m, i) => {
                  const h = Math.round((chartVals[i] / maxVal) * 52);
                  const isActive = i === 5;
                  
                  return (
                    <div key={i} className={styles.barWrap}>
                      <div 
                        className={styles.bar} 
                        style={{ 
                          height: `${h}px`, 
                          background: isActive ? 'var(--orange)' : 'var(--blue-lt)',
                          border: isActive ? 'none' : '1px solid var(--border)' 
                        }}
                      />
                      <div className={styles.barLbl}>{m}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
