import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Days } from "../days";

const Workout = () => {
  return (
    <>
      <div className="absolute flex top-32 -z-10 left-72">
        <div className="flex flex-col gap-6 w-[726] z-10">
          <div className="flex flex-col relative overflow-hidden justify-center rounded-xl h-40 w-[726px]">
            <div className="bg-gradient-to-r from-orange-500 from-45% via-white-500 via-90% to-white-500 to-90% absolute w-[786px] -z-10 h-[400px]"></div>
            <img
              src="src/image/box.jpeg"
              alt=""
              className="absolute h-[290px] top-[-35px] left-[320px] -z-20"
            />
            <strong className="ml-4 w-[396px] h-[33px] text-2xl	text-white	">
              Start Your Workout From Today
            </strong>
            <span className="ml-4 w-[306px] h-[54px] text-xs	font-normal	leading-4	tracking-widest	text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod
            </span>
          </div>
        </div>
        <div className="flex flex-col ml-[30px] w-[285px] z-10">
          <div className="">
            <header className="flex justify-between items-center text-center">
              <h1 className="text-xl	font-bold	text-[#475569]">My Schedule</h1>
              <span className="text-sm font-medium text-[#F97316] flex justify-center items-center text-center gap-1 cursor-pointer">
                View All <IoIosArrowForward />
              </span>
            </header>

            <div className="container flex flex-col mt-4 gap-2">
              {Days.map((day) => {
                return (
                  <>
                    <div className="flex flex-col bg-white rounded p-[16px] h-[100px] w-[285px] gap-5">
                      <div className="text-lg	font-medium	text-[#475569] leading-4 tracking-wider">
                        {day.day}
                      </div>
                      <div className="flex justify-between items-center text-center">
                        <div className="flex gap-2">
                          <img
                            src={day.time}
                            alt=""
                            className="w-[43.11px] h-[32px]"
                          />
                          <div className="flex flex-col gap-0">
                            <div className="font-medium	text-sm	leading-4	tracking-tighter	text-[#1E293B]">
                              {day.syle}
                            </div>
                            <div className="font-normal	text-xs	tracking-tighter	leading-3	text-[#475569]">
                              {day.time}
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#FFF7ED] py-[4px] px-[8px] rounded-full text-[#F97316] font-medium	leading-4	text-base	">
                          {day.set}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div className="mt-6 w-[285px] h-[192px] rounded text-[#FFFFFF] py-[24px] px-[16px] bg-gradient-to-r from-[#7C6DD7] to-[#C4BAFF] flex flex-col gap-5 relative overflow-hidden">
            <div className="font-semibold	text-sm	leading-5	h-[20px] w-[210px]">
              50% off on Premium Membership
            </div>
            <div className="h-[32px] leading-4	text-xs	font-normal	tracking-wide	w-[200px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod
            </div>

            <a
              href="#"
              className="mt-4 w-[106px] h-[36px] rounded py-[8px] px-[24px] bg-[#F97316] items-center no-underline text-center font-semibold	text-sm	leading-5	"
            >
              Upgrade
            </a>
            <img
              src="src/image/box8.png"
              alt=""
              className="w-[67px] h-[129px] absolute right-0 top-[60px] z-10"
            />
            <div className="absolute w-[134px] h-[134px] bg-[#7C6DD766] rounded-full left-[186px] top-[106px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workout;
