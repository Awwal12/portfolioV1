import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-[1200px] mx-auto px-8 text-center">
        <h2 className="mb-8 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Get in Touch
        </h2>
        
        <div className="flex gap-8 justify-center mb-12">
          <a
            href="mailto:abbaroze@gmail.com"
            className="text-3xl text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-awwal-mohammed-9a950a247/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Awwal12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          Copyright © 2025. Mohammed Awwal Mohammed. All rights reserved.
        </p>
      </div>
    </section>
  );
}
