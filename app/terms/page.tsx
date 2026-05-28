import type { Metadata } from 'next'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Terms of Service — FeaturePin',
  description: 'FeaturePin Terms of Service. Rules for using the platform.',
}

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="legal-main">
        <div className="rail" style={{ maxWidth: 720 }}>
          <h1>Terms of Service</h1>
          <p className="legal-updated">Last updated: May 2026</p>

          <p>These Terms of Service govern your use of FeaturePin (featurepin.com and app.featurepin.com). By creating an account, you agree to these terms.</p>

          <h2>1. The service</h2>
          <p>FeaturePin is a SaaS tool for in-app announcements and behavioral nudges. You install our SDK on your product and use the dashboard to create and launch campaigns to your users.</p>

          <h2>2. Account</h2>
          <p>You must be at least 18 years old and have the authority to accept these terms on behalf of your organisation. You are responsible for keeping your login credentials secure.</p>

          <h2>3. Acceptable use</h2>
          <p>You may not use FeaturePin to:</p>
          <ul>
            <li>Display content that is illegal, harmful, or misleading to your users</li>
            <li>Circumvent or reverse-engineer the service</li>
            <li>Resell access to the platform without written permission</li>
            <li>Exceed the MAU limits of your plan without upgrading</li>
          </ul>
          <p>We reserve the right to suspend accounts that violate these rules.</p>

          <h2>4. Plans and billing</h2>
          <p>FeaturePin is available on the following plans:</p>
          <ul>
            <li><strong>Free</strong>: up to 1,000 MAU, FeaturePin branding visible</li>
            <li><strong>Grow</strong>: $29/month, up to 10,000 MAU, no branding</li>
            <li><strong>Scale</strong>: $79/month, up to 25,000 MAU</li>
            <li><strong>Enterprise</strong>: contact us for pricing</li>
          </ul>
          <p>Subscriptions renew automatically each month. You can cancel at any time from Settings. No refunds are issued for partial billing periods.</p>

          <h2>5. Free plan</h2>
          <p>The Free plan includes the FeaturePin branding badge on all campaigns shown to your users. Upgrading to Grow or Scale removes the branding.</p>

          <h2>6. Your data</h2>
          <p>You retain ownership of all data you add to FeaturePin (campaigns, end-user properties). We process this data only to provide the service, as described in our <a href="/privacy/">Privacy Policy</a>. You can export or delete your data at any time from Settings.</p>

          <h2>7. SDK and end users</h2>
          <p>By installing the FeaturePin SDK on your product, you take responsibility for informing your users about the data collection this entails (external user ID, page URLs, properties you pass). FeaturePin acts as a data processor for your end-user data.</p>

          <h2>8. Uptime and support</h2>
          <p>We aim for high availability but do not guarantee a specific SLA on the Free or Grow plans. Support is provided by email at <a href="mailto:hello@featurepin.com">hello@featurepin.com</a>.</p>

          <h2>9. Intellectual property</h2>
          <p>FeaturePin and its logo are trademarks of Pol Rodriguez Rius. The platform code is proprietary. You may not copy, modify, or redistribute any part of the service.</p>

          <h2>10. Limitation of liability</h2>
          <p>To the maximum extent permitted by law, FeaturePin is not liable for indirect, incidental, or consequential damages arising from your use of the service. Our total liability is limited to the amounts you paid in the 12 months preceding the claim.</p>

          <h2>11. Termination</h2>
          <p>You may cancel your account at any time from Settings. We may terminate or suspend your account for violations of these Terms with or without notice.</p>

          <h2>12. Changes to these terms</h2>
          <p>We may update these Terms from time to time. We will notify you by email for material changes. Continued use after the effective date constitutes acceptance.</p>

          <h2>13. Contact</h2>
          <p>Questions: <a href="mailto:hello@featurepin.com">hello@featurepin.com</a></p>
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
