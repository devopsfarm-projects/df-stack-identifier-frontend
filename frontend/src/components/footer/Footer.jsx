import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GrMultimedia } from "react-icons/gr";
import { TbBrandAppgallery } from "react-icons/tb";
import { MdConnectWithoutContact } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
function Footer() {
  return (
    <footer className="transition-all duration-300 flex flex-col space-y-10 justify-center border-t border-gray-600 bg-white text-black dark:bg-black dark:text-white py-4" style={{ borderBottom: '1px solid #666' }}>

<nav className="flex justify-center flex-wrap gap-6 font-medium">
    <a className="transition-all duration-300 flex items-center hover:text-gray-200" href="#">
      <FaHome className="mr-1" /> Home
    </a>
    <a className="transition-all duration-300 flex items-center hover:text-gray-200" href="#">
      <FcAbout className="mr-1" /> About
    </a>
    <a className="transition-all duration-300 flex items-center hover:text-gray-200" href="#">
      <MdOutlineMiscellaneousServices className="mr-1" /> Services
    </a>
    <a className="transition-all duration-300 flex items-center hover:text-gray-200" href="#">
      <GrMultimedia className="mr-1" /> Media
    </a>
    <a className="transition-all duration-300 flex items-center hover:text-gray-200" href="#">
      <TbBrandAppgallery className="mr-1" /> Gallery
    </a>
    <a className="transition-all duration-300 flex items-center hover:text-gray-200" href="#">
      <MdConnectWithoutContact className="mr-1" /> Contact
    </a>
  </nav>

    <div className=" transition-all duration-300 flex justify-center space-x-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/ffffff/facebook-new.png" alt="Facebook" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/ffffff/linkedin-2.png" alt="LinkedIn" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/ffffff/instagram-new.png" alt="Instagram" />
        </a>
        <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/ffffff/facebook-messenger--v2.png" alt="Messenger" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/ffffff/twitter.png" alt="Twitter" />
        </a>
    </div>
    <p className=" transition-all duration-300 text-center font-medium">&copy; 2024 Devops Farm Ltd. All rights reserved.</p>
</footer>


  );
}

export default Footer;
