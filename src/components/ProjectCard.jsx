import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

export default function ProjectCard({
  title,
  description,
  imageUrl,
  githubUrl,
  liveUrl,
  technologies,
}) {
  return (
    <div className="w-[380px] h-[600px] bg-white rounded-lg border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col hover:border-blue-500 hover:shadow-2xl">
      <a href="#" className="h-[200px]">
        <img
          className="object-cover w-full h-full rounded-t-lg"
          src={imageUrl || "/docs/images/blog/image-1.jpg"}
          alt={title}
        />
      </a>
      <div className="flex flex-col flex-grow p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <div className="flex flex-wrap gap-2 mb-3">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full dark:bg-blue-200 dark:text-blue-800"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="overflow-y-auto flex-grow mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="flex gap-4 justify-center mt-auto">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700/50 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600/50 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <FaGlobe className="w-5 h-5 opacity-100" />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-gray-700/50 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600/50 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <FaGithub className="w-5 h-5 opacity-100" />
          </a>
        </div>
      </div>
    </div>
  );
}
