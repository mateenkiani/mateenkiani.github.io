import Container from "../../components/Container";
import Styles from "./Home.module.css";

import Header from "../../components/Home/Header";
import mateen from "../../assets/mateen.jpg";
import About from "../../components/Home/About";
import Skills from "../../components/Home/Skills";
import Timelines from "../../components/Home/Timelines";
import Contact from "../../components/Home/Contact";
import Footer from "../../components/Home/Footer";
import Achievements from "../../components/Home/Achievements";
import Education from "../../components/Home/Education";

export default function Home() {
  return (
    <main className={`text-white ${Styles.mainContainer}`}>
      <div className={Styles.gradientCover1}></div>
      <div className={Styles.gradientCover2}></div>
      <div className={Styles.gradientCover3}></div>
      {/* <Header /> */}
      <Container>
        <div className="flex items-center content-center gap-4 mt-7">
          <div className="person_image">
            <img className="w-20 rounded-full" src={mateen} alt="broken" />
          </div>
          <div className="person_text">
            <h3 className="font-bold">Mateen Kiani</h3>
            <p>Full Stack | JavaScript Developer</p>
          </div>
        </div>
        <About />
        <Skills />
        <Timelines />
        <Achievements />
        <Education />
        <Contact />
        <Footer />
      </Container>
    </main>
  );
}
