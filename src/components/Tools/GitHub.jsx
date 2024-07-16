import GitHubimg from "../Learning-Paths/images/Github.png";

function GitHub() {
  return (
    <>
      <div className="relative">
        <section className="w-full lg:h-96 bg-cover bg-center brightness-50 bg-red-800 dark:bg-gray-800">
        </section>
      </div>

      <div className="w-full relative flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 w-4/5 md:w-[90%] lg:w-4/5 overflow-hidden text-white mt-20 md:mt-[-20%]">
          <div className="p-2 md:p-4 col-span-2">
            <div className="flex flex-col md:flex-row justify-around items-start md:items-center">
              <section className="py-10 relative sm:py-16 lg:py-24 lg:text-gray-100 text-gray-900">
                <h1 className="text-3xl md:text-4xl font-bold">
                  GitHub, From Zero To Hero: Become a DevOps GitHub Master
                </h1>
                <p className="text-sm md:text-lg">
                  Become a DevOps Master learning GitHub & integrations with powerful tools like Docker, Ansible, AWS, GIT & more!
                </p>
                <div className="flex justify-between items-center px-4 py-3">
                  <div className="flex items-center">
                    <span className="text-sm bg-yellow-200 text-black p-1">
                      Bestseller
                    </span>
                    <div className="text-yellow-500">
                      <span className="mr-1 pl-2">★</span>
                      4.5 (35000)
                    </div>
                  </div>
                </div>
                <div className="text-gray-600 mt-10 border border-spacing-8 p-4">
                  <h1 className="font-bold">What you'll learn</h1>
                  <ul className="list-disc ml-4">
                    <li>Learn what is GitHub and how it works in depth</li>
                    <li>Learn Continuous Integration and Continuous Deployment</li>
                    <li>Learn how to integrate GitHub with Docker, Ansible, AWS, GIT, Email, Maven and more!</li>
                    <li>Learn how to design and build your own Jobs with a bunch of tools</li>
                    <li>Orchestrate the most popular DevOps tools nowadays</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>

          <div className="py-6 px-4 grid grid-cols-1">
            <div className="bg-white shadow-md overflow-hidden">
              <img src={GitHubimg} alt="Image" className="w-full" />
              <div className="flex justify-between items-center px-4 py-3 bg-gray-100">
                <div className="flex items-center">
                  <h3 className="text-lg font-medium text-gray-900">GitHub</h3>
                  <span className="ml-2 text-sm text-green-500">Bestseller</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <span className="mr-1">★</span>
                  4.5 35000
                </div>
              </div>
              <div className="px-4 py-5">
                <div className="flex justify-between">
                  <div className="text-base font-medium text-gray-900">
                    Created by Om Parkash Paliwal
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-900 line-through mr-1">₹3999</span>
                    <span className="text-red-500 text-lg font-bold">₹85</span>
                    <span className="text-gray-500 ml-1">85% off</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <span>30-Day Money Back Guarantee</span>
                  <span className="mx-2">·</span>
                  <span>Full Lifetime Access</span>
                </div>
              </div>
              <button className="w-full bg-blue-600 my-2 p-2 text-white">
                Buy Now
              </button>
              <div className="px-4 pb-2 flex justify-between text-teal-500">
                <button className="btn btn-primary">Buy this course</button>
                <div className="flex space-x-2">
                  <button className="btn btn-outline">Share</button>
                  <button className="btn btn-outline">Gift this course</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GitHub;
