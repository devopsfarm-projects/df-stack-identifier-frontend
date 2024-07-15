import Linux from "./images/Linux.png";
import Docker from "./images/docker.webp";
import Python from "./images/Python.webp";
import Github from "./images/Github.png";
import Terraform from "./images/Terraform.png";
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
  { src: Linux, alt: "Linux", name: "Linux" },
  { src: Docker, alt: "Docker", name: "Docker" },
  { src: Python, alt: "Python", name: "Python" },
  { src: Github, alt: "Github", name: "GitHub" },
  { src: Terraform, alt: "Terraform", name: "Terraform" },
  { src: Kubernetes, alt: "Kubernetes", name: "Kubernetes" },
  { src: Java, alt: "Java", name: "Java" },
  { src: ChatGPT, alt: "ChatGPT", name: "ChatGPT" },
  { src: Ansible, alt: "Ansible", name: "Ansible" },
  { src: AWS, alt: "AWS", name: "AWS" },
  { src: Jenkins, alt: "Jenkins", name: "Jenkins" , to: "/jenkins" },
  { src: MySQL, alt: "MySQL", name: "MySQL" },
];

function LearningPath() {
  return (
    <div id="team" className="section relative pt-20 pb-8 md:pt-16 dark:text-white bg-white dark:bg-black">

      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12">
          <h2 className="text-2xl leading-normal mb-2 pt-20 font-bold text-gray-800 dark:text-gray-100">
            <span className="font-light">Our</span> Tools
          </h2>
        </header>

        <div className="flex flex-wrap flex-row -mx-4 justify-center">
          {tools.map((tool, index) => (
            <div key={tool.name} className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
              <div
                className="relative overflow-hidden bg-white dark:bg-black mb-12 hover:grayscale-0 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay={`${index * 0.1}s`}
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationName: "fadeInUp",
                  animationDelay: `${index * 0.1}s`,
                }}
              >
               <div className="relative overflow-hidden px-6">
                  <Link to={tool.to}><img
                    src={tool.src}
                    className="w-32 h-32 object-contain max-w-full mx-auto rounded-full cursor-pointer image-hover"
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
