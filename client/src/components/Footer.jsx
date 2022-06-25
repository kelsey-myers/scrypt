import React from "react";
import logo from "../../images/logo.png";

const NavBarItem = ({ title, href, classProps }) => {
  return (
    <a href={`${href}`} target="_blank">
      <p className={classProps}>{title}</p>
    </a>
  );
};

const Footer = () => {
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
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <img src={logo} alt="logo" className="w-32" />
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          {navBarItems.map(({ title, href }, i) => {
            return (
              <NavBarItem
                key={"item" + i}
                title={title}
                href={href}
                classProps="text-white text-base text-center mx-2 cursor-pointer hover:text-[#ff0081]"
              />
            );
          })}
        </div>
      </div>
      <div className="mt-10 sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5"></div>
      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-white text-sm text-center">Say hi to the dev!</p>
        <a
          href="https://kelseymyers.co.uk"
          target="_blank"
          className="text-white text-sm text-center hover:text-[#83ffc0]"
        >
          kelseymyers.co.uk
        </a>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5"></div>
      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-sm text-center">@kelseymyers_ 2022</p>
        <p className="text-white text-sm text-center">All rights preserved</p>
      </div>
    </div>
  );
};

export default Footer;
