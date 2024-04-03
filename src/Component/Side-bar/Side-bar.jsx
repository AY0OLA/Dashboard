import React from "react";
import "./Side-bar.css";
import { CgGym } from "react-icons/cg";
import { CiGrid41 } from "react-icons/ci";
import { PiTimerThin } from "react-icons/pi";
import { GrFormSchedule } from "react-icons/gr";
import { PiNotepadLight } from "react-icons/pi";
import { MdBarChart } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { CiCircleQuestion } from "react-icons/ci";
import { BsBoxArrowInLeft } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="flex">
      <div
        className="flex z-10 flex-col justify-center gap-5 items-center border-r-1 border-rgba(226, 232, 240, 1) shadow-lg-0px 5px 22px 4px rgba(0, 0, 0, 0.02),0px 12px 17px 2px rgba(0, 0, 0, 0.03)
w-64 bg-white py-1 fixed "
      >
        <h1 className="flex text-center items-center justify-center gap-2 text-3xl py-5 mt-5 text-orange-600 font-extrabold border-b-2 border-white-100 ">
          Fitness <CgGym />
        </h1>
        <div className="flex flex-col mt-6 gap-4 text-left items-lastbaseline">
          <div className="flex active items-center gap-2 font-semibold text-sm/[14px] text-[#475569]  hover:bg-orange-400 hover:border-none hover:text-[#fff] p-2 cursor-pointer rounded">
            <CiGrid41 className="w-7 h-7" />
            Overview
          </div>
          <div className="flex items-center gap-2 font-semibold text-sm/[14px] text-[#475569]  p-2 cursor-pointer hover:bg-orange-400 hover:border-none hover:text-[#fff] rounded">
            <CgGym className="w-7 h-7" /> Workout
          </div>
          <div className="flex items-center gap-2 font-semibold text-sm/[14px] text-[#475569] p-2 cursor-pointer hover:bg-orange-400 hover:border-none hover:text-[#fff] rounded">
            <PiNotepadLight className="w-7 h-7" /> Diet Plan
          </div>
          <div className="flex items-center gap-2 font-semibold text-sm/[14px] text-[#475569] p-2 cursor-pointer hover:bg-orange-400 hover:border-none hover:text-[#fff] rounded">
            <PiTimerThin className="w-7 h-7" /> Goals
          </div>
          <div className="flex items-center gap-2 font-semibold text-sm/[14px] text-[#475569] hover:bg-orange-400 hover:border-none hover:text-[#fff] rounded p-2 cursor-pointer">
            <GrFormSchedule className="w-7 h-7" /> My Schedule
          </div>
          <div className="flex items-center gap-2 font-semibold text-sm/[14px] text-[#475569] hover:bg-orange-400 hover:border-none hover:text-[#fff] rounded p-3 cursor-pointer">
            <MdBarChart className="w-7 h-7" /> Progress{" "}
            <FaChevronRight className="w-7 h-7 ml-9" />
          </div>
        </div>

        <div className="flex flex-col mt-8 text-left  ">
          <div className="flex items-center gap-2 border-b-2 border-white-100 py-3 w-48 font-semibold text-sm/[14px] cursor-pointer">
            <CiCircleQuestion className="w-7 h-7" /> Help
          </div>
          <div className="m-3 py-4 flex gap-2 font-semibold text-sm/[14px] items-center cursor-pointer">
            <BsBoxArrowInLeft className="w-7 h-7" /> Logout
          </div>
        </div>
      </div>
      <div className="navs">
        <div className="items">
          <div className="greetings">
            <small>Good Morning</small>
            Welcome Back!
          </div>
          <div className="icons">
            <div className="search">
              <input type="text" placeholder="Search" />
              <CiSearch className="icon" />
            </div>
            <div className="item">
              <IoIosNotifications className="icon" />
              <IoMdSettings className="icon" />
              <input capture="environment" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
