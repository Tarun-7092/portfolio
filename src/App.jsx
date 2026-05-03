import Logo from "./sections/Logo";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import FeatureCards from "./sections/FeatureCards";
import Education from "./sections/Education";
import TechStack from "./sections/TechStack";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

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
