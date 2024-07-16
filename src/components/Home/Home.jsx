import {
  FaLinux,
  FaDocker,
  FaJava,
  FaAws,
  FaJenkins,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import { FaPython } from "react-icons/fa6";

import { BiLogoKubernetes } from "react-icons/bi";
import { SiTerraform } from "react-icons/si";
import React from "react";
import { useState, useEffect, useRef } from "react";
import img1 from "../../Image/safe_image.jpg";
import img2 from "../../Image/what-is-your-corporate-image.webp";
import "./Home.css";
import logo from "../../logo/devopsfarm-logo-1500x1500 (1).png";
import { getUserData } from "../../utils/apiUtils";

import Lighthouse from "../lighthouse/Lighthouse";
import { Link } from "react-router-dom";

function Home() {
  const accessToken = localStorage.getItem("accessToken");
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);
  const iconWidth = 36; // Width of each icon
  const numIcons = 10; // Number of icons
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  useEffect(() => {
    const containerWidth = iconWidth * numIcons; // Calculate total width of container
    const scrollInterval = setInterval(() => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition + 1;
        // Reset scroll position when it exceeds total container width
        return newPosition >= containerWidth ? 0 : newPosition;
      });
    }, 15); // Adjust the interval time for smoothness

    return () => clearInterval(scrollInterval);
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const accessToken = localStorage.getItem("accessToken");
        console.log("accessToken inside MainSection", accessToken);
        if (accessToken) {
          const userData = await getUserData();
          setUserData(userData);
        }
      } catch (error) {
        console.error("Error Handling in fetching Data in MainSection", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
     
      <div className="transition-all duration-300 flex min-h-screen items-center justify-center bg-white dark:bg-black font-bold text-black dark:text-white">
      <div className="text-center space-y-12">
        <img src={logo} alt="Logo" className="mx-auto h-20 " />
        <span className="text-transparent text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text bg-gradient-to-tr from-[#ddf9fd] to-[#0400ff]">
          DevopsFarm
        </span>
        <div className="text-center text-red-700 text-5xl font-bold">
          Training Offered
          <div className="relative inline-grid grid-cols-1 grid-rows-1 ml-2 gap-12 overflow-hidden text-orange-400 ">
            <span className="animate-word col-span-full row-span-full">
              GITHUB
            </span>
            <span className="animate-word-delay-1 col-span-full row-span-full">
              AWS
            </span>
            <span className="animate-word-delay-2 col-span-full row-span-full">
              DOCKER
            </span>
            <span className="animate-word-delay-3 col-span-full row-span-full">
              JAVA
            </span>
            <span className="animate-word-delay-4 col-span-full row-span-full">
              JENKINS
            </span>
          </div>
        </div>
        {/* Uncomment and replace `userData` with your actual user data logic */}
        {/* {userData ? null : (
          <p className="text-black dark:text-white animate-bounce md:animate-none">
            Want to contact me for <NavLink to="/login">GITHUB? Ping me</NavLink>
          </p>
        )} */}
      </div>
    </div>





<section className="text-black dark:bg-black dark:text-white body-font">
  <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
    <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font tracking-wide sm:text-3xl md:text-6xl xl:text-7xl mb-4 font-bold">
        Guaranteed Remote Internship Placements
      </h1>
      <p className="mb-8 leading-relaxed opacity-50">
        Devops Learning partners with companies to offer straightforward internships, and enable job seekers to gain industry experience
      </p>
    </div>
    <div id="pattern" className="w-full sm:w-40 lg:max-w-xl lg:w-full md:w-32 xl:w-5/6 bg-contain bg-no-repeat md:ml-40 xl:mr-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        <div className="text-center">
          <FaLinux className="h-16 w-16 sm:h-20 sm:w-20 lg:h-20 lg:w-20 mx-auto cursor-pointer icon duration-300 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100" />
          <p className="mt-2">Linux</p>
        </div>
        <div className="text-center">
          <FaAws className="h-16 w-16 sm:h-20 sm:w-20 lg:h-20 lg:w-20 mx-auto cursor-pointer icon duration-300 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100" />
          <p className="mt-2">AWS</p>
        </div>
        <div className="text-center">
          <FaGithub className="h-16 w-16 sm:h-20 sm:w-20 lg:h-20 lg:w-20 mx-auto cursor-pointer icon duration-300 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100" />
          <p className="mt-2">GitHub</p>
        </div>
        <div className="text-center">
          <FaDatabase className="h-16 w-16 sm:h-20 sm:w-20 lg:h-20 lg:w-20 mx-auto cursor-pointer icon duration-300 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100" />
          <p className="mt-2">Database</p>
        </div>
        <div className="text-center">
          <FaDocker className="h-16 w-16 sm:h-20 sm:w-20 lg:h-20 lg:w-20 mx-auto cursor-pointer icon duration-300 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100" />
          <p className="mt-2">Docker</p>
        </div>
        <div className="text-center">
          <FaJava className="h-16 w-16 sm:h-20 sm:w-20 lg:h-20 lg:w-20 mx-auto cursor-pointer icon duration-300 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100" />
          <p className="mt-2">Java</p>
        </div>
       <Link to="/jenkins"> <div className="text-center">
          <FaJenkins className="h-16 w-16 sm:h-20 sm:w-20 lg:h-20 lg:w-20 mx-auto cursor-pointer icon duration-300 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100" />
          <p className="mt-2">Jenkins</p>
        </div></Link>
        <div className="text-center">
          <FaPython className="h-16 w-16 sm:h-20 sm:w-20 lg:h-20 lg:w-20 mx-auto cursor-pointer icon duration-300 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100" />
          <p className="mt-2">Python</p>
        </div>
        <div className="text-center">
          <BiLogoKubernetes className="h-16 w-16 sm:h-20 sm:w-20 lg:h-20 lg:w-20 mx-auto cursor-pointer icon duration-300 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100" />
          <p className="mt-2">Kubernetes</p>
        </div>
        <div className="text-center">
          <SiTerraform className="h-16 w-16 sm:h-20 sm:w-20 lg:h-20 lg:w-20 mx-auto cursor-pointer icon duration-300 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100" />
          <p className="mt-2">Terraform</p>
        </div>
      </div>
    </div>
  </div>
</section>


<Lighthouse/>


<section>
	<div className="dark:bg-black bg-white dark:text-white text-black py-20">
		<div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
			<div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
				<h1 className="text-3xl md:text-5xl p-2 text-red-700 dark:text-yellow-300 tracking-loose">DEVOPS</h1>

				<p className="text-sm md:text-base  dark:text-gray-50 mb-4">DevOps: Bridging Development and Operations. Learn the art of seamless collaboration, automation, and continuous delivery to accelerate software development and enhance efficiency.</p>
			
			</div>
			<div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
				<div className="h-48 flex flex-wrap content-center">
					<div>
						<img className="inline-block mt-28 hidden  xl:block" src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"/></div>
						<div>
							<img className="inline-block mt-24 md:mt-0 p-8 md:p-0"  src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"/></div>
							<div>
								<img className="inline-block mt-28 hidden  lg:block" src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"/></div>
							</div>
						</div>
					</div>
				</div>
</section>





      <div className="  justify-center dark:bg-black dark:text-white    ">
        <div className="  overflow-auto">
<section className=" bg-green-500ray-50 pb-24 relative z-30">
    <div className="mx-auto   ">
        <div className="relative z-40 container mx-auto h-full       lg:px-8">
            <div className="px-4 py-4      lg:px-8 lg:pt-20">
                <div className="grid gap-10 lg:grid-cols-2 mx-24">
                    <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">

                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6   font-sans text-3xl font-bold       leading-normal">
                            Technical and Job Oriented Trainings by Faculties with 10+ Years of Industry Experience <br/>
                            <spen className='text-red-700'>SALIENT FEATURES</spen>
                            </h2>

                        </div>
                        <div>
                            <a  href="http://192.168.4.146/spinksindia/industry" aria-label=""
                                className="inline-flex items-center justify-start w-full font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                                Learn more
                                <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                                    <path
                                        d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full   -mx-4 lg:pl-10">
                        <div className="flex flex-col items-end px-3">
                            <img className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt=""/>
                            <img className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt=""/>
                        </div>
                        <div className="px-3">
                            <img className="object-cover w-40 h-40 rounded shadow-lg sm:hbg-green-500ray-50-64 xl:h-80 sm:w-full xl:w-80"
                                src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                                alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap mt-4 gap-2 mx-24">
                <div className="group flex  flex-grow  ">
                    <a href="#"
                        className="flex flex-grow  justify-between rounded-lg overflow-hidden bg-white p-5 py-2 shadow-lg text-black group-hover:text-yellow-500  transition-all duration-1000 ease-in-out relative z-30">
                        <div
                            className=" absolute  -top-0 left-0 w-5 h-0.5 group-hover:h-full group-hover:left-0 group-hover:w-1/2 bg-yellow-500/20     z-10 transition-all duration-700 ease-in-out ">
                        </div>
                        <div
                            className=" absolute  -top-0 right-0 w-5 h-0.5 group-hover:h-full group-hover:right-0 group-hover:w-1/2 bg-yellow-500/20     z-10 transition-all duration-700 ease-in-out ">
                        </div>

                        <div className="relative">
                            <h3 className="p-0 m-0  ">IT Training on Latest Technologies</h3>
                        </div>

                    </a>
                </div>
                <div className="group flex  flex-grow  ">
                    <a href="#"
                        className="flex flex-grow  justify-between rounded-lg overflow-hidden bg-white p-5 py-2 shadow-lg text-black group-hover:text-red-500ed-500  transition-all duration-1000 ease-in-out relative z-30">
                        <div
                            className=" absolute  -top-0 left-0 w-5 h-0.5 group-hover:h-full group-hover:left-0 group-hover:w-1/2 bg-red-500/20     z-10 transition-all duration-700 ease-in-out ">
                        </div>
                        <div
                            className=" absolute  -top-0 right-0 w-5 h-0.5 group-hover:h-full group-hover:right-0 group-hover:w-1/2 bg-red-500/20     z-10 transition-all duration-700 ease-in-out ">
                        </div>

                        <div className="relative">
                            <h3 className="p-0 m-0  ">Live Project Trainings</h3>
                        </div>

                    </a>
                </div>
                <div className="group flex  flex-grow  ">
                    <a href="#"
                        className="flex flex-grow  justify-between rounded-lg overflow-hidden bg-white p-5 py-2 shadow-lg text-black group-hover:text-blue-reen-500 transition-all duration-1000 ease-in-out relative z-30">
                        <div
                            className=" absolute  -top-0 left-0 w-5 h-0.5 group-hover:h-full group-hover:left-0 group-hover:w-1/2 bg-blue-500/20     z-10 transition-all duration-700 ease-in-out ">
                        </div>
                        <div
                            className=" absolute  -top-0 right-0 w-5 h-0.5 group-hover:h-full group-hover:right-0 group-hover:w-1/2 bg-blue-500/20     z-10 transition-all duration-700 ease-in-out ">
                        </div>

                        <div className="relative">
                            <h3 className="p-0 m-0  ">Certification After Completion</h3>
                        </div>

                    </a>
                </div>
                <div className="group flex  flex-grow  ">
                    <a href="#"
                        className="flex flex-grow  justify-between rounded-lg overflow-hidden bg-white p-5 py-2 shadow-lg text-black group-hover:text-indigo-500   transition-all duration-1000 ease-in-out relative z-30">
                        <div
                            className=" absolute  -top-0 left-0 w-5 h-0.5 group-hover:h-full group-hover:left-0 group-hover:w-1/2 bg-indigo-500/20     z-10 transition-all duration-700 ease-in-out ">
                        </div>
                        <div
                            className=" absolute  -top-0 right-0 w-5 h-0.5 group-hover:h-full group-hover:right-0 group-hover:w-1/2 bg-indigo-500/20     z-10 transition-all duration-700 ease-in-out ">
                        </div>

                        <div className="relative">
                            <h3 className="p-0 m-0  ">Lifetime Access to Recordings and Materials</h3>
                        </div>

                    </a>
                </div>
                <div className="group flex  flex-grow  ">
                    <a href="#"
                        className="flex flex-grow  justify-between rounded-lg overflow-hidden bg-white p-5 py-2 shadow-lg text-black group-hover:text-green-500  transition-all duration-1000 ease-in-out relative z-30">
                        <div
                            className=" absolute  -top-0 left-0 w-5 h-0.5 group-hover:h-full group-hover:left-0 group-hover:w-1/2 bg-green-500/20     z-10 transition-all duration-700 ease-in-out ">
                        </div>
                        <div
                            className=" absolute  -top-0 right-0 w-5 h-0.5 group-hover:h-full group-hover:right-0 group-hover:w-1/2 bg-green-500/20     z-10 transition-all duration-700 ease-in-out ">
                        </div>

                        <div className="relative">
                            <h3 className="p-0 m-0  ">Job Assistance & Career Guidance</h3>
                        </div>

                    </a>
                </div>
                <div className="group flex  flex-grow  ">
                    <a href="#"
                        className="flex flex-grow  justify-between rounded-lg overflow-hidden bg-white p-5 py-2 shadow-lg text-black group-hover:text-yellow-500  transition-all duration-1000 ease-in-out relative z-30">
                        <div
                            className=" absolute  -top-0 left-0 w-5 h-0.5 group-hover:h-full group-hover:left-0 group-hover:w-1/2 bg-yellow-500/20     z-10 transition-all duration-700 ease-in-out ">
                        </div>
                        <div
                            className=" absolute  -top-0 right-0 w-5 h-0.5 group-hover:h-full group-hover:right-0 group-hover:w-1/2 bg-yellow-500/20     z-10 transition-all duration-700 ease-in-out ">
                        </div>

                        <div className="relative">
                            <h3 className="p-0 m-0  ">Resume & Interview Preparation</h3>
                        </div>

                    </a>
                </div>
                <div className="group flex  flex-grow  ">
                    <a href="#"
                        className="flex flex-grow  justify-between rounded-lg overflow-hidden bg-white p-5 py-2 shadow-lg text-black group-hover:text-red-500ed-500  transition-all duration-1000 ease-in-out relative z-30">
                        <div
                            className=" absolute  -top-0 left-0 w-5 h-0.5 group-hover:h-full group-hover:left-0 group-hover:w-1/2 bg-red-500/20     z-10 transition-all duration-700 ease-in-out ">
                        </div>
                        <div
                            className=" absolute  -top-0 right-0 w-5 h-0.5 group-hover:h-full group-hover:right-0 group-hover:w-1/2 bg-red-500/20     z-10 transition-all duration-700 ease-in-out ">
                        </div>

                        <div className="relative">
                            <h3 className="p-0 m-0  ">Focus on Hands-On</h3>
                        </div>

                    </a>
                </div>
                


            </div>
        </div>
        

    </div>
    <div className="lg:text-[250px] varien absolute top-8 left-24 text-green-500/5  z-0    ">
        Industry
    </div>
</section>



          

          <h1 className="text-3xl m-20 text-center font-bold text-gray-800 dark:text-white">
            Advantages of sourcing Interns from us
          </h1>
        </div>

        <div className="  flex min-h-screen items-center justify-center p-10 bg-white dark:bg-black ">
          <div className="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2 ">
            <div className="flex rounded-md  dark:dark:bg-black overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="flex-1 p-10">
                <h3 className="text-xl font-medium dark:text-gray-100">
                  Job ready candidates
                </h3>
                <p className="mt-2 dark:text-slate-200">
                  The candidates we send to our partners have already undergone
                  rigorous months-long and hands-on training at IBT Learning.
                  They are equipped with the most up-to-date and in-demand tech
                  skills as well as the soft skills needed to thrive in a
                  real-world environment
                </p>
              </div>
              <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
                <div className="absolute inset-0">
                  <img
                    src={img1}
                    className="h-full w-full object-cover object-left-top"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex rounded-md   dark:dark:bg-black overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="flex-1 p-10">
                <h3 className="text-xl font-medium dark:text-gray-100">
                  Pre-vetted Candidates
                </h3>
                <p className="mt-2 dark:text-slate-200">
                  Prior to being paired with employers that require unique sets
                  of abilities and new perspectives, our referrals undergo a
                  thorough and multi-stage evaluation. We facilitate a seamless
                  injection of exciting new talent into your existing teams,
                  giving managers the opportunity to observe chosen candidates
                  in action prior to committing to a hiring decision, enabling
                  you to make an informed choice.
                </p>
              </div>
              <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
                <div className="absolute inset-0">
                  <img
                    src={img2}
                    className="h-full w-full object-cover object-left-top"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex rounded-md   dark:dark:bg-black overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="flex-1 p-10">
                <h3 className="text-xl font-medium dark:text-gray-100">
                  On-going support
                </h3>
                <p className="mt-2 dark:text-slate-200">
                  We don't dump talents with hiring partners, we remain
                  committed to the progress of each candidate by providing
                  ongoing support in the form of check-ins and advice
                </p>
              </div>
              <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
                <div className="absolute inset-0">
                  <img
                    src={img2}
                    className="h-full w-full object-cover object-left-top"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex rounded-md   dark:dark:bg-black overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="flex-1 p-10">
                <h3 className="text-xl font-medium dark:text-gray-100">
                  Exclusive talent
                </h3>
                <p className="mt-2 dark:text-slate-200">
                  Get access to exclusive net-new talent, without the hassle of
                  headhunting. This model is also scalable to grow with your
                  business needs
                </p>
              </div>
              <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
                <div className="absolute inset-0">
                  <img
                    src={img1}
                    className="h-full w-full object-cover object-left-top"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

 
<div>
  <section>
    <section className="sticky">

    <div className="dark:bg-black px-4 sm:pt-24 pt-12 sm:pb-8 mx-auto text-left md:max-w-none md:text-center">
 
  <span className="text-transparent text-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold bg-clip-text bg-gradient-to-tr from-[#ddf9fd] to-[#0400ff]">
    Building Good
  </span>
  <h1 className="font-extrabold leading-10 tracking-tight dark:text-white text-[#201515] text-center sm:leading-none text-5xl sm:text-9xl">
    <span className="relative mt-2 bg-clip-text text-red-500 md:inline-block animate-bounce">
      Software.
    </span>
  </h1>
</div>



      <div
        className=" px-4 pb-24 mx-auto text-left md:max-w-none md:text-center dark:bg-black "
      >
        <div className='text-center py-4 space-x-4 '>

          <button className="backdrop-blur-sm transition duration-500 ease-in-out bg-white border border-[#E2E8F0] translate-y-1 text-[#16161d] hover:bg-neutral-200 text-lg font-semibold py-3 px-6 rounded-3xl inline-flex items-center">
            <span> Explore Apps</span>
          </button>
        </div>
      </div>

    </section>
  </section>


  <div className="text-left dark:bg-black">

    <div className='sm:px-28'>
      <section className="relative flex items-center w-full">
        <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="relative flex-col items-start m-auto align-middle">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
              {/* <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                <div className="max-w-xl text-center lg:text-left">
                  <div>

                    <p className="text-3xl font-semibold tracking-tight text-[#201515] dark:text-white sm:text-5xl">
                      Space Management Software
                    </p>
                    <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600 dark:text-white">
                      Use this paragraph to share information about your company or products. Make it engaging and interesting, and showcase your brand's personality. Thanks for visiting our website!
                    </p>
                  </div>
                  <div className="flex justify-center gap-3 mt-8 lg:justify-start pb-10">
                    <a className="inline-flex items-center justify-center text-sm font-semibold dark:text-white text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600" href="#">
                      <span> Read more &nbsp; → </span>
                    </a>
                  </div>
                </div>
              </div> 
               <div className="order-first block w-full mt-12 aspect-square lg:mt-0 ">
                <img className="hidden dark:block object-cover rounded-3xl object-center w-full mx-auto bg-gray-300 lg:ml-auto " alt="hero" src="https://i.pinimg.com/originals/2e/2b/21/2e2b21aeed393403d4620367f9e093f9.gif" />
                <img className=" dark:hidden w-full h-96 mr-96" src="https://tailwindcomponents.com/svg/website-designer-bro.svg" alt=""/>
              </div> */}
            </div>
          </div>
        </div>
      </section>

    </div>

    

    <section>

    </section>

  </div>
</div>



    </>
  );
}

export default Home;
