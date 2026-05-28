import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Help Center — FeaturePin',
  description: 'Step-by-step tutorials for FeaturePin. Learn how to install the SDK, create campaigns, and understand your analytics.',
}

const sections = [
  {
    id: 'getting-started',
    label: 'Getting started',
    count: 3,
    items: [
      {
        title: 'How to install the FeaturePin SDK',
        content: (
          <>
            <p>The SDK is a single JavaScript snippet you add once to your product. No framework-specific packages needed.</p>
            <ol>
              <li>Log in to <a href="https://app.featurepin.com">app.featurepin.com</a> and go to <strong>Settings</strong>.</li>
              <li>Copy your SDK snippet. It looks like: <code>{'<script src="https://sdk.featurepin.com/fp.js" data-token="your-workspace-id" async defer></script>'}</code></li>
              <li>Paste it before the closing <code>{'</body>'}</code> tag of your application.</li>
              <li>Call <code>featurepin.identify(userId, properties)</code> after your user authenticates so FeaturePin can target campaigns by user properties.</li>
              <li>Reload your app. You should see a green checkmark in the FeaturePin dashboard confirming the SDK is active.</li>
            </ol>
            <p className="help-tip"><strong>Tip:</strong> The SDK is under 10 KB gzipped and loads asynchronously. It never blocks your app&apos;s render.</p>
          </>
        ),
      },
      {
        title: 'How to create your first announcement',
        content: (
          <>
            <p>Announcements are campaigns you launch manually to all users or a specific segment.</p>
            <ol>
              <li>From the dashboard, click <strong>New campaign</strong>.</li>
              <li>Choose <strong>Announcement</strong> as the type.</li>
              <li>Select the message format: <strong>Modal</strong>, <strong>Banner</strong>, or <strong>Tooltip</strong>.</li>
              <li>Fill in the title, body text, and an optional call-to-action button with a URL.</li>
              <li>Set targeting: <strong>All users</strong> or a segment based on user properties.</li>
              <li>Click <strong>Save as draft</strong> to review, or <strong>Launch</strong> to publish immediately.</li>
            </ol>
            <p className="help-tip"><strong>Tip:</strong> Start with a modal for important launches. Banners work better for lightweight updates that should not interrupt the workflow.</p>
          </>
        ),
      },
      {
        title: 'How to launch your first nudge',
        content: (
          <>
            <p>Nudges are automated campaigns that trigger based on user behavior rules. They run without any manual action from you.</p>
            <ol>
              <li>From the dashboard, click <strong>New campaign</strong> and choose <strong>Nudge</strong>.</li>
              <li>Define the trigger rule: for example, &quot;user has not visited <code>/reports</code> in the last 14 days&quot;.</li>
              <li>Choose the message format and write your nudge copy.</li>
              <li>Set a frequency limit to avoid showing the same nudge too often (recommended: once per week).</li>
              <li>Click <strong>Activate</strong>. The nudge evaluates every 15 minutes against your active users.</li>
            </ol>
            <p className="help-tip"><strong>Tip:</strong> Keep nudge copy short and action-oriented. &quot;You have not tried Reports yet — here is how it saves time&quot; outperforms generic &quot;Check out our new feature&quot;.</p>
          </>
        ),
      },
    ],
  },
  {
    id: 'campaigns',
    label: 'Campaigns',
    count: 4,
    items: [
      {
        title: 'The difference between announcements and nudges',
        content: (
          <>
            <p><strong>Announcements</strong> are manually triggered by you. You decide when to show them, typically for product launches, release notes, or time-sensitive messages. They fire once per user unless you relaunch them.</p>
            <p><strong>Nudges</strong> are rule-based and automatic. You define a condition (a URL the user has not visited, a feature they have not used, N days of inactivity) and FeaturePin checks it automatically every 15 minutes.</p>
            <p className="help-tip"><strong>When to use which:</strong> Announcements for &quot;we just shipped X&quot;. Nudges for &quot;users who have not discovered X yet&quot;.</p>
          </>
        ),
      },
      {
        title: 'How to target a campaign to a segment',
        content: (
          <>
            <p>Targeting lets you show a campaign only to users who match specific properties.</p>
            <ol>
              <li>In the campaign editor, go to the <strong>Targeting</strong> section.</li>
              <li>Switch from <strong>All users</strong> to <strong>Segment</strong>.</li>
              <li>Add one or more rules: <code>property</code> + <code>operator</code> + <code>value</code>. Example: <code>plan = free</code> or <code>company_size &gt; 50</code>.</li>
              <li>Multiple rules use AND logic by default (all conditions must match).</li>
              <li>Save the campaign. Only users whose properties match will see it.</li>
            </ol>
            <p className="help-tip"><strong>Tip:</strong> User properties come from your <code>featurepin.identify()</code> call. Pass any JSON-serializable key-value pair and it becomes available for targeting.</p>
          </>
        ),
      },
      {
        title: 'How to pause or archive a campaign',
        content: (
          <>
            <p>You can pause an active campaign at any time. Paused campaigns stop showing to new users immediately.</p>
            <ol>
              <li>Go to the <strong>Campaigns</strong> list and find your campaign.</li>
              <li>Click the <strong>...</strong> menu and select <strong>Pause</strong>.</li>
              <li>To resume, click <strong>...</strong> and select <strong>Activate</strong>.</li>
              <li>To archive a campaign you no longer need, select <strong>Archive</strong>. Archived campaigns are hidden from the active list but their analytics are preserved.</li>
            </ol>
            <p className="help-tip"><strong>Tip:</strong> Pause time-sensitive announcements once they are no longer relevant. It keeps your campaign list clean without losing historical data.</p>
          </>
        ),
      },
      {
        title: 'Modal, banner, or tooltip: which to choose',
        content: (
          <>
            <p>Each message format has a different visual weight and interruption level.</p>
            <p><strong>Modal</strong> — a centered overlay that blocks the background. Use for important announcements that require attention: major releases, breaking changes, mandatory actions.</p>
            <p><strong>Banner</strong> — a full-width bar at the top or bottom of the page. Lower interruption than a modal. Good for informational updates, ongoing promotions, or trial expiry notices.</p>
            <p><strong>Tooltip</strong> — a small popover anchored to a specific URL. Ideal for nudges pointing to a specific area of the product.</p>
            <p className="help-tip"><strong>Tip:</strong> When in doubt, use a banner. Modals are the highest-friction format — save them for announcements that truly need a full stop.</p>
          </>
        ),
      },
    ],
  },
  {
    id: 'analytics',
    label: 'Analytics',
    count: 3,
    items: [
      {
        title: 'How to read your campaign analytics',
        content: (
          <>
            <p>Each campaign has an analytics panel showing how users responded to it.</p>
            <ol>
              <li>Open any campaign and click the <strong>Analytics</strong> tab.</li>
              <li><strong>Impressions</strong> — the number of times the campaign was shown to a user.</li>
              <li><strong>Clicks</strong> — the number of times users clicked the CTA button.</li>
              <li><strong>Dismissals</strong> — the number of times users closed or dismissed the campaign.</li>
              <li>The <strong>click rate</strong> is clicks divided by impressions. A healthy announcement click rate is 10 to 30 percent.</li>
            </ol>
            <p className="help-tip"><strong>Tip:</strong> A high dismissal rate with low clicks usually means the message is not relevant to the segment. Narrow the targeting or rewrite the copy.</p>
          </>
        ),
      },
      {
        title: 'What impressions, clicks, and dismissals mean',
        content: (
          <>
            <p><strong>Impression</strong>: the campaign widget was rendered and visible to the user. Recorded once per user per campaign session.</p>
            <p><strong>Click</strong>: the user clicked the primary CTA button. If there is no CTA, no clicks are recorded.</p>
            <p><strong>Dismissal</strong>: the user closed or dismissed the campaign without clicking the CTA. For modals, this includes clicking outside the modal or pressing Escape.</p>
            <p>Events are batched and sent every few seconds to reduce network overhead. You may see a small delay (under 30 seconds) before they appear in the dashboard.</p>
          </>
        ),
      },
      {
        title: 'How MAU is counted',
        content: (
          <>
            <p>MAU (Monthly Active Users) is the billing unit for FeaturePin. It counts unique end users seen by your workspace in the last 30 days.</p>
            <ol>
              <li>A user is counted when your SDK calls <code>featurepin.identify(userId)</code> or when an SDK event is received for that user.</li>
              <li>The 30-day window rolls daily: users last seen more than 30 days ago drop out of the count automatically.</li>
              <li>Anonymous sessions (without an <code>identify</code> call) are not counted toward MAU.</li>
            </ol>
            <p className="help-tip"><strong>Tip:</strong> You can check your current MAU at any time in <strong>Settings &rarr; Usage</strong>. You will also receive an email when you reach 80% of your plan limit.</p>
          </>
        ),
      },
    ],
  },
  {
    id: 'billing',
    label: 'Billing',
    count: 3,
    items: [
      {
        title: 'How to upgrade your plan',
        content: (
          <>
            <p>You can upgrade at any time from the dashboard. The new limits are active immediately.</p>
            <ol>
              <li>Go to <strong>Settings &rarr; Billing</strong>.</li>
              <li>Click <strong>Upgrade</strong> next to the plan you want.</li>
              <li>Enter your payment details. Billing is monthly.</li>
              <li>Your workspace plan updates instantly. All existing campaigns and data are preserved.</li>
            </ol>
            <p className="help-tip"><strong>Tip:</strong> If you are evaluating FeaturePin for a larger team, reach out at <a href="mailto:hello@featurepin.com">hello@featurepin.com</a> before upgrading. We can help you pick the right plan.</p>
          </>
        ),
      },
      {
        title: 'What happens when you reach your MAU limit',
        content: (
          <>
            <p>FeaturePin does not cut off your campaigns abruptly. Here is what happens as you approach the limit:</p>
            <ol>
              <li>At <strong>80% of your limit</strong>, you receive an email notification.</li>
              <li>At <strong>100% of your limit</strong>, campaigns continue to run but new end users above the limit will not see them until you upgrade.</li>
              <li>You can upgrade at any time from <strong>Settings &rarr; Billing</strong> to restore full coverage immediately.</li>
            </ol>
            <p className="help-tip"><strong>Tip:</strong> On the free plan, FeaturePin branding is shown inside campaigns once you exceed 1,000 MAU. Upgrading to any paid plan removes it.</p>
          </>
        ),
      },
      {
        title: 'How to remove FeaturePin branding',
        content: (
          <>
            <p>The free plan shows a small &quot;Powered by FeaturePin&quot; label inside campaigns shown to users beyond 1,000 MAU. Upgrading to any paid plan removes it.</p>
            <ol>
              <li>Go to <strong>Settings &rarr; Billing</strong> and upgrade to the Grow plan or above.</li>
              <li>Branding is removed from all campaigns immediately after upgrade. No code changes needed.</li>
            </ol>
            <p className="help-tip"><strong>Tip:</strong> The branding label only appears for users above the free MAU cap. If your workspace has fewer than 1,000 active users, you will never see it on the free plan.</p>
          </>
        ),
      },
    ],
  },
  {
    id: 'account',
    label: 'Account',
    count: 2,
    items: [
      {
        title: 'How to find your SDK token',
        content: (
          <>
            <p>Your SDK token is your workspace ID. It is a public identifier that tells the SDK which workspace to load campaigns for. It is intentionally not a secret.</p>
            <ol>
              <li>Go to <strong>Settings &rarr; SDK</strong> in the dashboard.</li>
              <li>Your SDK snippet is shown pre-filled with your token in the <code>data-token</code> attribute.</li>
              <li>You can also copy the raw token value if you need it for a custom integration.</li>
            </ol>
            <p className="help-tip"><strong>Tip:</strong> The token is safe to include in your frontend code and is visible to anyone who inspects your page source. It only identifies your workspace, it does not grant access to your account.</p>
          </>
        ),
      },
      {
        title: 'How to update your workspace settings',
        content: (
          <>
            <p>Workspace settings let you update your workspace name and manage your SDK configuration.</p>
            <ol>
              <li>Go to <strong>Settings &rarr; Workspace</strong>.</li>
              <li>Update the workspace name and click <strong>Save</strong>.</li>
              <li>The workspace name appears in the dashboard and in emails sent to your team.</li>
            </ol>
            <p>To delete your workspace and all associated data, email <a href="mailto:hello@featurepin.com">hello@featurepin.com</a>. Deletions are processed within 48 hours.</p>
          </>
        ),
      },
    ],
  },
]

export default function HelpPage() {
  return (
    <>
      <Nav />

      <main>
        {/* Hero */}
        <section className="help-hero">
          <div className="grid-bg" aria-hidden="true" />
          <div className="rail">
            <p className="eyebrow">HELP CENTER</p>
            <h1 className="help-hero-title">
              Step-by-step tutorials<br />for FeaturePin
            </h1>
            <p className="help-hero-sub">
              Everything you need to install the SDK, create campaigns, and understand your analytics.
            </p>
            <p className="help-hero-contact">
              Can&apos;t find what you need?{' '}
              <a href="mailto:hello@featurepin.com">Write to us at hello@featurepin.com</a>{' '}
              and we will help you directly.
            </p>
          </div>
        </section>

        {/* Jump nav */}
        <nav className="help-jump" aria-label="Jump to a section">
          <div className="rail">
            <p className="help-jump-label">Jump to a section</p>
            <div className="help-jump-scroll">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="help-jump-card">
                  <span className="help-jump-name">{s.label}</span>
                  <span className="help-jump-count">{s.count} tutorials</span>
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Sections */}
        <div className="help-sections">
          <div className="rail">
            {sections.map((section, si) => (
              <section key={section.id} id={section.id} className="help-section">
                <div className="help-section-head">
                  <span className="help-section-num">{String(si + 1).padStart(2, '0')}</span>
                  <h2 className="help-section-title">{section.label}</h2>
                </div>
                <div className="help-items">
                  {section.items.map((item) => (
                    <details key={item.title} className="help-item">
                      <summary className="help-item-summary">
                        <span>{item.title}</span>
                        <span className="help-item-arrow" aria-hidden="true">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </summary>
                      <div className="help-item-body">
                        {item.content}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* CTA */}
        <section className="help-cta">
          <div className="rail">
            <h2 className="help-cta-title">Still have questions?</h2>
            <p className="help-cta-sub">Send us a message and we will get back to you the same day.</p>
            <div className="help-cta-actions">
              <a href="mailto:hello@featurepin.com" className="btn btn-primary btn-lg">
                Contact support
              </a>
              <a href="https://app.featurepin.com/signup" className="btn btn-ghost btn-lg">
                Start for free <span className="arr">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
