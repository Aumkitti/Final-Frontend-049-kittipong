import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Popular from "./components/Popular";
import Review from "./components/Review";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {

    const sr = ScrollReveal({
      origin: "bottom", 
      distance: "20px",
      duration: 1000,
      delay: 200,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
    });

    sr.reveal("#home", { delay: 200 });
    sr.reveal("#popular", { delay: 300 });
    sr.reveal("#review", { delay: 300 });

    const leadingReveal = ScrollReveal({
      origin: "left", 
      distance: "20px",
      duration: 1000,
      delay: 200,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
    });
    leadingReveal.reveal(".Leading", { delay: 200 });

    const joinReveal = ScrollReveal({
      origin: "right", 
      distance: "20px",
      duration: 1000,
      delay: 200,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
    });
    joinReveal.reveal(".join", { delay: 200 });

    return () => {
      sr.destroy();
      leadingReveal.destroy();
      joinReveal.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div id="Home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="popular">
        <Popular />
      </div>
      <div id="review">
        <Review />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
