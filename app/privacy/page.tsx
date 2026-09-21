import type { Metadata } from "next";
import { img, SITE, SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Omaxe Centre Point Amausi",
  description:
    "How Aparamous Solutions Pvt. Ltd. collects and uses information on the Omaxe Centre Point Amausi website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="legal-page">
      <header className="legal-topbar">
        <div className="wrap">
          <a className="brand" href="/" aria-label="Center Point Amausi home">
            <span className="logo-badge">
              <img className="omaxe" src={img("omaxe-logo-sharp.png")} alt="Omaxe" />
            </span>
            <div className="brandtxt">Center Point Amausi</div>
          </a>
          <a className="btn btn-primary" href="/">
            Back to project
          </a>
        </div>
      </header>

      <article className="legal-article">
        <p className="eyebrow">Legal</p>
        <h1>Privacy Policy</h1>
        <p className="legal-meta">
          Omaxe Centre Point Amausi · Effective Date: 14 September 2026 · Last Updated: 14 September
          2026
        </p>
        <p>
          Aparamous Solutions Pvt. Ltd. (“Aparamous”, “we”, “us” or “our”) respects your privacy. This
          Privacy Policy explains how we collect and use information when you visit or submit an
          enquiry through the Omaxe Centre Point Amausi website:{" "}
          <a href={SITE_URL}>{SITE_URL}/</a>
        </p>
        <p>By using this website or submitting your information, you acknowledge this Privacy Policy.</p>

        <h2>1. Information We Collect</h2>
        <p>When you submit an enquiry, we may collect:</p>
        <ul>
          <li>Name</li>
          <li>Mobile number</li>
          <li>Email address</li>
          <li>Property or investment preferences</li>
          <li>Information provided in your enquiry or communication</li>
        </ul>
        <p>
          We may also automatically collect limited technical information such as your IP address,
          browser/device information, pages visited, referring source and website usage data.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>We may use your information to:</p>
        <ul>
          <li>Respond to your enquiries and requests</li>
          <li>Provide information about Omaxe Centre Point Amausi</li>
          <li>Share project details, pricing, inventory or availability</li>
          <li>Arrange calls or site visits</li>
          <li>Understand your commercial property requirements</li>
          <li>Improve our website and marketing</li>
          <li>Maintain website security and prevent misuse</li>
          <li>Comply with applicable laws and regulations</li>
        </ul>

        <h2>3. Sharing Your Information</h2>
        <p>
          Your enquiry information may be shared with authorised project representatives, developer
          representatives, sales personnel and relevant service providers where necessary to respond
          to or manage your enquiry.
        </p>
        <p>
          We may also use third-party service providers for website hosting, analytics, lead
          management, communication, advertising measurement and related services.
        </p>
        <p>We do not sell your personal information as a standalone commodity.</p>

        <h2>4. Calls, WhatsApp and Marketing</h2>
        <p>
          If you submit an enquiry and consent to being contacted, Aparamous and/or authorised project
          representatives may contact you by phone, WhatsApp, SMS or email regarding Omaxe Centre
          Point Amausi.
        </p>
        <p>
          You may request to stop marketing communications at any time. This will not necessarily
          prevent communications required to respond to an active enquiry or provide a service you
          have requested.
        </p>

        <h2>5. Cookies and Analytics</h2>
        <p>
          We may use cookies, Google Tag Manager and similar technologies to operate the website,
          understand website usage, measure marketing performance and improve user experience.
        </p>
        <p>
          You can manage or disable cookies through your browser settings. Some website functionality
          may be affected if cookies are disabled.
        </p>

        <h2>6. Data Security</h2>
        <p>
          We take reasonable technical and organisational measures to protect your personal
          information against unauthorised access, misuse, loss or disclosure.
        </p>
        <p>However, no electronic transmission or storage system can be guaranteed to be completely secure.</p>

        <h2>7. Data Retention</h2>
        <p>
          We retain personal information only for as long as reasonably necessary to respond to
          enquiries, provide services, maintain business records, meet legal requirements and protect
          our legitimate interests.
        </p>

        <h2>8. Your Rights</h2>
        <p>Subject to applicable law, you may request to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion where applicable</li>
          <li>Withdraw consent where processing is based on consent</li>
          <li>Stop marketing communications</li>
          <li>Raise a privacy-related complaint</li>
        </ul>
        <p>To make a request, please contact us using the details below.</p>

        <h2>9. Third-Party Websites</h2>
        <p>
          This website may contain links or integrations with third-party services such as WhatsApp or
          other websites. Their own privacy policies may apply when you interact directly with those
          services.
        </p>

        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any updates will be posted on this page
          with a revised Last Updated date.
        </p>

        <h2>11. Contact Us</h2>
        <p>
          <strong>Aparamous Solutions Pvt. Ltd.</strong>
          <br />
          Email: <a href="mailto:office@aparamous.com">office@aparamous.com</a>
          <br />
          Phone: <a href="tel:+918009227605">+91 8009227605</a>
          <br />
          Address: Office No. 205 &amp; 206, Millennium Place, Sector B, Ansal API, Sushant Golf
          City, Lucknow – 226030, Uttar Pradesh, India.
        </p>
      </article>

      <footer className="legal-footer">
        <div className="wrap">
          <span>Omaxe Centre Point Amausi · Amausi, Lucknow</span>
          <span>
            <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a> · <a href="/">Home</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
