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
      <div className="sideBar">
        <h1 className="header">
          Fitness <CgGym className="bar" />
        </h1>
        <hr />
        <div className="navbar">
          <div className="navItem active">
            <CiGrid41 className="icon" />
            Overview
          </div>
          <div className="navItem ">
            <CgGym className="icon bar" /> Workout
          </div>
          <div className="navItem">
            <PiNotepadLight className="icon" /> Diet Plan
          </div>
          <div className="navItem">
            <PiTimerThin className="icon" /> Goals
          </div>
          <div className="navItem">
            <GrFormSchedule className="icon" /> My Schedule
          </div>
          <div className="navItem ">
            <MdBarChart className="icon" /> Progress{" "}
            <FaChevronRight className="icon move" />
          </div>
        </div>

        <div className="details">
          <div className="help">
            <CiCircleQuestion className="icon" /> Help
          </div>
          <hr />
          <div className="help">
            <BsBoxArrowInLeft className="icon" /> Logout
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
