import Link from 'next/link';
import MarketingLayout from '@/components/MarketingLayout';

export const metadata = {
  title: 'Privacy Policy | StudioVid',
  description: 'Learn how StudioVid collects, uses, and protects your personal data. GDPR compliant privacy practices.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 17, 2026';
  const companyName = 'Zojutsu LLC';
  const contactEmail = 'privacy@studiovi.ai';

  return (
    <MarketingLayout>
    <div className="legal-content" style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px' }}>
      <h1>Privacy Policy</h1>
      <p style={{ fontSize: '14px', marginBottom: '40px' }}>
        Last updated: {lastUpdated}
      </p>

      <div className="info-box">
        <p>
          <strong>Summary:</strong> We respect your privacy and are committed to protecting your personal data.
          This policy explains how we collect, use, and safeguard your information when you use StudioVid.
        </p>
      </div>

      <h2>1. Introduction</h2>
      <p>
        {companyName} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the StudioVid platform (the &quot;Service&quot;).
        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.
      </p>
      <p>
        We are committed to complying with the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA),
        and other applicable data protection laws.
      </p>

      <h2>2. Data Controller</h2>
      <p>
        For the purposes of GDPR, {companyName} is the data controller responsible for your personal data.
        If you have any questions about this Privacy Policy or our data practices, please contact us at{' '}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>

      <h2>3. Information We Collect</h2>

      <h3>3.1 Information You Provide</h3>
      <ul>
        <li><strong>Account Information:</strong> Name, email address, password, and profile information when you create an account</li>
        <li><strong>Payment Information:</strong> Billing address and payment method details (processed securely through Stripe)</li>
        <li><strong>Content Data:</strong> Scripts, video ideas, thumbnails, and other content you create using our Service</li>
        <li><strong>Communications:</strong> Messages you send to us for support or feedback</li>
        <li><strong>Contract Information:</strong> Business details you provide for contract and invoice generation</li>
      </ul>

      <h3>3.2 Information Collected Automatically</h3>
      <ul>
        <li><strong>Usage Data:</strong> Pages visited, features used, time spent on the Service, and interaction patterns</li>
        <li><strong>Device Information:</strong> Browser type, operating system, device identifiers, and IP address (anonymized - see below)</li>
        <li><strong>Cookies and Tracking:</strong> Information collected through cookies and similar technologies (see our <Link href="/cookie-policy/">Cookie Policy</Link>)</li>
      </ul>
      <div className="info-box" style={{ marginTop: '16px'}}>
        <p>
          <strong>IP Address Anonymization:</strong> To minimize data collection and protect your privacy, we automatically
          anonymize IP addresses before storage. For IPv4 addresses, we zero the last octet (e.g., 192.168.1.100 becomes
          192.168.1.0). For IPv6 addresses, we zero the last 80 bits. This approach preserves general geographic information
          for analytics while preventing individual identification.
        </p>
      </div>

      <h3>3.3 Information from Third Parties</h3>
      <ul>
        <li><strong>YouTube API Services:</strong> Channel analytics, video performance data, and audience insights (with your authorization)</li>
        <li><strong>Google OAuth:</strong> Basic profile information when you sign in with Google</li>
      </ul>

      <h2>4. How We Use Your Information</h2>
      <p>We use your information for the following purposes:</p>
      <ul>
        <li><strong>Service Delivery:</strong> To provide, maintain, and improve our AI-powered YouTube tools</li>
        <li><strong>Personalization:</strong> To customize your experience and provide relevant recommendations</li>
        <li><strong>Analytics:</strong> To analyze usage patterns and improve our Service</li>
        <li><strong>Communication:</strong> To send service updates, security alerts, and marketing communications (with consent)</li>
        <li><strong>Payment Processing:</strong> To process subscriptions and handle billing through Stripe</li>
        <li><strong>Contract Management:</strong> To generate and manage contracts through Simple Sign (our native e-signature solution)</li>
        <li><strong>Email Services:</strong> To send transactional emails through Resend</li>
        <li><strong>AI Processing:</strong> To generate content using the AIML API based on your inputs</li>
        <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights</li>
      </ul>

      <h2>5. Legal Basis for Processing (GDPR)</h2>
      <p>We process your personal data based on the following legal grounds:</p>
      <table>
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Legal Basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Account creation and service delivery</td>
            <td>Contract performance</td>
          </tr>
          <tr>
            <td>Payment processing</td>
            <td>Contract performance</td>
          </tr>
          <tr>
            <td>Marketing communications</td>
            <td>Consent</td>
          </tr>
          <tr>
            <td>Analytics and service improvement</td>
            <td>Legitimate interests</td>
          </tr>
          <tr>
            <td>Legal compliance</td>
            <td>Legal obligation</td>
          </tr>
          <tr>
            <td>Security and fraud prevention</td>
            <td>Legitimate interests</td>
          </tr>
        </tbody>
      </table>

      <h2>6. Data Sharing and Third Parties</h2>
      <p>We share your data with the following categories of third parties:</p>

      <h3>6.1 Service Providers</h3>
      <ul>
        <li><strong>YouTube API Services:</strong> For channel analytics and video data integration. Subject to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
        <li><strong>Stripe:</strong> For secure payment processing. Subject to <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Stripe Privacy Policy</a></li>
        <li><strong>Google OAuth:</strong> For authentication services. Subject to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
        <li><strong>AIML API:</strong> For AI-powered content generation</li>
        <li><strong>Simple Sign:</strong> Our native e-signature solution for electronic contract signing. Data is processed in accordance with this Privacy Policy</li>
        <li><strong>Resend:</strong> For transactional email delivery. Subject to <a href="https://resend.com/privacy" target="_blank" rel="noopener noreferrer">Resend Privacy Policy</a></li>
      </ul>

      <h3>6.2 Other Disclosures</h3>
      <p>We may also disclose your information:</p>
      <ul>
        <li>To comply with legal obligations or valid legal requests</li>
        <li>To protect our rights, privacy, safety, or property</li>
        <li>In connection with a merger, acquisition, or sale of assets</li>
        <li>With your explicit consent</li>
      </ul>

      <h2>7. International Data Transfers</h2>
      <p>
        Your data may be transferred to and processed in countries outside your residence.
        We ensure appropriate safeguards are in place, including:
      </p>
      <ul>
        <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
        <li>Data processing agreements with all third-party providers</li>
        <li>Certification under recognized frameworks where applicable</li>
      </ul>

      <h2>8. Data Retention</h2>
      <p>We retain your data for as long as necessary to:</p>
      <ul>
        <li>Provide you with our Service</li>
        <li>Comply with legal obligations</li>
        <li>Resolve disputes and enforce agreements</li>
      </ul>
      <p>
        Account data is typically retained for the duration of your account plus 30 days after deletion.
        Some data may be retained longer for legal compliance (e.g., financial records for 7 years).
      </p>

      <h2>9. Your Rights (GDPR)</h2>
      <p>Under GDPR, you have the following rights regarding your personal data:</p>

      <h3>9.1 Right of Access</h3>
      <p>You can request a copy of all personal data we hold about you.</p>

      <h3>9.2 Right to Rectification</h3>
      <p>You can request correction of inaccurate or incomplete personal data.</p>

      <h3>9.3 Right to Erasure (&quot;Right to be Forgotten&quot;)</h3>
      <p>You can request deletion of your personal data in certain circumstances.</p>

      <h3>9.4 Right to Data Portability</h3>
      <p>You can request your data in a structured, machine-readable format for transfer to another service.</p>

      <h3>9.5 Right to Object</h3>
      <p>You can object to processing based on legitimate interests or for direct marketing purposes.</p>

      <h3>9.6 Right to Restrict Processing</h3>
      <p>You can request limitation of processing in certain circumstances.</p>

      <h3>9.7 Right to Withdraw Consent</h3>
      <p>Where processing is based on consent, you can withdraw it at any time without affecting prior processing.</p>

      <div className="info-box">
        <p>
          <strong>Exercise Your Rights:</strong> To exercise any of these rights, please contact us at{' '}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. We will respond within 30 days.
        </p>
      </div>

      <h2>10. California Privacy Rights (CCPA)</h2>
      <p>California residents have additional rights under CCPA:</p>
      <ul>
        <li><strong>Right to Know:</strong> What personal information we collect, use, and disclose</li>
        <li><strong>Right to Delete:</strong> Request deletion of personal information</li>
        <li><strong>Right to Opt-Out:</strong> Opt-out of the sale of personal information (we do not sell your data)</li>
        <li><strong>Right to Non-Discrimination:</strong> Equal service regardless of privacy choices</li>
      </ul>

      <h2>11. Cookies and Tracking Technologies</h2>
      <p>
        We use cookies and similar technologies to enhance your experience. For detailed information about
        the types of cookies we use and how to manage them, please see our{' '}
        <Link href="/cookie-policy/">Cookie Policy</Link>.
      </p>

      <h2>12. Data Security</h2>
      <p>We implement appropriate technical and organizational measures to protect your data, including:</p>
      <ul>
        <li>Encryption of data in transit (TLS) and at rest</li>
        <li>Regular security assessments and penetration testing</li>
        <li>Access controls and authentication mechanisms</li>
        <li>Employee training on data protection</li>
        <li>Incident response procedures</li>
        <li>IP address anonymization for data minimization</li>
      </ul>

      <h2>13. Children&apos;s Privacy</h2>
      <p>
        Our Service is not intended for children under 16. We do not knowingly collect personal data from children.
        If you believe we have collected data from a child, please contact us immediately.
      </p>

      <h2>14. YouTube API Services</h2>
      <p>
        StudioVid uses YouTube API Services to provide channel analytics and content optimization features.
        By using our Service, you agree to be bound by the{' '}
        <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer">YouTube Terms of Service</a>.
      </p>

      <h3>14.1 YouTube Data We Access</h3>
      <p>When you connect your YouTube channel, we may access:</p>
      <ul>
        <li><strong>Channel Information:</strong> Channel name, description, subscriber count, and profile picture</li>
        <li><strong>Video Data:</strong> Video titles, descriptions, view counts, likes, comments, and upload dates</li>
        <li><strong>Analytics Data:</strong> Performance metrics for your videos (views, watch time, engagement)</li>
        <li><strong>Playlist Information:</strong> Your public and private playlists</li>
      </ul>

      <h3>14.2 How We Use YouTube Data</h3>
      <p>We use your YouTube data solely to:</p>
      <ul>
        <li>Display your channel analytics within our dashboard</li>
        <li>Generate AI-powered content recommendations and optimizations</li>
        <li>Provide personalized insights to improve your video performance</li>
        <li>Compare your metrics with industry benchmarks (anonymized)</li>
      </ul>
      <p>
        <strong>We do not sell, share, or transfer your YouTube data to third parties</strong> except as necessary
        to provide our Service (e.g., AI processing for content generation).
      </p>

      <h3>14.3 YouTube Data Storage and Retention</h3>
      <p>
        YouTube data is cached temporarily to improve performance and reduce API calls.
        When you disconnect your YouTube channel or delete your account, we delete all associated
        YouTube data within <strong>30 days</strong>.
      </p>

      <h3>14.4 Revoking Access</h3>
      <p>
        You can revoke StudioVid&apos;s access to your YouTube data at any time through{' '}
        <a href="https://security.google.com/settings/security/permissions" target="_blank" rel="noopener noreferrer">Google Security Settings</a>.
        Upon revocation, we will delete your YouTube data within 30 days.
      </p>

      <div className="info-box">
        <p>
          <strong>Google Privacy Policy:</strong> YouTube API Services are subject to{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.
          We encourage you to review Google&apos;s privacy practices to understand how they handle your data.
        </p>
      </div>

      <h2>15. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of significant changes by
        posting a notice on our Service or sending you an email. Your continued use of the Service after
        changes become effective constitutes acceptance of the updated policy.
      </p>

      <h2>16. Contact Us</h2>
      <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
      <ul>
        <li><strong>Email:</strong> <a href={`mailto:${contactEmail}`}>{contactEmail}</a></li>
        <li><strong>Data Protection Officer:</strong> <a href={`mailto:dpo@studiovi.ai`}>dpo@studiovi.ai</a></li>
      </ul>

      <div className="info-box" style={{ marginTop: '40px' }}>
        <p>
          <strong>EU Representative:</strong> For EU residents, our representative can be contacted at{' '}
          <a href="mailto:eu-representative@studiovi.ai">eu-representative@studiovi.ai</a>
        </p>
      </div>

      <div style={{ marginTop: '60px', paddingTop: '24px', borderTop: '1px solid rgba(128,128,128,0.2)' }}>
        <p style={{ fontSize: '14px' }}>
          Related policies: <Link href="/terms/">Terms of Service</Link> | <Link href="/cookie-policy/">Cookie Policy</Link>
        </p>
      </div>
    </div>
    </MarketingLayout>
  );
}
