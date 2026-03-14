'use client';

import React, { useState } from 'react';
import styles from '@/styles/admin-qr-codes.module.css';

// Mock Data
const initialQrCodes = [
  { id:1,  project:'Residential Complex Amsterdam',   url:'www.project.nl/rotterdam-office',  created:'2026-01-15', expiry:'Never',      status:'Active',       scans:87,  lastScanned:'2 hours ago',  pin:'4821', recent:true },
  { id:2,  project:'Quarterly Electrical Inspection', url:'www.project.nl/rotterdam-office',  created:'2026-01-15', expiry:'2027-02-01', status:'Active',       scans:34,  lastScanned:'Yesterday',    pin:'7734', recent:false },
  { id:3,  project:'Quarterly Electrical Inspection', url:'www.project.nl/rotterdam-office',  created:'2026-01-15', expiry:'2027-02-01', status:'Active',       scans:12,  lastScanned:'Yesterday',    pin:'2219', recent:false },
  { id:4,  project:'Office Building Rotterdam',       url:'www.project.nl/office-building',   created:'2025-11-10', expiry:'2026-03-01', status:'Expiring Soon',scans:156, lastScanned:'3 days ago',   pin:'9901', recent:false },
  { id:5,  project:'Quarterly Electrical Inspection', url:'www.project.nl/rotterdam-office',  created:'2026-01-15', expiry:'2027-02-01', status:'Active',       scans:8,   lastScanned:'Yesterday',    pin:'5563', recent:false },
  { id:6,  project:'Shopping Mall Utrecht',           url:'www.project.nl/shopping-mall',     created:'2025-09-20', expiry:'2026-02-28', status:'Expiring Soon',scans:201, lastScanned:'1 week ago',   pin:'3377', recent:false },
  { id:7,  project:'Hospital Wing Den Haag',          url:'www.project.nl/hospital-wing',     created:'2025-08-05', expiry:'2025-12-31', status:'Expired',      scans:445, lastScanned:'2 months ago', pin:'1144', recent:false },
  { id:8,  project:'Quarterly Electrical Inspection', url:'www.project.nl/rotterdam-office',  created:'2026-01-15', expiry:'2027-02-01', status:'Active',       scans:23,  lastScanned:'Yesterday',    pin:'8892', recent:false },
  { id:9,  project:'School Renovation Eindhoven',     url:'www.project.nl/school-eindhoven',  created:'2026-01-20', expiry:'Never',      status:'Active',       scans:67,  lastScanned:'Today',        pin:'6654', recent:true },
  { id:10, project:'Quarterly Electrical Inspection', url:'www.project.nl/rotterdam-office',  created:'2026-01-15', expiry:'2027-02-01', status:'Active',       scans:19,  lastScanned:'Yesterday',    pin:'3309', recent:false },
  { id:11, project:'Office Building Rotterdam',       url:'www.project.nl/office-v2',         created:'2025-12-01', expiry:'2026-12-01', status:'Inactive',     scans:0,   lastScanned:'Never',        pin:'7721', recent:false },
  { id:12, project:'Residential Complex Amsterdam',   url:'www.project.nl/res-complex',       created:'2026-02-01', expiry:'Never',      status:'Active',       scans:41,  lastScanned:'4 hours ago',  pin:'5588', recent:true },
];

export default function AdminQRCodesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [projectFilter, setProjectFilter] = useState('');
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());
  const [pinVisible, setPinVisible] = useState<Set<number>>(new Set());
  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showColMenu, setShowColMenu] = useState(false);
  const [cols, setCols] = useState({
    project: true, url: true, created: true, expiry: true,
    status: true, scan: true, lastscanned: true, pin: true, actions: true
  });

  const filtered = initialQrCodes.filter(q => {
    const matchSearch = !searchTerm || q.project.toLowerCase().includes(searchTerm.toLowerCase()) || q.url.toLowerCase().includes(searchTerm.toLowerCase()) || q.pin.includes(searchTerm);
    const matchStatus = !statusFilter || q.status === statusFilter;
    const matchProj = !projectFilter || q.project === projectFilter;
    return matchSearch && matchStatus && matchProj;
  });

  const toggleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedIds(new Set(filtered.map(q => q.id)));
    } else {
      setSelectedIds(new Set());
    }
  };

  const toggleRow = (id: number) => {
    const newSet = new Set(selectedIds);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelectedIds(newSet);
  };

  const togglePin = (id: number) => {
    const newSet = new Set(pinVisible);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setPinVisible(newSet);
  };

  const toggleCol = (colKey: keyof typeof cols) => {
    setCols(prev => ({ ...prev, [colKey]: !prev[colKey] }));
  };

  const activeCount = initialQrCodes.filter(q => q.status === 'Active').length;
  const expiringCount = initialQrCodes.filter(q => q.status === 'Expiring Soon' || q.status === 'Expired').length;
  const bulkActive = selectedIds.size > 0;

  return (
    <div className={styles.content}>
      {/* Page header */}
      <div className={styles.pageHeader}>
        <div>
          <div className={styles.pageTitle}>QR Code Management</div>
          <div className={styles.pageSub}>Manage customer portal access via QR codes</div>
        </div>
        <div className={styles.pageHeaderRight}>
          <button className={styles.btnSecondary} onClick={() => alert('Exporting CSV...')}>📥 Export</button>
          <button className={styles.btnPrimary} onClick={() => setShowAddModal(true)}>➕ Generate QR Code</button>
        </div>
      </div>

      {/* STAT CARDS */}
      <div className={styles.statsRow}>
        <div className={styles.statCard}>
          <div className={styles.scTop}><div className={styles.scIcon}>📷</div><div className={`${styles.scTrend} ${styles.up}`}>↑ 5</div></div>
          <div className={styles.scNum}>{activeCount}</div>
          <div className={styles.scName}>Active QR Codes</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.scTop}><div className={styles.scIcon}>📊</div><div className={`${styles.scTrend} ${styles.up}`}>↑ 18%</div></div>
          <div className={styles.scNum}>1,234</div>
          <div className={styles.scName}>Total Scans</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.scTop}><div className={styles.scIcon}>📅</div><div className={styles.scTrend}>This Month</div></div>
          <div className={styles.scNum}>156</div>
          <div className={styles.scName}>This Month</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.scTop}><div className={styles.scIcon}>⚠️</div><div className={styles.scTrend}>Attention</div></div>
          <div className={styles.scNum}>{expiringCount}</div>
          <div className={styles.scName}>Expiring Soon</div>
        </div>
      </div>

      {/* TOOLBAR */}
      <div className={styles.toolbar}>
        <div className={styles.tbSearchWrap}>
          <span className={styles.tbSIcon}>🔍</span>
          <input 
            type="text" 
            className={styles.tbSInput} 
            placeholder="Search QR codes..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className={styles.tbSep}></div>
        <select className={styles.filterSel} value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Expired">Expired</option>
          <option value="Expiring Soon">Expiring Soon</option>
        </select>
        <select className={styles.filterSel} value={projectFilter} onChange={(e) => setProjectFilter(e.target.value)}>
          <option value="">All Projects</option>
          <option>Residential Complex Amsterdam</option>
          <option>Office Building Rotterdam</option>
          <option>Shopping Mall Utrecht</option>
          <option>Hospital Wing Den Haag</option>
          <option>School Renovation Eindhoven</option>
          <option>Quarterly Electrical Inspection</option>
        </select>
        <div className={styles.tbRight}>
          <div className={styles.colWrap}>
            <button className={styles.colBtn} onClick={() => setShowColMenu(!showColMenu)}>⚙ Columns ▾</button>
            {showColMenu && (
              <div className={styles.colDd}>
                <div className={styles.colDdTitle}>Show / Hide</div>
                {Object.keys(cols).map((col) => (
                  <div className={styles.colRow} key={col} onClick={() => toggleCol(col as keyof typeof cols)}>
                    <input type="checkbox" checked={cols[col as keyof typeof cols]} readOnly />
                    <label>{col.charAt(0).toUpperCase() + col.slice(1)}</label>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* TABLE PANEL */}
      <div className={styles.tablePanel}>
        <div className={styles.tph}>
          <div className={styles.tphLeft}>
            <div className={styles.tphDot}></div>
            <div className={styles.tphTitle}>All QR Codes</div>
            <div className={styles.tphCount}>{filtered.length} codes</div>
          </div>
          <div className={styles.tphRight}>
            <button className={styles.btnSecondary} style={{padding:'8px 14px', fontSize:'12px'}} onClick={() => alert('Exporting...')}>📥 Export CSV</button>
          </div>
        </div>

        {/* Bulk bar */}
        {bulkActive && (
          <div className={styles.bulkBar}>
            <span className={styles.bulkCount}>{selectedIds.size} selected</span>
            <button className={styles.bulkBtn} onClick={() => alert('Printing selected...')}>🖨 Print All</button>
            <button className={styles.bulkBtn} onClick={() => alert('Exporting selected...')}>📥 Export</button>
            <button className={`${styles.bulkBtn} ${styles.danger}`} onClick={() => alert('Deleting...')}>🗑 Delete</button>
            <button className={styles.bulkClear} onClick={() => setSelectedIds(new Set())}>✕ Clear</button>
          </div>
        )}

        <div className={styles.tableWrap}>
          <table className={styles.qrTable}>
            <thead>
              <tr>
                <th><input type="checkbox" className={styles.cb} onChange={toggleSelectAll} checked={filtered.length > 0 && selectedIds.size === filtered.length} /></th>
                {cols.project && <th><div className={styles.thS}>Project <span style={{fontSize:9, color:'var(--gray-lt)'}}>↕</span></div></th>}
                {cols.url && <th>Custom URL</th>}
                {cols.created && <th><div className={styles.thS}>Created <span style={{fontSize:9, color:'var(--gray-lt)'}}>↕</span></div></th>}
                {cols.expiry && <th><div className={styles.thS}>Expiry <span style={{fontSize:9, color:'var(--gray-lt)'}}>↕</span></div></th>}
                {cols.status && <th>Status</th>}
                {cols.scan && <th>Scans</th>}
                {cols.lastscanned && <th>Last Scanned</th>}
                {cols.pin && <th>PIN Code</th>}
                {cols.actions && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={10}>
                    <div className={styles.emptySt}>
                      <div className={styles.ei}>📷</div>
                      <div className={styles.et}>No QR codes found</div>
                      <div className={styles.es}>Try adjusting your filters or generate a new QR code.</div>
                    </div>
                  </td>
                </tr>
              ) : (
                filtered.map(q => {
                  const sel = selectedIds.has(q.id);
                  const isVisiblePin = pinVisible.has(q.id);
                  const barPct = Math.min(100, Math.round((q.scans / 500) * 100));

                  return (
                    <tr key={q.id} className={sel ? styles.selected : ''} onClick={() => toggleRow(q.id)}>
                      <td><input type="checkbox" className={styles.cb} checked={sel} readOnly /></td>
                      {cols.project && (
                        <td>
                          <div className={styles.projCell}>
                            <div className={styles.projName}>{q.project}</div>
                          </div>
                        </td>
                      )}
                      {cols.url && <td><span className={styles.urlCell} title={q.url}>{q.url}</span></td>}
                      {cols.created && <td><span className={styles.dateCell}>{q.created}</span></td>}
                      {cols.expiry && (
                        <td>
                          <span className={styles.dateCell} style={{
                            color: q.expiry === 'Never' ? 'var(--gray-lt)' : q.status === 'Expiring Soon' ? 'var(--amber)' : q.status === 'Expired' ? 'var(--red)' : ''
                          }}>
                            {q.expiry}
                          </span>
                        </td>
                      )}
                      {cols.status && (
                        <td>
                          {q.status === 'Active' && <span className={`${styles.statusBadge} ${styles.sbActive}`}>Active</span>}
                          {q.status === 'Inactive' && <span className={`${styles.statusBadge} ${styles.sbInactive}`}>Inactive</span>}
                          {q.status === 'Expiring Soon' && <span className={`${styles.statusBadge} ${styles.sbExpiring}`}>Expiring Soon</span>}
                          {q.status === 'Expired' && <span className={`${styles.statusBadge} ${styles.sbExpired}`}>Expired</span>}
                        </td>
                      )}
                      {cols.scan && (
                        <td>
                          <div>
                            <div className={styles.scanCount}>{q.scans.toLocaleString()}</div>
                            <div className={styles.scanBarWrap}><div className={styles.scanBar} style={{width:`${barPct}%`}}></div></div>
                          </div>
                        </td>
                      )}
                      {cols.lastscanned && <td><span className={`${styles.scanTime} ${q.recent ? styles.recent : ''}`}>{q.lastScanned}</span></td>}
                      {cols.pin && (
                        <td>
                          <div className={styles.pinCell}>
                            {!isVisiblePin ? (
                              <div className={styles.pinDots}>
                                <div className={styles.pinDot}></div><div className={styles.pinDot}></div><div className={styles.pinDot}></div><div className={styles.pinDot}></div>
                              </div>
                            ) : (
                              <span className={styles.pinValue}>{q.pin}</span>
                            )}
                            <button className={styles.pinRevealBtn} onClick={(e) => { e.stopPropagation(); togglePin(q.id); }} title="Show/Hide PIN">
                              {isVisiblePin ? '🔓' : '🔒'}
                            </button>
                          </div>
                        </td>
                      )}
                      {cols.actions && (
                        <td>
                          <div className={styles.actionBtns} onClick={(e) => e.stopPropagation()}>
                            <button className={`${styles.actBtn} ${styles.viewBtn}`} onClick={() => setShowViewModal(true)}>👁 View</button>
                            <button className={styles.actBtn} onClick={() => alert('Printing...')}>🖨 Print</button>
                            <button className={styles.actBtn} onClick={() => setShowAddModal(true)}>✏️ Edit</button>
                            <button className={`${styles.actBtn} ${styles.danger}`} onClick={() => alert('Deleting...')}>Delete</button>
                          </div>
                        </td>
                      )}
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Dummy Pagination */}
        {filtered.length > 0 && (
          <div className={styles.pagination}>
            <div className={styles.pageInfo}>Showing <span>1</span>–<span>{filtered.length}</span> of <span>{filtered.length}</span> codes</div>
            <div className={styles.pageBtns}>
              <button className={`${styles.pageBtn} ${styles.pageBtnDisabled}`}>‹</button>
              <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
              <button className={`${styles.pageBtn} ${styles.pageBtnDisabled}`}>›</button>
            </div>
          </div>
        )}
      </div>

      {/* MODALS */}
      {showAddModal && (
        <div className={styles.modalOverlay} onClick={() => setShowAddModal(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.modalHeaderLeft}>
                <div className={`${styles.modalIw} ${styles.orange}`}>📷</div>
                <div className={styles.modalTitle}>Generate QR Code</div>
              </div>
              <div className={styles.modalClose} onClick={() => setShowAddModal(false)}>✕</div>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.formGrid}>
                <div className={`${styles.formGroup} ${styles.fgFull}`}>
                  <label className={styles.formLabel}>Project <span className={styles.req}>*</span></label>
                  <select className={styles.formSelect}>
                    <option value="">Select project...</option>
                    <option>Residential Complex Amsterdam</option>
                    <option>Office Building Rotterdam</option>
                    <option>Shopping Mall Utrecht</option>
                  </select>
                </div>
                <div className={`${styles.formGroup} ${styles.fgFull}`}>
                  <label className={styles.formLabel}>Custom URL <span className={styles.req}>*</span></label>
                  <input type="text" className={styles.formInput} placeholder="e.g. www.project.nl/my-project" />
                  <div className={styles.formHint}>URL the QR code will redirect to</div>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Created Date</label>
                  <input type="date" className={styles.formInput} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Expiry Date</label>
                  <input type="date" className={styles.formInput} />
                  <div className={styles.formHint}>Leave blank for no expiry</div>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Status</label>
                  <select className={styles.formSelect}>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>PIN Code</label>
                  <div className={styles.pinInputWrap}>
                    <input type="text" className={`${styles.formInput} ${styles.pinInput}`} placeholder="e.g. 1234" maxLength={6} />
                    <button style={{padding:'11px 13px', background:'var(--blue)', border:'none', borderRadius:9, fontFamily:'inherit', fontSize:11, fontWeight:700, color:'white', cursor:'pointer', whiteSpace:'nowrap', flexShrink:0}}>Generate</button>
                  </div>
                  <div className={styles.formHint}>Numeric PIN for portal access protection</div>
                </div>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.modalCancel} onClick={() => setShowAddModal(false)}>Cancel</button>
              <button className={styles.modalSubmit} onClick={() => setShowAddModal(false)}>📷 Generate QR Code</button>
            </div>
          </div>
        </div>
      )}

      {showViewModal && (
        <div className={styles.modalOverlay} onClick={() => setShowViewModal(false)}>
          <div className={styles.modal} style={{maxWidth: 420}} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.modalHeaderLeft}>
                <div className={`${styles.modalIw} ${styles.blue}`}>👁</div>
                <div className={styles.modalTitle}>QR Code Preview</div>
              </div>
              <div className={styles.modalClose} onClick={() => setShowViewModal(false)}>✕</div>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.qrDisplay}>
                <div className={styles.qrCanvas}>QR</div>
                <div className={styles.qrInfo}>
                  <div className={styles.qrProjName}>Project Name Example</div>
                  <div className={styles.qrUrlDisp}>www.project.nl/office-building</div>
                </div>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.modalCancel} onClick={() => setShowViewModal(false)}>Close</button>
              <button className={styles.modalSubmit} onClick={() => setShowViewModal(false)}>🖨 Print</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
