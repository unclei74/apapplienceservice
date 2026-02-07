import { NavLink } from "react-router-dom";
import { SITE } from "../data";

export function Header() {
  return (
    <header className="header">
      <div className="topbar">
        <a className="brand" href="#/" aria-label={`${SITE.name} home`}>
          <img src="./logo.svg" alt={`${SITE.name} logo`} />
          <div className="name">
            <strong>{SITE.name}</strong>
            <span>Appliance Repair • {SITE.city}</span>
          </div>
        </a>

        <div className="rightInfo">
          <div className="badge" aria-label="Working hours">
            <span className="pill">Hours</span>
            <span className="tinyline">{SITE.hours}</span>
          </div>
          <a className="badge" href={`tel:${SITE.phoneTel}`} aria-label={`Call ${SITE.phone}`}>
            <span className="pill">Call</span>
            <span className="tinyline">{SITE.phone}</span>
          </a>
        </div>
      </div>

      <nav className="nav">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : undefined)}>Home</NavLink>
        <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : undefined)}>Services</NavLink>
        <NavLink to="/brands" className={({ isActive }) => (isActive ? "active" : undefined)}>Brands</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : undefined)}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : undefined)}>Contact</NavLink>
      </nav>
    </header>
  );
}
