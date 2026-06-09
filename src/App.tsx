import "./App.css";
import MyStorySection from "./components/AboutMe";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ScrollVideoHero from "./components/ScrollVideoHero";

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
