import { BRANDS } from "../data";

function fileNameForBrand(b: string) {
  return `./brands/${b.toLowerCase().replaceAll(" ", "_")}.svg`;
}

export default function Brands() {
  return (
    <main className="container">
      <div className="sectionTitle">
        <h2>Brands We Service</h2>
        <p>We service many major appliance brands. If you don’t see yours, ask—we likely service it.</p>
      </div>

      <section className="brandGrid">
        {BRANDS.map((b) => (
          <div key={b} className="brandTile">
            <img src={fileNameForBrand(b)} alt={b} />
            <span>{b}</span>
          </div>
        ))}
      </section>

      <div className="note">
        <strong>Brand images:</strong> These are custom brand tiles (not official logos). If you have permission to use official brand assets,
        replace files in <code>public/brands</code> with your authorized images.
      </div>
    </main>
  );
}
