
function Footer() {
  return (
    <footer className="flex flex-col space-y-10 justify-center border-t border-gray-600 bg-black text-white py-4" style={{ borderBottom: '1px solid #666' }}>

    <nav className="flex justify-center flex-wrap  gap-6 font-medium">
        <a className="hover:text-gray-200" href="#">Home</a>
        <a className="hover:text-gray-200" href="#">About</a>
        <a className="hover:text-gray-200" href="#">Services</a>
        <a className="hover:text-gray-200" href="#">Media</a>
        <a className="hover:text-gray-200" href="#">Gallery</a>
        <a className="hover:text-gray-200" href="#">Contact</a>
    </nav>

    <div className="flex justify-center space-x-5">
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
    <p className="text-center font-medium">&copy; 2024 Devops Farm Ltd. All rights reserved.</p>
</footer>


  );
}

export default Footer;
