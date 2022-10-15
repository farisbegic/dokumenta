import HomeHero from "../components/Homepage/HomeHero";
import Problem from "../components/Homepage/Problem";
import Feature from "../components/Homepage/Feature";
import Footer from "../components/common/Footer";

export default function Home() {
  return (
      <>
        <div className="wrapper">
            <HomeHero />
        </div>
            <Problem />
          <div className="wrapper">
              <Feature />
          </div>


      </>
  )
}
