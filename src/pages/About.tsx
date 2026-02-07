import { SITE } from "../data";

export default function About() {
  return (
    <main className="container">
      <div className="sectionTitle">
        <h2>About {SITE.name}</h2>
        <p>Local, family-owned appliance repair serving {SITE.city}.</p>
      </div>

      <section className="grid">
        <article className="card">
          <h3>Family Business</h3>
          <p>
            {SITE.name} is a family-owned company built on long-term relationships. We believe the best way to grow is by
            taking great care of every customer—one home at a time.
          </p>
        </article>

        <article className="card">
          <h3>Customer-Oriented</h3>
          <p>
            You’ll get straight answers, respectful service, and clear next steps. We show up on time, communicate throughout
            the process, and make sure you understand the repair before we leave.
          </p>
        </article>

        <article className="card">
          <h3>Experienced Professionals</h3>
          <p>
            Our technicians are experienced in diagnosing common and complex appliance issues. From electrical and control-board
            problems to drainage, heating, cooling, and noise issues—we focus on safe, reliable repairs that restore performance.
          </p>
        </article>
      </section>

      <div className="sectionTitle">
        <h2>What You Can Expect</h2>
        <p>A simple process that respects your time.</p>
      </div>

      <section className="grid">
        <article className="card">
          <h3>1) Request Service</h3>
          <p>Call us during <strong>{SITE.hours}</strong> or use the contact form to describe the issue and your appliance type/brand.</p>
        </article>
        <article className="card">
          <h3>2) Diagnosis</h3>
          <p>We inspect, test, and identify the problem. Then we explain the fix and provide an estimate.</p>
        </article>
        <article className="card">
          <h3>3) Repair & Testing</h3>
          <p>We complete the repair, verify performance, and share maintenance tips to help prevent future issues.</p>
        </article>
      </section>
    </main>
  );
}
