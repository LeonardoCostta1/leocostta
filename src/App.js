import "./App.css";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Digital from "./Components/Digital";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Menu from "./Components/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <Banner />
      <Digital/>
      <About />
      <Gallery/>
      <Footer />
    </div>
  );
}

export default App;
