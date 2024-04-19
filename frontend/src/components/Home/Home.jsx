import Login from '../Login/Login'
import { HeaderMain } from '..'
import { FaLinux, FaDocker,  FaJava, FaAws, FaJenkins, FaGithub, FaDatabase } from 'react-icons/fa';
import { FaPython } from "react-icons/fa6";
import { BiLogoKubernetes } from "react-icons/bi";
import { SiTerraform } from "react-icons/si";
import React from 'react';
 import Marquee from 'react-fast-marquee';
 import { useState, useEffect, useRef } from 'react';
 import clip from '../../Image/devops.mp4';
 import { FaRegHandPointRight } from "react-icons/fa6";
import { GrCloudComputer } from "react-icons/gr";
import { GiArtificialIntelligence } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";
import img1 from '../../Image/safe_image.jpg'
import img2 from '../../Image/what-is-your-corporate-image.webp'
import './Home.css'
import { NavLink} from "react-router-dom";
import { MdConnectWithoutContact } from "react-icons/md";
import { getRepoContents, getAllRepos , getUserData } from "../../utils/apiUtils";
import logo from "../../logo/devopsfarm-logo-1500x1500 (1).png";
function Home() {
  const accessToken = localStorage.getItem('accessToken')
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
            const accessToken = localStorage.getItem('accessToken');
            console.log("accessToken inside MainSection", accessToken);
            if (accessToken) {
                const userData = await getUserData();
                setUserData(userData);

                const reposList = await getAllRepos();
                setReposList(reposList);

            }
        } catch (error) {
            console.error("Error Handling in fetching Data in MainSection", error);
        }
    }
    fetchData();
}, []);
  

  
  return (
   
    <>


<div class="transition-all duration-300 flex min-h-screen items-center justify-center bg-white dark:bg-black font-bold text-black dark:text-white">
    {/* <img src={logo} class=" ml-4 md:ml-14 md:mr-2" alt="Logo" /> */}
    <div class="text-center space-y-12">
        <span class="text-transparent text-center text-7xl font-bold bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">DevopsFarm</span>
        <div class="text-center text-5xl font-bold">
            Services offered
            <div class="relative inline-grid grid-cols-1 grid-rows-1 ml-2 gap-12 overflow-hidden ">
                <span class="animate-word col-span-full row-span-full text-blue-100">GITHUB</span>
                <span class="animate-word-delay-1 col-span-full row-span-full text-blue-200">AWS</span>
                <span class="animate-word-delay-2 col-span-full row-span-full text-blue-300">DOCKER</span>
                <span class="animate-word-delay-3 col-span-full row-span-full text-blue-400">JAVA</span>
                <span class="animate-word-delay-4 col-span-full row-span-full text-blue-500">JENKINS</span>
            </div>
        </div>
        {userData ? null : (
        <p class="text-black dark:text-white animate-bounce md:animate-none">
            Want to me for <NavLink to='/login'>GITHUB? Ping me</NavLink>
        </p>)}
    </div>
</div>



        <div className="pt-16 transition duration-500 bg-slate-100 text-center dark:bg-black text-black dark:text-white  z-10">
                  <div className=" animate-pulse days text-6xl font-semibold border-b-2 border-black dark:border-white">2 DAYS FREE DEMO & CAREER GUIDANCE IN IT</div>
                  <h4 className="pt-20 text-lg">Why Internship?</h4>
                  <p className="py-10 px-20 text-2xl">Work experience is crucial, yet securing a job can pose challenges. To get a job, you need experience, but to get experience you need a job. The answer? Internships. Find global work experience in any field or region with IBT through our placement partners</p>
              

                  <div className="bg-white dark:bg-black p-10 h-96 z-10">
                    <h1 className="text-3xl md:text-5xl font-bold mb-5 text-gray-400">Guaranteed Remote Internship Placements</h1>
                    <h2 className="text-lg md:text-xl text-gray-400">IBT Learning partners with companies to offer straightforward internships, and enable job seekers to gain industry experience</h2>
                    <Marquee direction="right" speed={100} delay={5} className="mt-5 marquee">
                    <FaLinux className=' duration-300 h-36 w-36 mx-12 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100 ' />
                    <FaAws className=' duration-300 h-36 w-36 mx-12 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100 ' />
                    <FaGithub className=' duration-300 h-36 w-36 mx-12 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100 ' />
                    <FaDatabase className=' duration-300 h-36 w-36 mx-12 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100 ' />
                    <FaDocker className=' duration-300 h-36 w-36 mx-12 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100 ' />
                    <FaJava className=' duration-300 h-36 w-36 mx-12 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100 ' />
                    <FaJenkins className=' duration-300 h-36 w-36 mx-12 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100 ' />
                    <FaPython className=' duration-300 h-36 w-36 mx-12 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100 ' />
                    <BiLogoKubernetes className=' duration-300 h-36 w-36 mx-12 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100 ' />
                    <SiTerraform className=' duration-300 h-36 w-36 mx-12 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100 ' />
                    </Marquee>
                  </div>
        </div>
              
        <div className="  justify-center border-b border-solid bg-white border-gray-500">
           <div className="overflow-auto">
                <div className="dv  top-0 flex flex-wrap justify-center items-center border-b border-solid bg-white border-gray-500 py-4">
                  <div className='dv-1 w-80 mx-4 my-4'>
                    <h1 className="text-xl font-semibold mb-4"><GiBrain className=" w-8 h-8" />DEVOPS</h1>
                    <p className="text-gray-700">DevOps: Bridging Development and Operations. Learn the art of seamless collaboration, automation, and continuous delivery to accelerate software development and enhance efficiency.</p>
                  </div>
                  <div className='dv-1 w-80 mx-4 my-4'>
                    <h1 className="text-xl font-semibold mb-4"><GrCloudComputer className=" w-8 h-8" />CLOUD & INFRASTRUCTURE</h1>
                    <p className="text-gray-700">Explore the Cloud: Unleash the Power of Scalable Infrastructure. Discover the world of cloud computing and infrastructure, where flexibility, cost-efficiency, and reliability combine to revolutionize the way businesses operate and innovate.</p>
                  </div>
                  <div className='dv-1 w-80 mx-4 my-4'>
                    <h1 className="text-xl font-semibold mb-4"><GiArtificialIntelligence className=" w-8 h-8" />CHATGPT & AI</h1>
                    <p className="text-gray-700">Discover the world of Artificial Intelligence and ChatGPT. Dive into the fundamentals of AI, explore the capabilities of ChatGPT, and learn how these technologies are shaping our world.</p>
                  </div>
                </div>



        <div className="transition duration-300 list-1  bg-slate-100 dark:bg-black text-black dark:text-white">
            <h2 className="pt-40 text-center font-bold text-xl">Technical and Job Oriented Trainings by Faculties with 10+ Years of Industry Experience</h2>
            <h1 className="text-center text-3xl font-bold mb-8">SALIENT FEATURES</h1>
            <ul className="px-10 pb-40">
              <li className="flex items-start py-4 font-semibold">
                <span className="flex items-center">
                  <FaRegHandPointRight className="text-red-800 w-6 h-6 mr-3" />
                  IT Training on Latest Technologies
                </span>
              </li>
              <li className="flex items-start py-4 font-semibold">
                <span className="flex items-center">
                  <FaRegHandPointRight className="text-red-800 w-6 h-6 mr-3" />
                  Live Project Trainings
                </span>
              </li>
              <li className="flex items-start py-4 font-semibold">
                <span className="flex items-center">
                  <FaRegHandPointRight className="text-red-800 w-6 h-6 mr-3" />
                  Certification After Completion
                </span>
              </li>
              <li className="flex items-start py-4 font-semibold">
                <span className="flex items-center">
                  <FaRegHandPointRight className="text-red-800 w-6 h-6 mr-3" />
                  Lifetime Access to Recordings and Materials
                </span>
              </li>
              <li className="flex items-start py-4 font-semibold">
                <span className="flex items-center">
                  <FaRegHandPointRight className="text-red-800 w-6 h-6 mr-3" />
                  Job Assistance & Career Guidance
                </span>
              </li>
              <li className="flex items-start py-4 font-semibold">
                <span className="flex items-center">
                  <FaRegHandPointRight className="text-red-800 w-6 h-6 mr-3" />
                  Resume & Interview Preparation
                </span>
              </li>
              <li className="flex items-start py-4 font-semibold">
                <span className="flex items-center">
                  <FaRegHandPointRight className="text-red-800 w-6 h-6 mr-3" />
                  Focus on Hands-On
                </span>
              </li>
            </ul>

            </div>


            <h1 className=" text-3xl  m-20 text-center">Advantages of sourcing Interns from us</h1>
  
          </div>
 
<div className="flex min-h-screen items-center justify-center p-10 bg-white ">
  <div className="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2 ">
  <div className="flex rounded-md border border-slate-200 dark:bg-black">
      <div className="flex-1 p-10">
        <h3 className="text-xl font-medium text-gray-700">Job ready candidates</h3>
        <p className="mt-2 text-slate-500">The candidates we send to our partners have already undergone rigorous months-long and hands-on training at IBT Learning. They are equipped with the most up-to-date and in-demand tech skills as well as the soft skills needed to thrive in a real-world environment</p>
        
      </div>
       <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
        <div className="absolute inset-0">
          <img src={img1} className="h-full w-full object-cover object-left-top" alt="" />
        </div>
      </div> 
    </div>
    
    <div className="flex rounded-md border border-slate-200 dark:bg-black">
      <div className="flex-1 p-10">
        <h3 className="text-xl font-medium text-gray-700">Pre-vetted Candidates</h3>
        <p className="mt-2 text-slate-500">Prior to being paired with employers that require unique sets of abilities and new perspectives, our referrals undergo a thorough and multi-stage evaluation. We facilitate a seamless injection of exciting new talent into your existing teams, giving managers the opportunity to observe chosen candidates in action prior to committing to a hiring decision, enabling you to make an informed choice.</p>
        
      </div>

      <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
        <div className="absolute inset-0">
          <img src={img2} className="h-full w-full object-cover object-left-top" alt="" />
        </div>
      </div> 
    </div>
    <div className="flex rounded-md border border-slate-200 dark:bg-black">
      <div className="flex-1 p-10">
        <h3 className="text-xl font-medium text-gray-700">On-going support</h3>
        <p className="mt-2 text-slate-500">We don't dump talents with hiring partners, we remain committed to the progress of each candidate by providing ongoing support in the form of check-ins and advice</p>
       
      </div>

    <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
        <div className="absolute inset-0">
          <img src={img1} className="h-full w-full object-cover object-left-top" alt="" />
        </div>
      </div> 
    </div>
    <div className="flex rounded-md border border-slate-200 dark:bg-black">
      <div className="flex-1 p-10">
        <h3 className="text-xl font-medium text-gray-700">Exclusive talent</h3>
        <p className="mt-2 text-slate-500">Get access to exclusive net-new talent, without the hassle of headhunting. This model is also scalable to grow with your business needs</p>
       
      </div>

      <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
        <div className="absolute inset-0">
          <img src={img2} className="h-full w-full object-cover object-left-top" alt="" />
        </div>
      </div> 
    </div>
  </div>
</div>
   
    </div>
        
   
    </>
  )
}

export default Home