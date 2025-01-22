import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projectsData = [
    {
      title: "ExpenseTrac",
      description:
        "ExpenseTrac is a simple and intuitive tool for managing personal finances. It allows users to track daily expenses, organize them into categories, and view spending insights through reports and visualizations.",
      imageUrl: "/path/to/image1.jpg",
      githubUrl: "https://github.com/Awwal12/ExpenseTrac",
      liveUrl: "https://project1-demo.com",
      technologies: ["Django", "PostgreSQL", "Tailwind CSS", "Elasticsearch"],
    },
    {
      title: "Object Detection System",
      description:
        "This is a system that detects objects in an image, video feed or real time camera feed and returns the object's name and location. It uses YOLOv3 model for object detection. It is built with Python, OpenCV, and YOLOv3.",
      imageUrl: "src/assets/Picture1.png",
      githubUrl: "https://github.com/Awwal12/Object-Detection-App",
      liveUrl: "https://project2-demo.com",
      technologies: ["Python", "CustomTkinter", "OpenCV", "YOLOv3"],
    },
    {
      title: "Cashcard",
      description:
        "The Family Cash Card REST API is a backend service designed to help parents manage allowances for their children. It enables parents to create, edit, delete, and track virtual cash cards, functioning like gift cards for easy fund management. Built with Spring Boot, the API ensures secure, efficient handling of data and provides endpoints for managing multiple cash cards while prioritizing user authentication and protection against unauthorized access.",
      imageUrl: "/path/to/image3.jpg",
      githubUrl: "https://github.com/Awwal12/cashcard",
      liveUrl: "https://project3-demo.com",
      technologies: ["Java", "Spring Boot", "REST API", "Spring Security"],
    },
    {
      title: "AirBnB Clone v4",
      description:
        "A full-stack Airbnb clone featuring user authentication, property listings, booking management, and review systems. Includes role-based access control and advanced search functionality for properties.",
      imageUrl: "src/assets/da2584da58f1d99a72f0a4d8d22c1e485468f941.png",
      githubUrl: "https://github.com/Awwal12/AirBnB_clone_v4",
      liveUrl: "https://project4-demo.com",
      technologies: [
        "Python",
        "Flask",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
        "Shell Scripting",
      ],
    },
    {
      title: "Weather App",
      description:
        "A full-stack weather application that provides real-time weather updates and forecasts. Features include location search, current conditions display, and 7-day forecasts. Built with responsive design for cross-device compatibility.",
      imageUrl: "/path/to/image5.jpg",
      githubUrl: "https://github.com/yourusername/project5",
      liveUrl: "https://project5-demo.com",
      technologies: ["React", "Node.js", "PostgreSQL"],
    },
    {
      title: "Portfolio v1",
      description:
        "This is my first portfolio website. It is built with React, Tailwind CSS. It is hosted on Vercel. It is a simple and elegant portfolio website that showcases my projects and skills.",
      imageUrl: "/path/to/image6.jpg",
      githubUrl: "https://github.com/Awwal12/portfolioV1",
      liveUrl: "https://project6-demo.com",
      technologies: ["React.js", "Flowbite", "Tailwind", "Vite"],
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
    <section id="projects">
      <div className="flex justify-evenly mx-auto">
        <hr className="my-8 w-8 h-8 bg-gray-200 rounded border-0 md:my-12 dark:bg-gray-700" />
        <hr className="my-8 w-8 h-8 bg-gray-200 rounded border-0 md:my-12 dark:bg-gray-700" />
        <hr className="my-8 w-8 h-8 bg-gray-200 rounded border-0 md:my-12 dark:bg-gray-700" />
      </div>
      <div className="px-8">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="mb-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Projects
          </h1>
          <div className="p-8 mb-8 text-xl italic font-semibold text-justify text-gray-900 border dark:textborder-white hover:border-blue-500 hover:shadow-lg">
            In this section, you'll find a showcase of my journey as a
            developer, where I've combined self-driven designs and
            collaborations with teams to bring ideas to life. From crafting
            sleek, accessible interfaces to building robust backend solutions,
            each project tells a story of growth, learning, and impact.
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
    </section>
  );
}
