import ProjectCard from "../components/ProjectCard";

type Category = "Frontend" | "Backend" | "Fullstack";

type Project = {
  title: string;
  description: string;
  image: { src: string; alt: string };
  href?: string;
  category: Category;
  wip?: boolean;
};

const CATEGORIES: Category[] = ["Frontend", "Backend", "Fullstack"];

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "This site — built with Next.js, React and Tailwind CSS.",
    image: { src: "/window.svg", alt: "Portfolio Website placeholder image" },
    category: "Frontend",
    wip: true,
  },
  {
    title: "Backend Project",
    description: "Placeholder description — swap in a real project.",
    image: { src: "/globe.svg", alt: "Backend Project placeholder image" },
    category: "Backend",
  },
  {
    title: "Fullstack Project",
    description: "Placeholder description — swap in a real project.",
    image: { src: "/file.svg", alt: "Fullstack Project placeholder image" },
    category: "Fullstack",
    wip: true,
  },
  {
    title: "Portfolio Website v2",
    description: "Placeholder description — swap in a real project.",
    image: { src: "/vercel.svg", alt: "Portfolio Website v2 placeholder image" },
    category: "Frontend",
    wip: true,
  },
];

export default function Projects() {
  let firstCardRendered = false;

  return (
    <div className="px-6 sm:px-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Projects
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-10">
        Check out the projects that I&apos;ve worked on over the years at
        University or in my spare time!
      </p>

      {CATEGORIES.map((category) => {
        const items = projects.filter((p) => p.category === category);
        if (items.length === 0) return null;

        return (
          <section key={category} className="mb-12 last:mb-0">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {category}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((project) => {
                const priority = !firstCardRendered;
                firstCardRendered = true;
                return (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    href={project.href}
                    wip={project.wip}
                    priority={priority}
                  />
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
