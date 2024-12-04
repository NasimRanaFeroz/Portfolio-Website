"use client";

import React, { useState, useEffect } from "react";

const Footer = () => {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer footer-center text-blue-50 p-4 bg-[#0b1320] border-t-2 border-gray-500">
      <aside>
        <p>Copyright © {year} - All rights reserved by Nasim Rana Feroz</p>
      </aside>
    </footer>
  );
};

export default Footer;
