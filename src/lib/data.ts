export type Experience = {
  company: string;
  role: string;
  start: string;
  end?: string;
  location?: string;
  description: string;
};

export type Project = {
  name: string;
  tech: string;
  repo?: string;
  description?: string;
};

export const SITE = {
  name: "Tasnim Munawar Rafee",
  title: "Full Stack Developer",
  email: "tasnimmunawarrafee@gmail.com",
  phone: "+8801744127891",
  address: "358/1, Khandokar Road, Shyampur, Jurain, Dhaka 1204",
  github: "https://github.com/Rafee104104",
  linkedin: "https://www.linkedin.com/in/tasnim-munawar-rafee/",
  cv: "/Tasnim-Munawar-Rafee-CV.pdf",
};

export const SKILLS = [
  "C", "C++", "Python", "Java", "JavaScript",
  "HTML", "CSS", "PHP", "Svelte.js", "Node.js",
  "Tailwind CSS", "Prisma ORM", "SQL", "Oracle PL/SQL",
  "MS SQL Server"
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Hannan Satopay (Meta Craftlab)",
    role: "Intern Full-Stack Developer",
    start: "01/06/2024",
    end: "12/07/2024",
    location: "Mumbai, India",
    description:
      "Developed web applications using Svelte.js and SvelteKit. Optimized speed and efficiency. Used Postman for API testing and Prisma with SQLite for database tasks."
  },
  {
    company: "Mercy General Hospital D.Lab & Consultation Centre",
    role: "IT Support Executive",
    start: "01/08/2024",
    end: "Present",
    location: "Dhaka, Bangladesh",
    description:
      "IT Support Executive covering hospital 3rd-party software and hardware support, communicating with patients and staff for software support and management."
  }
];

export const PROJECTS: Project[] = [
  {
    name: "The_Food",
    tech: "HTML, CSS, Bootstrap 4, XAMPP",
    repo: "https://github.com/Rafee104104/The_Food",
    description: "Online e-commerce food ordering website across many restaurants."
  },
  {
    name: "Run For Your Life",
    tech: "C++, iGraphics",
    repo: "https://github.com/Rafee104104/Run-for-your-life",
    description: "Game project similar to Pacman with chase mechanics."
  },
  {
    name: "TICKETZY (Movie Ticket Management)",
    tech: "SQL & Java",
    repo: "https://github.com/janakmallik/Movie-Ticket-Management-System",
    description: "Ticket seller system for managing customers, movies and seat allocation."
  },
  {
    name: "Photopia",
    tech: "SvelteKit, Prisma, Tailwind",
    repo: "https://github.com/Rafee104104/Photopia",
    description: "Instagram-like app for photo posts with filters."
  },
  {
    name: "Responsive Design Tester",
    tech: "SvelteKit, HTML5, Tailwind",
    repo: "https://github.com/hannansatopay/devstar/tree/main/src/routes/(tools)/responsive-design-tester",
    description: "Tool to test websites across resolutions."
  },
  {
    name: "Quick_Notes",
    tech: "Svelte, IndexedDB, Prisma, Tailwind",
    repo: "https://github.com/Rafee104104/Quick_Notes",
    description: "Note-taking app with local IndexedDB support and nice UI."
  }
];
