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
import Marquee from "react-fast-marquee";
import { useState, useEffect, useRef } from "react";

import { FaRegHandPointRight } from "react-icons/fa6";
import { GrCloudComputer } from "react-icons/gr";
import { GiArtificialIntelligence } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";
import img1 from "../../Image/safe_image.jpg";
import img2 from "../../Image/what-is-your-corporate-image.webp";
import "./Home.css";
import { NavLink } from "react-router-dom";

import { getUserData } from "../../utils/apiUtils";
import Bookshelf from "../bookshelf/Bookshelf";

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
      <div className="transition-all duration-300 flex min-h-screen items-center justify-center  bg-white dark:bg-black font-bold text-black dark:text-white">
        <div className="text-center space-y-12">
          <span className="text-transparent text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text bg-gradient-to-tr from-[#ddf9fd] to-[#0400ff]">
            DevopsFarm
          </span>
          <div className="text-center text-5xl font-bold">
          Training Offered
            <div className="relative inline-grid grid-cols-1 grid-rows-1 ml-2 gap-12 overflow-hidden text-orange-400 ">
              <span className="animate-word col-span-full row-span-full  ">
                GITHUB
              </span>
              <span className="animate-word-delay-1 col-span-full row-span-full ">
                AWS
              </span>
              <span className="animate-word-delay-2 col-span-full row-span-full ">
                DOCKER
              </span>
              <span className="animate-word-delay-3 col-span-full row-span-full ">
                JAVA
              </span>
              <span className="animate-word-delay-4 col-span-full row-span-full ">
                JENKINS
              </span>
            </div>
          </div>
          {/* {userData ? null : (
            <p className="text-black dark:text-white animate-bounce md:animate-none">
              Want to me for <NavLink to="/login">GITHUB? Ping me</NavLink>
            </p>
          )} */}
        </div>
      </div>




      <div className="pt-16 transition duration-500  text-center dark:bg-black text-black dark:text-white  z-10">
        <div className="  days text-5xl font-semibold  dark:border-white pb-8">
           FREE DEMO & CAREER GUIDANCE 
        </div>
        <Bookshelf/>
        <h4 className="pt-20 text-lg">Why Internship?</h4>
        <p className="py-10 px-20 text-2xl">
          Work experience is crucial, yet securing a job can pose challenges. To
          get a job, you need experience, but to get experience you need a job.
          The answer? Internships. Find global work experience in any field or
          region with Devops through our placement partners
        </p>


        </div>


      <section className="text-black dark:bg-black dark:text-white body-font">
        
  <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
    
    <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font tracking-wide sm:text-3xl md:text-6xl xl:text-7xl mb-4 font-bold ">Guaranteed Remote Internship Placements
      </h1>
      <p className="mb-8 leading-relaxed opacity-50 ">Devops Learning partners with companies to offer straightforward internships, and enable job seekers to gain industry experience</p>
      <div className="flex justify-center">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 1144 637"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>working remotely</title>
                    <path
                        d="M1172,547.81a180.56,180.56,0,0,1-26.12,93.88c0,34.62-16.14,66-42.32,88.87a144.74,144.74,0,0,1-21.08,15.28c-.3.19-.61.37-.92.55-.56.33-1.12.66-1.69,1l-.53.31h0c-2.39,1.35-4.83,2.65-7.32,3.87a165.67,165.67,0,0,1-73.76,17H245.17q-9,0-17.84-.72a211.15,211.15,0,0,1-61.06-14.14q-5.72-2.26-11.22-4.86-2.62-1.23-5.19-2.53c-1.07-.54-2.14-1.1-3.2-1.66A190.5,190.5,0,0,1,128,733.32a183.89,183.89,0,0,1-15.8-12.12C78.17,692,57.12,651.59,57.12,607A180.5,180.5,0,0,1,28,508.32c0-99.14,79.24-179.51,177-179.51,3,0,6,.09,9,.25.43,0,.85,0,1.28.06,16.48-28.09,38.51-53.9,65-76.62,72.24-61.9,177.82-100.92,295.43-100.92,98.82,0,189.15,27.55,258.34,73.07A174.18,174.18,0,0,1,920,202.1c97.74,0,177,80.37,177,179.51a184.9,184.9,0,0,1-1,18.78A180,180,0,0,1,1172,547.81Z"
                        transform="translate(-28 -131.5)" fill="#24ffaf" opacity="0.1" />
                    <path
                        d="M938.69,405.47V394.74a39.05,39.05,0,1,0-29.38,0v10.73A55,55,0,0,0,883.77,421a55.08,55.08,0,0,0-31.08-22.52V387.74a39.05,39.05,0,1,0-29.38,0v10.73a55,55,0,0,0-23.21,13.16,55.08,55.08,0,0,0-29.41-20.16V380.74a39.05,39.05,0,1,0-29.38,0v10.73a55,55,0,0,0-26,16.06,55.09,55.09,0,0,0-36.57-33.06V363.74a39.05,39.05,0,1,0-29.38,0v10.73a55,55,0,0,0-40,47.77,54.62,54.62,0,0,0-16.57-7.77V403.74a39.05,39.05,0,1,0-29.38,0v10.73a55.18,55.18,0,0,0-34.66,28.7,54.58,54.58,0,0,0-15-6.7V425.74a39.05,39.05,0,1,0-29.38,0v10.73a54.29,54.29,0,0,0-14.21,6.22,55.14,55.14,0,0,0-34.41-28.22V403.74a39.05,39.05,0,1,0-29.38,0v10.73a55.1,55.1,0,0,0-35.87,31.36,55,55,0,0,0-18.75-9.36V425.74a39.05,39.05,0,1,0-29.38,0v10.73a55,55,0,0,0-40.31,53v248H392v-22h52v22H554v-22h79v-40h68v17h82v7h86v7H979v-248A55,55,0,0,0,938.69,405.47Z"
                        transform="translate(-28 -131.5)" fill="#24ffaf" opacity="0.1" />
                    <path
                        d="M490.78,169h91.43A170.28,170.28,0,0,1,752.5,339.28V570a0,0,0,0,1,0,0h-432a0,0,0,0,1,0,0V339.28A170.28,170.28,0,0,1,490.78,169Z"
                        fill="#2f2e41" />
                    <path
                        d="M500.78,178.28h71.43A170.28,170.28,0,0,1,742.5,348.56V560.71a0,0,0,0,1,0,0h-412a0,0,0,0,1,0,0V348.56A170.28,170.28,0,0,1,500.78,178.28Z"
                        opacity="0.2" />
                    <path
                        d="M1072,734.09v17.46a165.67,165.67,0,0,1-73.76,17H245.17q-9,0-17.84-.72a211.15,211.15,0,0,1-61.06-14.14q-5.72-2.26-11.22-4.86-2.62-1.23-5.19-2.53c-1.07-.54-2.14-1.1-3.2-1.66A190.5,190.5,0,0,1,128,733.32V685.9A28.9,28.9,0,0,1,156.9,657H988.13a28.9,28.9,0,0,1,19,7.17l55,48.2A28.87,28.87,0,0,1,1072,734.09Z"
                        transform="translate(-28 -131.5)" fill="#2f2e41" />
                    <path
                        d="M510.67,357.31q-32.71,2.16-65.17,7c-6.15.92-12.39,1.94-18,4.66a52.8,52.8,0,0,0-11.94,8.56,157.38,157.38,0,0,0-38,51.53c-5.57,12.15-9.57,25-14.82,37.25-18.69,43.75-52.59,79.53-72.32,122.82-4.27,9.37-7.87,19.15-9.3,29.34-1.48,10.54.2,22.84,8.86,29,4,2.83,8.86,4,13.62,5a1641.51,1641.51,0,0,0,181.57,29.65c-6.61-6.38-8.82-16.27-7.95-25.41s4.46-17.78,8-26.25q-51.81-11.43-103.36-24c-5.13-1.25-11.29-3.6-11.92-8.84-.32-2.67,1-5.24,2.3-7.59a407.17,407.17,0,0,1,52.4-74c0,28.06-1.39,59.75-1.39,87.82H747.35a248,248,0,0,1-6.84-48.85C739,501.24,757.1,447.89,752.4,394.24c-.44-4.95-1.12-10.05-3.71-14.29-4.47-7.32-13.39-10.35-21.59-12.85-31.44-9.56-63.54-19.23-96.4-18.48-9.77.23-19.5,1.37-29.21,2.52C571.9,354.63,540.4,355.34,510.67,357.31Z"
                        transform="translate(-28 -131.5)" fill="#24ffaf" />
                    <path
                        d="M358.88,679.82l23.6,75.53a2.36,2.36,0,0,0,2.25,1.65H486l-24-88-101.06,7.77A2.36,2.36,0,0,0,358.88,679.82Z"
                        transform="translate(-28 -131.5)" fill="#656478" />
                    <path
                        d="M532,389.79c-4.4,2.53-9.53,3.44-14.53,4.31l-32.27,5.6c-6.28,1.09-12.89,2.33-17.73,6.48-9.9,8.47-7.76,24.06-4.76,36.74l6,25.44c4.52,19.12,9.14,38.47,18.41,55.79,16.19,30.23,45.89,52,78.55,62.49,11.67,3.75,24,6.19,36.18,4.85,23.86-2.62,44.27-19.63,56.85-40.08s18.57-44.17,24.06-67.55c5.27-22.38,10.28-45.08,9.94-68.08-.1-7.16-.82-14.64-4.64-20.71-8.37-13.33-27.34-14.33-42.89-11.87-2.42.39-4.93.81-7.26.08-7-2.18-7.16-11.79-10.16-18.46-5.67-12.58-22.49-14.81-36.24-13.67s-35.16,2.61-47.14,10.4C532.85,369,545.51,382,532,389.79Z"
                        transform="translate(-28 -131.5)" fill="#fbbebe" />
                    <path
                        d="M532,389.79c-4.4,2.53-9.53,3.44-14.53,4.31l-32.27,5.6c-6.28,1.09-12.89,2.33-17.73,6.48-9.9,8.47-7.76,24.06-4.76,36.74l6,25.44c4.52,19.12,9.14,38.47,18.41,55.79,16.19,30.23,45.89,52,78.55,62.49,11.67,3.75,24,6.19,36.18,4.85,23.86-2.62,44.27-19.63,56.85-40.08s18.57-44.17,24.06-67.55c5.27-22.38,10.28-45.08,9.94-68.08-.1-7.16-.82-14.64-4.64-20.71-8.37-13.33-27.34-14.33-42.89-11.87-2.42.39-4.93.81-7.26.08-7-2.18-7.16-11.79-10.16-18.46-5.67-12.58-22.49-14.81-36.24-13.67s-35.16,2.61-47.14,10.4C532.85,369,545.51,382,532,389.79Z"
                        transform="translate(-28 -131.5)" opacity="0.1" />
                    <path
                        d="M505.29,418.45c4.88,10.24,8.54,21.1,14.44,30.79,4.69,7.7,10.7,14.49,16.68,21.24C551.9,488,567.59,505.66,586.76,519a222.93,222.93,0,0,1,55.37-109c8.26-8.87,18.6-17.61,30.72-17.28,7.52.21,14.46,3.94,20.72,8.09,7,4.63,13.62,10,18.65,16.67,7.95,10.62,11.38,24.07,12,37.32s-1.44,26.47-3.48,39.57l-10.5,67.71c-.61,3.92-1.46,8.25-4.66,10.6a14.67,14.67,0,0,1-6,2.16c-38.17,7.43-77.51,2.61-116.4,2.23-43-.41-87.19,4.49-127.92-9.19-2.13-.72-4.34-1.55-5.78-3.26a12.06,12.06,0,0,1-2-4.31c-9.49-30.72-1.88-63.73,3.75-95.38a748.38,748.38,0,0,0,9.51-75.78c.17-2.29,25.33,2.77,28.14,4.39C496.53,398.07,501.61,410.73,505.29,418.45Z"
                        transform="translate(-28 -131.5)" fill="#24ffaf" />
                    <g opacity="0.2">
                        <path
                            d="M194.87,668.29c0,.46-.05.91-.1,1.35q-5.72-2.26-11.22-4.86a9.1,9.1,0,0,1-5.19-2.53c-1.07-.54-2.14-1.1-3.2-1.66a13.68,13.68,0,0,1,.81-1.46c2.06-3.26,5.19-5.3,8.64-5.19s6.44,2.34,8.29,5.71A16.87,16.87,0,0,1,194.87,668.29Z"
                            transform="translate(-28 -131.5)" fill="#3f3d56" />
                        <path
                            d="M195.41,651.17a16.88,16.88,0,0,1-2.51,8.48c-2.06,3.25-5.19,5.29-8.64,5.18l-.71-.05a9.1,9.1,0,0,1-5.19-2.53,12.53,12.53,0,0,1-2.39-3.12,17.55,17.55,0,0,1,.54-17.12c2.06-3.26,5.19-5.3,8.64-5.19s6.44,2.34,8.29,5.71A16.87,16.87,0,0,1,195.41,651.17Z"
                            transform="translate(-28 -131.5)" fill="#3f3d56" />
                        <ellipse cx="185.25" cy="633.7" rx="14.01" ry="10.7"
                            transform="translate(-481.98 667.38) rotate(-88.19)" fill="#3f3d56" />
                        <ellipse cx="185.79" cy="616.59" rx="14.01" ry="10.7"
                            transform="translate(-464.35 651.34) rotate(-88.19)" fill="#3f3d56" />
                        <ellipse cx="186.33" cy="599.47" rx="14.01" ry="10.7"
                            transform="translate(-446.72 635.3) rotate(-88.19)" fill="#3f3d56" />
                        <path
                            d="M150,481.05a49.66,49.66,0,0,1-3.8-6l28.26-3.73L144,470.6a51.38,51.38,0,0,1,.31-40.64l40.12,22.44-36.75-28.84a51.28,51.28,0,1,1,82.84,60,51.12,51.12,0,0,1,5.55,9.53L199,510.93l39.33-11.83A51.34,51.34,0,0,1,228.53,547,51.28,51.28,0,1,1,148,544.43a51.28,51.28,0,0,1,2-63.38Z"
                            transform="translate(-28 -131.5)" fill="#24ffaf" />
                        <path
                            d="M240.5,515.62a51.06,51.06,0,0,1-12,31.35A51.28,51.28,0,1,1,148,544.43C141.37,535.49,240.68,509.87,240.5,515.62Z"
                            transform="translate(-28 -131.5)" opacity="0.1" />
                    </g>
                    <circle cx="68.02" cy="141.18" r="21.63" fill="#24ffaf" opacity="0.1" />
                    <circle cx="158.17" cy="21.63" r="21.63" fill="#24ffaf" opacity="0.1" />
                    <circle cx="150.84" cy="103.76" r="36.25" fill="#24ffaf" opacity="0.1" />
                    <circle cx="543" cy="185.5" r="84" fill="#fbbebe" />
                    <path
                        d="M536.88,152.17c-22.41,2.84-46.6,6.59-62.44,22.69-8.86,9-14.05,21-18.32,32.88-6.62,18.5-11.55,38-10,57.63,1.38,17.56,7.88,35.52,2.62,52.34-2.42,7.74-7.17,14.5-10.86,21.71-6.84,13.39-10.06,28.4-11.24,43.39-.82,10.31-.66,20.92,2.73,30.69,3.61,10.4,10.65,19.25,15.11,29.31,6.6,14.86,7.26,31.58,7.77,47.83s.94,32.39,1.32,48.58c.24,10.18.26,21.08-5.37,29.57,20.79-8.33,41.87-16.83,59.66-30.43s32.19-33.21,34.49-55.49c1.86-18.06-4.24-35.86-9.5-53.24-13-43-21.4-88.84-11.94-132.75,3.41-15.81,11.7-33.46,27.61-36.37,9.71-1.77,19.4,2.66,28.15,7.24,20.68,10.82,42,24.82,49.7,46.85,7,19.92,1.11,42.11-8,61.13s-21.51,36.51-28.59,56.39c-10.87,30.5-7.81,66.21,10.25,93.08s51.43,43.4,83.52,39.06c-2.51-10.84-10.38-19.6-14.6-29.9-7.67-18.71-2.5-40.23,5.75-58.69S694.21,440,699.37,420.4c3.64-13.8,4.08-28.22,4.06-42.49,0-22.46-1.11-44.93-3.27-67.29s-5.46-45-12.58-66.51c-5.72-17.25-14.05-33.93-26.51-47.16-13.26-14.09-30.52-23.64-47.47-33-10.14-5.58-20.5-11.23-31.88-13.32-9-1.65-18.46-4-27.64-4.15C547.84,146.39,541.28,147.74,536.88,152.17Z"
                        transform="translate(-28 -131.5)" fill="#434175" />
                    <rect x="624.01" y="254.09" width="60.85" height="141.74" rx="2.9"
                        transform="translate(45.9 -250.24) rotate(10.98)" fill="#656478" />
                    <rect x="628.09" y="254.88" width="60.85" height="141.74" rx="2.9"
                        transform="translate(46.13 -251) rotate(10.98)" fill="#3f3d56" />
                    <ellipse cx="666.17" cy="286.29" rx="10.05" ry="4.15"
                        transform="translate(230.2 754.21) rotate(-79.02)" fill="#24ffaf" />
                    <path
                        d="M683,332.5c-2.64-4.67-5.46-9.5-9.91-12.49a35,35,0,0,0-8.18-3.67c-9.69-3.39-19.54-6.81-29.79-7.35-1.67-.08-3.58,0-4.67,1.28-2.24,2.63,1.31,6.21,4.38,7.8l24.42,12.65-22.51-2.38c-3.27-.35-7.93.54-7.69,3.82.16,2.15,2.52,3.32,4.56,4,14.45,5,31.15,8.92,39.06,22-10.54-1-21.31-2-31.64.32-2.83.64-5.76,1.63-7.61,3.86s-2.06,6,.27,7.77c1.44,1.07,3.38,1.1,5.18,1,7.33-.35,14.85-1.81,21.89.28s13.29,9.47,10.86,16.39c6.24.56,13.62,0,19.39-2.69,6.36-3,6.21-8.64,5.82-15.44C696,356.33,689.39,343.9,683,332.5Z"
                        transform="translate(-28 -131.5)" fill="#fbbebe" />
                    <path
                        d="M676.69,550.49a1125.21,1125.21,0,0,0-23-116.92c-5-20-10.68-40.34-9.25-60.92,20.66,2.63,39.17,4.58,58.21-3.86.31,10.81,8.15,20,11,30.45,1.91,7,1.19,14.41,1.94,21.62s3,14.2,4.93,21.21a260.23,260.23,0,0,1,6.63,106.74C709.48,550.91,694.32,553.22,676.69,550.49Z"
                        transform="translate(-28 -131.5)" opacity="0.1" />
                    <path
                        d="M673.69,550.49a1125.21,1125.21,0,0,0-23-116.92c-5-20-10.68-40.34-9.25-60.92,20.66,2.63,39.17,4.58,58.21-3.86.31,10.81,8.15,20,11,30.45,1.91,7,1.19,14.41,1.94,21.62s3,14.2,4.93,21.21a260.23,260.23,0,0,1,6.63,106.74C706.48,550.91,691.32,553.22,673.69,550.49Z"
                        transform="translate(-28 -131.5)" fill="#24ffaf" />
                    <path
                        d="M384.63,745.27l9.79-242.87a14.86,14.86,0,0,1,15-14.26l386.52,3.7A14.86,14.86,0,0,1,810.59,508L790.17,740.67a14.86,14.86,0,0,1-14.55,13.56l-375.88,6.5A14.87,14.87,0,0,1,384.63,745.27Z"
                        transform="translate(-28 -131.5)" fill="#3f3d56" />
                    <ellipse cx="572.5" cy="467" rx="17" ry="20" fill="#24ffaf" />
                    <path d="M964,584.76l-.8,6.86-13,110.86c-33.89,23.63-60.25.92-60.48,0L873.34,591.1l-.93-6.34Z"
                        transform="translate(-28 -131.5)" fill="#3f3d56" />
                    <path d="M964,584.76l-.8,6.86c-38.18,22.2-78.91,4.92-89.86-.52l-.93-6.34Z"
                        transform="translate(-28 -131.5)" opacity="0.1" />
                    <path d="M870.5,578.74v10s50.5,29.36,96,0v-10Z" transform="translate(-28 -131.5)" fill="#24ffaf" />
                    <path d="M876.37,565.53s-1.47,6.75-5.87,7.34v8.51h96v-7.63s-5.87-1.47-5-8.22Z"
                        transform="translate(-28 -131.5)" fill="#24ffaf" />
                    <ellipse cx="890.21" cy="434.76" rx="43.3" ry="12.48" fill="#24ffaf" />
                    <ellipse cx="890.21" cy="434.76" rx="43.3" ry="12.48" opacity="0.1" />
                    <path
                        d="M956.22,565.53c0,5-16.42,9.1-36.69,9.1h-1.08c-13.61-.1-25.37-2-31.37-4.84-2.71-1.28-4.25-2.73-4.25-4.26,0-2.54,4.2-4.84,11-6.49a113.49,113.49,0,0,1,25.73-2.61C939.8,556.43,956.22,560.5,956.22,565.53Z"
                        transform="translate(-28 -131.5)" opacity="0.1" />
                    <path d="M918.45,574.63c-13.61-.1-25.37-2-31.37-4.84h0L893.8,559Z" transform="translate(-28 -131.5)"
                        opacity="0.1" />
                    <path
                        d="M880.1,566.23c-.52-.11-1.21.07-1.31.59a1.27,1.27,0,0,0,.2.75,10.67,10.67,0,0,0,4.78,4.09,2.85,2.85,0,0,0,1.09.35,1,1,0,0,0,1-.52,1.13,1.13,0,0,0-.07-.93,4.13,4.13,0,0,0-1.24-1.36C883.21,568.15,881.84,566.52,880.1,566.23Z"
                        transform="translate(-28 -131.5)" opacity="0.1" />
                    <circle cx="891.67" cy="515.79" r="25.83" fill="#24ffaf" />
                    <path
                        d="M188.33,515.85h12.11a25,25,0,0,1,25,25V578a0,0,0,0,1,0,0H163.33a0,0,0,0,1,0,0V540.85A25,25,0,0,1,188.33,515.85Z"
                        fill="#3f3d56" />
                    <path
                        d="M188.33,515.85h12.11a25,25,0,0,1,25,25V578a0,0,0,0,1,0,0H163.33a0,0,0,0,1,0,0V540.85A25,25,0,0,1,188.33,515.85Z"
                        opacity="0.1" />
                    <circle cx="191.9" cy="524.55" r="4.97" fill="#3f3d56" />
                    <circle cx="191.9" cy="518.34" r="4.97" fill="#3f3d56" />
                    <circle cx="191.9" cy="512.12" r="4.97" fill="#3f3d56" />
                    <circle cx="191.9" cy="505.91" r="4.97" fill="#3f3d56" />
                    <circle cx="191.9" cy="499.7" r="4.97" fill="#3f3d56" />
                    <circle cx="191.9" cy="493.49" r="4.97" fill="#3f3d56" />
                    <circle cx="191.9" cy="487.28" r="4.97" fill="#3f3d56" />
                    <circle cx="199.36" cy="489.76" r="4.97" fill="#3f3d56" />
                    <circle cx="204.33" cy="487.28" r="4.97" fill="#3f3d56" />
                    <circle cx="209.3" cy="484.79" r="4.97" fill="#3f3d56" />
                    <circle cx="191.9" cy="481.07" r="4.97" fill="#3f3d56" />
                    <circle cx="191.9" cy="474.86" r="4.97" fill="#3f3d56" />
                    <circle cx="191.9" cy="468.64" r="4.97" fill="#3f3d56" />
                    <circle cx="191.9" cy="462.43" r="4.97" fill="#3f3d56" />
                    <path
                        d="M240.5,577.91c-1.23.18-2.47.31-3.71.39A28.56,28.56,0,0,0,240,575a21.22,21.22,0,0,0-3-5.83,10.22,10.22,0,0,1-4,1.26c-1.23.18-2.47.31-3.71.4,1.63-1.33,3.15-3.33,4.75-5a21.09,21.09,0,1,0,6.61,12Z"
                        transform="translate(-28 -131.5)" fill="#24ffaf" />
                    <path
                        d="M257.11,602.6a9.68,9.68,0,0,1-4.18,1.39c-1.23.18-2.47.32-3.71.4a36.4,36.4,0,0,0,3.68-3.82,12.44,12.44,0,1,0,4.21,2Z"
                        transform="translate(-28 -131.5)" fill="#24ffaf" />
                    <circle cx="184.45" cy="489.76" r="4.97" fill="#3f3d56" />
                    <circle cx="179.48" cy="487.28" r="4.97" fill="#3f3d56" />
                    <circle cx="174.51" cy="484.79" r="4.97" fill="#3f3d56" />
                    <path
                        d="M182.7,602.6a9.64,9.64,0,0,0,4.18,1.39c1.23.18,2.47.32,3.71.4a35.42,35.42,0,0,1-3.68-3.82,12.44,12.44,0,1,1-4.21,2Z"
                        transform="translate(-28 -131.5)" fill="#24ffaf" />
                    <path
                        d="M188.33,519.58h12.11a25,25,0,0,1,25,25v32.87a4.24,4.24,0,0,1-4.24,4.24H167.57a4.24,4.24,0,0,1-4.24-4.24V544.58a25,25,0,0,1,25-25Z"
                        fill="#3f3d56" />
                    <g opacity="0.1">
                        <path
                            d="M240.88,579.27a18.83,18.83,0,0,1-1.6,1.52c.57,0,1.13-.09,1.7-.15C241,580.18,240.93,579.72,240.88,579.27Z"
                            transform="translate(-28 -131.5)" />
                        <path
                            d="M231.82,573.33c1.25-.08,2.48-.21,3.72-.39a12,12,0,0,0,3.23-.88,21.28,21.28,0,0,0-1.74-2.87,7.52,7.52,0,0,1-2,.85A28.79,28.79,0,0,1,231.82,573.33Z"
                            transform="translate(-28 -131.5)" />
                        <path
                            d="M201.27,584a21.08,21.08,0,0,1,32.5-17.76l.32-.34a21.1,21.1,0,1,0-27.82,31.73A21,21,0,0,1,201.27,584Z"
                            transform="translate(-28 -131.5)" />
                    </g>
                    <g opacity="0.1">
                        <path
                            d="M249.22,606.87c1.24-.08,2.48-.21,3.71-.39a9.7,9.7,0,0,0,4.18-1.4,12.43,12.43,0,0,1,5,8.8,11.38,11.38,0,0,0,.07-1.31,12.38,12.38,0,0,0-5-10,9.68,9.68,0,0,1-4.18,1.39l-1,.13A25.37,25.37,0,0,1,249.22,606.87Z"
                            transform="translate(-28 -131.5)" />
                        <path
                            d="M249.72,602.63a10.19,10.19,0,0,1,1.24.09c.65-.69,1.29-1.43,1.94-2.15a12.4,12.4,0,0,0-15.6,12c0,.42,0,.83.06,1.24A12.42,12.42,0,0,1,249.72,602.63Z"
                            transform="translate(-28 -131.5)" />
                    </g>
                    <g opacity="0.1">
                        <path
                            d="M190.59,606.87c-1.24-.08-2.48-.21-3.71-.39a9.65,9.65,0,0,1-4.18-1.4,12.43,12.43,0,0,0-5,8.8,11.38,11.38,0,0,1-.07-1.31,12.38,12.38,0,0,1,5-10,9.64,9.64,0,0,0,4.18,1.39l1,.13A23.67,23.67,0,0,0,190.59,606.87Z"
                            transform="translate(-28 -131.5)" />
                        <path
                            d="M190.09,602.63a10.36,10.36,0,0,0-1.25.09c-.64-.69-1.28-1.43-1.93-2.15a12.4,12.4,0,0,1,15.6,12c0,.42,0,.83-.06,1.24A12.42,12.42,0,0,0,190.09,602.63Z"
                            transform="translate(-28 -131.5)" />
                    </g>
                </svg>
    
      </div>
    </div>
    <div  id="pattern" className="w-32 sm:w-40 lg:max-w-xl lg:w-full md:w-32 xl:w-5/6 bg-contain bg-no-repeat md:ml-40 xl:mr-16">
      <div className="w-full flex gap-3 justify-center ">
      <FaLinux className="  h-36 w-36 mx-12 cursor-pointer my-10 icon duration-300 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100" />
      <FaAws className="  h-36 w-36 mx-12 cursor-pointer my-10 icon duration-300 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100" />
             </div>
       <div className="w-full h- flex gap-2 justify-center items-center my-2">
       <FaGithub className="  h-36 w-36 mx-12 cursor-pointer my-10 icon duration-300 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100" />
            <FaDatabase className="  h-36 w-36 mx-12 cursor-pointer my-10 icon duration-300 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100" />
            <FaDocker className="  h-36 w-36 mx-12 cursor-pointer my-10 icon duration-300 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100" />
             
              </div>
           <div className="w-full flex gap-3 justify-center">
           <FaJava className="  h-36 w-36 mx-12 cursor-pointer my-10 icon duration-300 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100" />
            <FaJenkins className="  h-36 w-36 mx-12 cursor-pointer my-10 icon duration-300 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100" />
            <FaPython className="  h-36 w-36 mx-12 cursor-pointer my-10 icon duration-300 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100" />
            </div>
           <div className="w-full flex gap-3 justify-center my-2">

           <BiLogoKubernetes className="  h-36 w-36 mx-12 cursor-pointer my-10 icon duration-300 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100" />
            <SiTerraform className="  h-36 w-36 mx-12 cursor-pointer my-10 icon duration-300 hover:text-red-800 dark:hover:text-red-800 text-black dark:text-gray-100" />
            </div>
      </div>
  </div>
</section>





      <div className="  justify-center dark:bg-black dark:text-white   ">
        <div className="  overflow-auto">
          <div className="dv top-0 flex flex-wrap justify-center items-center py-4">
            <div className="dv-1 w-80 mx-4 my-4 hover:scale-105 transition-all duration-300">
              <h1 className="text-xl font-semibold mb-4">
                <GiBrain className="w-8 h-8" />
                DEVOPS
              </h1>
              <p className="">
                DevOps: Bridging Development and Operations. Learn the art of
                seamless collaboration, automation, and continuous delivery to
                accelerate software development and enhance efficiency.
              </p>
            </div>
            <div className="dv-1 w-80 mx-4 my-4 hover:scale-105 transition-all duration-300">
              <h1 className="text-xl font-semibold mb-4">
                <GrCloudComputer className="w-8 h-8" />
                CLOUD & INFRASTRUCTURE
              </h1>
              <p className="">
                Explore the Cloud: Unleash the Power of Scalable Infrastructure.
                Discover the world of cloud computing and infrastructure, where
                flexibility, cost-efficiency, and reliability combine to
                revolutionize the way businesses operate and innovate.
              </p>
            </div>
            <div className="dv-1 w-80 mx-4 my-4 hover:scale-105 transition-all duration-300">
              <h1 className="text-xl font-semibold mb-4">
                <GiArtificialIntelligence className="w-8 h-8" />
                CHATGPT & AI
              </h1>
              <p className="">
                Discover the world of Artificial Intelligence and ChatGPT. Dive
                into the fundamentals of AI, explore the capabilities of
                ChatGPT, and learn how these technologies are shaping our world.
              </p>
            </div>
          </div>


      
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
                            <a href="http://192.168.4.146/spinksindia/industry" aria-label=""
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

      <div
        className="max-w-lg dark:bg-black  px-4 sm:pt-24 pt-12 sm:pb-8 mx-auto text-left md:max-w-none md:text-center"
      >
        <div className='text-center py-4 hidden sm:block'>
          <button className="bg-white  border border-[#E2E8F0] hover:bg-neutral-200 text-xs font-bold py-2.5 px-4 rounded-full inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill='#00acee' width="16" height="16" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
            &nbsp; &nbsp;<span> Follow on Twitter </span>
          </button>
        </div>

        
        <h1
          className="font-extrabold leading-10 tracking-tight dark:text-white text-[#201515] text-center sm:leading-none text-5xl sm:text-9xl"
        >
          <span className="inline md:block text-transparent  font-bold bg-clip-text bg-gradient-to-tr from-[#a2fffa] to-[#0004ff]">BuildinG Good </span>
          <span
            className="relative mt-2 bg-clip-text text-red-500 md:inline-block animate-bounce"
          >Software.</span>
        </h1>
      </div>


      <div
        className="max-w-lg px-4 pb-24 mx-auto text-left md:max-w-none md:text-center dark:bg-black "
      >
        <div className='text-center py-4 space-x-4 '>

          <button className="backdrop-blur-sm transition duration-500 ease-in-out bg-[#FF4F01] border border-[#E2E8F0] translate-y-1 text-white  hover:bg-neutral-200 text-lg font-semibold py-3 px-6 rounded-3xl inline-flex items-center">
            <span> Build Your Custom App</span>
          </button>

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
              <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                <div className="max-w-xl text-center lg:text-left">
                  <div>

                    <p className="text-3xl font-semibold tracking-tight text-[#201515] dark:text-white sm:text-5xl">
                      Space Management Software
                    </p>
                    <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600 dark:text-white">
                      Use this paragraph to share information about your company or products. Make it engaging and interesting, and showcase your brand's personality. Thanks for visiting our website!
                    </p>
                  </div>
                  <div className="flex justify-center gap-3 mt-10 lg:justify-start">
                    <a className="inline-flex items-center justify-center text-sm font-semibold dark:text-white text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600" href="#">
                      <span> Read more &nbsp; → </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="order-first block w-full mt-12 aspect-square lg:mt-0 ">
                <img className="object-cover rounded-3xl object-center w-full mx-auto bg-gray-300 lg:ml-auto " alt="hero" src="https://i.pinimg.com/originals/2e/2b/21/2e2b21aeed393403d4620367f9e093f9.gif" />
              </div>
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
