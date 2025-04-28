import './App.css'
import HeroGradient from './components/heroSection/HeroGradient';
import HeroMain from './components/heroSection/HeroMain';
import NavbarMain from './components/navbar/NavbarMain';
import SubHeroSection from './components/heroSection/SubHeroSection';
import AboutMeMain from './components/aboutMeSection/AboutMeMain';
import HelperSection from './components/HelperSection';
import SkillsMain from './components/skillSection/SkillsMain';
import SubSkills from './components/skillSection/SubSkills';
import ExperienceMain from './components/experienceSection/ExperienceMain';
import ProjectsMain from './components/projectsSection/projectsMain';
import ContactMeMain from './components/contactMeSection/ContactMeMain';
import FooterMain from './components/footer/FooterMain';

function App() {

  return (
   <main className="font-body">
    <NavbarMain />
    <HeroMain />
    <HeroGradient />
    <SubHeroSection />
    <AboutMeMain/>
    <SkillsMain/>
    <SubSkills/>
    <ExperienceMain/>
    <ProjectsMain/>
    <ContactMeMain/>
    <FooterMain/>
   </main>
  )
}

export default App
