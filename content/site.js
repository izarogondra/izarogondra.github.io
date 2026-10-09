/* ============ YOUR DETAILS: edit this file for everything that isn't a project ============ */
const SITE = {
  name: "Charles",
  tagline: "Environment artist, 2D and 3D, for cartoony worlds.",
  intro: "Replace this with one or two sentences about the kind of worlds you build.",
  email: "you@example.com",
  resumePdf: "resume.pdf",            // put your PDF next to index.html
  portrait: "",                       // e.g. "images/me.jpg"
  bio: [
    "Write two or three short paragraphs here: who you are, what you love building, and the tools you use.",
    "Say what you are looking for: freelance, collaborations, or full-time roles."
  ],
  socials: [
    { label: "LinkedIn",   url: "https://www.linkedin.com/in/your-name" },
    { label: "ArtStation", url: "https://www.artstation.com/your-name" }
  ],
  jobs: [
    { title: "Job title, Studio", when: "2024 to present" },
    { title: "Education or training", when: "Year" }
  ]
};

/* The sub-tabs under Work. A project joins a group by using the group's id.
   A group with no projects is hidden automatically. */
const GROUPS = [
  { id: "experience", title: "Work experience", blurb: "Environments I have made professionally. Describe the show, studio, and your role." },
  { id: "school",     title: "School",          blurb: "Projects from coursework. Add the school, class, and what you were asked to explore." },
  { id: "personal",   title: "Personal",        blurb: "Work made for fun." }
];

/* Project files call addProject(). You don't need to touch this part. */
const PROJECTS = [];
function addProject(p) { PROJECTS.push(p); }
