export default function Hero(){
    return (
      <section class="bg-white dark:bg-gray-900">
        <img
          class="rounded-full w-36 h-36 mx-auto"
          src="src\assets\1678646983786.jpeg"
          alt="Awwal's photo"
        />
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h6 class="mb-4 text-base font-extrabold tracking-tight leading-none text-gray-900 md:text-base lg:text-base dark:text-white">
            Hello, I'm Mohammed Awwal Mohammed.
          </h6>
          <h1 class="mb-4 text-xl font-medium tracking-tight leading-none text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
            Crafting scalable backend solutions and intuitive applications.
            Passionate about building robust APIs, streamlining workflows, and
            creating tools that solve real-world problems.
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Backend Developer | Problem Solver | Technology Enthusiast
          </p>

          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="mailto:abbaroze@gmail.com"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Work with me
              <svg
                class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    );
}