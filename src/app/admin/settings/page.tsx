'use client';

import React, { useState } from 'react';
import styles from '@/styles/admin-settings.module.css';

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState('company');

  const tabs = [
    { id: 'company', icon: '🏢', label: 'Company Profile' },
    { id: 'users', icon: '👥', label: 'Users & Roles' },
    { id: 'security', icon: '🔒', label: 'Security' },
    { id: 'billing', icon: '💳', label: 'Billing & Plans' },
    { id: 'prefs', icon: '⚙️', label: 'System Preferences' },
    { id: 'support', icon: '💬', label: 'Support' },
  ];

  return (
    <div className={styles.settingsLayout}>
      {/* Settings NAV */}
      <nav className={styles.settingsNav}>
        <div className={styles.snTitle}>Settings</div>
        {tabs.map(t => (
          <div 
            key={t.id} 
            className={`${styles.snItem} ${activeTab === t.id ? styles.active : ''}`}
            onClick={() => setActiveTab(t.id)}
          >
            <span className={styles.snIcon}>{t.icon}</span>
            {t.label}
          </div>
        ))}
      </nav>

      {/* SETTINGS CONTENT */}
      <div className={styles.settingsContent}>
        
        {/* ══ COMPANY PROFILE ══ */}
        {activeTab === 'company' && (
          <div className={`${styles.panel} ${styles.active}`}>
            <div className={styles.panelHeader}>
              <div className={styles.panelTitle}>Company Profile</div>
              <div className={styles.panelSub}>Manage your company information</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardBody}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Company Name <span className={styles.req}>*</span></label>
                    <input type="text" className={styles.formInput} defaultValue="Installatie dosier B.V." />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Industry</label>
                    <select className={styles.formSelect} defaultValue="Electrical Installation">
                      <option>Electrical Installation</option>
                      <option>Real Estate</option>
                      <option>Construction</option>
                      <option>Healthcare</option>
                      <option>Government</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Email <span className={styles.req}>*</span></label>
                    <input type="email" className={styles.formInput} defaultValue="info@installatiedosier.nl" />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Phone</label>
                    <input type="tel" className={styles.formInput} defaultValue="+31 20 123 4567" />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Address</label>
                    <input type="text" className={styles.formInput} defaultValue="Keizersgracht 100" />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>City</label>
                    <input type="text" className={styles.formInput} defaultValue="Amsterdam" />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Postal Code</label>
                    <input type="text" className={styles.formInput} defaultValue="1015 CJ" />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Country</label>
                    <input type="text" className={styles.formInput} defaultValue="Netherlands" />
                  </div>
                </div>
                <div className={styles.formActions} style={{ marginTop: 22 }}>
                  <button className={styles.btnBlue} onClick={() => alert('Saved')}>💾 Save Changes</button>
                  <button className={styles.btnGhost}>Cancel</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ══ USERS & ROLES ══ */}
        {activeTab === 'users' && (
          <div className={`${styles.panel} ${styles.active}`}>
            <div className={styles.panelHeader} style={{display:'flex', alignItems:'flex-start', justifyContent:'space-between', flexWrap:'wrap', gap:12}}>
              <div>
                <div className={styles.panelTitle}>Users &amp; Roles</div>
                <div className={styles.panelSub}>Manage team members and permissions</div>
              </div>
              <button className={styles.btnPrimary}>➕ Add User</button>
            </div>
            <div className={styles.card}>
              <div style={{ overflowX: 'auto' }}>
                <table className={styles.usersTable}>
                  <thead>
                    <tr>
                      <th>NAME</th>
                      <th>EMAIL</th>
                      <th>ROLE</th>
                      <th>DEPARTMENT</th>
                      <th>STATUS</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className={styles.userNameCell}>Jan de Vries</div>
                      </td>
                      <td className={styles.userEmailCell}>jan@example.com</td>
                      <td><span className={`${styles.roleBadge} ${styles.roleAdmin}`}>Admin</span></td>
                      <td style={{fontSize:12, color:'var(--gray)'}}>Management</td>
                      <td><span className={`${styles.statusBadge} ${styles.sbActive}`}>Active</span></td>
                      <td><button className={styles.editLink}>Edit</button></td>
                    </tr>
                    <tr>
                      <td>
                        <div className={styles.userNameCell}>Sarah Peeters</div>
                      </td>
                      <td className={styles.userEmailCell}>sarah@example.com</td>
                      <td><span className={`${styles.roleBadge} ${styles.roleManager}`}>Manager</span></td>
                      <td style={{fontSize:12, color:'var(--gray)'}}>Operations</td>
                      <td><span className={`${styles.statusBadge} ${styles.sbActive}`}>Active</span></td>
                      <td><button className={styles.editLink}>Edit</button></td>
                    </tr>
                    <tr>
                      <td>
                        <div className={styles.userNameCell}>Peter Jansen</div>
                      </td>
                      <td className={styles.userEmailCell}>peter@example.com</td>
                      <td><span className={`${styles.roleBadge} ${styles.roleTechnician}`}>Technician</span></td>
                      <td style={{fontSize:12, color:'var(--gray)'}}>Field Service</td>
                      <td><span className={`${styles.statusBadge} ${styles.sbInactive}`}>Inactive</span></td>
                      <td><button className={styles.editLink}>Edit</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ══ SECURITY ══ */}
        {activeTab === 'security' && (
          <div className={`${styles.panel} ${styles.active}`}>
            <div className={styles.panelHeader}>
              <div className={styles.panelTitle}>Security Settings</div>
              <div className={styles.panelSub}>Configure security and authentication</div>
            </div>

            <div className={styles.card} style={{marginBottom: 20}}>
              <div className={styles.cardHeader}><div className={styles.cardTitle}>Password Policy</div></div>
              <div className={styles.cardBody}>
                <div className={styles.checkRow}>
                  <input type="checkbox" defaultChecked />
                  <div><div className={styles.checkLabel}>Minimum 8 characters</div></div>
                </div>
                <div className={styles.checkRow}>
                  <input type="checkbox" defaultChecked />
                  <div><div className={styles.checkLabel}>Require numbers</div></div>
                </div>
                <div className={styles.checkRow}>
                  <input type="checkbox" />
                  <div><div className={styles.checkLabel}>Require special characters</div></div>
                </div>
                <div className={`${styles.alert} ${styles.alertAmber}`} style={{marginTop: 14}}>
                  <span className={styles.alertIcon}>💡</span>
                  <span>Stricter password policies enhance account security but may increase support requests.</span>
                </div>
                <div className={styles.formActions} style={{marginTop: 16}}>
                  <button className={styles.btnBlue}>Save Policy</button>
                </div>
              </div>
            </div>

            <div className={styles.card} style={{marginBottom: 20}}>
              <div className={styles.cardHeader}><div className={styles.cardTitle}>Two-Factor Authentication</div><div className={styles.cardSub}>Add an extra layer of security to your account</div></div>
              <div className={styles.cardBody}>
                <div className={`${styles.alert} ${styles.alertGreen}`} style={{marginBottom: 16}}>
                  <span className={styles.alertIcon}>✅</span>
                  <div><strong>2FA Enabled</strong><br/><span style={{fontSize: 12}}>Two-factor authentication is currently enabled for your account using an authenticator app.</span></div>
                </div>
                <div className={styles.formActions}>
                  <button className={`${styles.btnGhost} ${styles.btnSm}`}>Disable 2FA</button>
                  <button className={`${styles.btnBlue} ${styles.btnSm}`}>View Backup Codes</button>
                </div>
              </div>
            </div>

            <div className={styles.card} style={{marginBottom: 20}}>
              <div className={styles.cardHeader}><div className={styles.cardTitle}>Session Management</div><div className={styles.cardSub}>Manage your active sessions across devices</div></div>
              <div className={styles.cardBody}>
                <div style={{fontSize: 13, color: 'var(--gray)', marginBottom: 16}}>You are currently logged in on 2 devices. Below is a list of your active sessions:</div>
                <div className={styles.sessionItem}>
                  <div className={styles.sessionInfo}>
                    <div className={styles.sessionIcon}>🖥️</div>
                    <div>
                      <div className={styles.sessionName}>Windows – Chrome</div>
                      <div className={styles.sessionMeta}>IP: 192.168.1.100 • Last active: 2 minutes ago</div>
                    </div>
                  </div>
                  <button className={styles.revokeBtn} onClick={() => alert('Revoked')}>Revoke</button>
                </div>
                <div className={styles.sessionItem}>
                  <div className={styles.sessionInfo}>
                    <div className={styles.sessionIcon}>📱</div>
                    <div>
                      <div className={styles.sessionName}>iPhone – Safari</div>
                      <div className={styles.sessionMeta}>IP: 203.0.113.45 • Last active: 1 hour ago</div>
                    </div>
                  </div>
                  <button className={styles.revokeBtn} onClick={() => alert('Revoked')}>Revoke</button>
                </div>
                <div className={styles.formActions} style={{marginTop: 14}}>
                  <button className={`${styles.btnGhost} ${styles.btnSm}`}>Revoke All Sessions</button>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardHeader}><div className={styles.cardTitle}>Data &amp; Privacy</div><div className={styles.cardSub}>Manage your personal data and privacy settings</div></div>
              <div className={styles.cardBody}>
                <div className={styles.checkRow}>
                  <input type="checkbox" defaultChecked />
                  <div><div className={styles.checkLabel}>Receive product updates and announcements</div></div>
                </div>
                <div className={styles.checkRow}>
                  <input type="checkbox" defaultChecked />
                  <div><div className={styles.checkLabel}>Allow analytics to improve user experience</div></div>
                </div>
                <div className={styles.formActions} style={{marginTop: 16}}>
                  <button className={styles.btnBlue}>Save Preferences</button>
                  <button className={styles.btnGhost}>Download My Data</button>
                </div>
                <div className={styles.sectionDivider}></div>
                <div className={styles.dangerZone}>
                  <div className={styles.dangerTitle}>⚠️ Delete Account</div>
                  <div className={styles.dangerDesc}>Permanently delete your account and all associated data. This action cannot be undone.</div>
                  <button className={`${styles.btnDanger} ${styles.btnSm}`}>Delete Account</button>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ══ BILLING & PLANS ══ */}
        {activeTab === 'billing' && (
          <div className={`${styles.panel} ${styles.active}`}>
            <div className={styles.panelHeader}>
              <div className={styles.panelTitle}>Billing &amp; Plans</div>
              <div className={styles.panelSub}>Manage subscription and payment</div>
            </div>

            <div className={styles.card} style={{marginBottom: 20}}>
              <div className={styles.cardHeader}><div className={styles.cardTitle}>Current Plan</div></div>
              <div className={styles.cardBody}>
                <div className={styles.billingPlanCard}>
                  <div style={{display:'flex', alignItems:'flex-start', justifyContent:'space-between', flexWrap:'wrap', gap:12, marginBottom: 12}}>
                    <div>
                      <div className={styles.planName}>Professional Plan</div>
                      <div className={styles.planPrice}>€99/month • Billed annually</div>
                      <div className={styles.planDesc}>Advanced features for growing teams. Includes priority support and advanced analytics.</div>
                    </div>
                    <button className={`${styles.btnBlue} ${styles.btnSm}`}>Upgrade Plan</button>
                  </div>
                  <div className={styles.planFeatures}>
                    <div className={styles.pfTitle}>ℹ️ Plan Features</div>
                    <div className={styles.pfItem}>Up to 10 team members</div>
                    <div className={styles.pfItem}>Unlimited projects</div>
                    <div className={styles.pfItem}>Advanced reporting</div>
                    <div className={styles.pfItem}>Priority email support</div>
                  </div>
                  <div className={styles.planActions}>
                    <button className={`${styles.btnGhost} ${styles.btnSm}`}>Change Plan</button>
                    <button className={`${styles.btnGhost} ${styles.btnSm}`} style={{color: 'var(--red)'}}>Cancel Subscription</button>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardHeader}><div className={styles.cardTitle}>Billing History</div></div>
              <div className={styles.cardBody} style={{padding: 0}}>
                <div style={{overflowX: 'auto'}}>
                  <table className={styles.billingTable} style={{padding: '0 16px', minWidth: 600}}>
                    <thead>
                      <tr style={{background: 'var(--cream)'}}>
                        <th style={{paddingLeft: 24}}>DATE</th>
                        <th>DESCRIPTION</th>
                        <th>AMOUNT</th>
                        <th>STATUS</th>
                        <th>INVOICE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{paddingLeft: 24}}>Feb 1, 2026</td>
                        <td>Professional Plan – Monthly</td>
                        <td style={{fontWeight: 700}}>€99.00</td>
                        <td><span className={styles.paidBadge}>Paid</span></td>
                        <td><button className={styles.dlLink}>Download</button></td>
                      </tr>
                      <tr>
                        <td style={{paddingLeft: 24}}>Jan 1, 2026</td>
                        <td>Professional Plan – Monthly</td>
                        <td style={{fontWeight: 700}}>€99.00</td>
                        <td><span className={styles.paidBadge}>Paid</span></td>
                        <td><button className={styles.dlLink}>Download</button></td>
                      </tr>
                      <tr>
                        <td style={{paddingLeft: 24}}>Dec 1, 2025</td>
                        <td>Professional Plan – Monthly</td>
                        <td style={{fontWeight: 700}}>€99.00</td>
                        <td><span className={styles.paidBadge}>Paid</span></td>
                        <td><button className={styles.dlLink}>Download</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ══ SYSTEM PREFERENCES ══ */}
        {activeTab === 'prefs' && (
          <div className={`${styles.panel} ${styles.active}`}>
            <div className={styles.panelHeader}>
              <div className={styles.panelTitle}>System Preferences</div>
              <div className={styles.panelSub}>Configure system-wide settings</div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardBody}>
                <div className={styles.formGroup} style={{marginBottom: 20}}>
                  <label className={styles.formLabel}>Language</label>
                  <select className={styles.formSelect} defaultValue="English">
                    <option>English</option>
                    <option>Nederlands</option>
                    <option>Deutsch</option>
                    <option>Français</option>
                  </select>
                  <div className={styles.formHint}>💡 Choose your preferred language for the interface</div>
                </div>

                <div className={styles.sectionDivider} style={{margin: '0 0 20px'}}></div>

                <div className={styles.formGroup} style={{marginBottom: 20}}>
                  <label className={styles.formLabel}>Timezone</label>
                  <select className={styles.formSelect} defaultValue="Europe/Amsterdam (GMT+1)">
                    <option>Europe/Amsterdam (GMT+1)</option>
                    <option>Europe/London (GMT+0)</option>
                    <option>America/New_York (GMT-5)</option>
                    <option>America/Los_Angeles (GMT-8)</option>
                    <option>Asia/Tokyo (GMT+9)</option>
                  </select>
                  <div className={styles.formHint}>💡 Select your timezone for correct time display</div>
                </div>

                <div className={styles.sectionDivider} style={{margin: '0 0 20px'}}></div>

                <div className={styles.formGroup} style={{marginBottom: 24}}>
                  <label className={styles.formLabel}>Date Format</label>
                  <select className={styles.formSelect} defaultValue="YYYY-MM-DD (2026-02-16)">
                    <option>YYYY-MM-DD (2026-02-16)</option>
                    <option>DD-MM-YYYY (16-02-2026)</option>
                    <option>MM/DD/YYYY (02/16/2026)</option>
                    <option>DD/MM/YYYY (16/02/2026)</option>
                  </select>
                  <div className={styles.formHint}>💡 Choose how dates are displayed throughout the application</div>
                </div>

                <div className={styles.sectionDivider} style={{margin: '0 0 20px'}}></div>

                <div className={styles.sectionTitle}>Notifications</div>
                <div className={styles.sectionSub}>Control when and how you receive notifications</div>
                
                <div className={styles.toggleRow}>
                  <div className={styles.toggleInfo}>
                    <div className={styles.toggleLabel}>Email Notifications</div>
                    <div className={styles.toggleHint}>Receive important updates via email</div>
                  </div>
                  <label className={styles.toggle}>
                    <input type="checkbox" defaultChecked />
                    <span className={styles.toggleSlider}></span>
                  </label>
                </div>
                <div className={styles.toggleRow}>
                  <div className={styles.toggleInfo}>
                    <div className={styles.toggleLabel}>Browser Notifications</div>
                    <div className={styles.toggleHint}>Show desktop notifications in your browser</div>
                  </div>
                  <label className={styles.toggle}>
                    <input type="checkbox" defaultChecked />
                    <span className={styles.toggleSlider}></span>
                  </label>
                </div>
                <div className={styles.toggleRow}>
                  <div className={styles.toggleInfo}>
                    <div className={styles.toggleLabel}>Weekly Digest</div>
                    <div className={styles.toggleHint}>Get a weekly summary of project activity</div>
                  </div>
                  <label className={styles.toggle}>
                    <input type="checkbox" />
                    <span className={styles.toggleSlider}></span>
                  </label>
                </div>

                <div className={styles.formActions} style={{marginTop: 22}}>
                  <button className={styles.btnBlue}>💾 Save Preferences</button>
                  <button className={styles.btnGhost}>↺ Reset to Defaults</button>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ══ SUPPORT ══ */}
        {activeTab === 'support' && (
          <div className={`${styles.panel} ${styles.active}`}>
            <div className={styles.panelHeader}>
              <div className={styles.panelTitle}>Support</div>
              <div className={styles.panelSub}>Get help and contact support</div>
            </div>

            <div className={styles.card} style={{marginBottom: 20}}>
              <div className={styles.cardBody}>
                <div className={styles.supportGrid}>
                  <div className={styles.supportCard}>
                    <div className={styles.supportIcon}>📚</div>
                    <div className={styles.supportName}>Documentation</div>
                    <div className={styles.supportDesc}>Browse our comprehensive guides and tutorials to learn how to use all features</div>
                    <button className={styles.btnBlue}>View Docs</button>
                  </div>
                  <div className={styles.supportCard}>
                    <div className={styles.supportIcon}>💬</div>
                    <div className={styles.supportName}>Contact Support</div>
                    <div className={styles.supportDesc}>Get help from our team. We're here to answer your questions</div>
                    <button className={styles.btnBlue}>Send Message</button>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.card} style={{marginBottom: 20}}>
              <div className={styles.cardHeader}><div className={styles.cardTitle}>Contact Information</div></div>
              <div className={styles.cardBody}>
                <div className={styles.contactGrid}>
                  <div className={styles.contactItem}>
                    <div className={styles.contactItemIcon}>💬</div>
                    <div>
                      <div className={styles.contactItemName}>Live Chat</div>
                      <div style={{fontSize:12, color:'var(--gray)', marginBottom:3}}>Start a conversation</div>
                      <div className={styles.contactItemHint}>Available Monday – Friday, 9AM – 6PM CET</div>
                    </div>
                  </div>
                  <div className={styles.contactItem}>
                    <div className={styles.contactItemIcon}>📧</div>
                    <div>
                      <div className={styles.contactItemName}>Email Support</div>
                      <div className={styles.contactItemVal}>support@installatiedosier.nl</div>
                      <div className={styles.contactItemHint}>Response time: Usually within 24 hours</div>
                    </div>
                  </div>
                  <div className={styles.contactItem}>
                    <div className={styles.contactItemIcon}>📞</div>
                    <div>
                      <div className={styles.contactItemName}>Phone Support</div>
                      <div className={styles.contactItemVal}>+31 20 123 4567</div>
                      <div className={styles.contactItemHint}>Monday – Friday, 9AM – 5PM CET</div>
                    </div>
                  </div>
                  <div className={styles.contactItem}>
                    <div className={styles.contactItemIcon}>📍</div>
                    <div>
                      <div className={styles.contactItemName}>Office Location</div>
                      <div style={{fontSize:12, color:'var(--gray)', lineHeight:1.7}}>Installatie dosier B.V.<br/>Keizersgracht 100<br/>1015 CJ Amsterdam, Netherlands</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
