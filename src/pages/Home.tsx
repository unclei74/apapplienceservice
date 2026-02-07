import { SITE } from "../data";

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <div className="copy">
          <h1>Fast, Reliable Appliance Repair in {SITE.city}</h1>
          <p>
            Same-day and next-day appointments for most calls. We repair major home appliances with honest diagnostics
            and clear pricing.
          </p>

          <ul className="bullets">
            <li><span className="dot" /><span><strong>Local & family-owned:</strong> service you can trust, backed by real people who live here.</span></li>
            <li><span className="dot" /><span><strong>Experienced techs:</strong> trained to diagnose quickly and fix it right the first time.</span></li>
            <li><span className="dot" /><span><strong>Explain before we repair:</strong> you’ll know the issue, the options, and the estimate.</span></li>
            <li><span className="dot" /><span><strong>Working hours:</strong> {SITE.hours}.</span></li>
          </ul>

          <div className="ctaRow">
            <a className="btn primary" href="#/contact">Request Service</a>
            <a className="btn secondary" href="#/services">View Services</a>
            <a className="btn secondary" href={`tel:${SITE.phoneTel}`}>Call {SITE.phone}</a>
          </div>

          <div className="note">
            <strong>Need help today?</strong> Call <a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a> or send a request—our team will respond ASAP.
          </div>
        </div>

        <div className="heroArt">
          <img src="./hero.svg" alt="Las Vegas skyline and appliance icons" />
        </div>
      </section>

      <div className="sectionTitle">
        <h2>Why Choose {SITE.name}?</h2>
        <p>Simple, professional, no surprises.</p>
      </div>

      <section className="grid">
        <article className="card">
          <h3>Clear Communication</h3>
          <p>We explain the problem in plain English and give you options before starting work.</p>
        </article>
        <article className="card">
          <h3>Respect for Your Home</h3>
          <p>Shoe covers, careful handling, and a clean workspace. We treat your home like it’s ours.</p>
        </article>
        <article className="card">
          <h3>Quality Parts & Workmanship</h3>
          <p>We use reliable replacement parts when available and stand behind our work.</p>
        </article>
      </section>
    </main>
  );
}
