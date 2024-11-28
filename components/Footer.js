import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center text-blue-50 p-4  bg-[#050526] border-t-2 border-blue-300">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Nasim
          Rana Feroz
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
