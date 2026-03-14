'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import styles from '@/styles/admin-documents.module.css';

interface DocType {
  id: number;
  name: string;
  project: string;
  address: string;
  client: string;
  type: string;
  size: string;
  sizeNum: number;
  date: string;
  uploader: string;
  manager: string;
}

const initialDocs: DocType[] = [
  {id:1,  name:'Electrical Installation Plan.pdf',     project:'Residential Complex Amsterdam', address:'Keizersgracht 123, 1015 CJ Amsterdam', client:'VanderBilt Properties', type:'Installations', size:'2.4MB', sizeNum:2.4, date:'2026-02-10', uploader:'Jan de Vries', manager:'Jan de Vries'},
  {id:2,  name:'KNX Schema Bouwdeel A - LKA 0.1.pdf',  project:'Residential Complex Amsterdam', address:'Keizersgracht 123, 1015 CJ Amsterdam', client:'VanderBilt Properties', type:'Installations', size:'1.8MB', sizeNum:1.8, date:'2026-01-29', uploader:'Mark Peters',   manager:'Jan de Vries'},
  {id:3,  name:'Safety Certificate.pdf',               project:'Office Building Rotterdam',     address:'Coolsingel 45, 3011 AD Rotterdam',    client:'Rotterdam Business Center', type:'Certificates',  size:'856KB',sizeNum:0.8, date:'2026-02-09', uploader:'Emma Bakker',   manager:'Emma Bakker'},
  {id:4,  name:'Garantiecertificaat A2022-1056.pdf',   project:'Office Building Rotterdam',     address:'Coolsingel 45, 3011 AD Rotterdam',    client:'Rotterdam Business Center', type:'Certificates',  size:'432KB',sizeNum:0.4, date:'2026-04-08', uploader:'Emma Bakker',   manager:'Emma Bakker'},
  {id:5,  name:'HVAC User Manual.pdf',                 project:'Shopping Mall Utrecht',         address:'Vredenburg 89, 3511 BD Utrecht',      client:'Rotterdam Business Center', type:'Manuals',       size:'8.4MB', sizeNum:8.4, date:'2026-01-18', uploader:'Pieter Jansen', manager:'Pieter Jansen'},
  {id:6,  name:'KNX Programming Guide.docx',           project:'Shopping Mall Utrecht',         address:'Vredenburg 89, 3511 BD Utrecht',      client:'Rotterdam Business Center', type:'Manuals',       size:'2.6MB', sizeNum:2.6, date:'2026-01-20', uploader:'Pieter Jansen', manager:'Pieter Jansen'},
  {id:7,  name:'Emergency Procedures.docx',            project:'Shopping Mall Utrecht',         address:'Vredenburg 89, 3511 BD Utrecht',      client:'Rotterdam Business Center', type:'Manuals',       size:'1.1MB', sizeNum:1.1, date:'2026-01-25', uploader:'Pieter Jansen', manager:'Pieter Jansen'},
  {id:8,  name:'Building Permit 2025.pdf',             project:'Hospital Wing Den Haag',        address:'Willemsparkweg 22, 2585 CG Den Haag', client:'Port Authority NL',         type:'Permits',       size:'5.2MB', sizeNum:5.2, date:'2025-11-12', uploader:'Sophie van Dam',manager:'Sophie van Dam'},
  {id:9,  name:'Site Photos Pre-Installation.zip',     project:'School Renovation Eindhoven',   address:'Vestdijk 12, 5611 CC Eindhoven',      client:'Eindhoven Municipality',    type:'Photos',        size:'45.8MB',sizeNum:45.8,date:'2026-02-15', uploader:'Jan de Vries', manager:'Jan de Vries'},
];

const getTypeStyle = (type: string) => {
  switch (type) {
    case 'Installations': return styles.tbInstall;
    case 'Certificates': return styles.tbCert;
    case 'Manuals': return styles.tbManual;
    case 'Permits': return styles.tbPermit;
    case 'Photos': return styles.tbPhoto;
    default: return styles.tbOther;
  }
};

const getFileIcon = (filename: string) => {
  const ext = filename.split('.').pop()?.toLowerCase() || '';
  if (ext === 'pdf') return { cls: styles.fiPdf, icon: '🔴', ext: 'PDF' };
  if (['doc', 'docx'].includes(ext)) return { cls: styles.fiDoc, icon: '🔵', ext: 'DOCX' };
  if (['xls', 'xlsx'].includes(ext)) return { cls: styles.fiXls, icon: '🟡', ext: 'XLSX' };
  if (['png', 'jpg', 'jpeg'].includes(ext)) return { cls: styles.fiImg, icon: '🟢', ext: 'IMG' };
  return { cls: styles.fiOther, icon: '⚫', ext: ext.toUpperCase() || 'FILE' };
};

export default function AdminDocumentsPage() {
  const [docs, setDocs] = useState<DocType[]>(initialDocs);
  
  // Filters
  const [search, setSearch] = useState('');
  const [projectFilter, setProjectFilter] = useState('');
  const [clientFilter, setClientFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [managerFilter, setManagerFilter] = useState('');
  
  // Selection
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());

  // Columns visibility
  const [colMenuOpen, setColMenuOpen] = useState(false);
  const colMenuRef = useRef<HTMLDivElement>(null);
  const [visibleCols, setVisibleCols] = useState({
    name: true, project: true, type: true, size: true, 
    uploaded: true, uploader: true, actions: true
  });

  // Upload Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  // Upload progress simulation
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (colMenuRef.current && !colMenuRef.current.contains(e.target as Node)) {
        setColMenuOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const filteredDocs = useMemo(() => {
    return docs.filter(d => {
      const q = search.toLowerCase();
      const matchSearch = !q || d.name.toLowerCase().includes(q) || d.project.toLowerCase().includes(q) || d.client.toLowerCase().includes(q);
      const matchProject = !projectFilter || d.project === projectFilter;
      const matchClient = !clientFilter || d.client === clientFilter;
      const matchType = !typeFilter || d.type === typeFilter;
      const matchManager = !managerFilter || d.manager === managerFilter;
      return matchSearch && matchProject && matchClient && matchType && matchManager;
    });
  }, [docs, search, projectFilter, clientFilter, typeFilter, managerFilter]);

  const toggleSelectAll = () => {
    if (selectedIds.size === filteredDocs.length && filteredDocs.length > 0) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(filteredDocs.map(d => d.id)));
    }
  };

  const toggleRow = (id: number) => {
    const newSet = new Set(selectedIds);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelectedIds(newSet);
  };

  const activeDocsCount = docs.length; // From dummy data
  
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Fake upload process
      simulateUpload();
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      simulateUpload();
    }
  };

  const simulateUpload = () => {
    setIsUploading(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsUploading(false);
            setIsModalOpen(false);
            setProgress(0);
            // Typically add new doc to state here
          }, 500);
          return 100;
        }
        return p + 20;
      });
    }, 200);
  };

  return (
    <div className={styles.content}>
      {/* HEADER */}
      <div className={styles.pageHeader}>
        <div>
          <div className={styles.pageTitle}>All Documents</div>
          <div className={styles.pageSub}>Manage and organize all installation documents</div>
        </div>
        <div className={styles.pageHeaderRight}>
          <button className={styles.btnSecondary}>📥 Export All</button>
          <button className={styles.btnPrimary} onClick={() => setIsModalOpen(true)}>📤 Upload Document</button>
        </div>
      </div>

      {/* STAT CARDS */}
      <div className={styles.statsRow}>
        <div className={styles.statCard}>
          <div className={styles.scTop}><div className={styles.scIcon}>📄</div><div className={`${styles.scTrend} ${styles.up}`}>↑ 4%</div></div>
          <div className={styles.scNum}>{docs.length}</div>
          <div className={styles.scName}>Total Documents</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.scTop}><div className={styles.scIcon}>✅</div><div className={`${styles.scTrend} ${styles.up}`}>↑ 12%</div></div>
          <div className={styles.scNum}>24</div>
          <div className={styles.scName}>Uploaded This Month</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.scTop}><div className={styles.scIcon}>⏰</div><div className={`${styles.scTrend} ${styles.warn}`}>⚠ 8 items</div></div>
          <div className={styles.scNum}>8</div>
          <div className={styles.scName}>Expiring Soon</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.scTop}><div className={styles.scIcon}>💾</div><div className={styles.scTrend}>60% used</div></div>
          <div className={styles.scNum}>2.4<span style={{fontSize:'18px', fontWeight:600}}>GB</span></div>
          <div className={styles.scName}>Storage Used</div>
        </div>
      </div>

      {/* TOOLBAR */}
      <div className={styles.toolbar}>
        <div className={styles.tbSearchWrap}>
          <span className={styles.tbSIcon}>🔍</span>
          <input 
            type="text" 
            className={styles.tbSInput} 
            placeholder="Search documents, projects..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className={styles.tbSep}></div>

        <select className={styles.filterSel} value={projectFilter} onChange={e => setProjectFilter(e.target.value)}>
          <option value="">All Projects</option>
          <option value="Residential Complex Amsterdam">Residential Complex Amsterdam</option>
          <option value="Office Building Rotterdam">Office Building Rotterdam</option>
          <option value="Shopping Mall Utrecht">Shopping Mall Utrecht</option>
          <option value="Hospital Wing Den Haag">Hospital Wing Den Haag</option>
          <option value="School Renovation Eindhoven">School Renovation Eindhoven</option>
        </select>

        <select className={styles.filterSel} value={clientFilter} onChange={e => setClientFilter(e.target.value)}>
          <option value="">All Clients</option>
          <option value="VanderBilt Properties">VanderBilt Properties</option>
          <option value="Rotterdam Business Center">Rotterdam Business Center</option>
          <option value="Eindhoven Municipality">Eindhoven Municipality</option>
          <option value="Port Authority NL">Port Authority NL</option>
        </select>

        <select className={styles.filterSel} value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
          <option value="">All Types</option>
          <option value="Installations">Installations</option>
          <option value="Certificates">Certificates</option>
          <option value="Manuals">Manuals</option>
          <option value="Permits">Permits</option>
          <option value="Photos">Photos</option>
        </select>

        <select className={styles.filterSel} value={managerFilter} onChange={e => setManagerFilter(e.target.value)}>
          <option value="">All Managers</option>
          <option value="Jan de Vries">Jan de Vries</option>
          <option value="Emma Bakker">Emma Bakker</option>
          <option value="Pieter Jansen">Pieter Jansen</option>
          <option value="Sophie van Dam">Sophie van Dam</option>
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
                      id={`cd-${col}`} 
                      checked={visibleCols[col as keyof typeof visibleCols]}
                      onChange={() => setVisibleCols(prev => ({...prev, [col]: !prev[col as keyof typeof visibleCols]}))}
                    />
                    <label htmlFor={`cd-${col}`}>{col.charAt(0).toUpperCase() + col.slice(1)}</label>
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
            <div className={styles.tphTitle}>Document List</div>
            <div className={styles.tphCount}>{filteredDocs.length} documents</div>
          </div>
          <div className={styles.tphRight}>
            <button className={styles.btnSecondary} style={{ padding: '8px 14px', fontSize: '12px' }}>📥 Export CSV</button>
          </div>
        </div>

        {/* Bulk Bar */}
        {selectedIds.size > 0 && (
          <div className={styles.bulkBar}>
            <span className={styles.bulkCount}>{selectedIds.size} selected</span>
            <button className={styles.bulkBtn}>📥 Download</button>
            <button className={styles.bulkBtn}>📁 Move to Folder</button>
            <button className={`${styles.bulkBtn} ${styles.danger}`} onClick={() => {
              if (confirm(`Delete ${selectedIds.size} selected documents?`)) {
                setDocs(docs.filter(d => !selectedIds.has(d.id)));
                setSelectedIds(new Set());
              }
            }}>🗑 Delete</button>
            <button className={styles.bulkClear} onClick={() => setSelectedIds(new Set())}>✕ Clear</button>
          </div>
        )}

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th className={styles.th}><input type="checkbox" className={styles.cb} onChange={toggleSelectAll} checked={selectedIds.size === filteredDocs.length && filteredDocs.length > 0} /></th>
                {visibleCols.name && <th className={styles.th}><div className={styles.thS}>Document Name <span style={{fontSize: '9px', color: 'var(--gray-lt)'}}>↕</span></div></th>}
                {visibleCols.project && <th className={styles.th}><div className={styles.thS}>Project <span style={{fontSize: '9px', color: 'var(--gray-lt)'}}>↕</span></div></th>}
                {visibleCols.type && <th className={styles.th}>Type</th>}
                {visibleCols.size && <th className={styles.th}><div className={styles.thS}>Size <span style={{fontSize: '9px', color: 'var(--gray-lt)'}}>↕</span></div></th>}
                {visibleCols.uploaded && <th className={styles.th}><div className={styles.thS}>Uploaded <span style={{fontSize: '9px', color: 'var(--gray-lt)'}}>↕</span></div></th>}
                {visibleCols.uploader && <th className={styles.th}>Uploaded By</th>}
                {visibleCols.actions && <th className={styles.th}>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {filteredDocs.map(d => {
                const isSelected = selectedIds.has(d.id);
                const fileInfo = getFileIcon(d.name);
                return (
                  <tr key={d.id} className={`${styles.tr} ${isSelected ? styles.selected : ''}`} onClick={() => toggleRow(d.id)}>
                    <td className={styles.td} onClick={e => e.stopPropagation()}>
                      <input type="checkbox" className={styles.cb} checked={isSelected} onChange={() => toggleRow(d.id)} />
                    </td>
                    {visibleCols.name && (
                      <td className={styles.td}>
                        <div className={styles.docNameCell}>
                          <div className={`${styles.docFileIcon} ${fileInfo.cls}`}>{fileInfo.icon}</div>
                          <div>
                            <div className={styles.docNameText}>{d.name}</div>
                            <div className={styles.docNameSub}>{fileInfo.ext}</div>
                          </div>
                        </div>
                      </td>
                    )}
                    {visibleCols.project && (
                      <td className={styles.td}>
                        <span className={styles.projCell}>{d.project}</span>
                        <span className={styles.projAddr}>{d.address}</span>
                      </td>
                    )}
                    {visibleCols.type && (
                      <td className={styles.td}>
                        <span className={`${styles.typeBadge} ${getTypeStyle(d.type)}`}>{d.type}</span>
                      </td>
                    )}
                    {visibleCols.size && <td className={`${styles.td} ${styles.tdMuted}`}>{d.size}</td>}
                    {visibleCols.uploaded && <td className={`${styles.td} ${styles.tdMuted}`}>{d.date}</td>}
                    {visibleCols.uploader && <td className={`${styles.td} ${styles.tdMuted}`}>{d.uploader}</td>}
                    {visibleCols.actions && (
                      <td className={styles.td}>
                        <div className={styles.actionBtns} onClick={e => e.stopPropagation()}>
                          <button className={styles.actBtn}>👁</button>
                          <button className={`${styles.actBtn} ${styles.actBtnDl}`}>📥</button>
                          <button className={`${styles.actBtn} ${styles.actBtnDel}`} onClick={() => {
                            if (confirm(`Delete ${d.name}?`)) setDocs(docs.filter(x => x.id !== d.id));
                          }}>🗑</button>
                        </div>
                      </td>
                    )}
                  </tr>
                );
              })}
              {filteredDocs.length === 0 && (
                <tr>
                  <td colSpan={8}>
                    <div className={styles.emptySt}>
                      <div className={styles.ei}>📂</div>
                      <div className={styles.et}>No documents found</div>
                      <div className={styles.es}>Try adjusting your filters or upload a new document.</div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className={styles.pagination}>
          <div className={styles.pageInfo}>Showing <span>1</span>–<span>{filteredDocs.length}</span> of <span>{filteredDocs.length}</span> documents</div>
        </div>
      </div>

      {/* ══ UPLOAD MODAL ══ */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.modalHeaderLeft}>
                <div className={styles.modalIw}>📤</div>
                <div className={styles.modalTitle}>Upload Document</div>
              </div>
              <div className={styles.modalClose} onClick={() => setIsModalOpen(false)}>✕</div>
            </div>
            
            <div className={styles.modalBody}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Project <span className={styles.req}>*</span></label>
                  <select className={styles.formSelect}>
                    <option value="">Select project...</option>
                    <option>Residential Complex Amsterdam</option>
                    <option>Office Building Rotterdam</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Document Type <span className={styles.req}>*</span></label>
                  <select className={styles.formSelect}>
                    <option value="">Select type...</option>
                    <option>Installations</option>
                    <option>Certificates</option>
                  </select>
                </div>
                <div className={`${styles.formGroup} ${styles.fgFull}`}>
                  <label className={styles.formLabel}>Document Name</label>
                  <input type="text" className={styles.formInput} placeholder="Leave blank to use filename"/>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Expiry Date (optional)</label>
                  <input type="date" className={styles.formInput}/>
                </div>
              </div>

              {/* Drag Drop Zone */}
              <div 
                className={`${styles.uploadZone} ${dragActive ? styles.drag : ''}`} 
                onDragEnter={handleDrag} 
                onDragLeave={handleDrag} 
                onDragOver={handleDrag} 
                onDrop={handleDrop}
                onClick={() => {
                  const el = document.getElementById('hiddenFileInput');
                  if(el) el.click();
                }}
              >
                <div className={styles.uploadIcon}>📁</div>
                <div className={styles.uploadTitle}>Drop files here or click to browse</div>
                <div className={styles.uploadSub}>Drag & drop or <span>choose files</span></div>
                <div className={styles.uploadTypeRow}>
                  <span className={styles.uploadTag}>PDF</span>
                  <span className={styles.uploadTag}>DOCX</span>
                  <span className={styles.uploadTag}>XLSX</span>
                  <span className={styles.uploadTag}>PNG/JPG</span>
                  <span className={styles.uploadTag}>DWG</span>
                </div>
                <div style={{fontSize:'11px', color:'var(--gray-lt)', marginTop:'8px'}}>Max 50 MB per file</div>
              </div>
              <input type="file" id="hiddenFileInput" multiple accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.dwg" style={{display:'none'}} onChange={handleFileInput}/>

              {isUploading && (
                <div className={styles.uploadProgress} style={{ display: 'block' }}>
                  <div className={styles.uploadProgressFill} style={{ width: `${progress}%` }}></div>
                </div>
              )}
            </div>

            <div className={styles.modalFooter}>
              <button className={styles.modalCancel} onClick={() => setIsModalOpen(false)}>Cancel</button>
              <button className={styles.modalSubmit} onClick={simulateUpload}>📤 Upload Files</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
