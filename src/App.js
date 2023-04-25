import "./assets/fonts/fonts.scss";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Popular from "./components/popular/Popular";
import Regular from "./components/regular/Regular";
import Happy from "./components/happy/Happy";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Popular />
        <Regular />
        <Happy />
      </main>
    </>
  );
}

export default App;
