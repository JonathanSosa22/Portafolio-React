import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
