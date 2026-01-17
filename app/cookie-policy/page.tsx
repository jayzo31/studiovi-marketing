import Link from 'next/link';
import MarketingLayout from '@/components/MarketingLayout';

export const metadata = {
  title: 'Cookie Policy | StudioVid',
  description: 'Learn about the cookies StudioVid uses, why we use them, and how to manage your cookie preferences.',
};

export default function CookiePolicyPage() {
  const lastUpdated = 'January 6, 2026';
  const companyName = 'Zojutsu LLC';
  const contactEmail = 'privacy@studiovi.ai';

  return (
    <MarketingLayout>
    <div className="legal-content" style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px' }}>
      <h1>Cookie Policy</h1>
      <p style={{ fontSize: '14px', marginBottom: '40px' }}>
        Last updated: {lastUpdated}
      </p>

      <div className="info-box">
        <p>
          <strong>Summary:</strong> We use cookies and similar technologies to improve your experience,
          analyze usage, and deliver personalized content. You can manage your cookie preferences at any time.
        </p>
      </div>

      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. They help the website
        remember your preferences, understand how you use the site, and provide a better experience.
      </p>
      <p>
        We also use similar technologies such as:
      </p>
      <ul>
        <li><strong>Local Storage:</strong> Stores data locally in your browser without an expiration date</li>
        <li><strong>Session Storage:</strong> Stores data for a single browser session</li>
        <li><strong>Pixels/Web Beacons:</strong> Small images that track user behavior</li>
      </ul>

      <h2>2. Types of Cookies We Use</h2>

      <h3>2.1 Strictly Necessary Cookies</h3>
      <p>
        These cookies are essential for the Service to function properly. Without them, you cannot use
        basic features like logging in or maintaining your session.
      </p>
      <table>
        <thead>
          <tr>
            <th>Cookie Name</th>
            <th>Purpose</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>session_id</td>
            <td>Maintains your login session</td>
            <td>Session</td>
          </tr>
          <tr>
            <td>csrf_token</td>
            <td>Protects against cross-site request forgery</td>
            <td>Session</td>
          </tr>
          <tr>
            <td>auth_token</td>
            <td>Authentication for API requests</td>
            <td>7 days</td>
          </tr>
          <tr>
            <td>cookie_consent</td>
            <td>Stores your cookie preferences</td>
            <td>1 year</td>
          </tr>
        </tbody>
      </table>

      <h3>2.2 Functional Cookies</h3>
      <p>
        These cookies remember your preferences and choices to provide enhanced functionality and personalization.
      </p>
      <table>
        <thead>
          <tr>
            <th>Cookie Name</th>
            <th>Purpose</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>theme_preference</td>
            <td>Remembers your dark/light mode preference</td>
            <td>1 year</td>
          </tr>
          <tr>
            <td>language</td>
            <td>Stores your language preference</td>
            <td>1 year</td>
          </tr>
          <tr>
            <td>dashboard_layout</td>
            <td>Remembers your dashboard customizations</td>
            <td>1 year</td>
          </tr>
          <tr>
            <td>recent_channels</td>
            <td>Stores recently viewed channels for quick access</td>
            <td>30 days</td>
          </tr>
        </tbody>
      </table>

      <h3>2.3 Analytics Cookies</h3>
      <p>
        These cookies help us understand how visitors interact with the Service by collecting anonymous
        information about page visits, feature usage, and navigation patterns.
      </p>
      <table>
        <thead>
          <tr>
            <th>Cookie Name</th>
            <th>Purpose</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_ga</td>
            <td>Google Analytics - distinguishes users</td>
            <td>2 years</td>
          </tr>
          <tr>
            <td>_ga_*</td>
            <td>Google Analytics - maintains session state</td>
            <td>2 years</td>
          </tr>
          <tr>
            <td>_gid</td>
            <td>Google Analytics - distinguishes users</td>
            <td>24 hours</td>
          </tr>
          <tr>
            <td>_gat</td>
            <td>Google Analytics - throttles request rate</td>
            <td>1 minute</td>
          </tr>
        </tbody>
      </table>

      <h3>2.4 Marketing/Advertising Cookies</h3>
      <p>
        These cookies track your browsing activity to deliver relevant advertisements and measure
        the effectiveness of our marketing campaigns.
      </p>
      <table>
        <thead>
          <tr>
            <th>Cookie Name</th>
            <th>Purpose</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_fbp</td>
            <td>Facebook - identifies browsers for advertising</td>
            <td>3 months</td>
          </tr>
          <tr>
            <td>_gcl_au</td>
            <td>Google Ads - conversion tracking</td>
            <td>3 months</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Third-Party Cookies</h2>
      <p>
        Our Service integrates with third-party services that may set their own cookies:
      </p>

      <h3>3.1 YouTube API Services</h3>
      <p>
        When you connect your YouTube channel, Google may set cookies to maintain your authentication
        and provide analytics data. These cookies are subject to{' '}
        <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">
          Google&apos;s Cookie Policy
        </a>.
      </p>

      <h3>3.2 Stripe</h3>
      <p>
        For payment processing, Stripe may use cookies for fraud prevention and secure transactions.
        See <a href="https://stripe.com/cookies-policy/legal" target="_blank" rel="noopener noreferrer">
          Stripe&apos;s Cookie Policy
        </a>.
      </p>

      <h3>3.3 Google OAuth</h3>
      <p>
        When signing in with Google, authentication cookies may be set. These are governed by{' '}
        <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">
          Google&apos;s Cookie Policy
        </a>.
      </p>

      <h3>3.4 Simple Sign (E-Signatures)</h3>
      <p>
        Our native e-signature solution (Simple Sign) may use session cookies to maintain
        the signing process. These cookies are essential and are covered by this policy.
      </p>

      <h2>4. How to Manage Cookies</h2>

      <h3>4.1 Cookie Consent Banner</h3>
      <p>
        When you first visit our Service, you will see a cookie consent banner where you can accept
        or customize your cookie preferences. You can change these preferences at any time using the
        cookie settings in your account or the link in our footer.
      </p>

      <div className="info-box">
        <p>
          <strong>Update Your Preferences:</strong> You can manage your cookie preferences at any time
          by clicking the &quot;Cookie Settings&quot; link in the footer of any page or accessing your account settings.
        </p>
      </div>

      <h3>4.2 Browser Settings</h3>
      <p>
        Most web browsers allow you to control cookies through their settings. You can:
      </p>
      <ul>
        <li>View and delete cookies</li>
        <li>Block all cookies</li>
        <li>Block third-party cookies</li>
        <li>Clear all cookies when you close your browser</li>
        <li>Allow cookies from specific sites only</li>
      </ul>
      <p>
        Here are links to manage cookies in popular browsers:
      </p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
        <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
      </ul>

      <h3>4.3 Opt-Out Tools</h3>
      <p>
        You can opt out of specific third-party cookies using these tools:
      </p>
      <ul>
        <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
        <li><a href="https://www.facebook.com/help/568137493302217" target="_blank" rel="noopener noreferrer">Facebook Ad Preferences</a></li>
        <li><a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer">Network Advertising Initiative Opt-out</a></li>
        <li><a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance Opt-out</a></li>
      </ul>

      <h3>4.4 Do Not Track</h3>
      <p>
        Some browsers have a &quot;Do Not Track&quot; (DNT) feature. Currently, there is no industry standard
        for how websites should respond to DNT signals. Our Service does not currently respond to
        DNT signals, but you can use the other methods described above to manage tracking.
      </p>

      <h2>5. Impact of Disabling Cookies</h2>
      <p>
        If you choose to disable certain cookies, some features of the Service may not function properly:
      </p>
      <table>
        <thead>
          <tr>
            <th>Cookie Type Disabled</th>
            <th>Impact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Strictly Necessary</td>
            <td>Cannot log in or use basic features</td>
          </tr>
          <tr>
            <td>Functional</td>
            <td>Preferences not saved, reduced personalization</td>
          </tr>
          <tr>
            <td>Analytics</td>
            <td>No impact on your experience</td>
          </tr>
          <tr>
            <td>Marketing</td>
            <td>May see less relevant advertisements</td>
          </tr>
        </tbody>
      </table>

      <h2>6. Cookie Retention</h2>
      <p>
        Cookies are stored for different periods depending on their purpose:
      </p>
      <ul>
        <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
        <li><strong>Persistent Cookies:</strong> Remain until they expire or you delete them</li>
        <li><strong>First-Party Cookies:</strong> Set by StudioVid, typically retained up to 1 year</li>
        <li><strong>Third-Party Cookies:</strong> Retention determined by the third party</li>
      </ul>

      <h2>7. Updates to This Policy</h2>
      <p>
        We may update this Cookie Policy from time to time to reflect changes in our practices or
        for legal, operational, or regulatory reasons. We will post the updated policy on this page
        with a new &quot;Last updated&quot; date.
      </p>
      <p>
        If we make significant changes, we will notify you through our Service or by other means
        before the changes take effect.
      </p>

      <h2>8. Your Rights Under GDPR</h2>
      <p>
        Under the General Data Protection Regulation (GDPR), you have rights regarding the personal
        data collected through cookies:
      </p>
      <ul>
        <li>Right to access information about cookies used</li>
        <li>Right to withdraw consent at any time</li>
        <li>Right to request deletion of cookie data</li>
        <li>Right to lodge a complaint with a supervisory authority</li>
      </ul>
      <p>
        For more information about your data rights, please see our{' '}
        <Link href="/privacy/">Privacy Policy</Link>.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        If you have questions about our use of cookies or this Cookie Policy, please contact us:
      </p>
      <ul>
        <li><strong>Email:</strong> <a href={`mailto:${contactEmail}`}>{contactEmail}</a></li>
        <li><strong>Subject:</strong> Cookie Policy Inquiry</li>
      </ul>

      <div className="info-box" style={{ marginTop: '40px' }}>
        <p>
          <strong>Need Help?</strong> If you need assistance managing your cookie preferences or have
          accessibility concerns, please contact our support team at{' '}
          <a href="mailto:support@studiovi.ai">support@studiovi.ai</a>.
        </p>
      </div>

      <div style={{ marginTop: '60px', paddingTop: '24px', borderTop: '1px solid rgba(128,128,128,0.2)' }}>
        <p style={{ fontSize: '14px' }}>
          Related policies: <Link href="/privacy/">Privacy Policy</Link> | <Link href="/terms/">Terms of Service</Link>
        </p>
      </div>
    </div>
    </MarketingLayout>
  );
}
