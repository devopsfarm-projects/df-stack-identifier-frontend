function Footer() {
  return (
    <footer className="transition-all duration-300 flex  shadow-[0_32px_50px_rgba(8,_112,_184,_0.7)] dark:shadow-[0_5px_20px_rgba(240,_46,_170,_0.7)] flex-col space-y-10 justify-center  bg-white text-black dark:bg-black dark:text-white py-12" style={{ borderBottom: '1px solid #666' }}>
    <div className=" transition-all duration-300 flex justify-center space-x-5">
        <a href="https://www.youtube.com/channel/UCR6-sOOxS9lJu9T9FFq4e_g" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/color/30/000000/youtube-play.png" alt="YouTube" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/ffffff/facebook-new.png" alt="Facebook" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/ffffff/linkedin-2.png" alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/devopsfarm/" target="_blank" rel="noopener noreferrer">
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
