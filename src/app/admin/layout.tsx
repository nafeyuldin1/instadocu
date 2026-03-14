import React from 'react';
import AdminShell from '@/components/admin/AdminShell';

export const metadata = {
  title: 'Installatie dosier - Admin',
  description: 'Admin panel for Installatie dosier',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminShell>
      {children}
    </AdminShell>
  );
}
