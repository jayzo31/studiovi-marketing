'use client';

import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#121212',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: '#EDEDED',
    }}>
      {/* Navigation */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 60px',
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(18, 18, 18, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 100,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#EDEDED' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #22C55E 0%, #10B981 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}>
              <Sparkles size={18} />
            </div>
            <span style={{ fontSize: '20px', fontWeight: 700 }}>StudioVid<sup style={{ fontSize: '10px', verticalAlign: 'super' }}>™</sup></span>
          </Link>
          <div className="nav-links" style={{ display: 'flex', gap: '32px' }}>
            <Link href="/#features" className="nav-link">Features</Link>
            <Link href="/#how-it-works" className="nav-link">How It Works</Link>
            <Link href="/pricing/" className="nav-link">Pricing</Link>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link href="/coming-soon/" className="nav-link">Sign In</Link>
          <Link href="/coming-soon/" className="btn-primary">
            Start Free <ArrowRight size={16} />
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer style={{
        padding: '40px 60px',
        backgroundColor: '#1A1A1A',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <p style={{ fontSize: '13px', color: '#737373' }}>
            © 2026 StudioVid™. Operated by Zojutsu LLC. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link href="/privacy/" style={{ fontSize: '13px', color: '#737373', textDecoration: 'none' }}>Privacy</Link>
            <Link href="/terms/" style={{ fontSize: '13px', color: '#737373', textDecoration: 'none' }}>Terms</Link>
            <Link href="/cookie-policy/" style={{ fontSize: '13px', color: '#737373', textDecoration: 'none' }}>Cookies</Link>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @media (max-width: 768px) {
          nav { padding: 16px 24px !important; }
          .nav-links { display: none !important; }
          footer { padding: 24px !important; }
        }
      `}</style>
    </div>
  );
}
