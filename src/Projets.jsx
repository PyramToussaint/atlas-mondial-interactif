// src/pages/Projets.jsx
import { useState } from 'react';
import './Projets.css';

const listeProjets = [
  {
      id: 1,
          titre: 'Devoir 1 — Analyse IA E-commerce',
              categorie: 'IA',
                  description: 'Analyse et modélisation d\'un problème IA pour une entreprise e-commerce.',
                    },
                      {
                          id: 2,
                              titre: 'Devoir 2 — PA GEN KANPE',
                                  categorie: 'Web',
                                      description: 'Système de gestion de files d\'attente bancaires.',
                                        },
                                          {
                                              id: 3,
                                                  titre: 'Projet Intégratif — Linux',
                                                      categorie: 'Systèmes',
                                                          description: 'Examen final en 6 phases sur Ubuntu 24.04, systèmes d\'exploitation Linux.',
                                                            },
                                                              {
                                                                  id: 4,
                                                                      titre: 'Atlas Mondial Interactif',
                                                                          categorie: 'Web',
                                                                              description: 'Portfolio professionnel collectif full-stack (React, Express, Railway).',
                                                                                },
                                                                                ];

                                                                                const categories = ['Tous', 'Web', 'IA', 'Systèmes'];

                                                                                function Projets() {
                                                                                  const [filtreActif, setFiltreActif] = useState('Tous');

                                                                                    const projetsFiltres =
                                                                                        filtreActif === 'Tous'
                                                                                              ? listeProjets
                                                                                                    : listeProjets.filter((p) => p.categorie === filtreActif);

                                                                                                      return (
                                                                                                          <main className="projets-page">
                                                                                                                <h1>Nos Projets</h1>

                                                                                                                      <div className="filtres" role="group" aria-label="Filtrer les projets par catégorie">
                                                                                                                              {categories.map((cat) => (
                                                                                                                                        <button
                                                                                                                                                    key={cat}
                                                                                                                                                                className={filtreActif === cat ? 'filtre-btn active' : 'filtre-btn'}
                                                                                                                                                                            onClick={() => setFiltreActif(cat)}
                                                                                                                                                                                        aria-pressed={filtreActif === cat}
                                                                                                                                                                                                  >
                                                                                                                                                                                                              {cat}
                                                                                                                                                                                                                        </button>
                                                                                                                                                                                                                                ))}
                                                                                                                                                                                                                                      </div>

                                                                                                                                                                                                                                            <section className="projets-grid" aria-live="polite">
                                                                                                                                                                                                                                                    {projetsFiltres.map((projet) => (
                                                                                                                                                                                                                                                              <article key={projet.id} className="projet-card">
                                                                                                                                                                                                                                                                          <span className="badge">{projet.categorie}</span>
                                                                                                                                                                                                                                                                                      <h2>{projet.titre}</h2>
                                                                                                                                                                                                                                                                                                  <p>{projet.description}</p>
                                                                                                                                                                                                                                                                                                            </article>
                                                                                                                                                                                                                                                                                                                    ))}
                                                                                                                                                                                                                                                                                                                          </section>

                                                                                                                                                                                                                                                                                                                                {projetsFiltres.length === 0 && (
                                                                                                                                                                                                                                                                                                                                        <p className="aucun-resultat">Aucun projet dans cette catégorie.</p>
                                                                                                                                                                                                                                                                                                                                              )}
                                                                                                                                                                                                                                                                                                                                                  </main>
                                                                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                                                    export default Projets;
                                                                                                                                                                                                                                                                                                                                                    