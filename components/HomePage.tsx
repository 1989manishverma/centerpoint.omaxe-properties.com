import { Gallery } from "@/components/Gallery";
import { HeroSlider } from "@/components/HeroSlider";
import { LeadForm } from "@/components/LeadForm";
import { SiteShell } from "@/components/SiteChrome";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { HOME_FAQS } from "@/lib/faqs";
import { img, SITE } from "@/lib/site";

export function HomePage() {
  return (
    <SiteShell>
      <main id="top">
        <section className="hero" aria-label="Omaxe Centre Point Amausi hero">
          <HeroSlider />
          <div className="wrap herogrid">
            <div>
              <div className="eyebrow">Amausi • Lucknow Airport Corridor</div>
              <h1>
                Commercial property where <span className="gold">Lucknow moves.</span>
              </h1>
              <p>
                <strong>Omaxe Centre Point Amausi</strong> brings retail, hospitality and transit-led
                commercial demand together near Lucknow Airport — designed for investors looking beyond
                ordinary property appreciation.
              </p>
              <div className="chips">
                <span className="chip">Commercial Property Near Lucknow Airport</span>
                <span className="chip">Retail Shops in Amausi</span>
                <span className="chip">Hotel Studio Investment</span>
                <span className="chip">Kanpur Road, Lucknow</span>
              </div>
              <div className="cta-row">
                <a className="btn btn-primary" href="/get-details">
                  Request Price & Return Plan
                </a>
                <WhatsAppLink className="btn btn-ghost">WhatsApp {SITE.phoneDisplay}</WhatsAppLink>
              </div>
            </div>

            <aside className="leadbox" id="enquire">
              <div className="eyebrow">Private investment brief</div>
              <h2>Get price, inventory & payment plan</h2>
              <p>
                Fill the form to receive project details on the registered email desk. For quick
                assistance, call or WhatsApp <strong>{SITE.phoneDisplay}</strong>.
              </p>
              <LeadForm source="hero-enquire" />
              <div className="micro">
                By submitting, you agree to be contacted regarding this property enquiry. No payment is
                collected on this page. See our <a href="/privacy">Privacy Policy</a>.
              </div>
            </aside>
          </div>
        </section>

        <div className="return-strip" id="investment">
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

        <section className="light">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">The investment story</div>
                <h2>
                  Income potential first.
                  <br />
                  Architecture second.
                </h2>
              </div>
              <p>
                Centre Point Amausi is easier to understand when viewed as a{" "}
                <strong>transit-oriented commercial investment in Lucknow</strong>, not simply as
                another mall or hotel building. Its location connects travel, commerce, hospitality
                and everyday movement.
              </p>
            </div>
            <div className="pitchgrid">
              <div className="feature-visual">
                <img
                  loading="lazy"
                  src={img("centerpoint-suite.webp")}
                  alt="Hotel studio investment near Lucknow Airport at Omaxe Centre Point Amausi"
                />
                <div className="visual-caption">
                  <div className="tag">Hotel / Studio Investment</div>
                  <h3>Built around a reason to stay.</h3>
                  <p>
                    Airport-linked short stays, business travel and transit demand create a clearer
                    rental-use story than a generic studio apartment proposition.
                  </p>
                </div>
              </div>
              <div className="cards">
                <article className="card">
                  <div className="num">01</div>
                  <h3>12% Annual Return for 48 Months*</h3>
                  <p>
                    A high-attention pre-possession investment proposition currently marketed under
                    applicable developer/payment schemes. Exact eligibility and payout terms must be
                    verified in the current scheme document.
                  </p>
                </article>
                <article className="card">
                  <div className="num">02</div>
                  <h3>After Possession Hotel Lease Guarantee*</h3>
                  <p>
                    The post-possession story is positioned around managed hotel leasing for eligible
                    inventory — shifting the pitch from “future rent someday” to a defined
                    hospitality-led use case.
                  </p>
                </article>
                <article className="card">
                  <div className="num">03</div>
                  <h3>Commercial Property Near Lucknow Airport</h3>
                  <p>
                    Airport proximity gives the project a natural audience: travellers, corporate
                    visitors, airline-linked movement, families, commuters and businesses serving the
                    airport corridor.
                  </p>
                </article>
                <article className="card">
                  <div className="num">04</div>
                  <h3>PPP-Linked Transit Ecosystem</h3>
                  <p>
                    Omaxe / BeTogether is part of the UPSRTC bus-terminal modernisation programme
                    under a PPP model, integrating commercial space with transport infrastructure.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="ecosystem" id="location">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">Location advantage</div>
                <h2>
                  Not one demand generator.
                  <br />
                  <span className="gold">An ecosystem.</span>
                </h2>
              </div>
              <p>
                For searches such as <strong>commercial property near Lucknow Airport</strong>,{" "}
                <strong>commercial property on Kanpur Road Lucknow</strong> and{" "}
                <strong>investment property in Amausi</strong>, the location itself is the central
                proposition.
              </p>
            </div>
            <div className="eco-grid">
              <div className="eco-copy">
                <div className="eyebrow">Why Amausi can matter to investors</div>
                <h3>Demand can arrive by air, metro, road and bus.</h3>
                <p>
                  The strongest marketing advantage is the overlap of multiple traveller and commuter
                  groups rather than reliance on a single neighbourhood catchment.
                </p>
                <div className="eco-list">
                  <div className="eco-item">
                    <b>Airport</b>
                    <span>Chaudhary Charan Singh International Airport corridor.</span>
                  </div>
                  <div className="eco-item">
                    <b>Metro</b>
                    <span>Amausi Metro connectivity for daily city movement.</span>
                  </div>
                  <div className="eco-item">
                    <b>Bus Port</b>
                    <span>UPSRTC-led bus-terminal modernisation ecosystem.</span>
                  </div>
                  <div className="eco-item">
                    <b>Kanpur Road</b>
                    <span>High-visibility road corridor connecting Lucknow and Kanpur-side growth.</span>
                  </div>
                  <div className="eco-item">
                    <b>Hospitality</b>
                    <span>Business and transit stay demand close to an airport gateway.</span>
                  </div>
                  <div className="eco-item">
                    <b>Retail</b>
                    <span>Potential overlap of travellers, commuters, employees and local catchments.</span>
                  </div>
                </div>
                <div className="eco-cta">
                  <a className="btn btn-primary" href="/get-details">
                    Get Location & Investment Brief
                  </a>
                </div>
              </div>
              <div className="eco-image">
                <img
                  loading="lazy"
                  src={img("centerpoint-airport-view.webp")}
                  alt="Lucknow Airport view from a hotel studio concept near Omaxe Centre Point Amausi"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="light" id="options">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">What you can explore</div>
                <h2>Three reasons to enquire.</h2>
              </div>
              <p>
                Inventory changes. Instead of publishing stale unit numbers, this page is structured
                around the three high-intent searches most relevant to Centre Point Amausi.
              </p>
            </div>
            <div className="products">
              <article className="product">
                <img
                  loading="lazy"
                  src={img("centerpoint-bedroom.webp")}
                  alt="Hotel studio apartment near Lucknow Airport in Amausi Lucknow"
                />
                <div className="product-copy">
                  <span className="tag">Hotel / Studio</span>
                  <h3>Hotel Studio Investment</h3>
                  <p>
                    For buyers searching studio apartments near Lucknow Airport, managed hospitality
                    use and after possession lease potential.
                  </p>
                </div>
              </article>
              <article className="product">
                <img
                  loading="lazy"
                  src={img("centerpoint-promenade.webp")}
                  alt="Retail shops at Omaxe Centre Point Amausi commercial property in Lucknow"
                />
                <div className="product-copy">
                  <span className="tag">Retail</span>
                  <h3>Retail Shops in Amausi</h3>
                  <p>
                    For brands and investors seeking retail shops for sale in Lucknow with
                    airport-corridor visibility and transit-led footfall potential.
                  </p>
                </div>
              </article>
              <article className="product">
                <img
                  loading="lazy"
                  src={img("centerpoint-dining.webp")}
                  alt="Dining and commercial lifestyle at Omaxe Centre Point Amausi Lucknow"
                />
                <div className="product-copy">
                  <span className="tag">F&B / Lifestyle</span>
                  <h3>Dining & Commercial Activity</h3>
                  <p>
                    Hospitality, food and retail can extend activity beyond office hours, supporting a
                    destination-led commercial mix.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="gallery">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">Visual experience</div>
                <h2>See the investment story.</h2>
              </div>
              <p>
                Conceptual marketing visualisations created to communicate the project&apos;s airport,
                hospitality and commercial positioning. Actual specifications may vary.
              </p>
            </div>
            <Gallery />
          </div>
        </section>

        <section className="ecosystem" id="faq">
          <div className="wrap faqwrap">
            <div className="faqintro">
              <div className="eyebrow">Search questions investors ask</div>
              <h2>Centre Point Amausi FAQs</h2>
              <p>
                These answers are designed around high-intent search queries while keeping variable
                commercial terms tied to current developer documentation.
              </p>
              <div className="faq-cta">
                <a className="btn btn-primary" href="/get-details">
                  Request Current Details
                </a>
                <a className="btn btn-ghost" href="/faqs">
                  Read All FAQs
                </a>
              </div>
            </div>
            <div className="faq">
              {HOME_FAQS.map((item, index) => (
                <details key={item.q} open={index === 0}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="light">
          <div className="wrap">
            <div className="finalcta">
              <div>
                <div className="eyebrow">Project enquiry desk</div>
                <h2>
                  Before you buy, understand <em>where the income is expected to come from.</em>
                </h2>
                <p>
                  Request the current Centre Point Amausi price list, payment plan, 12% return scheme
                  details, after possession hotel lease documentation and available inventory.
                </p>
              </div>
              <div className="cta-row">
                <a className="btn btn-primary" href="/get-details">
                  Request Investment Details
                </a>
                <WhatsAppLink className="btn btn-ghost">WhatsApp {SITE.phoneDisplay}</WhatsAppLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
