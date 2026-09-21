import { SiteShell, SubHero } from "@/components/SiteChrome";
import { WhatsAppLink } from "@/components/WhatsAppLink";

const CHECKLIST = [
  ["Current price sheet", "Unit-wise price, applicable charges and taxes."],
  ["Payment plan", "Milestones, due dates and scheme eligibility."],
  ["Return scheme terms", "Calculation and payout conditions in writing."],
  ["Lease documentation", "Post-possession operator and lease mechanics."],
  ["Project approvals", "Verify applicable legal and regulatory records."],
] as const;

const DRIVERS = [
  ["AIR", "Airport corridor", "Business travellers, transit stays, airline-linked movement and visitors create a hospitality-oriented use case."],
  ["METRO", "Urban connectivity", "Amausi Metro adds everyday city access and can broaden the reachable catchment beyond airport-only movement."],
  ["ROAD", "Kanpur Road visibility", "A major corridor can support retail visibility, local catchments and inter-city movement."],
  ["BUS", "Transit ecosystem", "Bus-terminal modernisation can add another source of commuter activity around the commercial environment."],
] as const;

export function InvestmentPage() {
  return (
    <SiteShell>
      <main>
        <SubHero
          image="centerpoint-airport-view.webp"
          crumb="Investment"
          eyebrow="Investment overview"
          title={
            <>
              Understand the <span className="gold">income story</span> before the property story.
            </>
          }
        >
          <p>
            Centre Point Amausi is positioned around a combination of pre-possession return schemes,
            hospitality-led leasing after possession and a transit-oriented commercial location near
            Lucknow Airport.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="/get-details">
              Request Current Investment Brief
            </a>
            <WhatsAppLink className="btn btn-ghost">Ask on WhatsApp</WhatsAppLink>
          </div>
        </SubHero>

        <div className="return-strip">
          <div className="wrap returngrid">
            <div className="stat">
              <strong>12%</strong>
              <span>Annual return proposition*</span>
            </div>
            <div className="stat">
              <strong>48</strong>
              <span>Months under applicable scheme*</span>
            </div>
            <div className="stat">
              <strong>After Possession</strong>
              <span>Hotel lease guarantee*</span>
            </div>
            <div className="stat">
              <strong>4-way</strong>
              <span>Airport • Metro • Bus Port • Road</span>
            </div>
          </div>
        </div>

        <section>
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">How to evaluate it</div>
                <h2>Four layers of the investment proposition.</h2>
              </div>
              <p>
                Separate the developer scheme, the post-possession operating model, the location
                demand drivers and the underlying property itself. That makes comparison easier and
                avoids relying on a single headline number.
              </p>
            </div>
            <div className="content-grid">
              <div className="stack">
                <div className="panel">
                  <h3>1. Pre-possession return proposition*</h3>
                  <p>
                    A 12% annual return for 48 months is currently marketed under selected
                    payment/developer schemes. Before booking, confirm the applicable unit, payment
                    schedule, return calculation, payout frequency, start date, taxation and
                    conditions in the latest written documents.
                  </p>
                </div>
                <div className="panel">
                  <h3>2. After Possession Hotel Lease Guarantee*</h3>
                  <p>
                    For applicable hotel/studio inventory, the post-possession proposition is built
                    around managed hospitality use rather than self-managed residential renting.
                    Confirm the operator, lease structure, rent basis, maintenance obligations,
                    lock-in, escalation, fit-out responsibility and exit terms.
                  </p>
                </div>
                <div className="panel">
                  <h3>3. Transit-oriented demand</h3>
                  <p>
                    The location story combines the Lucknow Airport corridor, Amausi Metro, Kanpur
                    Road and a bus-terminal ecosystem. For an investor, the key question is whether
                    these overlapping traveller, commuter and business audiences can support
                    sustained commercial and hospitality activity.
                  </p>
                </div>
                <div className="panel">
                  <h3>4. Asset and exit value</h3>
                  <p>
                    Return schemes and lease arrangements should be considered alongside the
                    underlying asset: unit type, floor/location, usable area, pricing, possession
                    timeline, transfer rules, maintenance and future resale liquidity.
                  </p>
                </div>
              </div>
              <aside className="panel sticky-card">
                <div className="eyebrow">Before booking</div>
                <h3>Documents worth requesting</h3>
                <div className="checklist">
                  {CHECKLIST.map(([title, note]) => (
                    <div className="check" key={title}>
                      <i>✓</i>
                      <div>
                        <b>{title}</b>
                        <br />
                        <span className="kicker">{note}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <a className="btn btn-primary" href="/get-details">
                  Get the Current Pack
                </a>
              </aside>
            </div>
          </div>
        </section>

        <section className="light">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">Investor lens</div>
                <h2>What could drive demand?</h2>
              </div>
              <p>
                These are location and use-case drivers, not guaranteed outcomes. Actual occupancy,
                footfall, rent and resale value depend on execution and market conditions.
              </p>
            </div>
            <div className="cards">
              {DRIVERS.map(([num, title, copy]) => (
                <article className="card" key={num}>
                  <div className="num">{num}</div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="finalcta">
              <div>
                <div className="eyebrow">Next step</div>
                <h2>Compare the current numbers, not an old brochure.</h2>
                <p>
                  Ask for live inventory, current pricing, the applicable return scheme and
                  after-possession lease documentation before evaluating a unit.
                </p>
              </div>
              <div className="cta-row">
                <a className="btn btn-primary" href="/get-details">
                  Request Details
                </a>
                <a className="btn btn-ghost" href="/faqs">
                  Read FAQs
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
