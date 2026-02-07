import { SITE } from "../data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footerInner">
        <div>
          <strong>{SITE.name}</strong> <span className="tiny">• {SITE.city}</span><br />
          <span className="tiny">
            Hours: {SITE.hours} • Phone: <a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a> • Email:{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </span>
        </div>
        <div className="tiny">© {year} {SITE.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}
