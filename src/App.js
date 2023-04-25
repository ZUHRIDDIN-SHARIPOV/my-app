import "./assets/fonts/fonts.scss";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Popular from "./components/popular/Popular";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Popular />
      </main>
    </>
  );
}

export default App;
