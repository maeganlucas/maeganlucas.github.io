export const ProjectType = Object.freeze({
    PERSONAL: 0,
    INDIVIDUAL: 1,
    TEAM: 3
});

export const projects = [
    {
        id: 0,
        name: "Personal Portfolio",
        desc: "desc",
        type: ProjectType.PERSONAL,
        githubLink: "1",
        skills: ["HTML","CSS", "React.js", "Figma", "GitHub", "GitHub Desktop"]
    },
    {
        id: 1,
        name: "NeMo ASR Website",
        desc: "An inherited 5-person project that utilized a Flask-based website, multiple APIs, and a NVIDIA NeMo Automatic Speech Recongition (ASR) model to transcribe Air Traffic Communication (ATC) audio. Designed to be a tool to help student pilots learn aviation phraseology.",
        type: ProjectType.TEAM,
        githubLink: "",
        skills: ["HTML", "CSS", "Javascript", "Flask", "GitHub", "GitHub Desktop"]
    },
    {
        id: 2,
        name: "Book Nook",
        desc: "An individual project utilizing Java and a SQL database. The goal of the project was to design a database for readers and authors that allows them to store information about books and reviews in personalized profiles. The database was then integrated with a user-interface platform.",
        type: ProjectType.INDIVIDUAL,
        githubLink: "https://github.com/maeganlucas/BookNook",
        skills: ["Java", "SQL", "DBeaver", "GitHub"]
    },
    {
        id: 3,
        name: "Roy G. Biv",
        desc: "A 4-person team project, in which I acted as Scrum Master and Developer. The goal of the project was to aid those with color blindness. Using Python, a desktop software was developed that allowed users to fiter their screen based off preference to help differentiate colors. I was responsible for the Color Detection feature!",
        type: ProjectType.TEAM,
        githubLink: "https://github.com/maeganlucas/RoyGBiv",
        skills: ["Python", "GitHub", "Scrumwise"]
    }
]