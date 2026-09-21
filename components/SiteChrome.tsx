import type { CSSProperties, ReactNode } from "react";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { img, SITE } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="nav">
      <div className="wrap navin">
        <a className="brand" href="/" aria-label="Center Point Amausi">
          <div className="brand-logos">
            <span className="logo-badge">
              <img className="omaxe" src={img("omaxe-logo-sharp.png")} alt="Omaxe" />
            </span>
            <span className="logo-badge betogether-badge">
              <img className="betogether" src={img("betogether-logo-sharp.png")} alt="BeTogether" />
            </span>
          </div>
          <div className="brandtxt">Center Point Amausi</div>
        </a>
        <nav className="links" aria-label="Page navigation">
          <a href="/investment">Investment</a>
          <a href="/#location">Location</a>
          <a href="/#options">Options</a>
          <a href="/#gallery">Gallery</a>
          <a href="/faqs">FAQs</a>
        </nav>
        <a className="btn btn-primary" href="/get-details">
          Get Details
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot">
          <div className="footerbrand">
            <span className="logo-badge">
              <img className="omaxe" src={img("omaxe-logo-sharp.png")} alt="Omaxe" />
            </span>
            <span className="logo-badge betogether-badge">
              <img className="betogether" src={img("betogether-logo-sharp.png")} alt="BeTogether" />
            </span>
          </div>
          <div>
            <strong>Contact</strong>
            <br />
            {SITE.phoneDisplay}
            <br />
            Project Enquiry Desk
          </div>
          <div>
            <strong>Explore</strong>
            <br />
            <a href="/investment">Investment</a> · <a href="/faqs">FAQs</a>
            <br />
            <a href="/get-details">Get Details</a> · <a href="/">Home</a>
            <br />
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>
        <div className="legal">
          <strong>Important:</strong> *The 12% annual return for 48 months and after possession hotel
          lease guarantee are investment propositions marketed under applicable developer schemes and
          remain subject to the current developer offer, eligibility, payment plan, allotment or lease
          documents, availability, taxes and terms & conditions. Prospective purchasers should
          independently verify all commercial, legal, RERA and lease documents before making a
          purchase decision. Project specifications, pricing and inventory can change without notice.
          Visuals include conceptual or AI-generated architectural representations and are for
          marketing illustration only. This is an enquiry and marketing website and is not the official
          developer website.
        </div>
      </div>
    </footer>
  );
}

export function SiteFloaters() {
  return (
    <>
      <WhatsAppLink className="floatwa" aria-label="WhatsApp project desk">
        WA
      </WhatsAppLink>
      <div className="mobilebar">
        <a href={`tel:${SITE.phoneTel}`}>Call</a>
        <WhatsAppLink>WhatsApp</WhatsAppLink>
        <a href="/get-details">Get Details</a>
      </div>
    </>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
      <SiteFloaters />
    </>
  );
}

export function SubHero({
  image,
  crumb,
  eyebrow,
  title,
  children,
}: {
  image: string;
  crumb: string;
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="subhero" style={{ "--bg": `url(${img(image)})` } as CSSProperties}>
      <div className="wrap">
        <div className="breadcrumb">
          <a href="/">Home</a> / {crumb}
        </div>
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
}
