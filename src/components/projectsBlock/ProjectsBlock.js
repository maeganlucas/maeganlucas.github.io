import { Card, Button } from 'react-bootstrap';
import './ProjectsBlock.scss';

import { default as SkillTag } from '../skillTag/SkillTag';

import { projects, ProjectType } from '../../data/projects';
import { linkIcons } from '../../data/icons';
import portfolio from '../../assets/images/projects/portfolio.png';
import nemo_asr from '../../assets/images/projects/nemo_asr.png';
import book_nook from '../../assets/images/projects/book_nook.png';
import roygbiv from '../../assets/images/projects/roy_g_biv.png';

function ProjectsBlock () {
    const getImageSource = (id) => {
        switch (id) {
            case 0:
                return portfolio;
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

    const getSkills = (project) => {
        var name = String(project);
        switch (name) {
            case "Personal Portfolio":
                return (
                    <div className='skills'>
                        <SkillTag name={"HTML"} />
                        <SkillTag name={"CSS"} />
                        <SkillTag name={"JavaScript"} />
                        <SkillTag name={"React.js"} />
                        <SkillTag name={"Figma"} />
                        <SkillTag name={"GitHub"} />
                        <SkillTag name={"GitHub Desktop"} />
                    </div>
                );
            case "NeMo ASR Website":
                return (
                    <div className='skills'>
                        <SkillTag name={"HTML"} />
                        <SkillTag name={"CSS"} />
                        <SkillTag name={"JavaScript"} />
                        <SkillTag name={"Flask"} />
                        <SkillTag name={"GitHub"} />
                        <SkillTag name={"GitHub Desktop"} />
                    </div>
                );
            case "Book Nook":
                return (
                    <div className='skills'>
                        <SkillTag name={"Java"} />
                        <SkillTag name={"SQL"} />
                        <SkillTag name={"DBeaver"} />
                        <SkillTag name={"GitHub"} />
                    </div>
                );
            case "Roy G. Biv":
                return (
                    <div className='skills'>
                        <SkillTag name={"Python"} />
                        <SkillTag name={"GitHub"} />
                        <SkillTag name={"Scrumwise"} />
                    </div>
                );
        }
    }

    var elements = [];
    
    const addElements = (name) => {
        for (let i = 0; i < projects[String(name)]["skills"].length; i++)
        {
            var skillName = projects[String(name)]["skills"][i];
            var key = String(name) + " " + String(i);
            elements.push(
                <SkillTag key={key} name={String(skillName)} />
            );
        }
    }

    const clearElements = () => {
        elements = [];
    }

    return (
        <div className='projects-block'>
            <div className='project-grid'>
                {Object.keys(projects).map((key, id) => (
                    <Card key={id} style={{ width: '18rem' }}>
                        <Card.Body className='card-body-justify'>
                            <Card.Img alt={projects[key]["name"] + " Title Image"} src={getImageSource(projects[key]["id"])} variant='top' />
                            <Card.Title>
                                <div className='title-row'>
                                    {projects[key]["name"]}
                                    <p className='project-type' style={{color: "var(--wisteria)"}}>({projectType(projects[key]["type"])})</p>
                                </div>
                            </Card.Title>
                            <div className='card-text'>{projects[key]["desc"]}</div>
                            <div className='skills'>
                                {addElements(projects[key]["name"])}
                                {elements}
                                {clearElements()}
                            </div>
                            <p className='small-p wisteria-text' hidden={projects[key]["githubLink"] !== ""}>As this project is still being worked on, there is no public GitHub repository.</p>
                            <div className='link-row'>
                                <a href={projects[key]["githubLink"]} hidden={projects[key]["githubLink"] === ""} target='_blank' aria-label={"GitHub Repository Link for " + projects[key]["name"]}>
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