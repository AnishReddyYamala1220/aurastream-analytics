'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Overview', path: '/', icon: '📊' },
    { name: 'EDA & Charts', path: '/analytics', icon: '📈' },
    { name: 'Model Comparison', path: '/models', icon: '🤖' },
    { name: 'Stream Predictor', path: '/predict', icon: '⚡' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span style={{ color: '#1DB954', fontSize: '1.5rem' }}>⚡</span>
        <span>AuraStream</span>
      </div>

      <nav className="sidebar-nav">
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={link.path}
              href={link.path}
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              <span>{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          );
        })}
      </nav>

      <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #27272a', fontSize: '0.75rem', color: '#71717a' }}>
        AuraStream ML Engine v2.4
      </div>
    </aside>
  );
}