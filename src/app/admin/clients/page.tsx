'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import styles from '@/styles/admin-clients.module.css';

interface ClientType {
  id: number;
  company: string;
  initials: string;
  color: string;
  contact: string;
  jobtitle: string;
  email: string;
  phone: string;
  address: string;
  code: string;
  industry: string;
  status: 'Active' | 'Inactive';
  projects: string[];
  notes: string;
  since: string;
}

const initialClients: ClientType[] = [
  { id:1,  company:'VanderBilt Properties',      initials:'VP', color:'#2A5CBA',  contact:'Hans VanderBilt',  jobtitle:'CEO',               email:'hans@vanderbilt.nl',    phone:'+31 20 555 0101', address:'Herengracht 12, 1015 Amsterdam', code:'VB2026', industry:'Real Estate', status:'Active',   projects:['Residential Complex Amsterdam'], notes:'Premium real estate client. Prefers email communication.', since:'2025-06-01' },
  { id:2,  company:'Rotterdam Business Center',   initials:'RB', color:'#1e9e5e',  contact:'James Mullican',   jobtitle:'Facility Manager',  email:'james@rotbiz.nl',       phone:'+31 10 555 0202', address:'Coolsingel 45, 3011 Rotterdam',  code:'RBC44',  industry:'Real Estate', status:'Active',   projects:['Office Building Rotterdam','Shopping Mall Utrecht'], notes:'Very responsive. Prefers Teams calls.', since:'2025-03-15' },
  { id:3,  company:'Eindhoven Municipality',      initials:'EM', color:'#7c3aed',  contact:'Anne Jacob',       jobtitle:'Project Coordinator',email:'anne@eindhoven.nl',     phone:'+31 40 555 0303', address:'Vestdijk 12, 5611 Eindhoven',    code:'EIN12',  industry:'Government',  status:'Active',   projects:['School Renovation Eindhoven'], notes:'Government contract. Extended payment terms 60 days.', since:'2025-09-01' },
  { id:4,  company:'Port Authority NL',           initials:'PA', color:'#d97706',  contact:'Bethany Jackson',  jobtitle:'Operations Director',email:'bjackson@portnl.nl',    phone:'+31 10 555 0404', address:'Havenstraat 1, 3088 Rotterdam',  code:'PORT88', industry:'Logistics',   status:'Active',   projects:['Hospital Wing Den Haag'], notes:'Large infrastructure client.', since:'2025-01-20' },
  { id:5,  company:'Amsterdam Health Group',      initials:'AH', color:'#0891b2',  contact:'Robert Bacins',    jobtitle:'CFO',               email:'rbacins@amshg.nl',     phone:'+31 20 555 0505', address:'Damrak 22, 1012 Amsterdam',      code:'AHG55',  industry:'Healthcare',  status:'Active',   projects:[], notes:'Prospect. Initial meeting scheduled Q1 2026.', since:'2026-01-10' },
  { id:6,  company:'TechPark Groningen',          initials:'TG', color:'#dc2626',  contact:'Lucas Vermeer',    jobtitle:'Technical Director', email:'lvermeer@techpg.nl',  phone:'+31 50 555 0606', address:'Kabelweg 57, 9723 Groningen',    code:'TPG07',  industry:'Other',       status:'Inactive', projects:[], notes:'Project cancelled. May re-engage in 2027.', since:'2024-11-05' },
];

export default function AdminClientsPage() {
  const [clients, setClients] = useState<ClientType[]>(initialClients);
  
  // Filters
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [projectFilter, setProjectFilter] = useState('');
  
  // Selection
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());

  // Columns visibility
  const [colMenuOpen, setColMenuOpen] = useState(false);
  const colMenuRef = useRef<HTMLDivElement>(null);
  const [visibleCols, setVisibleCols] = useState({
    company: true, contact: true, email: true, phone: true, 
    code: true, projects: true, status: true, actions: true
  });

  // Drawer (View Client)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [viewClientId, setViewClientId] = useState<number | null>(null);

  // Modal (Create / Edit)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<ClientType | null>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (colMenuRef.current && !colMenuRef.current.contains(e.target as Node)) {
        setColMenuOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const filteredClients = useMemo(() => {
    return clients.filter(c => {
      const q = search.toLowerCase();
      const matchSearch = !q || c.company.toLowerCase().includes(q) || c.contact.toLowerCase().includes(q) || c.email.toLowerCase().includes(q) || c.code.toLowerCase().includes(q);
      const matchStatus = !statusFilter || c.status === statusFilter;
      const matchProject = !projectFilter || c.projects.includes(projectFilter);
      return matchSearch && matchStatus && matchProject;
    });
  }, [clients, search, statusFilter, projectFilter]);

  const toggleSelectAll = () => {
    if (selectedIds.size === filteredClients.length && filteredClients.length > 0) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(filteredClients.map(c => c.id)));
    }
  };

  const toggleRow = (id: number) => {
    const newSet = new Set(selectedIds);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelectedIds(newSet);
  };

  const deleteSelected = () => {
    if (confirm(`Delete ${selectedIds.size} selected clients?`)) {
      setClients(clients.filter(c => !selectedIds.has(c.id)));
      setSelectedIds(new Set());
    }
  };

  const openViewDrawer = (id: number) => {
    setViewClientId(id);
    setIsDrawerOpen(true);
  };

  const activeClientCount = clients.filter(c => c.status === 'Active').length;
  const viewClientData = clients.find(c => c.id === viewClientId);

  return (
    <div className={styles.content}>
      {/* HEADER */}
      <div className={styles.pageHeader}>
        <div>
          <div className={styles.pageTitle}>All Clients</div>
          <div className={styles.pageSub}>Manage client accounts and project assignments</div>
        </div>
        <div className={styles.pageHeaderRight}>
          <button className={styles.btnSecondary}>📥 Export</button>
          <button className={styles.btnPrimary} onClick={() => { setEditingClient(null); setIsModalOpen(true); }}>➕ Add Client</button>
        </div>
      </div>

      {/* STAT CARDS */}
      <div className={styles.statsRow}>
        <div className={styles.statCard}>
          <div className={styles.scTop}><div className={styles.scIcon}>👥</div><div className={`${styles.scTrend} ${styles.up}`}>↑ 2</div></div>
          <div className={styles.scNum}>{clients.length}</div>
          <div className={styles.scName}>Total Clients</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.scTop}><div className={styles.scIcon}>✅</div><div className={`${styles.scTrend} ${styles.up}`}>↑ 12%</div></div>
          <div className={styles.scNum}>12</div>
          <div className={styles.scName}>Project Assigns</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.scTop}><div className={styles.scIcon}>🟢</div><div className={styles.scTrend}>Active</div></div>
          <div className={styles.scNum}>{activeClientCount}</div>
          <div className={styles.scName}>Active Clients</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.scTop}><div className={styles.scIcon}>🆕</div><div className={styles.scTrend}>This month</div></div>
          <div className={styles.scNum}>2</div>
          <div className={styles.scName}>New This Month</div>
        </div>
      </div>

      {/* TOOLBAR */}
      <div className={styles.toolbar}>
        <div className={styles.tbSearchWrap}>
          <span className={styles.tbSIcon}>🔍</span>
          <input 
            type="text" 
            className={styles.tbSInput} 
            placeholder="Search clients, email, company..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className={styles.tbSep}></div>
        <select className={styles.filterSel} value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <select className={styles.filterSel} value={projectFilter} onChange={e => setProjectFilter(e.target.value)}>
          <option value="">All Projects</option>
          <option value="Residential Complex Amsterdam">Residential Complex Amsterdam</option>
          <option value="Office Building Rotterdam">Office Building Rotterdam</option>
          <option value="Shopping Mall Utrecht">Shopping Mall Utrecht</option>
          <option value="Hospital Wing Den Haag">Hospital Wing Den Haag</option>
        </select>

        <div className={styles.tbRight}>
          <div className={styles.colWrap} ref={colMenuRef} onClick={e => e.stopPropagation()}>
            <button className={styles.colBtn} onClick={() => setColMenuOpen(!colMenuOpen)}>⚙ Columns ▾</button>
            {colMenuOpen && (
              <div className={styles.colDd}>
                <div className={styles.colDdTitle}>Show / Hide</div>
                {Object.keys(visibleCols).map(col => (
                  <div className={styles.colRow} key={col}>
                    <input 
                      type="checkbox" 
                      id={`c-${col}`} 
                      checked={visibleCols[col as keyof typeof visibleCols]}
                      onChange={() => setVisibleCols(prev => ({...prev, [col]: !prev[col as keyof typeof visibleCols]}))}
                    />
                    <label htmlFor={`c-${col}`}>{col.charAt(0).toUpperCase() + col.slice(1)}</label>
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
            <div className={styles.tphTitle}>Client List</div>
            <div className={styles.tphCount}>{filteredClients.length} clients</div>
          </div>
          <div className={styles.tphRight}>
            <button className={styles.btnSecondary} style={{ padding: '8px 14px', fontSize: '12px' }}>📥 Export CSV</button>
          </div>
        </div>

        {/* Bulk Bar */}
        {selectedIds.size > 0 && (
          <div className={styles.bulkBar}>
            <span className={styles.bulkCount}>{selectedIds.size} selected</span>
            <button className={styles.bulkBtn}>📧 Send Email</button>
            <button className={styles.bulkBtn}>📥 Export</button>
            <button className={`${styles.bulkBtn} ${styles.danger}`} onClick={deleteSelected}>🗑 Delete</button>
            <button className={styles.bulkClear} onClick={() => setSelectedIds(new Set())}>✕ Clear</button>
          </div>
        )}

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th className={styles.th}><input type="checkbox" className={styles.cb} onChange={toggleSelectAll} checked={selectedIds.size === filteredClients.length && filteredClients.length > 0} /></th>
                {visibleCols.company && <th className={styles.th}><div className={styles.thS}>Company <span style={{fontSize: '9px', color: 'var(--gray-lt)'}}>↕</span></div></th>}
                {visibleCols.contact && <th className={styles.th}><div className={styles.thS}>Contact Person <span style={{fontSize: '9px', color: 'var(--gray-lt)'}}>↕</span></div></th>}
                {visibleCols.email && <th className={styles.th}>Email</th>}
                {visibleCols.phone && <th className={styles.th}>Phone</th>}
                {visibleCols.code && <th className={styles.th}>Access Code</th>}
                {visibleCols.projects && <th className={styles.th}>Assigned Projects</th>}
                {visibleCols.status && <th className={styles.th}>Status</th>}
                {visibleCols.actions && <th className={styles.th}>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {filteredClients.map(c => {
                const isSelected = selectedIds.has(c.id);
                return (
                  <tr key={c.id} className={`${styles.tr} ${isSelected ? styles.selected : ''}`} onClick={() => toggleRow(c.id)}>
                    <td className={styles.td} onClick={e => e.stopPropagation()}>
                      <input type="checkbox" className={styles.cb} checked={isSelected} onChange={() => toggleRow(c.id)} />
                    </td>
                    {visibleCols.company && (
                      <td className={styles.td}>
                        <div className={styles.compCell}>
                          <div className={styles.compAv} style={{ background: c.color }}>{c.initials}</div>
                          <div>
                            <div className={styles.compName}>{c.company}</div>
                            <div className={styles.compSub}>{c.industry}</div>
                          </div>
                        </div>
                      </td>
                    )}
                    {visibleCols.contact && (
                      <td className={styles.td}>
                        <div className={styles.contactName}>{c.contact}</div>
                        <div className={styles.contactPhone}>{c.jobtitle}</div>
                      </td>
                    )}
                    {visibleCols.email && <td className={styles.td}><span className={styles.emailCell}>{c.email}</span></td>}
                    {visibleCols.phone && <td className={styles.td} style={{ color: 'var(--gray)', fontSize: '12px' }}>{c.phone}</td>}
                    {visibleCols.code && <td className={styles.td}><span className={styles.accessCode}>{c.code}</span></td>}
                    {visibleCols.projects && (
                      <td className={styles.td}>
                        <div className={styles.projList}>
                          {c.projects.length > 0 ? c.projects.map(p => <div key={p} className={styles.projPill}>{p}</div>) : <span style={{fontSize: '11px', color: 'var(--gray-lt)'}}>None assigned</span>}
                        </div>
                      </td>
                    )}
                    {visibleCols.status && (
                      <td className={styles.td}>
                        <span className={`${styles.statusBadge} ${c.status === 'Active' ? styles.sbActive : styles.sbInactive}`}>{c.status}</span>
                      </td>
                    )}
                    {visibleCols.actions && (
                      <td className={styles.td}>
                        <div className={styles.actionBtns} onClick={e => e.stopPropagation()}>
                          <button className={`${styles.actBtn} ${styles.viewBtn}`} onClick={() => openViewDrawer(c.id)}>👁 View</button>
                          <button className={styles.actBtn} onClick={() => { setEditingClient(c); setIsModalOpen(true); }}>✏️ Edit</button>
                          <button className={`${styles.actBtn} ${styles.danger}`} onClick={() => {
                            if (confirm(`Delete ${c.company}?`)) setClients(clients.filter(x => x.id !== c.id));
                          }}>Delete</button>
                        </div>
                      </td>
                    )}
                  </tr>
                );
              })}
              {filteredClients.length === 0 && (
                <tr>
                  <td colSpan={9}>
                    <div className={styles.emptySt}>
                      <div className={styles.ei}>👥</div>
                      <div className={styles.et}>No clients found</div>
                      <div className={styles.es}>Try adjusting your filters or add a new client.</div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className={styles.pagination}>
          <div className={styles.pageInfo}>Showing <span>1</span>–<span>{filteredClients.length}</span> of <span>{filteredClients.length}</span> clients</div>
        </div>
      </div>

      {/* ══ CLIENT DETAIL DRAWER ══ */}
      {isDrawerOpen && viewClientData && (
        <>
          <div className={styles.drawerOverlay} onClick={() => setIsDrawerOpen(false)}></div>
          <div className={`${styles.drawer} ${styles.open}`}>
            <div className={styles.drawerHeader}>
              <div className={styles.drawerTitle}>Client Details</div>
              <div className={styles.drawerClose} onClick={() => setIsDrawerOpen(false)}>✕</div>
            </div>
            <div className={styles.drawerBody}>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div className={styles.drawerAv} style={{ background: viewClientData.color }}>{viewClientData.initials}</div>
                <div className={styles.drawerCompName}>{viewClientData.company}</div>
                <div className={styles.drawerCompSub}>{viewClientData.industry} · Since {viewClientData.since}</div>
                <span className={`${styles.statusBadge} ${viewClientData.status === 'Active' ? styles.sbActive : styles.sbInactive}`} style={{ margin: '8px auto', display: 'inline-flex' }}>{viewClientData.status}</span>
              </div>
              <div className={styles.drawerActionRow}>
                <button className={styles.drawerActionBtn}>📧 Email</button>
                <button className={styles.drawerActionBtn}>📞 Call</button>
                <button className={`${styles.drawerActionBtn} ${styles.primary}`} onClick={() => { setIsDrawerOpen(false); setEditingClient(viewClientData); setIsModalOpen(true); }}>✏️ Edit</button>
              </div>
              <div style={{ marginBottom: '16px' }}>
                <div className={styles.drawerSectionTitle}>Contact Information</div>
                <div className={styles.drawerRow}><span className={styles.drKey}>Contact Person</span><span className={styles.drVal}>{viewClientData.contact}</span></div>
                <div className={styles.drawerRow}><span className={styles.drKey}>Job Title</span><span className={styles.drVal}>{viewClientData.jobtitle || '—'}</span></div>
                <div className={styles.drawerRow}><span className={styles.drKey}>Email</span><span className={styles.drVal} style={{color: 'var(--blue)'}}>{viewClientData.email}</span></div>
                <div className={styles.drawerRow}><span className={styles.drKey}>Phone</span><span className={styles.drVal}>{viewClientData.phone}</span></div>
                <div className={styles.drawerRow}><span className={styles.drKey}>Address</span><span className={styles.drVal}>{viewClientData.address}</span></div>
              </div>
              <div style={{ marginBottom: '16px' }}>
                <div className={styles.drawerSectionTitle}>Portal Access</div>
                <div className={styles.drawerRow}><span className={styles.drKey}>Access Code</span><span className={styles.drVal}><span className={styles.accessCode}>{viewClientData.code}</span></span></div>
                <div className={styles.drawerRow}><span className={styles.drKey}>Portal URL</span><span className={styles.drVal} style={{color: 'var(--blue)', fontSize: '11px'}}>app.bouwlogboek.nl/p/{viewClientData.code}</span></div>
              </div>
              <div style={{ marginBottom: '16px' }}>
                <div className={styles.drawerSectionTitle}>Assigned Projects ({viewClientData.projects.length})</div>
                {viewClientData.projects.length > 0 ? viewClientData.projects.map(p => (
                  <div key={p} className={styles.drawerProjCard}>
                    <div className={styles.dpcName}>📁 {p}</div>
                    <div className={styles.dpcAddr}>Click to view project</div>
                    <div className={`${styles.dpcStatus} ${styles.prog}`}>In Progress</div>
                  </div>
                )) : (
                  <div style={{ fontSize: '13px', color: 'var(--gray-lt)', textAlign: 'center', padding: '20px' }}>No projects assigned</div>
                )}
              </div>
              {viewClientData.notes && (
                <div>
                  <div className={styles.drawerSectionTitle}>Notes</div>
                  <div style={{ fontSize: '13px', color: 'var(--gray)', lineHeight: '1.7', padding: '10px', background: 'var(--cream)', borderRadius: '9px' }}>
                    {viewClientData.notes}
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* ══ ADD / EDIT Modal ══ */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.modalHeaderLeft}>
                <div className={`${styles.modalIw} ${editingClient ? styles.blue : styles.orange}`}>
                  {editingClient ? '✏️' : '➕'}
                </div>
                <div className={styles.modalTitle}>{editingClient ? 'Edit Client' : 'Add New Client'}</div>
              </div>
              <div className={styles.modalClose} onClick={() => setIsModalOpen(false)}>✕</div>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.formGrid}>
                {/* Simplified form for example mapping */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Company Name <span className={styles.req}>*</span></label>
                  <input type="text" className={styles.formInput} placeholder="e.g. VanderBilt Properties" defaultValue={editingClient?.company || ''} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Industry</label>
                  <select className={styles.formSelect} defaultValue={editingClient?.industry || ''}>
                    <option value="">Select...</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Government">Government</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Contact Person <span className={styles.req}>*</span></label>
                  <input type="text" className={styles.formInput} placeholder="Full name" defaultValue={editingClient?.contact || ''} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Email <span className={styles.req}>*</span></label>
                  <input type="email" className={styles.formInput} placeholder="name@company.nl" defaultValue={editingClient?.email || ''} />
                </div>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.modalCancel} onClick={() => setIsModalOpen(false)}>Cancel</button>
              <button className={`${styles.modalSubmit} ${editingClient ? styles.blue : ''}`} onClick={() => setIsModalOpen(false)}>
                {editingClient ? '💾 Save Changes' : '✅ Add Client'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
