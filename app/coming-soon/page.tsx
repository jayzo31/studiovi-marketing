'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Rocket, Bell } from 'lucide-react';
import MarketingLayout from '@/components/MarketingLayout';

export default function ComingSoonPage() {
  return (
    <MarketingLayout>
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          maxWidth: '500px',
          textAlign: 'center'
        }}
      >
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #22C55E 0%, #10B981 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 32px'
        }}>
          <Rocket style={{ width: '40px', height: '40px', color: 'white' }} />
        </div>

        <h1 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '16px' }}>
          Coming Soon
        </h1>

        <p style={{ fontSize: '18px', color: '#999', marginBottom: '32px', lineHeight: 1.6 }}>
          We&apos;re putting the finishing touches on StudioVid. Join our waitlist to be the first
          to know when we launch and get early access benefits.
        </p>

        <div style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '32px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '16px' }}>
            <Bell style={{ width: '20px', height: '20px', color: '#22C55E' }} />
            <span style={{ fontWeight: 600 }}>Get Notified</span>
          </div>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: '12px' }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                padding: '12px 16px',
                borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(0,0,0,0.5)',
                color: '#EDEDED',
                fontSize: '14px',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              className="btn-primary"
              style={{ whiteSpace: 'nowrap' }}
            >
              Join Waitlist
            </button>
          </form>
        </div>

        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#999',
            textDecoration: 'none',
            fontSize: '14px',
            transition: 'color 0.2s'
          }}
        >
          <ArrowLeft style={{ width: '16px', height: '16px' }} />
          Back to Home
        </Link>
      </motion.div>
    </div>
    </MarketingLayout>
  );
}
