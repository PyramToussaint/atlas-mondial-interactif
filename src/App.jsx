// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import Equipe from './pages/Equipe';
import Projets from './pages/Projets';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
      <BrowserRouter>
            <div className="app-layout">
                    <Header />
                            <Routes>
                                      <Route path="/" element={<Home />} />
                                                <Route path="/equipe" element={<Equipe />} />
                                                          <Route path="/projets" element={<Projets />} />
                                                                    <Route path="/contact" element={<Contact />} />
                                                                            </Routes>
                                                                                    <Footer />
                                                                                          </div>
                                                                                              </BrowserRouter>
                                                                                                );
                                                                                                }

                                                                                                export default App;
                                                                                                