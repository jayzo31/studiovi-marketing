import Link from 'next/link';
import MarketingLayout from '@/components/MarketingLayout';

export const metadata = {
  title: 'Terms of Service | StudioVid',
  description: 'Terms and conditions for using the StudioVid platform. Read our service agreement, acceptable use policy, and more.',
};

export default function TermsOfServicePage() {
  const lastUpdated = 'January 17, 2026';
  const companyName = 'Zojutsu LLC';
  const contactEmail = 'legal@studiovi.ai';

  return (
    <MarketingLayout>
    <div className="legal-content" style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px' }}>
      <h1>Terms of Service</h1>
      <p style={{ fontSize: '14px', marginBottom: '40px' }}>
        Last updated: {lastUpdated}
      </p>

      <div className="info-box">
        <p>
          <strong>Important:</strong> Please read these Terms of Service carefully before using StudioVid.
          By accessing or using our Service, you agree to be bound by these terms.
        </p>
      </div>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using the StudioVid platform (the &quot;Service&quot;) operated by {companyName} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;),
        you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms,
        you may not access or use the Service.
      </p>
      <p>
        We reserve the right to update these Terms at any time. We will notify you of material changes by posting
        a notice on our Service or sending you an email. Your continued use of the Service after changes become
        effective constitutes acceptance of the updated Terms.
      </p>

      <h2>2. Service Description</h2>
      <p>
        StudioVid is an AI-powered platform designed to help YouTube creators grow their channels. Our Service includes:
      </p>
      <ul>
        <li><strong>AI Script Generation:</strong> Create engaging video scripts using artificial intelligence</li>
        <li><strong>Trend Analysis:</strong> Discover trending topics in your niche</li>
        <li><strong>SEO Optimization:</strong> Optimize titles, descriptions, and tags for discoverability</li>
        <li><strong>Thumbnail Tools:</strong> Create and test thumbnails with AI assistance</li>
        <li><strong>Analytics:</strong> Track channel performance and growth metrics</li>
        <li><strong>Business Tools:</strong> Manage invoices, contracts, and client relationships</li>
        <li><strong>Comment Intelligence:</strong> Analyze and respond to audience comments</li>
      </ul>
      <p>
        We may modify, suspend, or discontinue any part of the Service at any time with reasonable notice.
      </p>

      <h2>3. User Accounts</h2>

      <h3>3.1 Account Creation</h3>
      <p>
        To use certain features of the Service, you must create an account. You agree to:
      </p>
      <ul>
        <li>Provide accurate, current, and complete information</li>
        <li>Maintain and promptly update your account information</li>
        <li>Keep your password secure and confidential</li>
        <li>Notify us immediately of any unauthorized access</li>
        <li>Be responsible for all activities under your account</li>
      </ul>

      <h3>3.2 Account Requirements</h3>
      <ul>
        <li>You must be at least 16 years old to create an account</li>
        <li>You must have the legal capacity to enter into these Terms</li>
        <li>You may not create an account on behalf of someone else without authorization</li>
        <li>You may only have one account unless we authorize otherwise</li>
      </ul>

      <h3>3.3 Account Termination</h3>
      <p>
        We reserve the right to suspend or terminate your account at any time for violation of these Terms
        or any other reason at our discretion, with or without notice.
      </p>

      <h2>4. Acceptable Use Policy</h2>
      <p>You agree not to use the Service to:</p>
      <ul>
        <li>Violate any applicable laws, regulations, or third-party rights</li>
        <li>Generate, distribute, or promote illegal, harmful, or offensive content</li>
        <li>Infringe intellectual property rights of others</li>
        <li>Harass, abuse, or harm other users</li>
        <li>Spread malware, viruses, or other malicious code</li>
        <li>Attempt to gain unauthorized access to the Service or other systems</li>
        <li>Interfere with the proper functioning of the Service</li>
        <li>Engage in automated data collection without permission (scraping, crawling)</li>
        <li>Circumvent usage limits, access controls, or security measures</li>
        <li>Use the Service for spam, phishing, or fraudulent activities</li>
        <li>Impersonate others or misrepresent your affiliation</li>
        <li>Generate content that violates YouTube&apos;s Community Guidelines or Terms of Service</li>
      </ul>

      <div className="info-box">
        <p>
          <strong>AI Content Guidelines:</strong> You are responsible for all content generated using our AI tools.
          Review all AI-generated content before publishing to ensure it meets platform guidelines and legal requirements.
        </p>
      </div>

      <h2>5. Payment Terms</h2>

      <h3>5.1 Subscription Plans</h3>
      <p>
        The Service offers various subscription plans with different features and pricing.
        Current pricing is available on our pricing page. Prices are subject to change with 30 days notice.
      </p>

      <h3>5.2 Billing</h3>
      <ul>
        <li>Subscriptions are billed in advance on a monthly or annual basis</li>
        <li>Payments are processed securely through Stripe</li>
        <li>You authorize us to charge your payment method for all fees</li>
        <li>All prices are in USD unless otherwise specified</li>
        <li>Applicable taxes will be added to your subscription</li>
      </ul>

      <h3>5.3 Free Trial</h3>
      <p>
        We may offer free trials of paid features. At the end of the trial period, your subscription
        will automatically convert to a paid plan unless you cancel before the trial ends.
      </p>

      <h3>5.4 Refunds</h3>
      <p><strong>Monthly Subscriptions:</strong></p>
      <ul>
        <li>No refunds for partial months</li>
        <li>Cancel anytime from your account settings</li>
      </ul>
      <p><strong>Annual Subscriptions:</strong></p>
      <ul>
        <li><strong>First 30 days:</strong> Full refund, no questions asked</li>
        <li><strong>Days 31-90:</strong> Pro-rated refund for unused months</li>
        <li><strong>After 90 days:</strong> No refund, but your access continues until the end of your subscription term</li>
      </ul>
      <p>
        Refunds are processed automatically when you cancel through your account settings.
        For assistance, contact <a href="mailto:support@studiovi.ai">support@studiovi.ai</a>.
      </p>

      <h3>5.5 Cancellation</h3>
      <p>
        You may cancel your subscription at any time from your account settings. Cancellation takes effect
        at the end of your current billing period. You retain access to paid features until then.
      </p>

      <h2>6. Intellectual Property &amp; Proprietary Rights</h2>

      <h3>6.1 Ownership</h3>
      <p>
        The Service, including but not limited to its software, source code, algorithms, user interface designs,
        visual elements, features, functionality, data structures, architecture, documentation, and all underlying
        technology (collectively, &quot;Proprietary Technology&quot;), is the exclusive property of {companyName} and is
        protected by United States and international intellectual property laws, including copyright, trade secret,
        patent, and trademark laws.
      </p>
      <p>
        All rights not expressly granted to you under these Terms are reserved by {companyName}. Your access to the
        Service does not grant you any ownership interest in the Proprietary Technology or any license except as
        expressly stated herein.
      </p>

      <h3>6.2 Trademarks</h3>
      <p>
        StudioVid&trade;, the StudioVid logo, and all related names, logos, product and service names, designs, and slogans
        are trademarks of {companyName} or its affiliates. You may not use such marks without our prior written permission.
        All other names, logos, product and service names, designs, and slogans on the Service are the trademarks of
        their respective owners.
      </p>

      <h3>6.3 Reverse Engineering Prohibition</h3>
      <p>
        You expressly agree NOT to, and shall not permit any third party to:
      </p>
      <ul>
        <li>Reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code, algorithms,
            data structures, or underlying ideas of any part of the Service</li>
        <li>Copy, reproduce, modify, adapt, translate, or create derivative works based on the Service or any
            component thereof</li>
        <li>Attempt to discover, recreate, or replicate the functionality, features, or user experience of the Service</li>
        <li>Analyze or monitor the Service to build a competitive product or service</li>
        <li>Use any automated means, including bots, scrapers, or crawlers, to access, copy, or monitor any
            portion of the Service</li>
        <li>Remove, alter, or obscure any proprietary notices, labels, or marks on the Service</li>
      </ul>

      <h3>6.4 Confidential Information &amp; Trade Secrets</h3>
      <p>
        You acknowledge that through your use of the Service, you may have access to confidential and proprietary
        information of {companyName}, including but not limited to:
      </p>
      <ul>
        <li>AI models, algorithms, and machine learning techniques</li>
        <li>Data analytics methodologies and trend analysis systems</li>
        <li>User interface designs and user experience patterns</li>
        <li>Business processes, pricing strategies, and operational methods</li>
        <li>Technical specifications and system architecture</li>
        <li>Any non-public information about the Service</li>
      </ul>
      <p>
        You agree to maintain the confidentiality of all such information, not to disclose it to any third party,
        and not to use it for any purpose other than your authorized use of the Service. This obligation survives
        termination of these Terms indefinitely.
      </p>

      <h3>6.5 Non-Circumvention</h3>
      <p>
        You agree not to circumvent, disable, or otherwise interfere with any security, access control, or usage
        limitation features of the Service. You shall not attempt to access features, data, or functionality that
        you are not authorized to access under your subscription plan.
      </p>

      <h3>6.6 Competitive Use Restriction</h3>
      <p>
        You may not use the Service if you are a direct competitor of {companyName} or are accessing the Service
        for competitive analysis, benchmarking, or to develop a competing product or service. We reserve the right
        to terminate accounts of users we reasonably believe are using the Service for competitive purposes.
      </p>

      <h3>6.7 Your Content</h3>
      <p>
        You retain ownership of content you create using the Service (&quot;User Content&quot;). By using the Service,
        you grant us a limited, non-exclusive license to process, store, and display your User Content
        as necessary to provide the Service.
      </p>

      <h3>6.8 AI-Generated Content &amp; Output Ownership</h3>
      <p>
        Content generated by our AI tools based on your inputs (&quot;AI Output&quot;) is considered your User Content,
        and you own the rights to such AI Output to the extent permitted by applicable law. However:
      </p>
      <ul>
        <li>You are solely responsible for reviewing, editing, and ensuring AI Output does not infringe
            third-party rights before publication or commercial use</li>
        <li>We do not claim ownership of AI Output, but we retain all rights to the underlying AI models,
            algorithms, and technology used to generate such output</li>
        <li>Your ownership of AI Output does not grant you any rights to the Proprietary Technology</li>
        <li>Similar AI Output may be generated for other users based on similar inputs</li>
      </ul>

      <h3>6.9 Feedback</h3>
      <p>
        Any feedback, suggestions, ideas, or recommendations you provide about the Service (&quot;Feedback&quot;) shall become
        the exclusive property of {companyName}. You hereby assign all rights, title, and interest in such Feedback
        to us and agree that we may use Feedback without restriction, compensation, or attribution.
      </p>

      <div className="info-box">
        <p>
          <strong>Patent Notice:</strong> The Service may be covered by one or more pending patent applications.
          Unauthorized reproduction or use of the Service&apos;s technology may subject you to civil and criminal liability.
        </p>
      </div>

      <h2>7. Third-Party Services</h2>
      <p>
        The Service integrates with third-party services. Your use of these services is subject to their terms:
      </p>
      <ul>
        <li><strong>YouTube API Services:</strong> Subject to <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer">YouTube Terms of Service</a></li>
        <li><strong>Google Services:</strong> Subject to <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Google Terms of Service</a></li>
        <li><strong>Stripe:</strong> Subject to <a href="https://stripe.com/legal" target="_blank" rel="noopener noreferrer">Stripe Services Agreement</a></li>
        <li><strong>Simple Sign:</strong> Our native e-signature solution is subject to these Terms of Service</li>
      </ul>
      <p>
        We are not responsible for third-party services or their content, products, or practices.
      </p>

      <h2>8. Disclaimers</h2>

      <h3>8.1 Service Provided &quot;As Is&quot;</h3>
      <p>
        THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED,
        INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
        NON-INFRINGEMENT, OR ACCURACY.
      </p>

      <h3>8.2 No Guarantee of Results</h3>
      <p>
        We do not guarantee any specific results from using the Service. YouTube channel growth depends
        on many factors beyond our control, including content quality, audience engagement, algorithm changes,
        and market conditions.
      </p>

      <h3>8.3 AI Limitations</h3>
      <p>
        AI-generated content may contain errors, inaccuracies, or inappropriate material. You are responsible
        for reviewing and editing all AI-generated content before use.
      </p>

      <h3>8.4 Third-Party Content</h3>
      <p>
        We are not responsible for the accuracy, completeness, or legality of any third-party content
        accessed through the Service.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, ZOJUTSU LLC AND ITS OFFICERS, DIRECTORS, EMPLOYEES,
        AND AGENTS SHALL NOT BE LIABLE FOR:
      </p>
      <ul>
        <li>Any indirect, incidental, special, consequential, or punitive damages</li>
        <li>Any loss of profits, revenue, data, or business opportunities</li>
        <li>Any damages arising from your use or inability to use the Service</li>
        <li>Any damages arising from unauthorized access to your account or data</li>
        <li>Any damages arising from third-party services or content</li>
      </ul>
      <p>
        IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS
        PRECEDING THE CLAIM, OR $100, WHICHEVER IS GREATER.
      </p>

      <h2>10. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless {companyName} and its officers, directors,
        employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees)
        arising from:
      </p>
      <ul>
        <li>Your use of the Service</li>
        <li>Your violation of these Terms</li>
        <li>Your violation of any third-party rights</li>
        <li>Your User Content</li>
        <li>Your use of AI-generated content</li>
      </ul>

      <h2>11. Termination</h2>

      <h3>11.1 Termination by You</h3>
      <p>
        You may terminate your account at any time by contacting us or using the account deletion feature.
        Termination does not entitle you to a refund unless required by law.
      </p>

      <h3>11.2 Termination by Us</h3>
      <p>
        We may suspend or terminate your account immediately and without notice for:
      </p>
      <ul>
        <li>Violation of these Terms</li>
        <li>Fraudulent or illegal activity</li>
        <li>Non-payment of fees</li>
        <li>Extended inactivity</li>
        <li>Any other reason at our discretion</li>
      </ul>

      <h3>11.3 Effect of Termination</h3>
      <p>
        Upon termination, your right to use the Service ceases immediately. We may delete your account
        data within 30 days, except where retention is required by law.
      </p>

      <h2>12. Dispute Resolution</h2>

      <h3>12.1 Informal Resolution</h3>
      <p>
        Before filing any legal claim, you agree to contact us at <a href={`mailto:${contactEmail}`}>{contactEmail}</a>{' '}
        to attempt to resolve the dispute informally for at least 30 days.
      </p>

      <h3>12.2 Arbitration</h3>
      <p>
        Any dispute not resolved informally shall be resolved by binding arbitration in accordance with
        the rules of the American Arbitration Association. The arbitration shall be conducted in English
        and the seat of arbitration shall be Princeton, New Jersey.
      </p>

      <h3>12.3 Class Action Waiver</h3>
      <p>
        You agree to resolve disputes only on an individual basis and waive any right to participate
        in class actions, class arbitrations, or representative proceedings.
      </p>

      <h3>12.4 Exceptions</h3>
      <p>
        Either party may seek injunctive relief in any court of competent jurisdiction for infringement
        of intellectual property rights or violations of confidentiality obligations.
      </p>

      <h2>13. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of the State of New Jersey,
        without regard to its conflict of law provisions.
      </p>

      <h2>14. General Provisions</h2>

      <h3>14.1 Entire Agreement</h3>
      <p>
        These Terms, together with our Privacy Policy and Cookie Policy, constitute the entire agreement
        between you and {companyName} regarding the Service.
      </p>

      <h3>14.2 Severability</h3>
      <p>
        If any provision of these Terms is found invalid or unenforceable, the remaining provisions
        shall continue in full force and effect.
      </p>

      <h3>14.3 Waiver</h3>
      <p>
        Our failure to enforce any right or provision of these Terms shall not constitute a waiver
        of such right or provision.
      </p>

      <h3>14.4 Assignment</h3>
      <p>
        You may not assign or transfer these Terms without our prior written consent. We may assign
        our rights and obligations without restriction.
      </p>

      <h3>14.5 Notices</h3>
      <p>
        We may provide notices to you via email, posting on the Service, or other reasonable means.
        Notices to us must be sent to <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>

      <h2>15. Contact Information</h2>
      <p>If you have questions about these Terms, please contact us:</p>
      <ul>
        <li><strong>Email:</strong> <a href={`mailto:${contactEmail}`}>{contactEmail}</a></li>
        <li><strong>Location:</strong> Princeton, New Jersey, USA</li>
      </ul>

      <div className="info-box" style={{ marginTop: '40px' }}>
        <p style={{ fontSize: '13px', margin: 0 }}>
          <strong>Trademark Notice:</strong> StudioVid&trade; is a trademark of Zojutsu LLC. Use of this trademark without
          express written permission is prohibited. The StudioVid name, logo, and associated trade dress are protected
          under federal and state trademark laws.
        </p>
      </div>

      <div style={{ marginTop: '60px', paddingTop: '24px', borderTop: '1px solid rgba(128,128,128,0.2)' }}>
        <p style={{ fontSize: '14px' }}>
          Related policies: <Link href="/privacy/">Privacy Policy</Link> | <Link href="/cookie-policy/">Cookie Policy</Link>
        </p>
        <p style={{ fontSize: '12px', color: 'inherit', opacity: 0.6, marginTop: '12px' }}>
          &copy; {new Date().getFullYear()} StudioVid&trade;. All rights reserved. Operated by Zojutsu LLC.
        </p>
      </div>
    </div>
    </MarketingLayout>
  );
}
