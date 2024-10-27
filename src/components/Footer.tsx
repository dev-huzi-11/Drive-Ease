import React from "react";

function Footer() {
  return (
    <div className="w-full h-[30rem] md:h-[12rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-12 py-8  bg-black text-white gap-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-lg">+92 3122785867</p>
        <p className="text-lg">dev.huzaifa.011@gmail.com</p>
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold mb-4">Social Links</h2>
        <a
          className="text-lg"
          href="https://github.com/dev-huzi-11"
          target="_blank"
        >
          GitHub
        </a>
        <a
          className="text-lg"
          href="https://www.linkedin.com/in/huzaifa-nazeer-b969632b7/"
          target="_blank"
        >
          Linkedin
        </a>
        <a
          className="text-lg"
          href="https://www.instagram.com/its_huzi_4u/"
          target="_blank"
        >
          Instagram
        </a>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Services</h2>
        <p className="text-lg">Luxury Affordable </p>
        <p className="text-lg">Convenient</p>
        <p className="text-lg">Flexible</p>
      </div>
    </div>
  );
}

export default Footer;
