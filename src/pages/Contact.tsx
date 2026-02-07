import { useMemo, useState } from "react";
import { SITE } from "../data";

type FormState = {
  name: string;
  phone: string;
  email: string;
  appliance: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  appliance: "Washing Machine",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);

  const mailto = useMemo(() => {
    const subject = encodeURIComponent("Service Request - AP Appliance Service");
    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email}\n` +
      `Appliance: ${form.appliance}\n\n` +
      `Question/Issue:\n${form.message}`
    );
    return `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  }, [form]);

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((s) => ({ ...s, [key]: value }));
  }

  return (
    <main className="container">
      <div className="sectionTitle">
        <h2>Contact</h2>
        <p>Request service or ask a question. We’ll respond as soon as possible.</p>
      </div>

      <section className="grid">
        <article className="card">
          <h3>Call / Email</h3>
          <p><strong>Working hours:</strong> {SITE.hours}</p>
          <p><strong>Phone:</strong> <a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a></p>
          <p><strong>Email:</strong> <a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>

          <div className="note" style={{ marginTop: 12 }}>
            This form uses your device’s email app (mailto). If you want server-side email sending (no email app),
            connect to Formspree/Netlify Forms, or add a small backend.
          </div>
        </article>

        <article className="card">
          <h3>Ask a Question</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailto;
            }}
          >
            <div className="twoCol">
              <div>
                <label htmlFor="name">Name</label>
                <input id="name" required value={form.name} onChange={(e) => onChange("name", e.target.value)} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input id="phone" value={form.phone} onChange={(e) => onChange("phone", e.target.value)} placeholder="(optional)" />
              </div>
            </div>

            <div className="twoCol">
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" required value={form.email} onChange={(e) => onChange("email", e.target.value)} placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="appliance">Appliance</label>
                <select id="appliance" value={form.appliance} onChange={(e) => onChange("appliance", e.target.value)}>
                  <option>Washing Machine</option>
                  <option>Dryer</option>
                  <option>Oven/Range</option>
                  <option>Refrigerator</option>
                  <option>Dishwasher</option>
                  <option>Freezer</option>
                  <option>Microwave</option>
                  <option>Ice Maker</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message">Question / Issue</label>
              <textarea
                id="message"
                required
                value={form.message}
                onChange={(e) => onChange("message", e.target.value)}
                placeholder="Tell us what’s going on (symptoms, error codes, brand/model if available)."
              />
            </div>

            <button className="btn primary" type="submit">Send Email</button>
          </form>
        </article>
      </section>
    </main>
  );
}
