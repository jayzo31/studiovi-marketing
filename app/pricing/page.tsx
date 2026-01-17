'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Zap,
  Building2,
  Rocket,
  Crown,
  ArrowRight,
  Lock,
  ChevronDown,
} from 'lucide-react';
import MarketingLayout from '@/components/MarketingLayout';

const PLANS = [
  {
    id: 'free',
    name: 'Free',
    tagline: 'Try It',
    description: 'Explore what StudioVid can do',
    monthlyPrice: 0,
    annualPrice: 0,
    icon: Sparkles,
    color: 'from-gray-500 to-gray-600',
    cta: 'Start Free',
    ctaStyle: 'secondary',
    popular: false,
    features: [
      { name: 'Brand Kits', value: '1 Demo Kit' },
      { name: 'Team Seats', value: '1 User' },
      { name: 'AI Scriptwriter', value: '1 / month' },
      { name: 'AI Thumbnails', value: '2 / month' },
      { name: 'Data Source', value: 'Cached Only', locked: true },
      { name: 'Competitor Spy', value: 'Demo Only', locked: true },
      { name: 'Reporting', value: 'None', disabled: true },
    ],
  },
  {
    id: 'creator',
    name: 'Creator',
    tagline: 'Do It',
    description: 'For individual creators ready to grow',
    monthlyPrice: 39,
    annualPrice: 31,
    icon: Zap,
    color: 'from-blue-500 to-cyan-500',
    cta: 'Start Trial',
    ctaStyle: 'primary',
    popular: false,
    features: [
      { name: 'Brand Kits', value: '1 Brand' },
      { name: 'Team Seats', value: '1 User' },
      { name: 'AI Scriptwriter', value: '30 / month' },
      { name: 'AI Thumbnails', value: '50 / month' },
      { name: 'Data Source', value: 'Live Market' },
      { name: 'Competitor Spy', value: '3 Tracked' },
      { name: 'Reporting', value: 'Web Dashboard' },
    ],
  },
  {
    id: 'studio',
    name: 'Studio',
    tagline: 'Scale It',
    description: 'For creators scaling their content',
    monthlyPrice: 89,
    annualPrice: 71,
    icon: Building2,
    color: 'from-green-500 to-emerald-500',
    cta: 'Start Trial',
    ctaStyle: 'primary',
    popular: true,
    features: [
      { name: 'Brand Kits', value: '3 Brands' },
      { name: 'Team Seats', value: '2 Users' },
      { name: 'AI Scriptwriter', value: '100 / month' },
      { name: 'AI Thumbnails', value: '150 / month' },
      { name: 'Data Source', value: 'Live Market' },
      { name: 'Competitor Spy', value: '10 Tracked' },
      { name: 'Reporting', value: 'PDF Export' },
    ],
  },
  {
    id: 'agency',
    name: 'Agency',
    tagline: 'Sell It',
    description: 'For agencies managing multiple clients',
    monthlyPrice: 299,
    annualPrice: 239,
    icon: Rocket,
    color: 'from-purple-500 to-pink-500',
    cta: 'Start Trial',
    ctaStyle: 'primary',
    popular: false,
    features: [
      { name: 'Brand Kits', value: '10 Brands' },
      { name: 'Team Seats', value: '5 Users' },
      { name: 'AI Scriptwriter', value: '500 / month' },
      { name: 'AI Thumbnails', value: '600 / month' },
      { name: 'Data Source', value: 'Live Market' },
      { name: 'Competitor Spy', value: '50 Tracked' },
      { name: 'Reporting', value: 'White-Label' },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Own It',
    description: 'For large teams and custom needs',
    monthlyPrice: 999,
    annualPrice: 799,
    icon: Crown,
    color: 'from-amber-500 to-orange-500',
    cta: 'Contact Sales',
    ctaStyle: 'secondary',
    popular: false,
    features: [
      { name: 'Brand Kits', value: '40 Brands' },
      { name: 'Team Seats', value: '15 Users' },
      { name: 'AI Scriptwriter', value: '2,500 / month' },
      { name: 'AI Thumbnails', value: '3,000 / month' },
      { name: 'Data Source', value: 'Live Market' },
      { name: 'Competitor Spy', value: '200 Tracked' },
      { name: 'Reporting', value: 'API Access' },
    ],
  },
];

const FAQS = [
  {
    question: 'What happens when I hit my limits?',
    answer: 'You\'ll receive a notification at 80% usage. Once you hit your limit, you can upgrade your plan or wait until the next billing cycle. We never charge overage fees without your consent.',
  },
  {
    question: 'Can I switch plans anytime?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. If you upgrade, you\'ll be prorated for the remainder of the billing cycle. If you downgrade, the change takes effect at the start of your next billing cycle.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, all paid plans come with a 14-day free trial. No credit card required to start. You\'ll have full access to all features during the trial period.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and for Enterprise plans, we also accept bank transfers and invoicing.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Absolutely. You can cancel your subscription at any time from your account settings. You\'ll continue to have access until the end of your current billing period.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied, contact our support team within 30 days of your purchase for a full refund.',
  },
  {
    question: 'What is a Brand Kit?',
    answer: 'A Brand Kit contains your channel\'s visual identity - logo, colors, fonts, and style preferences. It helps AI generate content that matches your brand. Each brand kit can be associated with one YouTube channel.',
  },
  {
    question: 'How does the Competitor Spy feature work?',
    answer: 'You can track competitors up to the limit in your plan. We monitor their upload frequency, views, engagement rates, and trending topics. Data refreshes automatically to keep you informed.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left font-medium hover:text-blue-500 transition-colors"
      >
        {question}
        <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-400">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <MarketingLayout>
    <div style={{ paddingTop: '96px', paddingBottom: '96px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <span style={{
            display: 'inline-block',
            padding: '4px 12px',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '9999px',
            fontSize: '12px',
            marginBottom: '16px'
          }}>
            Pricing
          </span>
          <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '16px' }}>
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p style={{ fontSize: '20px', color: '#999', maxWidth: '672px', margin: '0 auto 32px' }}>
            Start free, upgrade when you&apos;re ready. No hidden fees, no surprises.
          </p>

          {/* Billing Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            <span style={{ fontWeight: !isAnnual ? 600 : 400, color: !isAnnual ? '#EDEDED' : '#999' }}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              style={{
                width: '48px',
                height: '24px',
                borderRadius: '9999px',
                background: isAnnual ? '#3b82f6' : '#333',
                position: 'relative',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.2s'
              }}
            >
              <span style={{
                position: 'absolute',
                top: '2px',
                left: isAnnual ? '26px' : '2px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'white',
                transition: 'left 0.2s'
              }} />
            </button>
            <span style={{ fontWeight: isAnnual ? 600 : 400, color: isAnnual ? '#EDEDED' : '#999' }}>
              Annual
              <span style={{
                marginLeft: '8px',
                padding: '2px 8px',
                background: 'rgba(59, 130, 246, 0.1)',
                color: '#3b82f6',
                borderRadius: '4px',
                fontSize: '12px'
              }}>
                Save 20%
              </span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          marginBottom: '96px'
        }}>
          {PLANS.map((plan, idx) => {
            const Icon = plan.icon;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  border: plan.popular ? '1px solid #3b82f6' : '1px solid rgba(255,255,255,0.1)',
                  background: '#0A0A0A',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: plan.popular ? '0 8px 32px rgba(59, 130, 246, 0.1)' : 'none'
                }}
              >
                {plan.popular && (
                  <span style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#3b82f6',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontSize: '12px',
                    fontWeight: 600
                  }}>
                    Most Popular
                  </span>
                )}

                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: `linear-gradient(135deg, ${plan.color.includes('gray') ? '#6B7280, #4B5563' : plan.color.includes('blue') ? '#3B82F6, #06B6D4' : plan.color.includes('green') ? '#3b82f6, #2563eb' : plan.color.includes('purple') ? '#A855F7, #EC4899' : '#F59E0B, #F97316'})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px'
                }}>
                  <Icon style={{ width: '20px', height: '20px', color: 'white' }} />
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: 700 }}>{plan.name}</h3>
                <p style={{ fontSize: '12px', color: '#3b82f6', fontWeight: 500, marginBottom: '4px' }}>{plan.tagline}</p>
                <p style={{ fontSize: '12px', color: '#999', marginBottom: '12px' }}>{plan.description}</p>

                <div style={{ marginBottom: '16px' }}>
                  <span style={{ fontSize: '30px', fontWeight: 700 }}>${price}</span>
                  <span style={{ color: '#999', fontSize: '14px' }}>/mo</span>
                  {isAnnual && plan.monthlyPrice > 0 && (
                    <div style={{ fontSize: '12px', color: '#999' }}>
                      Billed ${price * 12}/year
                    </div>
                  )}
                </div>

                <Link
                  href="/coming-soon/"
                  className={plan.ctaStyle === 'primary' ? 'btn-primary' : 'btn-secondary'}
                  style={{
                    marginBottom: '16px',
                    width: '100%',
                    justifyContent: 'center',
                    background: plan.popular ? 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' : undefined
                  }}
                >
                  {plan.cta}
                  {plan.id !== 'enterprise' && <ArrowRight style={{ width: '16px', height: '16px' }} />}
                </Link>

                <div style={{ flex: 1, fontSize: '12px' }}>
                  {plan.features.map((feature, fidx) => (
                    <div key={fidx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '8px',
                      marginBottom: '8px'
                    }}>
                      <span style={{ color: feature.disabled ? 'rgba(255,255,255,0.3)' : '#EDEDED' }}>
                        {feature.name}
                      </span>
                      <span style={{
                        fontWeight: 500,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        color: feature.disabled ? 'rgba(255,255,255,0.3)' : feature.locked ? '#F59E0B' : '#EDEDED'
                      }}>
                        {feature.locked && <Lock style={{ width: '12px', height: '12px' }} />}
                        {feature.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '96px' }}
        >
          <h2 style={{ fontSize: '30px', fontWeight: 700, textAlign: 'center', marginBottom: '32px' }}>Compare All Plans</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ textAlign: 'left', padding: '16px', fontWeight: 600 }}>Feature</th>
                  <th style={{ textAlign: 'center', padding: '16px 12px', fontWeight: 600, fontSize: '14px' }}>Free</th>
                  <th style={{ textAlign: 'center', padding: '16px 12px', fontWeight: 600, fontSize: '14px' }}>Creator</th>
                  <th style={{ textAlign: 'center', padding: '16px 12px', fontWeight: 600, fontSize: '14px', color: '#3b82f6' }}>Studio</th>
                  <th style={{ textAlign: 'center', padding: '16px 12px', fontWeight: 600, fontSize: '14px' }}>Agency</th>
                  <th style={{ textAlign: 'center', padding: '16px 12px', fontWeight: 600, fontSize: '14px' }}>Enterprise</th>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
                  <th style={{ textAlign: 'left', padding: '8px 16px', fontWeight: 400, color: '#999', fontSize: '14px' }}>Monthly Price</th>
                  <th style={{ textAlign: 'center', padding: '8px 12px', fontWeight: 600 }}>$0</th>
                  <th style={{ textAlign: 'center', padding: '8px 12px', fontWeight: 600 }}>$39</th>
                  <th style={{ textAlign: 'center', padding: '8px 12px', fontWeight: 600, color: '#3b82f6' }}>$89</th>
                  <th style={{ textAlign: 'center', padding: '8px 12px', fontWeight: 600 }}>$299</th>
                  <th style={{ textAlign: 'center', padding: '8px 12px', fontWeight: 600 }}>$999</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Brand Kits', values: ['1 Demo', '1', '3', '10', '40'] },
                  { feature: 'Team Seats', values: ['1', '1', '2', '5', '15'] },
                  { feature: 'AI Scriptwriter', values: ['1/mo', '30/mo', '100/mo', '500/mo', '2,500/mo'] },
                  { feature: 'AI Thumbnails', values: ['2/mo', '50/mo', '150/mo', '600/mo', '3,000/mo'] },
                  { feature: 'Data Source', values: ['Cached', 'Live', 'Live', 'Live', 'Live'] },
                  { feature: 'Competitor Spy', values: ['Demo', '3', '10', '50', '200'] },
                  { feature: 'Reporting', values: ['-', 'Dashboard', 'PDF Export', 'White-Label', 'API Access'] },
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 500 }}>{row.feature}</td>
                    {row.values.map((value, vidx) => (
                      <td key={vidx} style={{
                        textAlign: 'center',
                        padding: '12px',
                        fontSize: '14px',
                        background: vidx === 2 ? 'rgba(59, 130, 246, 0.05)' : undefined
                      }}>
                        {value === '-' ? (
                          <span style={{ color: 'rgba(255,255,255,0.2)' }}>-</span>
                        ) : (
                          <span>{value}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: '768px', margin: '0 auto' }}
        >
          <h2 style={{ fontSize: '30px', fontWeight: 700, textAlign: 'center', marginBottom: '32px' }}>Frequently Asked Questions</h2>
          <div>
            {FAQS.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginTop: '96px', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: '30px', fontWeight: 700, marginBottom: '16px' }}>Still have questions?</h2>
          <p style={{ color: '#999', marginBottom: '24px' }}>
            Our team is here to help. Get in touch and we&apos;ll get back to you within 24 hours.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a href="mailto:contact@studiovi.ai" className="btn-secondary">
              Contact Sales
            </a>
            <Link href="/coming-soon/" className="btn-primary">
              Start Free Trial
              <ArrowRight style={{ width: '16px', height: '16px' }} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
    </MarketingLayout>
  );
}
