'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styles from '@/styles/admin-project-detail.module.css';

export default function AdminProjectDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [activeTab, setActiveTab] = useState('documents');
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  // We assume this data fits the id "1" etc. In real app, fetch based on id.
  const project = {
    id,
    name: 'Residential Complex Amsterdam',
    address: 'Keizersgracht 123, 1015 CJ Amsterdam',
    client: 'VanderBilt Properties',
    manager: 'Jan de Vries',
    status: 'In Progress',
    created: '2026-01-15',
    budget: '250,000',
    spent: '98,400',
    docsCount: 24,
    maintCount: 5,
    photosCount: 12,
    teamCount: 3,
    woCount: 2
  };

  return (
    <div className={styles.content}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <Link href="/admin/dashboard" className={styles.bcLink}>Dashboard</Link>
        <span className={styles.bcSep}>/</span>
        <Link href="/admin/projects" className={styles.bcLink}>Projects</Link>
        <span className={styles.bcSep}>/</span>
        <span className={styles.bcCurrent}>{project.name}</span>
      </div>

      {/* Project Header */}
      <div className={styles.projHeader}>
        <div className={styles.projHeaderTop}>
          <div>
            <div className={styles.projTitle}>{project.name}</div>
            <div className={styles.projAddress}>📍 {project.address}</div>
          </div>
          <div className={styles.projHeaderRight}>
            <button className={styles.btnGhost}>✏️ Edit Project</button>
            <button className={styles.btnGhost} onClick={() => setShowPrintModal(true)}>🖨️ Print QR</button>
            <button className={styles.btnOrange} onClick={() => setShowShareModal(true)}>🔗 Share Access</button>
          </div>
        </div>
        <div className={styles.projMeta}>
          <span className={`${styles.statusBadge} ${styles.sbProgress}`}>{project.status}</span>
          <div className={styles.metaDot}></div>
          <span className={styles.metaText}>Created <strong>{project.created}</strong></span>
          <div className={styles.metaDot}></div>
          <span className={styles.metaText}><strong>{project.docsCount}</strong> documents</span>
        </div>
        <div className={styles.projStats}>
          <div className={styles.projStat}>
            <span className={styles.projStatIcon}>📄</span>
            <div><div className={styles.projStatVal}>{project.docsCount}</div><div className={styles.projStatLbl}>Documents</div></div>
          </div>
          <div className={styles.projStat}>
            <span className={styles.projStatIcon}>🔧</span>
            <div><div className={styles.projStatVal}>{project.maintCount}</div><div className={styles.projStatLbl}>Maintenance Tasks</div></div>
          </div>
          <div className={styles.projStat}>
            <span className={styles.projStatIcon}>🖼</span>
            <div><div className={styles.projStatVal}>{project.photosCount}</div><div className={styles.projStatLbl}>Photos</div></div>
          </div>
          <div className={styles.projStat}>
            <span className={styles.projStatIcon}>👥</span>
            <div><div className={styles.projStatVal}>{project.teamCount}</div><div className={styles.projStatLbl}>Team Members</div></div>
          </div>
          <div className={styles.projStat}>
            <span className={styles.projStatIcon}>📋</span>
            <div><div className={styles.projStatVal}>{project.woCount}</div><div className={styles.projStatLbl}>Work Orders</div></div>
          </div>
          <div className={styles.projStat}>
            <span className={styles.projStatIcon}>💶</span>
            <div><div className={styles.projStatVal}>€{project.budget}</div><div className={styles.projStatLbl}>Budget</div></div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className={styles.tabsWrap}>
        <button className={`${styles.tabBtn} ${activeTab === 'documents' ? styles.active : ''}`} onClick={() => setActiveTab('documents')}>
          📄 Documents <span className={styles.tabBadge}>{project.docsCount}</span>
        </button>
        <button className={`${styles.tabBtn} ${activeTab === 'photos' ? styles.active : ''}`} onClick={() => setActiveTab('photos')}>
          🖼 Photos <span className={styles.tabBadge}>{project.photosCount}</span>
        </button>
        <button className={`${styles.tabBtn} ${activeTab === 'maintenance' ? styles.active : ''}`} onClick={() => setActiveTab('maintenance')}>
          🔧 Maintenance Log <span className={styles.tabBadge}>{project.maintCount}</span>
        </button>
        <button className={`${styles.tabBtn} ${activeTab === 'workorders' ? styles.active : ''}`} onClick={() => setActiveTab('workorders')}>
          📋 Work Orders <span className={styles.tabBadge}>{project.woCount}</span>
        </button>
        <button className={`${styles.tabBtn} ${activeTab === 'qraccess' ? styles.active : ''}`} onClick={() => setActiveTab('qraccess')}>
          📷 QR Access
        </button>
        <button className={`${styles.tabBtn} ${activeTab === 'projectinfo' ? styles.active : ''}`} onClick={() => setActiveTab('projectinfo')}>
          ℹ️ Project Info
        </button>
        <button className={`${styles.tabBtn} ${activeTab === 'contacts' ? styles.active : ''}`} onClick={() => setActiveTab('contacts')}>
          👥 Contacts
        </button>
      </div>

      {/* Tab Panels */}
      {activeTab === 'documents' && (
        <div className={styles.tabPanel}>
          <div className={styles.docLayout}>
            {/* Sidebar dummy */}
            <div className={styles.folderSidebar}>
              <div className={styles.folderHeader}>
                <div className={styles.folderHeaderTitle}>📁 Folders</div>
                <button className={styles.btnNewFolder}>➕ New Folder</button>
              </div>
              <div className={styles.folderList}>
                <div className={`${styles.folderItem} ${styles.active}`}>
                  <span className={styles.folderIcon}>🗂</span>
                  <div className={styles.folderInfo}>
                    <div className={styles.folderName}>All Documents</div>
                    <div className={styles.folderCount}>24 files</div>
                  </div>
                  <span className={styles.folderCountBadge}>24</span>
                </div>
                <div className={styles.folderSep}></div>
                <div className={styles.folderItem}>
                  <span className={styles.folderIcon}>📐</span>
                  <div className={styles.folderInfo}>
                    <div className={styles.folderName}>Installation & Drawings</div>
                    <div className={styles.folderCount}>8 files</div>
                  </div>
                </div>
                <div className={styles.folderItem}>
                  <span className={styles.folderIcon}>📜</span>
                  <div className={styles.folderInfo}>
                    <div className={styles.folderName}>Certificates / Reports</div>
                    <div className={styles.folderCount}>6 files</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main dummy docs */}
            <div className={styles.docMain}>
              <div className={styles.docToolbar}>
                <div className={styles.docSearchWrap}>
                  <span className={styles.docSearchIcon}>🔍</span>
                  <input type="text" className={styles.docSearchInput} placeholder="Search documents..." />
                </div>
                <div className={styles.docToolbarRight}>
                  <button className={styles.btnOrange}>📤 Upload Files</button>
                </div>
              </div>
              <div className={styles.docContentPanel}>
                <div className={styles.docPanelHeader}>
                  <div className={styles.docPanelTitle}>🗂 All Documents</div>
                </div>
                <div className={styles.docList}>
                  {/* Dummy doc */}
                  <div className={styles.docItem}>
                    <div className={`${styles.docItemIcon} ${styles.iconPdf}`}>🔴</div>
                    <div className={styles.docItemInfo}>
                      <div className={styles.docItemName}>Electrical Installation Plan.pdf</div>
                      <div className={styles.docItemMeta}>Uploaded by <span>Jan de Vries</span></div>
                    </div>
                    <div className={styles.docItemSize}>2.4 MB</div>
                    <div className={styles.docItemDate}>2026-02-10</div>
                    <div className={styles.docItemBtns}>
                      <button className={styles.btnGhost} style={{padding:'6px 12px'}}>👁</button>
                    </div>
                  </div>
                  {/* Dummy doc */}
                  <div className={styles.docItem}>
                    <div className={`${styles.docItemIcon} ${styles.iconDoc}`}>🔵</div>
                    <div className={styles.docItemInfo}>
                      <div className={styles.docItemName}>KNX Programming Guide.docx</div>
                      <div className={styles.docItemMeta}>Uploaded by <span>Mark Peters</span></div>
                    </div>
                    <div className={styles.docItemSize}>1.8 MB</div>
                    <div className={styles.docItemDate}>2026-01-28</div>
                    <div className={styles.docItemBtns}>
                      <button className={styles.btnGhost} style={{padding:'6px 12px'}}>👁</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'projectinfo' && (
        <div className={styles.tabPanel}>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
               <div className={styles.infoCardTitle}>📋 General Information</div>
               <div className={styles.infoRow}><span className={styles.infoKey}>Project Name</span><span className={styles.infoVal}>{project.name}</span></div>
               <div className={styles.infoRow}><span className={styles.infoKey}>Status</span><span className={styles.infoVal}>{project.status}</span></div>
               <div className={styles.infoRow}><span className={styles.infoKey}>Client</span><span className={styles.infoVal}>{project.client}</span></div>
               <div className={styles.infoRow}><span className={styles.infoKey}>Manager</span><span className={styles.infoVal}>{project.manager}</span></div>
            </div>
            <div className={styles.infoCard}>
               <div className={styles.infoCardTitle}>📅 Timeline & Budget</div>
               <div className={styles.infoRow}><span className={styles.infoKey}>Start Date</span><span className={styles.infoVal}>{project.created}</span></div>
               <div className={styles.infoRow}><span className={styles.infoKey}>Budget</span><span className={styles.infoVal} style={{color:'var(--green)'}}>€ {project.budget}</span></div>
               <div className={styles.infoRow}><span className={styles.infoKey}>Spent</span><span className={styles.infoVal}>€ {project.spent}</span></div>
            </div>
            <div className={styles.infoCard} style={{gridColumn: '1 / -1'}}>
               <div className={styles.infoCardTitle}>📝 Project Description</div>
               <p style={{fontSize:'14px', color:'var(--gray)', lineHeight:1.7}}>Modern residential complex with 50 units, including full HVAC installation, electrical systems (KNX protocol), plumbing infrastructure, and smart home integration. The project includes installation of solar panels on the roof and EV charging stations in the underground parking garage.</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'maintenance' && (
        <div className={styles.tabPanel}>
           <div style={{display:'flex', justifyContent:'space-between', marginBottom:'16px'}}>
             <div style={{fontWeight:700}}>🔧 Maintenance Log</div>
             <button className={styles.btnOrange}>➕ Add Task</button>
           </div>
           <div className={styles.maintList}>
             <div className={styles.maintCard}>
               <div className={styles.maintIcon} style={{background: 'var(--amber-lt)'}}>⚡</div>
               <div className={styles.maintInfo}>
                 <div className={styles.maintTitle}>Quarterly Electrical Inspection</div>
                 <div className={styles.maintSub}>Assigned to: Mark Peters</div>
               </div>
               <div className={`${styles.maintDue} ${styles.soon}`}>Due: 2026-02-18</div>
               <span className={`${styles.pill} ${styles.pillAmber}`}>Due Soon</span>
             </div>
             <div className={styles.maintCard}>
               <div className={styles.maintIcon} style={{background: 'var(--red-lt)'}}>💡</div>
               <div className={styles.maintInfo}>
                 <div className={styles.maintTitle}>Emergency Lighting Test</div>
                 <div className={styles.maintSub}>Assigned to: Anna de Jong</div>
               </div>
               <div className={`${styles.maintDue} ${styles.overdue}`}>Due: 2026-02-15</div>
               <span className={`${styles.pill} ${styles.pillRed}`}>Overdue</span>
             </div>
           </div>
        </div>
      )}

      {activeTab === 'photos' && (
        <div className={styles.tabPanel}>
           <div className={styles.photosToolbar}>
             <div style={{fontWeight:700}}>📷 Site Photos</div>
             <button className={styles.btnOrange}>📤 Upload Photos</button>
           </div>
           <div className={styles.photoGrid}>
             <div className={styles.photoCard}>
               <div className={styles.photoPlaceholder}>🏗</div>
               <div className={styles.photoInfo}>
                 <div className={styles.photoName}>Foundation Work</div>
                 <div className={styles.photoDate}>Jan de Vries</div>
               </div>
             </div>
             <div className={styles.photoCard}>
               <div className={styles.photoPlaceholder}>🔌</div>
               <div className={styles.photoInfo}>
                 <div className={styles.photoName}>Electrical Panel</div>
                 <div className={styles.photoDate}>Mark Peters</div>
               </div>
             </div>
           </div>
        </div>
      )}

      {activeTab === 'qraccess' && (
        <div className={styles.tabPanel}>
          <div className={styles.qrLayout}>
            {/* LEFT: QR Card + Settings */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: 0 }}>
              
              {/* QR Visual Card */}
              <div className={styles.qrCard}>
                <div className={styles.qrCardHeader}>
                  <div className={styles.qrCardTitle}>📷 QR Code</div>
                  <div className={styles.qrBadgeActive}>
                    <span></span> Active
                  </div>
                </div>

                {/* Branding preview card */}
                <div className={styles.qrBranding}>
                  <div className={styles.brandTop}>
                    <div className={styles.brandLogo}>🏗</div>
                    <div>
                      <div className={styles.brandName}>BouwLogboek</div>
                      <div className={styles.brandTagline}>Installation Management</div>
                    </div>
                  </div>
                  <div className={styles.qrVisualBox}>QR</div>
                  <div className={styles.qrInstructions}>
                    <div style={{ fontWeight: 700, color: 'var(--black)', marginBottom: 4 }}>Raadpleeg de documenten:</div>
                    <div>1. Scan de QR-code</div>
                    <div>2. Of ga naar: <strong style={{color:'var(--blue)'}}>app.bouwlogboek.nl/p/ABC123</strong></div>
                    <div>3. Log in met code: <strong style={{color:'var(--orange)'}}>ABC123</strong></div>
                  </div>
                  <div className={styles.qrProjName}>{project.name}</div>
                  <div className={styles.qrProjAddr}>{project.address}</div>
                  <div className={styles.qrContact}>info@bouwlogboek.nl | www.bouwlogboek.nl</div>
                </div>

                {/* Action buttons */}
                <div className={styles.qrActionRow}>
                  <button className={styles.btnOrange} style={{ flex: 1, justifyContent: 'center' }} onClick={() => setShowPrintModal(true)}>🖨️ Print / Download</button>
                  <button className={styles.btnGhost}>🎨 Branding</button>
                </div>
              </div>

              {/* QR Settings Card */}
              <div className={styles.qrCard}>
                <div className={styles.qrCardHeader} style={{borderBottom: '1px solid var(--border)', paddingBottom: 12, marginBottom: 16}}>
                  <div className={styles.qrCardTitle}>⚙️ QR Settings</div>
                </div>

                <div className={styles.qrFormGroup}>
                  <label className={styles.qrLabel}>Custom URL / Access Link</label>
                  <div className={styles.qrInputRow}>
                    <input type="text" className={styles.qrInput} defaultValue="app.bouwlogboek.nl/p/ABC123" />
                    <button className={styles.qrSaveBtn}>Save</button>
                  </div>
                </div>

                <div className={styles.qrFormGroup}>
                  <label className={styles.qrLabel}>
                    PIN Protection
                    <label style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', textTransform: 'none', letterSpacing: 'normal' }}>
                      <input type="checkbox" defaultChecked style={{ accentColor: 'var(--blue)', width: 15, height: 15 }} />
                      <span style={{ fontSize: 11, fontWeight: 500, color: 'var(--gray)' }}>Enabled</span>
                    </label>
                  </label>
                  <div className={styles.qrInputRow}>
                    <input type="text" className={`${styles.qrInput} ${styles.qrInputMono}`} defaultValue="ABC123" maxLength={8} />
                    <button className={styles.qrUpdateBtn}>Update</button>
                  </div>
                </div>

                <div className={styles.qrFormGroup}>
                  <label className={styles.qrLabel}>QR Status</label>
                  <div className={styles.qrStatusBtns}>
                    <button className={`${styles.qrStatusBtn} ${styles.active}`}>✅ Active</button>
                    <button className={styles.qrStatusBtn}>⏸ Paused</button>
                    <button className={styles.qrStatusBtn}>🔴 Inactive</button>
                  </div>
                </div>
              </div>
            </div>

            {/* MIDDLE: Access Log */}
            <div className={styles.logPanel} style={{minWidth: 0}}>
              <div className={styles.logHeader}>
                <div className={styles.qrCardTitle}>🔐 Access Log</div>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: 'var(--gray)' }}>8 entries</span>
                  <button className={styles.btnGhost} style={{ padding: '6px 12px', fontSize: 11 }}>📥 Export</button>
                </div>
              </div>
              <div className={styles.logFilters}>
                <button className={`${styles.logFilterBtn} ${styles.active}`}>All</button>
                <button className={styles.logFilterBtn}>✅ Success</button>
                <button className={styles.logFilterBtn}>❌ Failed</button>
                <button className={styles.logFilterBtn}>🔑 PIN Entry</button>
              </div>
              <div className={styles.logListWrapper}>
                <div className={styles.accessLogItem}>
                  <div className={`${styles.aliAv}`}>AG</div>
                  <div className={styles.aliInfo}>
                    <div className={styles.aliName}>Arrora Gaur</div>
                    <div className={styles.aliSub}>Project portal opened · Amsterdam · Mobile</div>
                  </div>
                  <div className={styles.aliMeta}>
                    <div className={styles.aliTime}>2 hours ago</div>
                    <div className={`${styles.aliStatus} ${styles.success}`}>✅ Success</div>
                  </div>
                </div>
                <div className={styles.accessLogItem}>
                  <div className={`${styles.aliAv} ${styles.orange}`}>JM</div>
                  <div className={styles.aliInfo}>
                    <div className={styles.aliName}>James Mullican</div>
                    <div className={styles.aliSub}>PIN entry successful · Rotterdam · Desktop</div>
                  </div>
                  <div className={styles.aliMeta}>
                    <div className={styles.aliTime}>5 hours ago</div>
                    <div className={`${styles.aliStatus} ${styles.success}`}>🔑 Success</div>
                  </div>
                </div>
                <div className={styles.accessLogItem}>
                  <div className={`${styles.aliAv} ${styles.failed}`}>?</div>
                  <div className={styles.aliInfo}>
                    <div className={styles.aliName}>Unknown</div>
                    <div className={styles.aliSub}>Wrong PIN entered (3x) · Unknown IP</div>
                  </div>
                  <div className={styles.aliMeta}>
                    <div className={styles.aliTime}>Yesterday 09:12</div>
                    <div className={`${styles.aliStatus} ${styles.failed}`}>❌ Failed</div>
                  </div>
                </div>
                <div className={styles.accessLogItem}>
                  <div className={`${styles.aliAv} ${styles.green}`}>MP</div>
                  <div className={styles.aliInfo}>
                    <div className={styles.aliName}>Mark Peters</div>
                    <div className={styles.aliSub}>Maintenance log viewed · Utrecht · Mobile</div>
                  </div>
                  <div className={styles.aliMeta}>
                    <div className={styles.aliTime}>2 days ago</div>
                    <div className={`${styles.aliStatus} ${styles.success}`}>➖ Success</div>
                  </div>
                </div>
                <div className={styles.accessLogItem}>
                  <div className={`${styles.aliAv} ${styles.failed}`}>?</div>
                  <div className={styles.aliInfo}>
                    <div className={styles.aliName}>Unknown</div>
                    <div className={styles.aliSub}>Invalid access attempt · Unknown IP</div>
                  </div>
                  <div className={styles.aliMeta}>
                    <div className={styles.aliTime}>4 days ago</div>
                    <div className={`${styles.aliStatus} ${styles.failed}`}>❌ Failed</div>
                  </div>
                </div>
              </div>
              <div className={styles.logPagination}>
                <span style={{ fontSize: 12, color: 'var(--gray)' }}>Showing <span style={{fontWeight:700, color:'var(--black)'}}>1–5</span> of <span style={{fontWeight:700, color:'var(--black)'}}>8</span></span>
                <div style={{ display: 'flex', gap: 4 }}>
                  <button className={styles.btnGhost} style={{width: 34, height: 34, padding: 0, justifyContent: 'center'}}>‹</button>
                  <button className={styles.btnOrange} style={{width: 34, height: 34, padding: 0, justifyContent: 'center'}}>1</button>
                  <button className={styles.btnGhost} style={{width: 34, height: 34, padding: 0, justifyContent: 'center'}}>›</button>
                </div>
              </div>
            </div>

            {/* RIGHT: Scan Stats */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: 0 }}>
              <div className={styles.qrCard}>
                <div className={styles.qrCardHeader} style={{borderBottom: '1px solid var(--border)', paddingBottom: 12, marginBottom: 16}}>
                  <div className={styles.qrCardTitle}>📊 Scan Statistics</div>
                </div>
                
                <div className={styles.statGrid}>
                  <div className={`${styles.statBox} ${styles.blue}`}>
                    <div className={styles.statVal}>15</div>
                    <div className={styles.statLbl}>Total Scans</div>
                  </div>
                  <div className={`${styles.statBox} ${styles.green}`}>
                    <div className={styles.statVal}>13</div>
                    <div className={styles.statLbl}>Successful</div>
                  </div>
                  <div className={`${styles.statBox} ${styles.red}`}>
                    <div className={styles.statVal}>2</div>
                    <div className={styles.statLbl}>Failed</div>
                  </div>
                  <div className={`${styles.statBox} ${styles.orange}`}>
                    <div className={styles.statVal}>3</div>
                    <div className={styles.statLbl}>This Week</div>
                  </div>
                </div>

                <div className={styles.chartLbl}>Daily Scans (Last 7 Days)</div>
                <div className={styles.barChart}>
                  {/* Mock Bar Chart */}
                  <div style={{flex: 1, backgroundColor: 'var(--border)', height: '20%', borderRadius: '4px 4px 0 0'}}></div>
                  <div style={{flex: 1, backgroundColor: 'var(--border)', height: '40%', borderRadius: '4px 4px 0 0'}}></div>
                  <div style={{flex: 1, backgroundColor: 'var(--border)', height: '10%', borderRadius: '4px 4px 0 0'}}></div>
                  <div style={{flex: 1, backgroundColor: 'var(--border)', height: '60%', borderRadius: '4px 4px 0 0'}}></div>
                  <div style={{flex: 1, backgroundColor: 'var(--border)', height: '30%', borderRadius: '4px 4px 0 0'}}></div>
                  <div style={{flex: 1, backgroundColor: 'var(--border)', height: '80%', borderRadius: '4px 4px 0 0'}}></div>
                  <div style={{flex: 1, backgroundColor: 'var(--orange)', height: '100%', borderRadius: '4px 4px 0 0'}}></div>
                </div>
              </div>

              {/* Unique visitors */}
              <div className={styles.qrCard}>
                <div className={styles.qrCardHeader} style={{borderBottom: '1px solid var(--border)', paddingBottom: 12, marginBottom: 14}}>
                  <div className={styles.qrCardTitle}>👥 Unique Visitors</div>
                </div>
                
                <div className={styles.visitorList}>
                  <div className={styles.visitorItem}>
                    <div className={`${styles.visitorAv} ${styles.blue}`}>AG</div>
                    <div className={styles.visitorInfo}>
                      <div className={styles.visitorName}>Arrora Gaur</div>
                      <div className={styles.visitorMeta}>6 scans · Last: 2 hrs ago</div>
                    </div>
                    <span className={`${styles.visitorRole} ${styles.client}`}>Client</span>
                  </div>
                  <div className={styles.visitorItem}>
                    <div className={`${styles.visitorAv} ${styles.orange}`}>JM</div>
                    <div className={styles.visitorInfo}>
                      <div className={styles.visitorName}>James Mullican</div>
                      <div className={styles.visitorMeta}>4 scans · Last: Yesterday</div>
                    </div>
                    <span className={`${styles.visitorRole} ${styles.team}`}>Team</span>
                  </div>
                  <div className={styles.visitorItem}>
                    <div className={`${styles.visitorAv} ${styles.gray}`}>?</div>
                    <div className={styles.visitorInfo}>
                      <div className={styles.visitorName}>Unknown Visitor</div>
                      <div className={styles.visitorMeta}>2 attempts · Wrong PIN</div>
                    </div>
                    <span className={`${styles.visitorRole} ${styles.failed}`}>Failed</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {activeTab === 'contacts' && (
        <div className={styles.tabPanel}>
           <div style={{display:'flex', justifyContent:'space-between', marginBottom:'16px'}}>
             <div style={{fontWeight:700}}>👥 Project Contacts</div>
             <button className={styles.btnOrange}>➕ Add Contact</button>
           </div>
           <div className={styles.contactsGrid}>
             <div className={styles.contactCard}>
               <div className={styles.contactAv}>JV</div>
               <div>
                  <div className={styles.contactName}>{project.manager}</div>
                  <div className={styles.contactRole}>Project Manager</div>
                  <div className={styles.contactDetail}>📧 jan@example.com</div>
               </div>
             </div>
           </div>
        </div>
      )}

      {activeTab === 'workorders' && (
        <div className={styles.tabPanel}>
           <div style={{display:'flex', justifyContent:'space-between', marginBottom:'16px'}}>
             <div style={{fontWeight:700}}>📋 Work Orders</div>
             <button className={styles.btnOrange}>➕ New Work Order</button>
           </div>
           <div className={styles.maintList}>
             <div className={styles.maintCard}>
               <div className={styles.maintIcon} style={{background: 'var(--orange-lt)'}}>🔌</div>
               <div className={styles.maintInfo}>
                 <div className={styles.maintTitle}>WO-2026-001 · Electrical Wiring Floors 3–5</div>
                 <div className={styles.maintSub}>Contractor: ElectroBouw BV</div>
               </div>
               <span className={`${styles.pill} ${styles.pillBlue}`}>In Progress</span>
             </div>
           </div>
        </div>
      )}

      {/* MODALS */}
      {showPrintModal && (
        <div className={styles.modalOverlay} onClick={() => setShowPrintModal(false)}>
          <div className={`${styles.modal} ${styles.modalSm}`} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.modalHeaderLeft}>
                <div className={styles.modalIconWrap}>🖨️</div>
                <div className={styles.modalTitle}>Print QR Code</div>
              </div>
              <div className={styles.modalClose} onClick={() => setShowPrintModal(false)}>✕</div>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.qrPrintBox}>
                <div className={styles.qrPrintVisual}>QR</div>
                <div style={{fontSize: 15, fontWeight: 700, color: 'var(--black)', marginBottom: 4}}>{project.name}</div>
                <div style={{fontSize: 13, color: 'var(--gray)', marginBottom: 8}}>{project.address}</div>
                <div style={{fontSize: 22, fontWeight: 900, color: 'var(--blue)', letterSpacing: 4, fontFamily: 'monospace', background: 'var(--blue-lt)', padding: '10px 20px', borderRadius: 8, display: 'inline-block', marginBottom: 16}}>ABC123</div>
                <div style={{fontSize: 12, color: 'var(--gray)'}}>Scan to access project portal</div>
              </div>
              <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
                <div className={styles.modalFormGroup} style={{ flex: 1 }}>
                  <label className={styles.formLabel} style={{fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gray)'}}>Paper Size</label>
                  <div className={styles.selectWrapper}>
                    <select className={styles.qrInput} style={{appearance: 'none', background: 'var(--cream) url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'10\' height=\'10\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%237A7A7A\' stroke-width=\'2\'%3E%3Cpath d=\'M6 9l6 6 6-6\'/%3E%3C/svg%3E") no-repeat right 12px center', paddingRight: 30}}>
                      <option>A4</option>
                      <option>A5</option>
                      <option>Label 10×10cm</option>
                    </select>
                  </div>
                </div>
                <div className={styles.modalFormGroup} style={{ flex: 1 }}>
                  <label className={styles.formLabel} style={{fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gray)'}}>Copies</label>
                  <input type="number" className={styles.qrInput} defaultValue="1" min="1" max="100" />
                </div>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.modalCancel} onClick={() => setShowPrintModal(false)}>Cancel</button>
              <button className={styles.modalSubmit} style={{background: 'var(--gray)'}} onClick={() => setShowPrintModal(false)}>📥 Save PDF</button>
              <button className={styles.modalSubmit}>🖨️ Print Now</button>
            </div>
          </div>
        </div>
      )}

      {showShareModal && (
        <div className={styles.modalOverlay} onClick={() => setShowShareModal(false)}>
          <div className={`${styles.modal} ${styles.modalSm}`} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.modalHeaderLeft}>
                <div className={styles.modalIconWrap}>🔗</div>
                <div className={styles.modalTitle}>Share Access</div>
              </div>
              <div className={styles.modalClose} onClick={() => setShowShareModal(false)}>✕</div>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.modalFormGroup} style={{marginBottom: 14}}>
                <label style={{fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gray)', marginBottom: 6}}>Invite by Email</label>
                <div style={{ display: 'flex', gap: 10 }}>
                  <input type="email" className={styles.qrInput} placeholder="name@company.nl" />
                  <select className={styles.qrInput} style={{flex: '0 0 auto', width: 'auto', appearance: 'none', background: 'var(--cream) url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'10\' height=\'10\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%237A7A7A\' stroke-width=\'2\'%3E%3Cpath d=\'M6 9l6 6 6-6\'/%3E%3C/svg%3E") no-repeat right 12px center', paddingRight: 30}}>
                    <option>View</option>
                    <option>Edit</option>
                    <option>Admin</option>
                  </select>
                  <button className={styles.modalSubmit} style={{padding: '12px 16px', margin: 0}}>Send</button>
                </div>
              </div>
              <div style={{fontSize: 12, fontWeight: 700, color: 'var(--gray)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8}}>People with Access</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, background: 'var(--cream)', borderRadius: 10 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 8, background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 900, color: 'white', flexShrink: 0 }}>JV</div>
                  <div style={{ flex: 1, fontSize: 13, fontWeight: 600, color: 'var(--black)' }}>Jan de Vries <span style={{fontSize: 11, color: 'var(--gray)'}}>(you)</span></div>
                  <span style={{ padding: '3px 10px', borderRadius: 6, fontSize: 11, fontWeight: 700, background: 'var(--blue-lt)', color: 'var(--blue)' }}>Admin</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, background: 'var(--cream)', borderRadius: 10 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 8, background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 900, color: 'white', flexShrink: 0 }}>AG</div>
                  <div style={{ flex: 1, fontSize: 13, fontWeight: 600, color: 'var(--black)' }}>Arrora Gaur</div>
                  <span style={{ padding: '3px 10px', borderRadius: 6, fontSize: 11, fontWeight: 700, background: 'var(--green-lt)', color: 'var(--green)' }}>View</span>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, color: 'var(--gray-lt)' }}>✕</button>
                </div>
              </div>
              <div style={{fontSize: 12, fontWeight: 700, color: 'var(--gray)', letterSpacing: 1, textTransform: 'uppercase', margin: '14px 0 8px'}}>Shareable Link</div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 14 }}>
                <input type="text" className={styles.qrInput} defaultValue="https://app.bouwlogboek.nl/p/ABC123" readOnly style={{fontFamily: 'monospace', fontSize: 12, color: 'var(--gray)'}} />
                <button style={{ padding: '11px 16px', background: 'var(--blue)', border: 'none', borderRadius: 10, fontFamily: 'inherit', fontSize: 12, fontWeight: 700, color: 'white', cursor: 'pointer', whiteSpace: 'nowrap' }}>📋 Copy</button>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.modalCancel} onClick={() => setShowShareModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
