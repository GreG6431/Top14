import Counter from "./components/Counter";
import Logo from "./assets/logo.svg";
import Team from "./components/Team";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
      <Logo />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
