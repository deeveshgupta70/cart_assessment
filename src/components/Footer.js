import { FaLinkedin, FaGithub, FaDev } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6 mt-3">
      <div className="mx-auto md:flex justify-between items-center px-20 h-full mb-5">
        <div className="left">
          <h3 className="text-2xl font-bold uppercase py-2">ShopNow</h3>
          <p className="text-lg font-light w-72 md:w-96">
            Discover a curated selection of products that cater to your every
            need. From fashion-forward apparel to cutting-edge gadgets, we’ve
            got you covered.
          </p>
        </div>
        <div className="right mt-5 ">
          <h2 className="pb-3 text-xl"> Social Link</h2>
          <div className="links flex space-x-4">
            <a
              href="https://dev.to/deevesh"
              className="text-white hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDev size={24} />
            </a>
            <a
              href="https://x.com/Deeveshgupta70"
              className="text-white hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter size={24} />
            </a>
            <a
              href="https://linkedin.com/in/deevesh-gupta"
              className="text-white hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/deeveshgupta70"
              className="text-white hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright py-7">
        <p className="text-center">© Copyright 2024 . Made by Deevesh Gupta</p>
      </div>
    </footer>
  );
};

export default Footer;
