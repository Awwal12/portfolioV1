import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projectsData = [
    {
      title: "Project 1",
      description:
        "Description for project 1. This is a brief overview of what the project does and what technologies were used.",
      imageUrl: "/path/to/image1.jpg",
      githubUrl: "https://github.com/yourusername/project1",
      liveUrl: "https://project1-demo.com",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Project 2",
      description:
        "Description for project 2. Highlighting the key features and achievements of this project.",
      imageUrl: "/path/to/image2.jpg",
      githubUrl: "https://github.com/yourusername/project2",
      liveUrl: "https://project2-demo.com",
      technologies: ["TypeScript", "Next.js", "Tailwind"],
    },
    {
      title: "Project 3",
      description:
        "Description for project 3. Showcasing the technical challenges and solutions implemented.",
      imageUrl: "/path/to/image3.jpg",
      githubUrl: "https://github.com/yourusername/project3",
      liveUrl: "https://project3-demo.com",
      technologies: ["Python", "Django", "PostgreSQL"],
    },
    {
      title: "Project 4",
      description:
        "Description for project 4. Another exciting project with its own unique challenges.",
      imageUrl: "/path/to/image4.jpg",
      githubUrl: "https://github.com/yourusername/project4",
      liveUrl: "https://project4-demo.com",
      technologies: ["JavaScript", "Express"],
    },
    {
      title: "Project 5",
      description:
        "Description for project 5. Innovative solutions and creative implementations.",
      imageUrl: "/path/to/image5.jpg",
      githubUrl: "https://github.com/yourusername/project5",
      liveUrl: "https://project5-demo.com",
      technologies: ["React", "Node.js", "PostgreSQL"],
    },
    {
      title: "Project 6",
      description:
        "Description for project 6. Demonstrating growth and technical expertise.",
      imageUrl: "/path/to/image6.jpg",
      githubUrl: "https://github.com/yourusername/project6",
      liveUrl: "https://project6-demo.com",
      technologies: ["TypeScript", "Next.js", "Tailwind"],
    },
    // Additional projects that will be shown when "Show More" is clicked
    // {
    //   title: "Project 7",
    //   description:
    //     "Description for project 7. More amazing features and implementations.",
    //   imageUrl: "/path/to/image7.jpg",
    //   githubUrl: "https://github.com/yourusername/project7",
    //   liveUrl: "https://project7-demo.com",
    //   technologies: ["Python", "Flask", "SQLite"],
    // },
    // Add more projects as needed
  ];

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 6);

  return (
    <>
      <div className="flex justify-evenly mx-auto">
        <hr className="my-8 w-8 h-8 bg-gray-200 rounded border-0 md:my-12 dark:bg-gray-700" />
        <hr className="my-8 w-8 h-8 bg-gray-200 rounded border-0 md:my-12 dark:bg-gray-700" />
        <hr className="my-8 w-8 h-8 bg-gray-200 rounded border-0 md:my-12 dark:bg-gray-700" />
      </div>
      <div className="px-8">
        <h1 className="inline-block mb-8 text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Projects
        </h1>
        <div className="max-w-[1200px] mx-auto">
          <div className="p-8 mb-8 text-xl italic font-semibold text-justify text-gray-900 border dark:textborder-white hover:border-blue-500 hover:shadow-lg">
            In this section, you'll find a showcase of my journey as a developer,
            where I've combined self-driven designs and collaborations with teams
            to bring ideas to life. From crafting sleek, accessible interfaces to
            building robust backend solutions, each project tells a story of
            growth, learning, and impact.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 p-8 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto place-items-center">
        {displayedProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            technologies={project.technologies}
          />
        ))}
      </div>
      {projectsData.length > 6 && (
        <div className="flex justify-center pb-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 text-white rounded-lg bg-blue-700/50 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600/50 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </>
  );
}
