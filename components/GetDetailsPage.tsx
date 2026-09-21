import { LeadForm } from "@/components/LeadForm";
import { SiteShell, SubHero } from "@/components/SiteChrome";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { SITE } from "@/lib/site";

const PACK = [
  "Latest price sheet",
  "Live inventory",
  "Payment plan",
  "12% return scheme details*",
  "After possession hotel lease details*",
  "Site visit coordination",
] as const;

const STEPS = [
  ["Submit your requirement", "Tell us which product or investment detail you are interested in."],
  [
    "Receive current information",
    "Ask for live inventory, pricing, payment plan and applicable scheme documentation.",
  ],
  [
    "Compare before deciding",
    "Review the unit, charges, scheme conditions, lease structure and relevant project documentation.",
  ],
  [
    "Arrange a site visit",
    "If the proposition fits your requirement, coordinate a project visit with the enquiry desk.",
  ],
] as const;

export function GetDetailsPage() {
  return (
    <SiteShell>
      <main>
        <SubHero
          image="centerpoint-arrival.webp"
          crumb="Get Details"
          eyebrow="Project enquiry desk"
          title={
            <>
              Get the <span className="gold">current price, inventory & investment pack.</span>
            </>
          }
        >
          <p>
            Share your interest and the enquiry desk can respond with the latest available details
            for Centre Point Amausi. For immediate assistance, call or WhatsApp {SITE.phoneDisplay}.
          </p>
        </SubHero>

        <section>
          <div className="wrap">
            <div className="content-grid">
              <div className="formpage">
                <div className="leadbox">
                  <div className="eyebrow">Private enquiry</div>
                  <h2>Tell us what you want to evaluate</h2>
                  <p>
                    Current pricing and inventory can change. Request the latest information rather
                    than relying on an older screenshot or brochure.
                  </p>
                  <LeadForm source="get-details-page" variant="full" />
                  <div className="micro">
                    By submitting, you agree to be contacted regarding this property enquiry. No
                    payment is collected on this website. See our <a href="/privacy">Privacy Policy</a>
                    .
                  </div>
                </div>
              </div>
              <aside className="stack">
                <div className="panel sticky-card">
                  <div className="eyebrow">You can request</div>
                  <h3>Current project pack</h3>
                  <div className="checklist">
                    {PACK.map((item) => (
                      <div className="check" key={item}>
                        <i>✓</i>
                        <div>{item}</div>
                      </div>
                    ))}
                  </div>
                  <WhatsAppLink className="btn btn-primary">WhatsApp {SITE.phoneDisplay}</WhatsAppLink>
                  <div className="page-links">
                    <a href="/investment">Investment Overview</a>
                    <a href="/faqs">FAQs</a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="light">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">What happens next</div>
                <h2>A simple enquiry flow.</h2>
              </div>
              <p>
                The page does not take payment. It is only for requesting project information and
                arranging follow-up.
              </p>
            </div>
            <div className="steps">
              {STEPS.map(([title, copy]) => (
                <div className="step" key={title}>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
