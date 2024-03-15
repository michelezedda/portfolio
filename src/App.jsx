import NavBar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Michele Zedda - Portfolio</title>
        <link rel="canonical" href="https://michelezedda.netlify.app/" />
      </Helmet>
      <NavBar />
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
