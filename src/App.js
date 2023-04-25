import "./assets/fonts/fonts.scss";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Popular from "./components/popular/Popular";
import Regular from "./components/regular/Regular";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Popular />
        <Regular />
      </main>
    </>
  );
}

export default App;
