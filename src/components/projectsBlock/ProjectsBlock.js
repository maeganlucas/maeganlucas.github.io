import { Card, Button } from 'react-bootstrap';
import './ProjectsBlock.scss';

import { projects, ProjectType } from '../../data/projects';
import { linkIcons } from '../../data/icons';
import nemo_asr from '../../assets/images/projects/nemo_asr.png';
import book_nook from '../../assets/images/projects/book_nook.png';
import roygbiv from '../../assets/images/projects/roy_g_biv.png';

function ProjectsBlock () {
    const getImageSource = (id) => {
        switch (id) {
            case 0:
                return null;
            case 1:
                return nemo_asr;
            case 2:
                return book_nook;
            case 3:
                return roygbiv;
        }
    }

    const projectType = (type) => {
        switch (type) {
            case ProjectType.PERSONAL:
                return "Personal Project";
            case ProjectType.INDIVIDUAL:
                return "Individual Project";
            case ProjectType.TEAM:
                return "Team Project";
        }
    }

    return (
        <div className='projects-block'>
            <div className='project-grid'>
                {projects.map(({ id, name, desc, type, githubLink, skills}) => (
                    <Card key={id} style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Img src={getImageSource(id)} variant='top' />
                            <Card.Title>
                                <div className='title-row'>
                                    {name}
                                    <p className='project-type'>({projectType(type)})</p>
                                </div>
                            </Card.Title>
                            <div className='card-text'>{desc}</div>
                            <p className='skill-text small-p'>{skills.join(", ")}</p>
                            <p className='small-p wisteria-text' hidden={githubLink !== ""}>As this project is still being worked on, there is no public GitHub repository.</p>
                            <div className='link-row'>
                                <a href={githubLink} hidden={githubLink === ""}>
                                    <svg xmlns={linkIcons[0].xmlns} viewBox={linkIcons[0].viewBox} className={linkIcons[2].class}>
                                        <path d={linkIcons[2].d} />
                                    </svg>
                                </a>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default ProjectsBlock;