import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
      <header className="site-header">
            <div className="logo">
                    <NavLink to="/">Atlas Mondial Interactif</NavLink>
                          </div>
                                <nav className="main-nav" aria-label="Navigation principale">
                                        <ul>
                                                  <li>
                                                              <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
                                                                            Accueil
                                                                                        </NavLink>
                                                                                                  </li>
                                                                                                            <li>
                                                                                                                        <NavLink to="/equipe" className={({ isActive }) => (isActive ? "active" : "")}>
                                                                                                                                      Équipe
                                                                                                                                                  </NavLink>
                                                                                                                                                            </li>
                                                                                                                                                                      <li>
                                                                                                                                                                                  <NavLink to="/projets" className={({ isActive }) => (isActive ? "active" : "")}>
                                                                                                                                                                                                Projets
                                                                                                                                                                                                            </NavLink>
                                                                                                                                                                                                                      </li>
                                                                                                                                                                                                                                <li>
                                                                                                                                                                                                                                            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
                                                                                                                                                                                                                                                          Contact
                                                                                                                                                                                                                                                                      </NavLink>
                                                                                                                                                                                                                                                                                </li>
                                                                                                                                                                                                                                                                                        </ul>
                                                                                                                                                                                                                                                                                              </nav>
                                                                                                                                                                                                                                                                                                  </header>
                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                    export default Header;
                                                                                                                                                                                                                                                                                                    