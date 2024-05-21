import { MdEmail } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { TfiLocationPin } from "react-icons/tfi";


function Contact() {
  return (
    <div className=" pt-16 w-full min-h-screen flex items-center justify-center  bg-white dark:bg-black">
      <div className="md:w-2/3 w-full px-4 pl-20 text-black dark:text-white flex flex-col">
        <div className="w-full text-7xl font-bold">
        <span className="text-transparent text-center text-7xl font-bold bg-clip-text bg-gradient-to-tr from-[#8000FF] to-[#FF8660]">
        How can we help you. get in touch</span>
        </div>
        <div className="flex mt-8 flex-col md:flex-row md:justify-between">
        <p className="w-full md:w-2/3 text-3xl text-black dark:text-gray-100 flex items-center mt-10 transition-colors duration-300 dark:hover:text-red-500 cursor-pointer hover:text-blue-500">
          <MdEmail  className="w-10 h-10 mr-5 " color="#4AE3EE" /><a href="mailto:devopsfarmer@gmail.com" title="click on">devopsfarmer@gmail.com </a>           
          </p>
        </div>
        <div>
        <p className="w-full md:w-2/3 text-3xl text-black dark:text-gray-100 flex items-center mt-10 transition-colors duration-300 dark:hover:text-red-500 cursor-pointer hover:text-blue-500">
          <FaWhatsapp className="w-8 h-8 mr-5" color="#1CAFE7" /><a href="https://api.whatsapp.com/send/?phone=919971566583&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" title="click on">+919971566583  </a>
          </p>
          <p className="w-full md:w-2/3 text-3xl text-black dark:text-gray-100 flex items-center mt-10 transition-colors duration-300 dark:hover:text-red-500 cursor-pointer hover:text-blue-500">
          <IoCallOutline className="w-8 h-8 mr-5" color="#1CAFE7" /><a href="tel:+918769511173" title="click on">+918769511173 </a> 
          </p>
          <p className="w-full md:w-2/3 text-3xl text-black dark:text-gray-100 flex items-center mt-10 transition-colors duration-300 dark:hover:text-red-500 cursor-pointer hover:text-blue-500">
          <TfiLocationPin className="w-12 h-15 mr-5" color="#244DD6" /><a href="https://maps.app.goo.gl/4FGLNvVRb8e2BV7z6" target="_blank" rel="noopener noreferrer" title="click on">locate us</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
