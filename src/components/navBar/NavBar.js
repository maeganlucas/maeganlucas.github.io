import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import './NavBar.scss';
import { Container, Nav, Navbar } from 'react-bootstrap';

// Import Logo
import MaeganLucasLogoWisteria from '../../assets/images/MaeganLucasLogoWisteria.png';

// Import link icons
import { linkIcons } from '../../data/icons';


function NavBar({ onNavBarToggled }) {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const windowBreakWidth = 991;

    const [isToggled, setIsToggled] = useState(true);
    const toggle = () => {
        setIsToggled(!isToggled);
        onNavBarToggled(!isToggled);
    }

    const linkClicked = () => {
        if (!isToggled)
        {
            toggle();
        }
    }

    const [isExpanded, setIsExpanded] = useState(!isToggled);

    window.onbeforeunload = () => {
        if (!isToggled)
        {
            toggle();
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if (!isToggled)
            {
                toggle();
            }
        }

        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
            if (windowWidth >= windowBreakWidth && !isExpanded)
            {
                setIsExpanded(!isExpanded);
            }
            if (windowWidth <= windowBreakWidth && isExpanded)
            {
                setIsExpanded(!isExpanded);
            }
            if (isExpanded && !isToggled)
            {
                toggle();
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleWindowResize);
        }
    }, [isToggled, isExpanded]);

    const scrollToTop = () => {
         window.history.replaceState(null, null, '/');
         window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <Navbar collapseOnSelect expand="lg" className='navbar' variant='dark' onToggle={toggle} expanded={!isToggled}>
            <Navbar.Brand>
                <a className="brand" onClick={scrollToTop}>
                    <img src={MaeganLucasLogoWisteria} alt="Logo showcasing ML initials in wisteria purple." className='maegan-lucas-logo' />
                </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar-collapse' aria-expanded='false' className='navbar-toggle' />
            <Navbar.Collapse id='navbar-collapse'>
                <Nav>
                    <HashLink to="#experience" className="navbar-link" onClick={linkClicked}>Experience</HashLink>
                    <HashLink to="#projects" className='navbar-link' onClick={linkClicked}>Projects</HashLink>
                    <HashLink to="#tech-stack" className='navbar-link' onClick={linkClicked}>Tech Stack</HashLink>
                    <a className='navbar-link' target="_blank" href='https://drive.google.com/file/d/1QafvTC2p9jqgwzVX908Gs2y2IseRtbnT/view?usp=drive_link'>Resume</a>
                    <HashLink to="#contact" className='navbar-link' onClick={linkClicked}>Contact</HashLink>
                     <HashLink to="#about" className='navbar-link' onClick={linkClicked}>About</HashLink>
                </Nav>
                <div className='navbar-link-icons'>
                    <a href={linkIcons[1].href}>
                        <svg xmlns={linkIcons[0].xmlns} viewBox={linkIcons[0].viewBox} className={linkIcons[1].class}>
                            <path d={linkIcons[1].d}/>
                        </svg>
                    </a>
                    <a href={linkIcons[2].href}>
                        <svg xmlns={linkIcons[0].xmlns} viewBox={linkIcons[0].viewBox} className={linkIcons[2].class}>
                            <path d={linkIcons[2].d} />
                        </svg>
                    </a>
                    <a href={linkIcons[3].href}>
                        <svg xmlns={linkIcons[0].xmlns} viewBox={linkIcons[0].viewBox} className={linkIcons[3].class}>
                            <path d={linkIcons[3].d} />
                        </svg>
                    </a>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;