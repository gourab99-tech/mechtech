import React, { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { RiCompassDiscoverFill } from "react-icons/ri";

import SuggestedAccounts from "./SuggestedAccounts";
import Discover from "./Discover";
import Footer from "./Footer";
import useAuthStore from "../store/authStore";
const Sidebar: NextPage = () => {
  const [showSidebar, setShowSidebar] = useState<Boolean>(true);
  const { pathname } = useRouter();
  const { fetchAllUsers, allUsers }: any = useAuthStore();

  const activeLink =
    "flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold rounded";

  const normalLink =
    "flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold rounded";

  return (
    <div className="full-sidebar">
      <div
        className="block xl:hidden m-2 ml-4 mt-3 text-xl"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSidebar && (
        <div
          className="xl:w-400 w-20 flex flex-col justify-start mb-10 p-3 sidebar-section"
          style={{
            //border-r-2 border-gray-100 xl:border-0
            border: "1px solid rgba(255, 255, 255, .25)",
            borderRadius: "20px",
            // backgroundColor:'rgba(255,255,255,0.4)',
            // backdropFilter:'blur(5px)',
            boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.25)",
            marginTop: "10px",
            marginLeft: "5px",
            marginRight: "5px",
          }}
        >
          <div className="xl:border-b-2 border-gray-200 xl:pb-4">
            <Link href="/">
              <div className={pathname === "/" ? activeLink : normalLink}>
                <p
                  className="text-2xl home-icon"
                  style={{
                    color: "#784ba0",
                    fontSize: "30px",
                  }}
                >
                  <RiCompassDiscoverFill />
                </p>
                <span className="capitalize text-xl hidden xl:block home-text">
                  Discover
                </span>
              </div>
            </Link>
          </div>

          <Discover />
          <SuggestedAccounts
            fetchAllUsers={fetchAllUsers}
            allUsers={allUsers}
          />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
