import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <body>
      <div className="main min-h-screen">
        <Navbar />
        <main className="px-8 space-y-16">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <footer className="py-8 text-center text-textSecondary">
          <p>© {new Date().getFullYear()} Mateen Kiani. All rights reserved.</p>
        </footer>
      </div>
    </body>
  );
}

export default App;
