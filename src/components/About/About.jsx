

function About() {
  return (
    <div className="bg-white dark:bg-black">
      <div className="container mx-auto px-4 md:px-12 xl:px-6 py-16 md:py-24">
        <div className="md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-1/2 lg:w-5/12 mb-8 md:mb-0">
            <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" className="w-full" />
          </div>
          <div className="md:w-1/2 lg:w-6/12">
            <h2 className="text-2xl md:text-4xl font-bold text-violet-300 dark:text-gray-300">DevOps Tool Stack is Carried Out by Passionate Developers</h2>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 dark:text-white">Welcome to our DevOps Tool Stack Suggester, your go-to solution for finding the perfect DevOps tool stack for your projects. We're a team passionate about streamlining the DevOps process and helping developers like you maximize efficiency in your workflows.</p>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 dark:text-white">
              <span className="text-xl md:text-2xl font-bold text-violet-400">Our Mission</span> 
              {' '}Our mission is simple - to simplify the process of selecting DevOps tools by leveraging data from GitHub repositories, ensuring that every project gets the optimal tool stack tailored to its unique needs.
            </p>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 dark:text-white">
              <span className="text-xl md:text-2xl font-bold text-violet-400">How It Works</span> 
              {' '}Our tool analyzes GitHub repositories to understand project requirements, then suggests suitable DevOps tool stacks based on various factors such as project size, technology stack, and development methodologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
