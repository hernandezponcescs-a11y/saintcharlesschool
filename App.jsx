import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Pillars from "./components/Pillars.jsx";
import Gallery from "./components/Gallery.jsx";
import Services from "./components/Services.jsx";
import EnrollmentBanner from "./components/EnrollmentBanner.jsx";
import Footer from "./components/Footer.jsx";

/** El orden de las secciones de la página */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Gallery />
        <Services />
        <EnrollmentBanner />
      </main>
      <Footer />
    </>
  );
}
