import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Days } from "../days";
import { CgGym } from "react-icons/cg";
import { PiCircleDashedThin } from "react-icons/pi";
import { FaPlay } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoIosClock } from "react-icons/io";
import { GiFireball } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { GiWeightLiftingUp } from "react-icons/gi";
import { IoFootstepsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Workout = () => {
  const Navigate = useNavigate();
  return (
    <div className="las">
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
          <div className="flex gap-6">
            <div className="w-[360px] h-[343px] relative bg-gradient-to-r from-[#7C6DD7] to-[#C4BAFF]  rounded p-[20px]">
              <div className="flex gap-4 items-center">
                <img
                  src="src/image/box2.jpeg"
                  alt=""
                  className="w-[64px] h-[64px] border-[red] border-2 rounded-[19px]"
                />
                <div className="flex flex-col text-[#fff]">
                  <strong className="font-extrabold text-[16px]">
                    Adrianna Lamb
                  </strong>
                  <span className="leading-3 front-normal text-[12px]">
                    Fitness Trainer
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col text-white">
                  <span className="font-extrabold text-[16x]">Legs</span>
                  <span className="font-extrabold text-[24px] leading-4">
                    Workout
                  </span>
                </div>
                <img
                  src="src/image/box3.png"
                  alt=""
                  className="w-[275px] h-[189px]"
                />
              </div>
              <div className="flex justify-between px-[24px] bg-[#F5F5F5] py-[10px] rounded-full">
                <div className="flex gap-3 text-[#1E293B] text-[16.16px] font-normal items-center">
                  <CgGym className="w-6 h-6 rotate-[33deg] text-[#1E293B]" />
                  Lower Body
                </div>
                <div className="flex gap-6 text-center">
                  <div className="relative flex">
                    <div className="absolute w-[5px] h-[11px] bg-[#1E293B] top-[6px]"></div>
                    <div className="absolute w-[6px] h-[16px] border-[#1E293B] border-2 top-[1px] left-[5px]"></div>
                    <div className="absolute w-[6px] h-[16px] border-[#1E293B] border-2 top-[1px] left-[11.4px]"></div>
                  </div>
                  <div className="text-[#1E293B] text-[16.16px] font-normal">
                    Beginner
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center bg-white rounded p-[16px] h-[66px] w-[325px]">
                <div className="flex gap-2">
                  <img
                    src="src/image/box4.png"
                    alt=""
                    className="w-[43.11px] h-[32px]"
                  />
                  <div className="flex flex-col gap-0">
                    <div className="font-bold	text-[14px]	leading-4	tracking-tighter	text-[#1E293B]">
                      Stretch
                    </div>
                    <div className="font-normal	text-[12px]	tracking-tighter	leading-3	text-[#475569]">
                      At 08:00
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 relative">
                  <div className="bg-[#FFF7ED] py-[4px] px-[8px] rounded-full text-[#F97316] font-medium	leading-4	text-base	">
                    10/20 Sets
                  </div>
                  <PiCircleDashedThin className="w-[21px] h-[21px] text-[#F97316] relative cursor-pointer" />
                  <FaPlay className="text-[#F97316] w-[10px] h-[10px] absolute right-[4px] cursor-pointer" />
                </div>
              </div>
              <div className="flex justify-between  bg-white items-center rounded p-[16px] h-[66px] w-[325px]">
                <div className="flex gap-2">
                  <img
                    src="src/image/box5.png"
                    alt=""
                    className="w-[43.11px] h-[32px]"
                  />
                  <div className="flex flex-col gap-0">
                    <div className="font-bold	text-[14px]	leading-4	tracking-tighter	text-[#1E293B]">
                      Back Stretch
                    </div>
                    <div className="font-normal	text-[12px]	tracking-tighter	leading-3	text-[#475569]">
                      At 09:00
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 relative">
                  <div className="bg-[#FFF7ED] py-[4px] px-[8px] rounded-full text-[#F97316] font-medium	leading-4	text-base	">
                    6/10 Round
                  </div>
                  <PiCircleDashedThin className="w-[21px] h-[21px] text-[#F97316] relative cursor-pointer" />
                  <FaPlay className="text-[#F97316] w-[10px] h-[10px] absolute right-[4px] cursor-pointer" />
                </div>
              </div>
              <div className="flex justify-between items-center bg-white rounded p-[16px] h-[66px] w-[325px]">
                <div className="flex gap-2">
                  <img
                    src="src/image/box6.png"
                    alt=""
                    className="w-[43.11px] h-[32px]"
                  />
                  <div className="flex flex-col gap-0">
                    <div className="font-bold	text-[14px]	leading-4	tracking-tighter	text-[#1E293B]">
                      Yoga
                    </div>
                    <div className="font-normal	text-[12px]	tracking-tighter	leading-3	text-[#475569]">
                      At 10:00
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 relative">
                  <div className="bg-[#FFF7ED] py-[4px] px-[8px] rounded-full text-[#F97316] font-medium	leading-4	text-base	">
                    04/20 min
                  </div>
                  <PiCircleDashedThin className="w-[21px] h-[21px] text-[#F97316] relative cursor-pointer" />
                  <FaPlay className="text-[#F97316] w-[10px] h-[10px] absolute right-[4px] cursor-pointer" />
                </div>
              </div>
              <div className="flex justify-between items-center bg-white rounded p-[16px] h-[66px] w-[325px]">
                <div className="flex gap-2">
                  <img
                    src="src/image/box6.png"
                    alt=""
                    className="w-[43.11px] h-[32px]"
                  />
                  <div className="flex flex-col gap-0">
                    <div className="font-bold	text-[14px]	leading-4	tracking-tighter	text-[#1E293B]">
                      Yoga
                    </div>
                    <div className="font-normal	text-[12px]	tracking-tighter	leading-3	text-[#475569]">
                      At 11:00
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 relative">
                  <div className="bg-[#FFF7ED] py-[4px] px-[8px] rounded-full text-[#F97316] font-medium	leading-4	text-base	">
                    20 min
                  </div>
                  <FaRegCirclePlay className="w-[21px] h-[21px] text-[#F97316] relative cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="gap-4 flex flex-col">
            <span className="font-extrabold text-[20px] text-[#1E293B]">
              Achievements
            </span>
            <div className="flex gap-6">
              <div className="bg-gradient-to-b from-orange-600 from-10% via-orange-900 via-80% to-orange-800 to-100% w-[110px] h-[188.04px] rounded-full items-center text-center justify-center flex flex-col">
                <IoIosClock className="text-[#fff] w-[57.39px] h-[57.44px]" />
                <div className="flex flex-col">
                  <span className="text-[17.44px] text-[#fff] font-extralight leading-6">
                    hours
                  </span>
                  <span className="text-[34.88px] font-normal tracking-tight leading-10 text-[#fff]">
                    1.5
                  </span>
                </div>
              </div>
              <div className="bg-gradient-to-b from-orange-600 from-10% via-orange-900 via-80% to-orange-800 to-100% w-[110px] h-[188.04px] rounded-full items-center text-center justify-center flex flex-col gap-2">
                <GiFireball className="text-[#fff] w-[57.39px] h-[57.44px] rotate-[40deg]" />
                <div className="flex flex-col">
                  <span className="text-[17.44px] text-[#fff] font-extralight leading-6">
                    Kcal
                  </span>
                  <span className="text-[34.88px] font-normal tracking-tight leading-10 text-[#fff]">
                    550
                  </span>
                </div>
              </div>
              <div className="bg-gradient-to-b from-orange-600 from-10% via-orange-900 via-80% to-orange-800 to-100% w-[110px] h-[188.04px] rounded-full items-center text-center justify-center flex flex-col gap-2">
                <GrYoga className="text-[#fff] w-[57.39px] h-[57.44px] rotate-[60deg]" />
                <div className="flex flex-col">
                  <span className="text-[17.44px] text-[#fff] font-extralight leading-6">
                    Poses
                  </span>
                  <span className="text-[34.88px] font-normal tracking-tight leading-10 text-[#fff]">
                    15
                  </span>
                </div>
              </div>
              <div className="bg-gradient-to-b from-orange-600 from-10% via-orange-900 via-80% to-orange-800 to-100% w-[110px] h-[188.04px] rounded-full items-center text-center justify-center flex flex-col gap-2">
                <GiWeightLiftingUp className="text-[#fff] w-[57.39px] h-[57.44px] " />
                <div className="flex flex-col">
                  <span className="text-[17.44px] text-[#fff] font-extralight leading-6">
                    Sets
                  </span>
                  <span className="text-[34.88px] font-normal tracking-tight leading-10 text-[#fff]">
                    5
                  </span>
                </div>
              </div>
              <div className="bg-gradient-to-b from-orange-600 from-10% via-orange-900 via-80% to-orange-800 to-100% w-[110px] h-[188.04px] rounded-full items-center text-center justify-center flex flex-col gap-2">
                <IoFootstepsOutline className="text-[#fff] w-[57.39px] h-[57.44px] " />
                <div className="flex flex-col">
                  <span className="text-[17.44px] text-[#fff] font-extralight leading-6">
                    Sets
                  </span>
                  <span className="text-[34.88px] font-normal tracking-tight leading-10 text-[#fff]">
                    5
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-[30px] w-[285px] z-10">
          <div className="">
            <header className="flex justify-between items-center text-center">
              <h1 className="text-xl	font-bold	text-[#475569]">My Schedule</h1>
              <span
                className="text-sm font-medium text-[#F97316] flex justify-center items-center text-center gap-1 cursor-pointer"
                onClick={() => Navigate("/schedule")}
              >
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
                      <div className="flex justify-between">
                        <div className="flex gap-2">
                          <img
                            src={day.img}
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

          <div className="mt-6 w-[285px] h-[192px] rounded text-[#FFFFFF] py-[24px] px-[16px] bg-gradient-to-r from-[#7C6DD7] to-[#C4BAFF] flex flex-col gap-5 relative overflow-hidden mb-[20px]">
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
    </div>
  );
};

export default Workout;
