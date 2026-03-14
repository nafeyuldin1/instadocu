'use client';

import React from 'react';
import Link from 'next/link';

export default function LoginDirectoryPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#F6F4F1',
      fontFamily: '"Satoshi", sans-serif',
      padding: '40px'
    }}>
      <div style={{
        background: 'white',
        padding: '60px',
        borderRadius: '24px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.06)',
        maxWidth: '600px',
        width: '100%',
        textAlign: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '32px' }}>
          <div style={{ width: '14px', height: '14px', background: '#E8692C', borderRadius: '50%' }}></div>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#010101', letterSpacing: '2.5px' }}>Installatie dosier</h2>
        </div>

        <h1 style={{ fontSize: '36px', fontWeight: 900, color: '#010101', letterSpacing: '-1px', marginBottom: '16px' }}>Select Portal</h1>
        <p style={{ fontSize: '16px', color: '#7A7A7A', marginBottom: '40px', lineHeight: 1.6 }}>Choose your designated login portal below to access the Installation Management System.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Link href="/login/customer" style={{
            display: 'block', padding: '20px', background: '#FFFFFF', border: '1.5px solid #E2DDD8', 
            borderRadius: '16px', textDecoration: 'none', color: '#010101', fontWeight: 700, fontSize: '18px',
            transition: 'all 0.2s', boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
          }} onMouseOver={(e) => {e.currentTarget.style.borderColor = '#2A5CBA'; e.currentTarget.style.background = '#EBF0FA'}} onMouseOut={(e) => {e.currentTarget.style.borderColor = '#E2DDD8'; e.currentTarget.style.background = '#FFFFFF'}}>
            👤 Customer Portal
          </Link>

          <Link href="/login/employee/qr" style={{
            display: 'block', padding: '20px', background: '#FFFFFF', border: '1.5px solid #E2DDD8', 
            borderRadius: '16px', textDecoration: 'none', color: '#010101', fontWeight: 700, fontSize: '18px',
            transition: 'all 0.2s', boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
          }} onMouseOver={(e) => {e.currentTarget.style.borderColor = '#2A5CBA'; e.currentTarget.style.background = '#EBF0FA'}} onMouseOut={(e) => {e.currentTarget.style.borderColor = '#E2DDD8'; e.currentTarget.style.background = '#FFFFFF'}}>
            👷 Employee Portal
          </Link>

          <Link href="/login/admin" style={{
            display: 'block', padding: '20px', background: '#FFFFFF', border: '1.5px solid #E2DDD8', 
            borderRadius: '16px', textDecoration: 'none', color: '#010101', fontWeight: 700, fontSize: '18px',
            transition: 'all 0.2s', boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
          }} onMouseOver={(e) => {e.currentTarget.style.borderColor = '#2A5CBA'; e.currentTarget.style.background = '#EBF0FA'}} onMouseOut={(e) => {e.currentTarget.style.borderColor = '#E2DDD8'; e.currentTarget.style.background = '#FFFFFF'}}>
            👔 Admin Control Center
          </Link>
        </div>

        <div style={{ marginTop: '40px', fontSize: '14px', color: '#BBBBBB', fontWeight: 500 }}>
          <Link href="/" style={{ color: '#E8692C', textDecoration: 'none' }}>← Back to Website</Link>
        </div>
      </div>
    </div>
  );
}
