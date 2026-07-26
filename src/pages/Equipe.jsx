import { useState, useEffect } from "react";
import "./Equipe.css";

const membres = [
  { nom: "Pyram Toussaint", github: "PyramToussaint", bio: "Développeur Frontend" },
    // Ajoute lòt manm ekip la isit la, ak vrè non itilizatè GitHub yo
    ];

    function Equipe() {
      const [stats, setStats] = useState({});
        const [chargement, setChargement] = useState(true);
          const [erreur, setErreur] = useState(null);

            useEffect(() => {
                async function fetchStats() {
                      setChargement(true);
                            const resultats = {};
                                  try {
                                          for (const membre of membres) {
                                                    const res = await fetch(`https://api.github.com/users/${membre.github}`);
                                                              if (res.ok) {
                                                                          const data = await res.json();
                                                                                      resultats[membre.github] = {
                                                                                                    repos: data.public_repos,
                                                                                                                  followers: data.followers,
                                                                                                                                avatar: data.avatar_url,
                                                                                                                                            };
                                                                                                                                                      }
                                                                                                                                                              }
                                                                                                                                                                      setStats(resultats);
                                                                                                                                                                            } catch (err) {
                                                                                                                                                                                    setErreur("Impossible de charger les statistiques GitHub.");
                                                                                                                                                                                          } finally {
                                                                                                                                                                                                  setChargement(false);
                                                                                                                                                                                                        }
                                                                                                                                                                                                            }
                                                                                                                                                                                                                fetchStats();
                                                                                                                                                                                                                  }, []);

                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                        <section>
                                                                                                                                                                                                                              <h1>Notre Équipe</h1>

                                                                                                                                                                                                                                    {chargement && <p>Chargement des statistiques GitHub...</p>}
                                                                                                                                                                                                                                          {erreur && <p role="alert">{erreur}</p>}

                                                                                                                                                                                                                                                <div className="equipe-grille">
                                                                                                                                                                                                                                                        {membres.map((membre) => {
                                                                                                                                                                                                                                                                  const s = stats[membre.github];
                                                                                                                                                                                                                                                                            return (
                                                                                                                                                                                                                                                                                        <article key={membre.github} className="carte-membre">
                                                                                                                                                                                                                                                                                                      {s?.avatar && <img src={s.avatar} alt={`Avatar de ${membre.nom}`} width="80" />}
                                                                                                                                                                                                                                                                                                                    <h2>{membre.nom}</h2>
                                                                                                                                                                                                                                                                                                                                  <p>{membre.bio}</p>
                                                                                                                                                                                                                                                                                                                                                {s && (
                                                                                                                                                                                                                                                                                                                                                                <p>
                                                                                                                                                                                                                                                                                                                                                                                  {s.repos} dépôts publics · {s.followers} abonnés
                                                                                                                                                                                                                                                                                                                                                                                                  </p>
                                                                                                                                                                                                                                                                                                                                                                                                                )}
                                                                                                                                                                                                                                                                                                                                                                                                                            </article>
                                                                                                                                                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                                                                                                                                                              })}
                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                        </section>
                                                                                                                                                                                                                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                                                                                                                                                                                                          export default Equipe;
                                                                                                                                                                                                                                                                                                                                                                                                                                                          