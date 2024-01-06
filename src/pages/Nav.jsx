import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  const navData = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "Category",
      path: "/cate",
    },
    {
      id: 3,
      title: "Blog",
      path: "/blog",
    },
    {
      id: 4,
      title: "About Us",
      path: "/about-us",
    },
  ];

  const loc = useLocation();

  return (
    <div className="flex w-full justify-around h-[10vh] items-center font-bold shadow-md">
      <div>LOGO</div>
      {/* nav item */}
      <div className={`w-1/3 flex justify-around`}>
        {navData?.map((nav) => {
          return (
            <NavLink
              className={`overflow-hidden`}
              key={nav?.id}
              to={nav?.path}
            >
              {nav?.title}
              <motion.hr
                initial={{ scaleX: 0 }}
                animate={{ scaleX: loc?.pathname === nav?.path ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-3/5 h-[3px] bg-orange-500 rounded origin-left"
              />
            </NavLink>
          );
        })}
      </div>
      <button className="btn">Login</button>
    </div>
  );
};

export default Nav;
