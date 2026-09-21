"use client";

import { useState, type FormEvent } from "react";
import { INTEREST_OPTIONS, PAGE_INTEREST_OPTIONS } from "@/lib/site";

type Status = { kind: "idle" } | { kind: "ok" } | { kind: "error"; message: string };

type LeadFormProps = {
  source: string;
  variant?: "compact" | "full";
};

export function LeadForm({ source, variant = "compact" }: LeadFormProps) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [sending, setSending] = useState(false);
  const options = variant === "full" ? PAGE_INTEREST_OPTIONS : INTEREST_OPTIONS;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = Object.fromEntries(new FormData(form).entries());
    setSending(true);
    setStatus({ kind: "idle" });

    try {
      const qs = new URLSearchParams(window.location.search);
      const payload = {
        ...data,
        mobile: data.phone,
        page: window.location.href,
        ts: new Date().toISOString(),
        utm_source: qs.get("utm_source") || "",
        utm_medium: qs.get("utm_medium") || "",
        utm_campaign: qs.get("utm_campaign") || "",
        utm_term: qs.get("utm_term") || "",
        utm_content: qs.get("utm_content") || "",
        gclid: qs.get("gclid") || "",
      };
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Endpoint rejected request");
      form.reset();
      setStatus({ kind: "ok" });
    } catch {
      const lines = Object.entries(data)
        .filter(([key]) => key !== "source")
        .map(([key, value]) => `${key}: ${String(value).trim()}`)
        .join("\n");
      const subject = encodeURIComponent("Centre Point Amausi Enquiry");
      const body = encodeURIComponent(lines);
      window.location.href = `mailto:office@aparamous.com,aparamous@gmail.com?subject=${subject}&body=${body}`;
      setStatus({
        kind: "error",
        message: "We could not send the form automatically. Your email app should open as a backup.",
      });
    } finally {
      setSending(false);
    }
  }

  const fields = (
    <>
      <input className="field" name="name" autoComplete="name" placeholder="Your name" required />
      <input
        className="field"
        name="phone"
        inputMode="tel"
        autoComplete="tel"
        placeholder="Mobile / WhatsApp number"
        required
      />
      <input
        className={`field${variant === "full" ? " wide" : ""}`}
        name="email"
        type="email"
        autoComplete="email"
        placeholder={variant === "full" ? "Email address" : "Email"}
        required
      />
      <select className={`field${variant === "full" ? " wide" : ""}`} name="interest" required defaultValue="">
        <option value="">I am interested in…</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {variant === "full" ? (
        <>
          <select className="field" name="budget" defaultValue="">
            <option value="">Approx. budget (optional)</option>
            <option>Under ₹50 Lakh</option>
            <option>₹50 Lakh – ₹1 Crore</option>
            <option>₹1 Crore – ₹2 Crore</option>
            <option>₹2 Crore+</option>
          </select>
          <select className="field" name="timeline" defaultValue="">
            <option value="">Buying timeline (optional)</option>
            <option>Immediately</option>
            <option>Within 30 days</option>
            <option>1–3 months</option>
            <option>Exploring</option>
          </select>
          <textarea
            className="field wide"
            name="message"
            rows={4}
            placeholder="Any specific question? (optional)"
            style={{ resize: "vertical" }}
          />
        </>
      ) : null}
    </>
  );

  return (
    <form className="leadform" onSubmit={onSubmit}>
      {variant === "full" ? <div className="formgrid">{fields}</div> : fields}
      <input type="hidden" name="source" value={source} />
      <button className="btn btn-primary" type="submit" disabled={sending}>
        {sending ? "Sending…" : "Send Enquiry"}
      </button>
      <div className={status.kind === "ok" ? "success show" : "success"}>
        Thank you. Your enquiry has been sent successfully. Our team will get back to you soon.
      </div>
      <div className={status.kind === "error" ? "error show" : "error"}>
        {status.kind === "error" ? status.message : ""}
      </div>
    </form>
  );
}
