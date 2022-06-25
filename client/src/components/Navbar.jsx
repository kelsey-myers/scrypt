import React, { useState } from "react";

import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";

const NavBarItem = ({ title, href, classProps }) => {
  return (
    <a href={`${href}`} target="_blank">
      <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>
    </a>
  );
};
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navBarItems = [
    {
      title: "Market",
      href: "https://kriptomat.io/cryptocurrency-prices/",
    },
    {
      title: "Exchange",
      href: "https://www.coinbase.com/join/myers_dz3",
    },
    {
      title: "Tutorials",
      href: "https://levelup.gitconnected.com/how-to-use-metamask-a-step-by-step-guide-f380a3943fb1",
    },
    {
      title: "Wallets",
      href: "https://metamask.io/",
    },
  ];

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {navBarItems.map(({ title, href }, i) => {
          return (
            <NavBarItem
              key={"item" + i}
              title={title}
              href={href}
              classProps="my-2 text-lg hover:text-[#ff8080]"
            />
          );
        })}
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col 
          justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {navBarItems.map(({ title, href }, i) => {
              return (
                <NavBarItem
                  key={"item" + i}
                  title={title}
                  href={href}
                  classProps="my-2 text-lg hover:text-[#ff0081]"
                />
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
