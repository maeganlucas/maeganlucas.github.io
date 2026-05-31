import { skillIcons } from "../../data/icons";

function SkillTag ({name}) {
    return (
        <div>
            <img src={skillIcons[String(name)]["src"]} />
            <p>{name}</p>
        </div>
    );
}

export default SkillTag;