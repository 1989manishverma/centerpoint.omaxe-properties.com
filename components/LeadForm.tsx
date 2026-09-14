"use client";

import { useState, type FormEvent } from "react";
import { INTEREST_OPTIONS } from "@/lib/site";

type Status = { kind: "idle" } | { kind: "ok" } | { kind: "error"; message: string };

export function LeadForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [sending, setSending] = useState(false);

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
      const name = String(data.name || "").trim();
      const phone = String(data.phone || "").trim();
      const email = String(data.email || "").trim();
      const interest = String(data.interest || "").trim();
      const subject = encodeURIComponent("Centre Point Amausi Enquiry");
      const body = encodeURIComponent(
        `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nInterest: ${interest}`
      );
      window.location.href = `mailto:office@aparamous.com,aparamous@gmail.com?subject=${subject}&body=${body}`;
      setStatus({
        kind: "error",
        message: "We could not send the form automatically. Your email app should open as a backup.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="leadform" onSubmit={onSubmit} noValidate={false}>
      <input className="field" id="name" name="name" autoComplete="name" placeholder="Your name" required />
      <input
        className="field"
        id="phone"
        name="phone"
        inputMode="tel"
        autoComplete="tel"
        placeholder="Mobile / WhatsApp number"
        required
      />
      <input className="field" id="email" name="email" type="email" autoComplete="email" placeholder="Email" required />
      <select className="field" id="interest" name="interest" required defaultValue="">
        <option value="">I am interested in…</option>
        {INTEREST_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <input type="hidden" name="source" value="hero-enquire" />
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
