import Hero from "./home/HeroSection/Hero"
import Welcome from "./home/WelcomeSection/Welcome"
import Service from "./home/ServiceSection/Service"
import Project from "./home/ProjectCarousel/Project"
import Support from "./home/SupportSection/Support"



export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Service />
      <Project />
      <Support />
    </>
  );
}
