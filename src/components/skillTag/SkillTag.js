import { skillIcons } from "../../data/icons";

function SkillTag ({name}) {
    var src;

    try {
        src = skillIcons[String(name)]["src"];
    }
    catch (error)
    {
        src = null;
        console.log("Error creating tag for: " + String(name));
    }

    return (
        <div>
            <img alt={{name} + "Skill Image"} src={src} />
            <p>{name}</p>
        </div>
    );
}

export default SkillTag;