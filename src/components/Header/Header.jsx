import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getUserData } from "../../utils/apiUtils";
import {
  FaSun, FaMoon, FaHome, FaPython, FaGithub, FaAws, FaJenkins, FaYoutube, FaWhatsapp,
} from "react-icons/fa";
import {
  FcAbout, FcLinux
} from "react-icons/fc";
import {
  MdConnectWithoutContact
} from "react-icons/md";
import {
  PiFolderSimpleUserBold
} from "react-icons/pi";
import {
  GrDocker
} from "react-icons/gr";
import {
  SiTerraform, SiKubernetes, SiAnsible
} from "react-icons/si";
import {
  DiJava
} from "react-icons/di";
import {
  RiOpenaiFill
} from "react-icons/ri";
import {
  TbBrandMysql, TbArticle
} from "react-icons/tb";
import {
  GiTeacher
} from "react-icons/gi";
import Sidebar from "../Sidebar/Sidebar";
import logo from "../../logo/devopsfarm-logo-1500x1500 (1).png";
import './Header.css';

function Header() {
  const [userData, setUserData] = useState(null);
  const [theme, setTheme] = useState("dark");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
          const data = await getUserData();
          setUserData(data);
        }
      } catch (error) {
        console.error("Error occurred in Header useEffect:", error);
      }
    };

    fetchData();

    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
  };

  const navLinkClasses = isActive =>
    `transition-all duration-300 flex items-center text-2xl ${
      isActive
        ? "text-red-600 hover:text-gray-400"
        : "text-gray-500 dark:text-white hover:text-gray-400"
    }`;

  return (
    <>
      <div className="fixed-div opacity-80">
        <header className="transition-all duration-300 py-4 pr-6 border-b fixed top-0 left-0 right-0 bg-white dark:bg-clip-bg dark:bg-transparent dark:bg-logo-gradient flex items-center justify-between">
          <div className="flex md:hidden">
            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            <main className="transition-all duration-300 flex flex-col items-center justify-center flex-1">
              {!isSidebarOpen && (
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className="fixed pt-1 dark:text-white dark:bg-clip-bg dark:bg-transparent dark:bg-logo-gradient rounded-lg top-5 left-5 z-50 md:hidden"
                >
                  <TbArticle size={30} />
                </button>
              )}
            </main>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <Link to="/"><img src={logo} className="w-14 ml-4 md:ml-14 md:mr-2" alt="Logo" /></Link>
          </div>
          <nav className="md:flex gap-6 hidden">
          <div className="dropdown relative">
  <NavLink to="/LearningPath" className="dark:text-white mt-2 text-gray-500 transition-all duration-300 flex items-center text-2xl">
    DevOps Tools
  </NavLink>
  <div className="transition-all duration-300 dropdown-content absolute hidden text-black dark:text-white bg-white dark:bg-gray-900 shadow-lg rounded-lg mt-2 py-2">
    <div className="p-4">
      {[
        { href: "https://www.devopsfarm.in/linux.html", icon: FcLinux, label: "Linux" },
        { href: "/Docker", icon: GrDocker, label: "Docker" },
        { href: "/Python", icon: FaPython, label: "Python" },
        { href: "/GitHub", icon: FaGithub, label: "GitHub" },
        { href: "/Terraform", icon: SiTerraform, label: "Terraform" },
        { href: "/Kubernetes", icon: SiKubernetes, label: "Kubernetes" },
        { href: "/Java", icon: DiJava, label: "Java" },
        { href: "/ChatGPT", icon: RiOpenaiFill, label: "ChatGPT" },
        { href: "/Ansible", icon: SiAnsible, label: "Ansible" },
        { href: "/AWS", icon: FaAws, label: "AWS" },
        { href: "/Jenkins", icon: FaJenkins, label: "Jenkins", isNavLink: true },
        { href: "/MySQL", icon: TbBrandMysql, label: "MySQL" },
      ].map(({ href, icon: Icon, label, isNavLink }, idx) => (
        isNavLink ? (
          <NavLink key={idx} to={href} className="dropdown-item flex items-center p-2">
            <Icon className="mr-2" /> {label}
          </NavLink>
        ) : (
          <a key={idx} href={href} className="dropdown-item flex items-center p-2">
            <Icon className="mr-2" /> {label}
          </a>
        )
      ))}
    </div>
  </div>
</div>



            <NavLink to="/about" className={({ isActive }) => navLinkClasses(isActive)}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => navLinkClasses(isActive)}>
              Contact
            </NavLink>
            <NavLink to="/blogs" className={({ isActive }) => navLinkClasses(isActive)}>
              Blogs
            </NavLink>
            <a
              href="https://api.whatsapp.com/send/?phone=919971566583&text&type=phone_number&app_absent=0"
              target="blank"
              className="px-4 py-2 text-lg text-black dark:text-white bg-transparent border-2 dark:border-white border-black rounded-full text-center no-underline inline-block transition duration-300 dark:hover:bg-green-500 hover:bg-green-500 hover:text-white hover:border-green-500"
            >
              Connect On WhatsApp
            </a>
            {userData && (
              <NavLink to="/userdata" className={({ isActive }) => navLinkClasses(isActive)}>
                <PiFolderSimpleUserBold className="mr-1" />
                RepoScanner
              </NavLink>
            )}
          </nav>
          {userData && (
            <div className="flex items-center">
              <img src={userData.data.data?.avatar_url} className="w-8 h-8 rounded-full border-2 border-gray-300" alt="Avatar" />
              <p className="ml-2 text-2xl font-medium dark:text-white">{userData.data.data?.login}</p>
            </div>
          )}
        </header>
      </div>
      <button
        onClick={handleThemeSwitch}
        className="fixed bottom-5 right-5 flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 dark:text-white shadow-lg"
      >
        {theme === "dark" ? <FaSun size={24} /> : <FaMoon size={24} />}
      </button>
      <a
        href="https://api.whatsapp.com/send/?phone=919971566583&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 left-5 flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg"
      >
        <FaWhatsapp size={24} />
      </a>
    </>
  );
}

export default Header;
