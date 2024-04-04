import React from "react";
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
      <div className="navs absolute right-[0] px-[24px] py-[32px] z-10 flex h-[88px] w-[1110px] border-solid border-1 border-b-amber-50	bg-white">
        <div className="flex justify-between">
          <div className="flex flex-col ml-9 text-base	 font-semibold w-[295px] text-[#475569]">
            <small className="font-normal	text-xs">Good Morning</small>
            Welcome Back!
          </div>
          <div className="flex">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-[499px] h-[40px] py-[8px] px-[3rem] gap-3 outline-none rounded border-2 border-slate-500 text-lg	font-normal	text-[#64748b] placeholder:text-sm bg-slate-200"
              />
              <CiSearch className="absolute w-[30px] h-[30px] top-[5px] left-[3px]" />
            </div>
            <div className="flex text-center items-center ml-16 gap-4">
              <IoIosNotifications className="w-[20.01px] h-[18.88px] text-[#64748b] cursor-pointer" />
              <IoMdSettings className="w-[20.01px] h-[18.88px] text-[#64748b] cursor-pointer" />
              <input className="w-[40px] h-[40px] cursor-pointer border-2 border-slate-500 rounded-full outline-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
