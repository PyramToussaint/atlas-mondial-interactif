// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
      <main className="home-page">
            <section className="hero" aria-labelledby="hero-title">
                    <h1 id="hero-title">Atlas Mondial Interactif</h1>
                            <p>
                                      Portfolio professionnel collectif d'une équipe de développeurs
                                                full-stack — découvrez notre équipe, nos projets et contactez-nous.
                                                        </p>
                                                                <div className="hero-actions">
                                                                          <Link to="/equipe" className="btn btn-primary">
                                                                                      Voir l'équipe
                                                                                                </Link>
                                                                                                          <Link to="/projets" className="btn btn-secondary">
                                                                                                                      Voir les projets
                                                                                                                                </Link>
                                                                                                                                        </div>
                                                                                                                                              </section>

                                                                                                                                                    <section className="highlights" aria-labelledby="highlights-title">
                                                                                                                                                            <h2 id="highlights-title">Ce que nous faisons</h2>
                                                                                                                                                                    <div className="highlights-grid">
                                                                                                                                                                              <article className="highlight-card">
                                                                                                                                                                                          <h3>Développement Web</h3>
                                                                                                                                                                                                      <p>Applications modernes avec React, Node.js et Express.</p>
                                                                                                                                                                                                                </article>
                                                                                                                                                                                                                          <article className="highlight-card">
                                                                                                                                                                                                                                      <h3>Collaboration</h3>
                                                                                                                                                                                                                                                  <p>Travail d'équipe organisé avec Git et GitHub Projects.</p>
                                                                                                                                                                                                                                                            </article>
                                                                                                                                                                                                                                                                      <article className="highlight-card">
                                                                                                                                                                                                                                                                                  <h3>Déploiement Cloud</h3>
                                                                                                                                                                                                                                                                                              <p>Intégration continue et hébergement sur Railway.</p>
                                                                                                                                                                                                                                                                                                        </article>
                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                      </section>
                                                                                                                                                                                                                                                                                                                          </main>
                                                                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                                                            export default Home;