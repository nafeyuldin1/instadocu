'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '@/styles/admin-projects.module.css';

interface Project {
  id: number;
  name: string;
  address: string;
  client: string;
  clientInit: string;
  manager: string;
  status: 'complete' | 'pending' | 'progress' | 'cancel';
  active: 'active' | 'inactive';
  updated: string;
}

const mockProjects: Project[] = [
  { id: 1, name: 'Residential Complex Amsterdam', address: 'Keizersgracht 123, 1015 CJ Amsterdam', client: 'VanderBilt Properties', clientInit: 'VB', manager: 'Jan de Vries', status: 'complete', active: 'active', updated: '2 days ago' },
  { id: 2, name: 'Office Building Rotterdam', address: 'Coolsingel 45, 3011 AD Rotterdam', client: 'Rotterdam Business Center', clientInit: 'RB', manager: 'Emma Bakker', status: 'pending', active: 'active', updated: '5 hours ago' },
  { id: 3, name: 'Shopping Mall Utrecht', address: 'Vredenburg 89, 3511 BD Utrecht', client: 'Eindhoven Municipality', clientInit: 'EM', manager: 'Pieter Jansen', status: 'complete', active: 'active', updated: '1 week ago' },
  { id: 4, name: 'Hospital Wing Den Haag', address: 'Benoordenhoutseweg 60, 2596 BC Den Haag', client: 'Port Authority NL', clientInit: 'PA', manager: 'Lucas Vermeer', status: 'cancel', active: 'inactive', updated: 'Yesterday' },
  { id: 5, name: 'School Renovation Eindhoven', address: 'Vestdijk 12, 5611 CA Eindhoven', client: 'Eindhoven Municipality', clientInit: 'EM', manager: 'Sophie van Dam', status: 'complete', active: 'active', updated: '3 days ago' },
  { id: 6, name: 'Harbour Warehouse Den Haag', address: 'Binckhorstlaan 36, 2516 BE Den Haag', client: 'Port Authority NL', clientInit: 'PA', manager: 'Pieter Jansen', status: 'progress', active: 'active', updated: '1 week ago' },
];

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState(mockProjects);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [clientFilter, setClientFilter] = useState('');
  const [managerFilter, setManagerFilter] = useState('');
  
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [colDropdownOpen, setColDropdownOpen] = useState(false);
  const colMenuRef = useRef<HTMLDivElement>(null);
  
  const [visibleCols, setVisibleCols] = useState({
    name: true, address: true, client: true, manager: true, 
    status: true, active: true, updated: true, actions: true
  });

  const [openActionMenuId, setOpenActionMenuId] = useState<number | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  // Close menus on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (colMenuRef.current && !colMenuRef.current.contains(e.target as Node)) {
        setColDropdownOpen(false);
      }
      setOpenActionMenuId(null);
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const filteredProjects = projects.filter(p => {
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.address.toLowerCase().includes(search.toLowerCase());
    const matchStatus = !statusFilter || p.status === statusFilter || p.active === statusFilter;
    const matchClient = !clientFilter || p.client === clientFilter;
    const matchManager = !managerFilter || p.manager === managerFilter;
    return matchSearch && matchStatus && matchClient && matchManager;
  });

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredProjects.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredProjects.map(p => p.id));
    }
  };

  const getStatusBadge = (status: string) => {
    const map: Record<string, { cls: string, label: string }> = {
      complete: { cls: styles.sbComplete, label: 'Complete' },
      pending:  { cls: styles.sbPending, label: 'Pending' },
      cancel:   { cls: styles.sbCancel, label: 'Cancelled' },
      progress: { cls: styles.sbProgress, label: 'In Progress' },
    };
    const s = map[status] || map.progress;
    return <span className={`${styles.statusBadge} ${s.cls}`}>{s.label}</span>;
  };

  const getActiveBadge = (active: string) => {
    return active === 'active' 
      ? <span className={`${styles.statusBadge} ${styles.sbActive}`}>Active</span>
      : <span className={`${styles.statusBadge} ${styles.sbInactive}`}>Inactive</span>;
  };

  return (
    <div className={styles.contentArea}>
      
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div>
          <div className={styles.pageTitle}>All Projects</div>
          <div className={styles.pageSub}>Manage all installation projects</div>
        </div>
        <div className={styles.pageHeaderRight}>
          <button className={styles.btnSecondary}>📤 Export</button>
          <button className={styles.btnPrimary} onClick={() => setIsCreateModalOpen(true)}>➕ New Project</button>
        </div>
      </div>

      {/* Mini Stats */}
      <div className={styles.miniStats}>
        <div className={styles.miniStat}>
          <div className={styles.miniStatIcon} style={{ background: 'var(--blue-lt)' }}>📁</div>
          <div>
            <div className={styles.miniStatNum}>45</div>
            <div className={styles.miniStatLbl}>Total Projects</div>
          </div>
        </div>
        <div className={styles.miniStat}>
          <div className={styles.miniStatIcon} style={{ background: 'var(--green-lt)' }}>✅</div>
          <div>
            <div className={styles.miniStatNum}>18</div>
            <div className={styles.miniStatLbl}>Completed</div>
          </div>
        </div>
        <div className={styles.miniStat}>
          <div className={styles.miniStatIcon} style={{ background: 'var(--orange-lt)' }}>🔄</div>
          <div>
            <div className={styles.miniStatNum}>16</div>
            <div className={styles.miniStatLbl}>In Progress</div>
          </div>
        </div>
        <div className={styles.miniStat}>
          <div className={styles.miniStatIcon} style={{ background: 'var(--amber-lt)' }}>⏳</div>
          <div>
            <div className={styles.miniStatNum}>9</div>
            <div className={styles.miniStatLbl}>Pending</div>
          </div>
        </div>
        <div className={styles.miniStat}>
          <div className={styles.miniStatIcon} style={{ background: 'var(--red-lt)' }}>❌</div>
          <div>
            <div className={styles.miniStatNum}>2</div>
            <div className={styles.miniStatLbl}>Cancelled</div>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className={styles.toolbar}>
        <div className={styles.projSearchWrap}>
          <span className={styles.projSearchIcon}>🔍</span>
          <input 
            type="text" 
            className={styles.projSearchInput} 
            placeholder="Search projects..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className={styles.toolbarSep}></div>

        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>Status</span>
          <select className={styles.filterSelect} value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="">All Projects</option>
            <option value="complete">Complete</option>
            <option value="pending">Pending</option>
            <option value="progress">In Progress</option>
            <option value="cancel">Cancelled</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>Client</span>
          <select className={styles.filterSelect} value={clientFilter} onChange={(e) => setClientFilter(e.target.value)}>
            <option value="">All Clients</option>
            <option value="VanderBilt Properties">VanderBilt Properties</option>
            <option value="Rotterdam Business Center">Rotterdam Business Center</option>
            <option value="Eindhoven Municipality">Eindhoven Municipality</option>
            <option value="Port Authority NL">Port Authority NL</option>
          </select>
        </div>

        <div className={styles.colToggleWrap} ref={colMenuRef} onClick={(e) => e.stopPropagation()}>
          <button className={styles.colToggleBtn} onClick={() => setColDropdownOpen(!colDropdownOpen)}>⚙ Columns ▾</button>
          {colDropdownOpen && (
            <div className={styles.colToggleDropdown}>
              <div className={styles.colToggleTitle}>Show / Hide Columns</div>
              {Object.keys(visibleCols).map(col => (
                <div className={styles.colToggleItem} key={col}>
                  <input 
                    type="checkbox" 
                    id={`col-${col}`} 
                    checked={visibleCols[col as keyof typeof visibleCols]}
                    onChange={() => setVisibleCols(prev => ({...prev, [col]: !prev[col as keyof typeof visibleCols]}))}
                  />
                  <label htmlFor={`col-${col}`}>{col.charAt(0).toUpperCase() + col.slice(1)}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Table Panel */}
      <div className={styles.tablePanel}>
        <div className={styles.tablePanelHeader}>
          <div className={styles.tablePanelTitle}>
            <div className={styles.tptDot}></div>
            Project List
          </div>
          <div className={styles.tableShowing}>
            Showing <span>{filteredProjects.length}</span> of <span>{projects.length}</span> projects
          </div>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}><input type="checkbox" className={styles.cb} onChange={toggleSelectAll} checked={selectedIds.length === filteredProjects.length && filteredProjects.length > 0} /></th>
                {visibleCols.name && <th className={styles.th}><div className={styles.thSort}>Project Name <span className={styles.sortArrow}>↕</span></div></th>}
                {visibleCols.address && <th className={styles.th}>Address</th>}
                {visibleCols.client && <th className={styles.th}><div className={styles.thSort}>Client <span className={styles.sortArrow}>↕</span></div></th>}
                {visibleCols.manager && <th className={styles.th}><div className={styles.thSort}>Manager <span className={styles.sortArrow}>↕</span></div></th>}
                {visibleCols.status && <th className={styles.th}>Status</th>}
                {visibleCols.active && <th className={styles.th}>Active</th>}
                {visibleCols.updated && <th className={styles.th}><div className={styles.thSort}>Last Updated <span className={styles.sortArrow}>↕</span></div></th>}
                {visibleCols.actions && <th className={styles.th}>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((p) => {
                const isSelected = selectedIds.includes(p.id);
                return (
                  <tr key={p.id} className={`${styles.tr} ${isSelected ? styles.selected : ''}`} onClick={() => {
                    if (isSelected) setSelectedIds(selectedIds.filter(id => id !== p.id));
                    else setSelectedIds([...selectedIds, p.id]);
                  }}>
                    <td className={styles.td} onClick={e => e.stopPropagation()}>
                      <input 
                        type="checkbox" 
                        className={styles.cb} 
                        checked={isSelected}
                        onChange={(e) => {
                          if (e.target.checked) setSelectedIds([...selectedIds, p.id]);
                          else setSelectedIds(selectedIds.filter(id => id !== p.id));
                        }}
                      />
                    </td>
                    {visibleCols.name && (
                      <td className={styles.td}>
                        <Link href={`/admin/projects/${p.id}`} className={styles.tdProject} onClick={e => e.stopPropagation()}>{p.name}</Link>
                      </td>
                    )}
                    {visibleCols.address && <td className={`${styles.td} ${styles.tdAddr}`}>{p.address}</td>}
                    {visibleCols.client && (
                      <td className={styles.td}>
                        <div className={styles.clientCell}>
                          <div className={styles.clientAv}>{p.clientInit}</div>
                          <span className={styles.clientName}>{p.client}</span>
                        </div>
                      </td>
                    )}
                    {visibleCols.manager && <td className={styles.td}>{p.manager}</td>}
                    {visibleCols.status && <td className={styles.td}>{getStatusBadge(p.status)}</td>}
                    {visibleCols.active && <td className={styles.td}>{getActiveBadge(p.active)}</td>}
                    {visibleCols.updated && <td className={styles.td}>{p.updated}</td>}
                    
                    {visibleCols.actions && (
                      <td className={`${styles.td} ${styles.actionsCell}`} onClick={e => e.stopPropagation()}>
                        <button className={styles.threeDots} onClick={(e) => {
                          setOpenActionMenuId(openActionMenuId === p.id ? null : p.id);
                        }}>•••</button>
                        {openActionMenuId === p.id && (
                          <div className={styles.actionMenu}>
                            <Link href={`/admin/projects/${p.id}`} className={styles.actionMenuItem}><span className={styles.actionIcon}>👁</span> View Details</Link>
                            <div className={styles.actionMenuItem} onClick={() => alert('Edit')}><span className={styles.actionIcon}>✏️</span> Edit Project</div>
                            <div className={styles.actionMenuSep}></div>
                            <div className={`${styles.actionMenuItem} ${styles.danger}`} onClick={() => alert('Delete')}><span className={styles.actionIcon}>🗑</span> Delete</div>
                          </div>
                        )}
                      </td>
                    )}
                  </tr>
                );
              })}
              {filteredProjects.length === 0 && (
                <tr><td colSpan={9} style={{ textAlign: 'center', padding: '48px', color: 'var(--gray-lt)' }}>No projects found</td></tr>
              )}
            </tbody>
          </table>
        </div>

        <div className={styles.pagination}>
          <div className={styles.pageInfo}>Showing <span>1–{Math.min(filteredProjects.length, 6)}</span> of <span>{filteredProjects.length}</span> results</div>
          <div className={styles.pageBtns}>
            <button className={styles.pageBtn}>‹</button>
            <button className={`${styles.pageBtn} ${styles.pageBtnActive}`}>1</button>
            <button className={styles.pageBtn}>2</button>
            <button className={styles.pageBtn}>›</button>
          </div>
        </div>
      </div>

      {/* CREATE MODAL */}
      {isCreateModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsCreateModalOpen(false)}>
          <div className={`${styles.modal} ${styles.modalLg}`} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.modalHeaderLeft}>
                <div className={styles.modalIcon}>➕</div>
                <div className={styles.modalTitle}>Create New Project</div>
              </div>
              <div className={styles.modalClose} onClick={() => setIsCreateModalOpen(false)}>✕</div>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Project Name <span className={styles.req}>*</span></label>
                  <input type="text" className={styles.formInput} placeholder="Enter project name" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Status <span className={styles.req}>*</span></label>
                  <select className={styles.formSelect}>
                    <option>Planning</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                  </select>
                </div>
                <div className={`${styles.formGroup} ${styles.formGridFull}`}>
                  <label className={styles.formLabel}>Full Address <span className={styles.req}>*</span></label>
                  <input type="text" className={styles.formInput} placeholder="Street, Number, Postal Code, City" />
                </div>
                <div className={`${styles.formGroup} ${styles.formGridFull}`}>
                  <label className={styles.formLabel}>Project Description</label>
                  <textarea className={styles.formTextarea} placeholder="Enter project details..."></textarea>
                </div>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.btnCancel} onClick={() => setIsCreateModalOpen(false)}>Cancel</button>
              <button className={`${styles.btnSubmit} ${styles.orangeSubmit}`} onClick={() => setIsCreateModalOpen(false)}>✅ Create Project</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
