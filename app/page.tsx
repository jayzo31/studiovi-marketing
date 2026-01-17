'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  Play,
  Check,
  TrendingUp,
  Image,
  Search,
  MessageSquare,
  PieChart,
  Sun,
  Moon
} from 'lucide-react';

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(true);

  // Check system preference on mount
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  // Theme colors matched to dashboard (globals.css)
  const theme = {
    dark: {
      bg: '#121212',
      bgAlt: '#1A1A1A',
      bgCard: '#1A1A1A',
      bgCardHover: '#242424',
      border: 'rgba(255, 255, 255, 0.1)',
      text: '#EDEDED',
      textSecondary: '#999999',
      textMuted: '#737373',
      accent: '#22C55E',
      accentGradient: 'linear-gradient(135deg, #22C55E 0%, #10B981 100%)',
    },
    light: {
      bg: '#CBCED5',
      bgAlt: '#F7F7F7',
      bgCard: '#F7F7F7',
      bgCardHover: '#E5E5E5',
      border: 'rgba(0, 0, 0, 0.08)',
      text: '#1A1A1C',
      textSecondary: '#4B5563',
      textMuted: '#6B7280',
      accent: '#22C55E',
      accentGradient: 'linear-gradient(135deg, #22C55E 0%, #10B981 100%)',
    }
  };

  const t = darkMode ? theme.dark : theme.light;

  const features = [
    { icon: Sparkles, title: 'AI Script Generator', desc: 'Generate high-retention scripts with viral hooks in seconds.', color: '#A855F7' },
    { icon: TrendingUp, title: 'Trend Analysis', desc: 'Discover trending topics before they explode in your niche.', color: '#14B8A6' },
    { icon: Image, title: 'AI Thumbnails', desc: 'Create scroll-stopping thumbnails with A/B testing.', color: '#F43F5E' },
    { icon: Search, title: 'SEO Optimizer', desc: 'Optimize titles, descriptions, and tags for maximum reach.', color: '#3B82F6' },
    { icon: MessageSquare, title: 'Comment AI', desc: 'Engage your audience with AI-powered comment responses.', color: '#F97316' },
    { icon: PieChart, title: 'Analytics Hub', desc: 'Deep insights into what\'s working and what\'s not.', color: '#22C55E' },
  ];

  const steps = [
    { num: '1', title: 'Find Trends', desc: 'Discover what\'s trending in your niche before anyone else.' },
    { num: '2', title: 'Generate Script', desc: 'AI writes engaging scripts optimized for retention.' },
    { num: '3', title: 'Optimize SEO', desc: 'Perfect titles, descriptions, and tags for discoverability.' },
    { num: '4', title: 'Go Viral', desc: 'Publish with confidence and watch your channel grow.' },
  ];


  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: t.bg,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: t.text,
      transition: 'background-color 0.3s ease, color 0.3s ease',
    }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .nav-link {
          color: ${t.textSecondary};
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .nav-link:hover { color: ${t.text}; }

        .btn-primary {
          background: ${t.accentGradient};
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(34, 197, 94, 0.4);
        }

        .btn-secondary {
          background: ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'};
          color: ${t.text};
          border: 1px solid ${t.border};
          padding: 12px 24px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }
        .btn-secondary:hover {
          background: ${darkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)'};
        }

        .feature-card {
          background: ${t.bgCard};
          border: 1px solid ${t.border};
          border-radius: 16px;
          padding: 28px;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,${darkMode ? '0.3' : '0.1'});
          border-color: ${t.accent}40;
        }

        .gradient-text {
          background: ${t.accentGradient};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .theme-toggle {
          background: ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'};
          border: 1px solid ${t.border};
          border-radius: 8px;
          padding: 8px 12px;
          cursor: pointer;
          font-size: 16px;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .theme-toggle:hover {
          background: ${darkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)'};
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .hero-image {
          animation: float 6s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          nav { padding: 16px 24px !important; }
          .nav-links { display: none !important; }
          section { padding: 60px 24px !important; }
          h1 { font-size: 36px !important; }
          h2 { font-size: 28px !important; }
          .features-grid { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>

      {/* Navigation */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 60px',
        position: 'sticky',
        top: 0,
        backgroundColor: darkMode ? 'rgba(18, 18, 18, 0.95)' : 'rgba(203, 206, 213, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${t.border}`,
        zIndex: 100,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '10px',
              background: t.accentGradient,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white',
            }}>
              <Sparkles size={18} />
            </div>
            <span style={{ fontSize: '20px', fontWeight: 700 }}>StudioVid<sup style={{ fontSize: '10px', verticalAlign: 'super' }}>™</sup></span>
          </div>
          <div className="nav-links" style={{ display: 'flex', gap: '32px' }}>
            <a href="#features" className="nav-link">Features</a>
            <a href="#how-it-works" className="nav-link">How It Works</a>
            <Link href="/pricing/" className="nav-link">Pricing</Link>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={18} color={t.text} /> : <Moon size={18} color={t.text} />}
          </button>
          <Link href="/coming-soon/" className="nav-link">Sign In</Link>
          <Link href="/coming-soon/" className="btn-primary">
            Start Free <ArrowRight size={16} />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        padding: '100px 60px 80px',
        textAlign: 'center',
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          borderRadius: '20px',
          backgroundColor: darkMode ? 'rgba(34, 197, 94, 0.1)' : 'rgba(34, 197, 94, 0.08)',
          border: `1px solid ${t.accent}30`,
          marginBottom: '24px',
        }}>
          <Sparkles size={14} color={t.accent} />
          <span style={{ fontSize: '13px', color: t.accent, fontWeight: 500 }}>
            AI-Powered YouTube Growth Platform
          </span>
        </div>

        <h1 style={{ fontSize: '64px', fontWeight: 700, lineHeight: 1.1, marginBottom: '24px' }}>
          Go Viral with<br />
          <span className="gradient-text">AI-Powered Content</span>
        </h1>

        <p style={{ fontSize: '20px', color: t.textSecondary, maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.6 }}>
          Generate scripts, optimize SEO, create thumbnails, and analyze trends.
          Everything you need to grow your YouTube channel, powered by AI.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '24px', flexWrap: 'wrap' }}>
          <Link href="/coming-soon/" className="btn-primary" style={{ padding: '16px 32px', fontSize: '16px' }}>
            Start Free Trial <ArrowRight size={18} />
          </Link>
          <button className="btn-secondary" style={{ padding: '16px 32px', fontSize: '16px' }}>
            <Play size={16} /> Watch Demo
          </button>
        </div>

        <p style={{ fontSize: '13px', color: t.textMuted }}>
          No credit card required - Free forever plan available
        </p>
      </section>

      {/* Features Section */}
      <section id="features" style={{ padding: '100px 60px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{ fontSize: '13px', color: t.accent, fontWeight: 600, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Features
          </p>
          <h2 style={{ fontSize: '42px', fontWeight: 700, marginBottom: '16px' }}>
            Everything You Need to <span className="gradient-text">Go Viral</span>
          </h2>
          <p style={{ fontSize: '18px', color: t.textSecondary, maxWidth: '600px', margin: '0 auto' }}>
            Powerful AI tools designed specifically for YouTube creators
          </p>
        </div>

        <div className="features-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}>
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.title} className="feature-card">
                <div style={{
                  width: '52px', height: '52px', borderRadius: '14px',
                  backgroundColor: `${feature.color}15`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '20px',
                }}>
                  <IconComponent size={24} color={feature.color} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '10px' }}>{feature.title}</h3>
                <p style={{ fontSize: '14px', color: t.textSecondary, lineHeight: 1.6 }}>{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" style={{ padding: '100px 60px', backgroundColor: t.bgAlt }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ fontSize: '13px', color: t.accent, fontWeight: 600, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              How It Works
            </p>
            <h2 style={{ fontSize: '42px', fontWeight: 700, marginBottom: '16px' }}>
              From Idea to <span className="gradient-text">Viral Video</span>
            </h2>
            <p style={{ fontSize: '18px', color: t.textSecondary }}>
              Our AI-powered workflow helps you create content that performs
            </p>
          </div>

          <div className="steps-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '32px',
          }}>
            {steps.map((step) => (
              <div key={step.num} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '56px', height: '56px', borderRadius: '50%',
                  background: t.accentGradient,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '22px', fontWeight: 700, color: 'white',
                  margin: '0 auto 20px',
                  boxShadow: '0 8px 20px rgba(34, 197, 94, 0.3)',
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '10px' }}>{step.title}</h3>
                <p style={{ fontSize: '14px', color: t.textSecondary, lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '100px 60px',
        background: darkMode
          ? 'linear-gradient(180deg, rgba(34, 197, 94, 0.08) 0%, rgba(18, 18, 18, 0) 100%)'
          : 'linear-gradient(180deg, rgba(34, 197, 94, 0.05) 0%, rgba(203, 206, 213, 0) 100%)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 700, marginBottom: '16px' }}>
            Ready to <span className="gradient-text">Grow</span> Your Channel?
          </h2>
          <p style={{ fontSize: '18px', color: t.textSecondary, marginBottom: '40px' }}>
            Use AI to get more views, subscribers, and revenue.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '24px', flexWrap: 'wrap' }}>
            <Link href="/pricing/" className="btn-primary" style={{ padding: '16px 32px', fontSize: '16px' }}>
              View Pricing <ArrowRight size={18} />
            </Link>
            <Link href="/coming-soon/" className="btn-secondary" style={{ padding: '16px 32px', fontSize: '16px' }}>
              Start Free Trial
            </Link>
          </div>

          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', fontSize: '13px', color: t.textMuted, flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Check size={14} color="#22C55E" /> Free forever plan
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Check size={14} color="#22C55E" /> No credit card required
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Check size={14} color="#22C55E" /> Cancel anytime
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '60px',
        backgroundColor: t.bgAlt,
        borderTop: `1px solid ${t.border}`,
      }}>
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '60px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '8px',
                background: t.accentGradient,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white',
              }}>
                <Sparkles size={14} />
              </div>
              <span style={{ fontSize: '18px', fontWeight: 700 }}>StudioVid<sup style={{ fontSize: '9px', verticalAlign: 'super' }}>™</sup></span>
            </div>
            <p style={{ fontSize: '14px', color: t.textMuted, lineHeight: 1.6, maxWidth: '280px' }}>
              AI-powered YouTube growth platform for creators who want to go viral.
            </p>
          </div>

          {[
            { title: 'Product', links: [{ label: 'Features', href: '#features' }, { label: 'Pricing', href: '/pricing/' }] },
            { title: 'Resources', links: [{ label: 'Blog', href: '#' }, { label: 'Creator Guides', href: '#' }, { label: 'Help Center', href: '#' }] },
            { title: 'Legal', links: [{ label: 'Privacy Policy', href: '/privacy/' }, { label: 'Terms of Service', href: '/terms/' }, { label: 'Cookie Policy', href: '/cookie-policy/' }] },
          ].map((col) => (
            <div key={col.title}>
              <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '20px' }}>{col.title}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {col.links.map((link) => (
                  <a key={link.label} href={link.href} style={{ fontSize: '14px', color: t.textMuted, textDecoration: 'none' }}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          maxWidth: '1200px',
          margin: '40px auto 0',
          paddingTop: '24px',
          borderTop: `1px solid ${t.border}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <p style={{ fontSize: '13px', color: t.textMuted }}>
            © 2026 StudioVid™. Operated by Zojutsu LLC. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            {['Twitter', 'YouTube', 'Discord'].map((social) => (
              <a key={social} href="#" style={{ fontSize: '13px', color: t.textMuted, textDecoration: 'none' }}>
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
