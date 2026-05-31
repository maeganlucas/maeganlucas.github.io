import { Card, Button } from 'react-bootstrap';
import './TechStackBlock.scss';

import { default as SkillTag } from '../skillTag/SkillTag';

import { techStack } from '../../data/techStack';

function TechStackBlock () {
    var elements = [];

    const addElements = (name) => {
        for (let i = 0; i < techStack[String(name)]["skills"].length; i++)
        {
            var skillName = techStack[String(name)]["skills"][i];
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
      <div className='tech-stack-block'>
        <div className='tech-stack-grid'>
            {Object.keys(techStack).map((key, id) => (
                <Card key={id}>
                    <Card.Body>
                        <Card.Title>{String(techStack[key]["name"])}</Card.Title>
                        <div className='tech-stack-skills'>
                            {addElements(techStack[key]["name"])}
                            {elements}
                            {clearElements()}
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>
      </div>   
    );
}

export default TechStackBlock;