import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Hero from "./components/Hero";
import Nuestra from "./components/Nuestra";

import Jackpot from "./components/Jackpot";
import Casino from "./components/Casino";
import Elegirons from "./components/Elegirnos"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <div>
        <Hero />
        <Nuestra />
   
      <Jackpot/>
      <Casino/>
      <Elegirons/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
