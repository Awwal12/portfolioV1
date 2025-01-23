export default function About() {
  const handleDownloadResume = () => {
    const resumeUrl = "src/assets/Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Mohammed_A_M_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="bg-white dark:bg-gray-900">
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        <div className="flex flex-col gap-12 items-center md:flex-row">
          {/* Content Side */}
          <div className="flex-1 space-y-8">
            <h2 className="mb-6 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              About Me
            </h2>

            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              I'm Mohammed Awwal Mohammed, a passionate Full Stack Developer
              based in Nigeria. With a keen eye for detail and a love for clean
              code, I specialize in crafting robust web applications that make a
              difference.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              My journey in tech has led me through diverse projects - from
              sophisticated object detection systems to intuitive financial
              platforms. I thrive on turning complex problems into elegant
              solutions that users love.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              When I'm not coding, I'm exploring new technologies or
              collaborating with teams to build innovative solutions. I believe
              in continuous learning and staying ahead of industry trends.
            </p>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Technologies I work with:
              </h3>
              <div className="grid grid-cols-2 gap-4 text-lg md:grid-cols-3">
                <span className="text-gray-700 dark:text-gray-300">
                  • Python
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  • JavaScript
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  • React
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  • Django
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  • Node.js
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  • PostgreSQL
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  • MongoDB
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  • Docker
                </span>
                <span className="text-gray-700 dark:text-gray-300">• AWS</span>
                <span className="text-gray-700 dark:text-gray-300">• Java</span>
                <span className="text-gray-700 dark:text-gray-300">
                  • Spring Boot
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  • Redis
                </span>
              </div>
            </div>

            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center px-8 py-4 mt-6 text-lg font-medium text-white rounded-lg bg-blue-700/50 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600/50 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Resume
            </button>
          </div>

          {/* Image Side */}
          <div className="flex flex-1 justify-center">
            <div className="w-[550px] h-[700px] bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              <img
                src="src/assets/IMG_6186.JPG"
                alt="Awwal Mohammed"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
