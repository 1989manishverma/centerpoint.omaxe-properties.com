import { SiteShell, SubHero } from "@/components/SiteChrome";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { PAGE_FAQS } from "@/lib/faqs";

export function FaqsPage() {
  return (
    <SiteShell>
      <main>
        <SubHero
          image="centerpoint-lobby.webp"
          crumb="FAQs"
          eyebrow="Investor questions"
          title={
            <>
              Centre Point Amausi <span className="gold">FAQs.</span>
            </>
          }
        >
          <p>
            Clear answers to the questions buyers usually ask about location, product types, returns,
            hotel leasing, pricing, documentation and enquiry support.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="/get-details">
              Request Current Details
            </a>
            <WhatsAppLink className="btn btn-ghost">Ask a Question on WhatsApp</WhatsAppLink>
          </div>
        </SubHero>

        <section className="ecosystem">
          <div className="wrap faqpage">
            <div className="faq">
              {PAGE_FAQS.map((item, index) => (
                <details key={item.q} open={index === 0}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
            <div className="page-links">
              <a href="/investment">Read Investment Overview</a>
              <a href="/get-details">Get Price & Inventory</a>
              <a href="/#gallery">View Gallery</a>
              <a href="/#location">Location</a>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
