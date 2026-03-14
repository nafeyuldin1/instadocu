import React from 'react';

export default function AdminReportsPage() {
  return (
    <div style={{ padding: '28px 32px', flex: 1 }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '26px', fontWeight: 900, color: 'var(--black)', letterSpacing: '-0.7px', marginBottom: '3px' }}>Reports</h1>
        <p style={{ fontSize: '13px', color: 'var(--gray)' }}>View and generate analytics and reports.</p>
      </div>
      <div style={{ background: 'var(--white)', padding: '56px 24px', borderRadius: '16px', border: '1px solid var(--border)', textAlign: 'center' }}>
        <div style={{ fontSize: '48px', opacity: 0.35, marginBottom: '10px' }}>📊</div>
        <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--black)' }}>Coming Soon</div>
        <div style={{ fontSize: '13px', color: 'var(--gray)' }}>This content has not been provided yet.</div>
      </div>
    </div>
  );
}
