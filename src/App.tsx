import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
//components
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import Loader from "./components/loader/Loader";
import ServiceModal from "./components/ServiceModal/ServiceModal";
//pages
const HomePage = lazy(() => import("./pages/homepage/HomePage"));
const ContactPage = lazy(() => import("./pages/contactPage/ContactPage"));
const AboutPage = lazy(() => import("./pages/aboutPage/AboutPage"));
const ServicePage = lazy(() => import("./pages/servicesPage/ServicePage"));
//hooks
import ScrollToTop from "./utils/Hooks/ScrollToTop";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Header />
          <div className="app__container">
            <Suspense fallback={<Loader />}>
              <ScrollToTop />
              <Routes>
                <Route path="/" index element={<HomePage />} />
                <Route path="/ota-yhteytta" element={<ContactPage />} />
                <Route path="/palvelut" element={<ServicePage />} />
                <Route path="/palvelut/:id" element={<ServiceModal />} />
                <Route path="/minusta" element={<AboutPage />} />
              </Routes>
            </Suspense>
          </div>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
