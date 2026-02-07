import { SERVICES, SITE } from "../data";

export default function Services() {
  return (
    <main className="container">
      <div className="sectionTitle">
        <h2>Services</h2>
        <p>Professional Appliance Repair for the most common household units.</p>
      </div>

      <section className="grid">
        {SERVICES.map((s) => (
          <article key={s.name} className="card">
            <div className="iconBox">
              <img src={s.img} alt={s.alt} />
            </div>
            <h3>{s.name}</h3>
            <p>Diagnosis, parts replacement, and performance testing. Call us during <strong>{SITE.hours}</strong>.</p>
          </article>
        ))}
      </section>

      <div className="note">
        <strong>Tip:</strong> If you can, have the model number ready when you call—it helps us bring the right parts and speed up the repair.
      </div>
    </main>
  );
}
