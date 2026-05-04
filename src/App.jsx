import Logo from "./sections/Logo.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import Showcase from "./sections/Showcase.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import Education from "./sections/Education.jsx";
import TechStack from "./sections/TechStack.jsx";
import Achievements from "./sections/Achievements.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Showcase />
    <TechStack />
    <Logo />
    <FeatureCards />
    <Education />
    <Achievements />
    <Contact />
    <Footer />
    </>
  );
};

export default App;
