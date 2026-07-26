// src/Footer.jsx
function Footer() {
  const anneeActuelle = new Date().getFullYear();

    return (
        <footer className="site-footer">
              <div className="footer-container">
                      <p>&copy; {anneeActuelle} Atlas Mondial Interactif. Tous droits réservés.</p>
                              <p>Projet réalisé par Toussaint Pyram, Isidore Dahina, Dimeus Rosalvo</p>
                                    </div>
                                        </footer>
                                          );
                                          }

                                          export default Footer;
                                          