import Jenkinsimg from "../../Image/R.jpg";

function Jankins() {
  return (
    <>
      <div className="">
        <div className="relative">
          <section className="w-full h-[40vh] lg:h-[55vh] bg-cover bg-center brightness-50 bg-gray-600"></section>
        </div>

        <div className="w-full h-[1200px] md:h-[60vh] lg:h-[130vh] relative">
          <div className="absolute -top-[3%] md:-top-[34%] left-1/2 -translate-x-1/2 grid grid-cols-1 md:grid-cols-3 h-fit w-4/5 md:w-[90%] lg:w-4/5 overflow-hidden text-white">
            <div className="p-2 md:p-4 col-span-2">
              <form>
                <div className="flex flex-col md:flex-row justify-around items-start md:items-center">
                  <section className="py-10 relative sm:py-16 lg:py-24 text-gray-100">
                    <h1 className="text-3xl md:text-4xl font-bold">
                      Jenkins, From Zero To Hero: Become a DevOps Jenkins Master
                    </h1>
                    <p className="text-sm md:text-lg">
                      Become a DevOps Master learning Jenkins & integrations
                      with powerful tools like Docker, Ansible, AWS, GIT & more!
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
                    <div className="text-gray-600 mt-10 border border-spacing-8">
                        <h1 className=" font-bold">
                        What you'll learn
                        </h1>
                      
                        Learn what is Jenkins and how it works in depth
                        Learn Continuous Integration and Continuous Deployment
                        Learn how to integrate Jenkins with Docker, Ansible, AWS, GIT, Email, Maven and more!
                        Learn how to design and build your own Jobs with a bunch of tools
                        Orchestrate the most popular DevOps tools nowadays
                        
                    </div>
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
                    <div className="max-w-2xl mx-auto text-center pt-10">
            <h2 className="text-2xl text-black sm:text-xl sm:leading-tight font-bold">Top companies offer this course to their employees
            </h2>
            <p className="text-black font-light">This course was selected for our collection of top-rated courses trusted by businesses worldwide. Learn more</p>
        </div>
                      <div className="grid items-center max-w-4xl grid-cols-2 gap-4 mx-auto mt-12 md:mt-20 md:grid-cols-4">
                        
                        <div className="bg-white h-12 flex shadow-lg items-center justify-center">
                          <img
                            className="object-contain w-full h-6 mx-auto"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png"
                            alt=""
                          />
                        </div>

                        <div className="bg-white h-12 flex shadow-lg items-center justify-center">
                          <img
                            className="object-contain w-full h-8 mx-auto"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-2.png"
                            alt=""
                          />
                        </div>

                        <div className="bg-white h-12 flex shadow-lg items-center justify-center">
                          <img
                            className="object-contain w-full h-8 mx-auto"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-3.png"
                            alt=""
                          />
                        </div>

                        <div className="bg-white h-12 flex shadow-lg items-center justify-center">
                          <img
                            className="object-contain w-full mx-auto h-7"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-4.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </form>
            </div>

            <div className="py-6 px-4 h-[500px] md:h-full grid grid-cols-1 grid-rows-5">
              <div className="bg-white shadow-md overflow-hidden">
                <img src={Jenkinsimg} alt="Image" className="w-full" />
                <div className="flex justify-between items-center px-4 py-3 bg-gray-100">
                  <div className="flex items-center">
                    <h3 className="text-lg font-medium text-gray-900">Jenkins</h3>
                    <span className="ml-2 text-sm text-green-500">
                      Bestseller
                    </span>
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
                      <span className="text-gray-900 line-through mr-1">
                        ₹3999
                      </span>
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
      </div>
    </>
  );
}

export default Jankins;
