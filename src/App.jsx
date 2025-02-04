import "./App.css";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Background from "./components/Background";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <About />
      <Background />
      <Skills />
      <Experiences />
      <Projects />
      <Achievements />
      <Footer />
    </>
  );
}

export default App;
