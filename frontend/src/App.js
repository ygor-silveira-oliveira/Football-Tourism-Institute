import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import JournalsPage from "./components/JournalsPage";
import BooksPage from "./components/BooksPage";
import ConferencesPage from "./components/ConferencesPage";

function AppContent() {
  const location = useLocation();
  const isPillarPage = location.pathname.startsWith("/pillars");

  return (
    <div className="App">
      {!isPillarPage && <Header />}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <ContactSection />
              </>
            }
          />
          <Route path="/pillars/journals" element={<JournalsPage />} />
          <Route path="/pillars/books" element={<BooksPage />} />
          <Route path="/pillars/conferences" element={<ConferencesPage />} />
        </Routes>
      </main>
      {!isPillarPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
