import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
      <BrowserRouter>
            <er />
                  <main>
                          <Routes>
                                    <Route path="/" element={<h1>Accueil — en construction</h1>} />
                                              <Route path="/equipe" element={<h1>Équipe — en construction</h1>} />
                                                        <Route path="/projets" element={<h1>Projets — en construction</h1>} />
                                                                  <Route path="/contact" element={<h1>Contact — en construction</h1>} />
                                                                          </Routes>
                                                                                </main>
                                                                                      <Footer />
                                                                                          </BrowserRouter>
                                                                                            );
                                                                                            }

                                                                                            export default App;
                                                                                            