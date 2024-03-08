import { FaHeart, FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer bg-gray-800 mt-15 border-t border-gray-800 text-center relative text-white w-full h-100'>
        <div className='icon flex justify-center items-center m-10 bg-transparent'>
          <FaFacebook size={38} className='text-blue-500 hover:text-blue-700 mx-2' />
          <FaInstagram size={38} className='text-pink-500 hover:text-pink-700 mx-2' />
          <FaTwitter size={38} className='text-blue-400 hover:text-blue-600 mx-2' />
          <FaLinkedinIn size={38} className='text-blue-700 hover:text-blue-900 mx-2' />
          <FaYoutube size={38} className='text-red-500 hover:text-red-700 mx-2' />
        </div>

            <ul className="bg-transparent p-3">
                <li className=" px-3 inline mr-15 cursor-pointer hover:text-red-500 transition duration-300 text-white" >About Us</li>
                <li className="px-3 inline mr-15 cursor-pointer hover:text-red-500 transition duration-300 text-white">Contact Us</li>
                <li className="px-3 inline mr-15 cursor-pointer hover:text-red-500 transition duration-300 text-white">Teach with Us</li>
                <li className="px-3 inline mr-15 cursor-pointer hover:text-red-500 transition duration-300 text-white">Cancellation/Refund Policy</li>
                <li className="px-3 inline mr-15 cursor-pointer hover:text-red-500 transition duration-300 text-white">Privacy Policy</li>
                <li className="px-3 inline mr-15 cursor-pointer hover:text-red-500 transition duration-300 text-white">Terms of use</li>
                <li className="px-3 inline mr-15 cursor-pointer hover:text-red-500 transition duration-300 text-white">Guest Posting</li>
         
            </ul>

            <ul className="bg-transparent py-5 "><a href='https://www.devopsfarm.in/' className="text-white"><b>DEVOPS FARM</b></a></ul>
            {/* <ul className="text-white flex items-center justify-center">
            <b className="whitespace-no-wrap">Made With <FaHeart color='red' /> In India</b>
      </ul> */}
      
       </div>
    );
};

export default Footer;