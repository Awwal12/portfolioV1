export default function Hero() {
  return (
    <section id="hero" className="mt-12 bg-white dark:bg-gray-900">
      <img
        className="mx-auto w-36 h-36 rounded-full"
        src="/assets/1678646983786.jpeg"
        alt="Awwal's photo"
      />
      <div className="px-4 py-8 mx-auto max-w-screen-xl text-center lg:py-16">
        <h6 className="mb-4 text-base font-extrabold text-gray-900 dark:text-white md:text-base lg:text-base">
          Hello, I'm Mohammed Awwal Mohammed.
        </h6>
        <h1 className="mb-4 text-xl font-medium text-gray-900 dark:text-white md:text-4xl lg:text-4xl">
          Crafting scalable backend solutions and intuitive applications.
          Passionate about building robust APIs, streamlining workflows, and
          creating tools that solve real-world problems.
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-700 dark:text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Backend Developer | Problem Solver | Technology Enthusiast
        </p>

        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="mailto:abbaroze@gmail.com"
            className="inline-flex justify-center items-center px-5 py-3 text-base font-medium text-white rounded-lg bg-blue-700/50 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600/50 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Work with me
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
