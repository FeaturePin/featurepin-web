import type { Metadata } from 'next'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Privacy Policy — FeaturePin',
  description: 'FeaturePin Privacy Policy. How we collect, use, and protect your personal data.',
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="legal-main">
        <div className="rail" style={{ maxWidth: 720 }}>
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last updated: May 2026</p>

          <p>This Privacy Policy explains how FeaturePin collects, uses, and protects your personal data when you use featurepin.com and app.featurepin.com.</p>

          <h2>1. Identity of the controller</h2>
          <p>Controller: Pol Rodriguez Rius<br/>Email: <a href="mailto:hello@featurepin.com">hello@featurepin.com</a><br/>Website: featurepin.com</p>

          <h2>2. Data we collect</h2>
          <p>We collect data in the following ways:</p>
          <ul>
            <li>When you create an account (email address, name)</li>
            <li>When you contact us by email</li>
            <li>Through cookies and analytics (see section 9)</li>
            <li>Usage data from your workspace (campaigns created, MAU counts)</li>
          </ul>
          <p>We do not collect payment card data directly. Payments are processed by Stripe, Inc.</p>

          <h2>3. How we use your data</h2>
          <ul>
            <li>To provide and operate the FeaturePin service</li>
            <li>To send transactional emails (magic link login, billing notifications)</li>
            <li>To respond to support requests</li>
            <li>To improve the product based on usage patterns</li>
          </ul>
          <p>We do not sell your data to third parties.</p>

          <h2>4. Legal basis</h2>
          <ul>
            <li><strong>Contract performance</strong> (GDPR art. 6.1.b): to deliver the service you subscribed to</li>
            <li><strong>Legitimate interests</strong> (GDPR art. 6.1.f): to maintain security and communicate with you</li>
            <li><strong>Consent</strong> (GDPR art. 6.1.a): for analytics cookies</li>
            <li><strong>Legal obligation</strong> (GDPR art. 6.1.c): for billing and tax records</li>
          </ul>

          <h2>5. End-user data (SDK)</h2>
          <p>FeaturePin customers install our JavaScript SDK on their own products. Through the SDK, FeaturePin processes data about the customers&apos; end users (external user IDs, properties you pass via <code>featurepin.identify()</code>, page URLs). FeaturePin acts as a data processor for this data. Our customers are the data controllers for their end users.</p>

          <h2>6. Data sharing</h2>
          <p>We share your data only with sub-processors necessary to operate the service:</p>
          <ul>
            <li><strong>Hetzner</strong> (Germany, EU) — server infrastructure</li>
            <li><strong>Stripe</strong> (USA) — payment processing</li>
            <li><strong>Resend</strong> (USA) — transactional email</li>
          </ul>
          <p>We rely on standard contractual clauses for transfers outside the EU.</p>

          <h2>7. Data retention</h2>
          <ul>
            <li>Account data: retained while your account is active, deleted within 30 days of account deletion</li>
            <li>Billing records: retained for 6 years as required by law</li>
            <li>End-user data (SDK): retained while your workspace is active</li>
          </ul>

          <h2>8. Your rights</h2>
          <p>Under GDPR you have the right to access, rectify, erase, and port your data, to restrict or object to processing, and to withdraw consent at any time. Email <a href="mailto:hello@featurepin.com">hello@featurepin.com</a> to exercise your rights.</p>

          <h2>9. Cookies</h2>
          <p>featurepin.com uses only essential cookies required for the service to function. We do not use advertising or tracking cookies on the marketing site.</p>

          <h2>10. Security</h2>
          <p>We use encrypted transport (HTTPS/TLS), secure password hashing, and access controls across all systems. No security measure is 100% guaranteed, but we apply industry-standard practices.</p>

          <h2>11. Updates</h2>
          <p>We may update this policy to reflect changes in law or our practices. Significant changes will be communicated via email or a notice on the site.</p>

          <h2>12. Contact</h2>
          <p>Questions about this policy: <a href="mailto:hello@featurepin.com">hello@featurepin.com</a></p>
        </div>
      </main>
      <footer className="legal-footer">
        <span>© 2026 FeaturePin. All rights reserved.</span>
        <div className="legal-footer-links">
          <a href="/privacy/">Privacy</a>
          <a href="/terms/">Terms</a>
        </div>
      </footer>
    </>
  )
}
