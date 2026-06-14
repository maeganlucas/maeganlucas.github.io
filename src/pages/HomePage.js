import { useState, useEffect} from 'react';
import './styles/HomePage.css';

/* Import components */
import HeaderBlock from '../components/headerBlock/HeaderBlock';
import ExperienceBlock from '../components/experienceBlock/ExperienceBlock';
import ProjectsBlock from '../components/projectsBlock/ProjectsBlock';
import TechStackBlock from '../components/techStackBlock/TechStackBlock';
import ContactForm from '../components/contactForm/ContactForm';

/* Import images and icons */
import pfp from '../assets/images/MaeganLucasPic.jpg';
import { starIcons } from '../data/icons';

function HomePage({statusOfNavBar}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const windowBreakWidth = 991;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  return (
    <div className="home-page">
      <div className='home-page-content'>
        <section id='hero' className={`${statusOfNavBar ? 'hero-navbar-closed' : 'hero-navbar-open'}`}>
          <div className='hero-row'>
            <div>
              <h1>Hi, I'm Maegan!</h1>
              <p>I'm so glad you're here</p>
              <div className='hero-break'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={starIcons[0].viewBox} className='hero-stars'>
                  <path className='wisteria-star-icon' d={starIcons[1].d}/>
                  <path className='wisteria-star-icon' d={starIcons[2].d}/>
                  <path className='wisteria-star-icon' d={starIcons[3].d}/>
                </svg>
              </div>
              <p>I am a Frontend Developer and a UI/UX Designer all rolled into one! I design and implement high-quality UI features.</p>
              <p style={{marginBottom: 0}}>Check out my work below!</p>
            </div>
            <img src={pfp} alt="Picture of me!" className='pfp'/>
          </div>
        </section>
        <section id='hero-spacer' />
        <section id='experience'>
          <HeaderBlock headerName={"Experience"} />
          <ExperienceBlock />
        </section>
        <section id='spacer' />
        <section id='projects'>
          <HeaderBlock headerName={"Projects"} />
          <ProjectsBlock />
        </section>
        <section id='spacer' />
        <section id='tech-stack'>
          <HeaderBlock headerName={"Tech Stack"} />
          <TechStackBlock />
        </section>
        <section id='spacer' />
        <section id='contact'>
          <HeaderBlock headerName={"Contact"} />
          <ContactForm />
        </section>
        <section id='spacer' />
      </div>
    </div>
  );
};

export default HomePage;
