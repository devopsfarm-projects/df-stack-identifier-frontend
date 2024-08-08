import Linux from "./images/linux1.png";
import Docker from "./images/docker.webp";
import Python from "./images/Python.webp";
import Github from "./images/Github.png";
import Terraform from "./images/Frame.png";
import Kubernetes from "./images/Kubernetes.webp";
import Java from "./images/Java.png";
import ChatGPT from "./images/ChatGPT.webp";
import Ansible from "./images/Ansible.png";
import AWS from "./images/AWS.webp";
import Jenkins from "./images/Jenkins.png";
import MySQL from "./images/MySQL.png";
import './Learning.css'
import { Link } from "react-router-dom";
const tools = [
  { src: Linux, alt: "Linux", name: "Linux" , to: "/Linux" },
  { src: Docker, alt: "Docker", name: "Docker" , to: "/Docker" },
  { src: Python, alt: "Python", name: "Python" , to: "/Python" },
  { src: Github, alt: "Github", name: "GitHub" , to: "/GitHub" },
  { src: Terraform, alt: "Terraform", name: "Terraform" , to: "/Terraform" },
  { src: Kubernetes, alt: "Kubernetes", name: "Kubernetes" , to: "/Kubernetes" },
  { src: Java, alt: "Java", name: "Java" , to: "/Java" },
  { src: ChatGPT, alt: "ChatGPT", name: "ChatGPT" , to: "/ChatGPT" },
  { src: Ansible, alt: "Ansible", name: "Ansible" , to: "/Ansible" },
  { src: AWS, alt: "AWS", name: "AWS" , to: "/AWS" },
  { src: Jenkins, alt: "Jenkins", name: "Jenkins" , to: "/jenkins" },
  { src: MySQL, alt: "MySQL", name: "MySQL" , to: "/MySQL" },
];

function LearningPath() {
  return (
    <div id="team" className="section relative pt-20 pb-8 md:pt-16 dark:text-white bg-white dark:bg-clip-bg  dark:bg-transparent dark:bg-logo-gradient">
      <div className="flex flex-col items-center mt-10">
      <div className="relative w-36 text-center text-2xl  bg-gradient-to-r from-blue-400 rounded-2xl-t to-blue-600 text-white  py-2 px-4 rounded-t-md">
        SUMMER
      </div>
      <div className="relative w-36 border text-center dordder-white bg-gray-900 text-gradient-to-tr from-[#ffffff] to-[#0400ff]  py-2 px-4">
        LEARNING
      </div>
      <div className="relative bg-blue-600 text-white  px-3 rounded-b-md">
        SALE!
      </div>
    </div>
      <div className="container xl:max-w-6xl mx-auto px-4">
        
      <div className="text-center mb-8 mt-8">
        <h2 className="text-4xl font-medium ">Master <spen className="bg-clip-text bg-gradient-to-tr from-[#ffffff] to-[#0400ff]">DevOps</spen></h2>
        <p className="text-xl font-medium text-gray-500  mt-4">Save Up to 45% OFF</p>
      </div>

        <div className="flex flex-wrap flex-row -mx-4 justify-center">
          {tools.map((tool, index) => (
            <div key={tool.name} className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
              <div
                className="relative overflow-hidden bg-white rounded-2xl text-black  mb-12 hover:grayscale-0 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay={`${index * 0.1}s`}
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationName: "fadeInUp",
                  animationDelay: `${index * 0.1}s`,
                }}
              >
               <div className="relative overflow-hidden px-6 mt-3">
                  <Link to={tool.to}><img
                    src={tool.src}
                    className="w-32 h-32 object-contain max-w-full  mx-auto cursor-pointer image-hover"
                    alt={tool.alt}
                  /></Link>
                </div>
                 <div className="pt-6 text-center">
                  <p className="text-lg leading-normal font-bold mb-1">{tool.name}</p>
                </div> 
              </div>
            </div>
          ))}
        </div>
      </div>

    

</div>

   
  );
}

export default LearningPath;
