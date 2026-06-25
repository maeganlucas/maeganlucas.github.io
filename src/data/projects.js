export const ProjectType = Object.freeze({
    PERSONAL: 0,
    INDIVIDUAL: 1,
    TEAM: 3
});

export const projects = {
    "Personal Portfolio": {
        id: 0,
        name: "Personal Portfolio",
        desc: "This very website is my own personal project to help learn and expand upon my web development skills. The first iteration was completed using HTML, CSS, and a little bit of JavaScript. Now on its second iteration, the portfolio site was mocked up in Figma and then revamped with React. The site is not finished though...there's always new skills to be learned and old skills to be bolstered!",
        type: ProjectType.PERSONAL,
        githubLink: "https://github.com/maeganlucas/maeganlucas.github.io",
        skills: ["HTML","CSS", "React.js", "JavaScript", "Figma", "GitHub", "GitHub Desktop"]
    },
    "NeMo ASR Website": {
        id: 1,
        name: "NeMo ASR Website",
        desc: "An inherited 5-person project that utilized a Flask-based website, multiple APIs, and a NVIDIA NeMo Automatic Speech Recongition (ASR) model to transcribe Air Traffic Communication (ATC) audio. Designed to be a tool to help student pilots learn aviation phraseology.",
        type: ProjectType.TEAM,
        githubLink: "",
        skills: ["HTML", "CSS", "JavaScript", "Flask", "GitHub", "GitHub Desktop"]
    },
    "Book Nook": {
        id: 2,
        name: "Book Nook",
        desc: "An individual project utilizing Java and a SQL database. The goal of the project was to design a database for readers and authors that allows them to store information about books and reviews in personalized profiles. The database was then integrated with a user-interface platform.",
        type: ProjectType.INDIVIDUAL,
        githubLink: "https://github.com/maeganlucas/BookNook",
        skills: ["Java", "SQL", "DBeaver", "GitHub"]
    },
    "Roy G. Biv": {
        id: 3,
        name: "Roy G. Biv",
        desc: "A 4-person team project, in which I acted as Scrum Master and Developer. The goal of the project was to aid those with color blindness. Using Python, a desktop software was developed that allowed users to fiter their screen based off preference to help differentiate colors. I was responsible for the Color Detection feature which determined how many pixels of each color were in a selected range!",
        type: ProjectType.TEAM,
        githubLink: "https://github.com/maeganlucas/RoyGBiv",
        skills: ["Python", "GitHub", "Scrumwise"]
    }
}