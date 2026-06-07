import "./App.css";
import MyStorySection from "./components/AboutMe";
import Footer from "./components/footer";
import HeroSection from "./components/HeroSection";
import ScrollVideoHero from "./components/ScrollVideoHero";
import Seprator from "./components/Seprator";

function App() {
  return (
    <>
      <HeroSection/>
      <ScrollVideoHero/>
      <MyStorySection/>
      <Footer/>

    </>
  );
}

export default App;
