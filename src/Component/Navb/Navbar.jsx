import React from "react";
import { CgGym } from "react-icons/cg";
import { PiFootprintsThin } from "react-icons/pi";
import { LiaGripfire } from "react-icons/lia";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();
  return (
    <div className="las">
      <div className="absolute flex top-32 -z-10 left-72">
        <div className="flex flex-col gap-6 max-w-3xl z-10">
          <div className="flex flex-col relative overflow-hidden justify-center rounded-xl h-40 w-[726px]">
            <div className="bg-gradient-to-r from-orange-500 from-45% via-white-500 via-90% to-white-500 to-90% absolute w-[786px] -z-10 h-[400px]"></div>
            <img
              src="src/image/strech.jpeg"
              alt=""
              className="absolute h-[290px] top-[-75px] left-[340px] -z-20"
            />
            <strong className="ml-4 w-[306px] h-[33px] text-2xl	text-white	">
              Track Your Daily Activities
            </strong>
            <span className="ml-4 w-[306px] h-[54px] text-xs	font-normal	leading-4	tracking-widest	text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod
            </span>
          </div>
          <div className="boxs container flex gap-2 flex-wrap justify-center items-center">
            <div className="w-[230px] h-[168px] rounded-lg bg-cyan-500 relative overflow-hidden after:content-[''] after:absolute after:w-[252px] after:h-[118px] after:bg-gradient-to-r from-sky-500 via-80% after:border-y-cyan-300	">
              <div className="p-[20px] flex items-center gap-2.5	">
                <div className="rounded bg-sky-400 border-none px-1.5">
                  <CgGym className="w-[45px] h-[45px] text-[#fff]" />
                </div>
                <div className="flex flex-col text-base font-bold text-[#fff]">
                  Workout <span className="font-normal text-xs	">4 hrs</span>
                </div>
              </div>
            </div>
            <div className="w-[230px] h-[168px] rounded-lg bg-orange-600 relative overflow-hidden after:content-[''] after:absolute after:w-[252px] after:h-[118px] after:bg-gradient-to-r from-orange-500 via-80% after:border-y-cyan-300">
              <div className="p-[20px] flex items-center gap-2.5">
                <div className="rounded bg-orange-400 border-none px-1.5">
                  <LiaGripfire className="w-[45px] h-[45px] text-[#fff]" />
                </div>
                <div className="flex flex-col text-base font-bold text-[#fff]">
                  Calories <span className="font-normal text-xs	">1800 kcl</span>
                </div>
              </div>
            </div>
            <div className="w-[230px] h-[168px] rounded-lg bg-violet-500 relative overflow-hidden after:content-[''] after:absolute after:w-[252px] after:h-[118px] after:bg-gradient-to-r from-violet-900 via-80% after:border-y-cyan-300">
              <div className="p-[20px] flex items-center gap-2.5">
                <div className="rounded bg-violet-400 border-none px-1.5">
                  <PiFootprintsThin className="w-[45px] h-[45px] text-[#fff]" />
                </div>
                <div className="flex flex-col text-base font-bold text-[#fff]">
                  Steps <span className="font-normal text-xs">2200 steps</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[726px] h-[336px] flex-nowrap rounded-xl py-[24px] px-[32px] bg-white shadow-2xl shadow-sky-500/50">
            <div className="flex items-center text-center justify-between flex-nowrap	">
              <h1 className="text-base font-bold text-[#475569]">
                Goal Progress
              </h1>
              <label for="excerise">
                <select
                  id="excerise"
                  name="excerise"
                  className="py-[5px] px-[10px] rounded-lg border-solid border-2 border-sky-100 gap-4 outline-none"
                >
                  <option
                    value="1"
                    className="text-xs	font-medium text-[#64748b]	"
                  >
                    Weekly
                  </option>
                  <option
                    value="2"
                    className="text-xs	font-medium text-[#64748b]	"
                  >
                    Daily
                  </option>
                  <option
                    value="3"
                    className="text-xs	font-medium text-[#64748b]	"
                  >
                    Monthly
                  </option>
                  <option
                    value="4"
                    className="text-xs	font-medium text-[#64748b]	"
                  >
                    Yearly
                  </option>
                </select>
              </label>
            </div>
            <div className="flex flex-nowrap gap-3 items-center justify-center text-center relative mt-7 w-[690px]">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-normal text-[#64748b]">100%</span>
                <span className="text-xs font-normal text-[#64748b]">80%</span>
                <span className="text-xs font-normal text-[#64748b]">60%</span>
                <span className="text-xs font-normal text-[#64748b]">40%</span>
                <span className="text-xs font-normal text-[#64748b]">20%</span>
                <span className="text-xs font-normal text-[#64748b]">0%</span>
              </div>
              <div className="flex flex-col gap-8">
                <hr className="w-[610px]" />
                <hr className="w-[610px]" />
                <hr className="w-[610px]" />
                <hr className="w-[610px]" />
                <hr className="w-[610px]" />
                <hr className="w-[610px]" />
              </div>
              <div className="flex gap-1 items-baseline	absolute left-[93px] top-[48px]">
                <div className="w-[7px] h-[53px] rounded bg-cyan-500	"></div>
                <div className="w-[7px] h-[93px] rounded bg-orange-600	"></div>
                <div className="w-[7px] h-[123px] rounded bg-violet-500	"></div>
              </div>
              <div className="flex gap-1 items-baseline	absolute left-[182px] top-[48px]">
                <div className="w-[7px] h-[53px] rounded bg-cyan-500	"></div>
                <div className="w-[7px] h-[123px] rounded bg-orange-600	"></div>
                <div className="w-[7px] h-[43px] rounded bg-violet-500	"></div>
              </div>
              <div className="flex gap-1 items-baseline	absolute left-[270px] top-[68px]">
                <div className="w-[7px] h-[53px] rounded bg-cyan-500	"></div>
                <div className="w-[7px] h-[103px] rounded bg-orange-600	"></div>
                <div className="w-[7px] h-[93px] rounded bg-violet-500	"></div>
              </div>
              <div className="flex gap-1 items-baseline	absolute left-[360px] top-[58px]">
                <div className="w-[7px] h-[63px] rounded bg-cyan-500	"></div>
                <div className="w-[7px] h-[113px] rounded bg-orange-600	"></div>
                <div className="w-[7px] h-[43px] rounded bg-violet-500	"></div>
              </div>
              <div className="flex gap-1 items-baseline	absolute left-[446px] top-[58px]">
                <div className="w-[7px] h-[69px] rounded bg-cyan-500	"></div>
                <div className="w-[7px] h-[113px] rounded bg-orange-600	"></div>
                <div className="w-[7px] h-[93px] rounded bg-violet-500	"></div>
              </div>
              <div className="flex gap-1 items-baseline	absolute left-[528px] top-[58px]">
                <div className="w-[7px] h-[99px] rounded bg-cyan-500	"></div>
                <div className="w-[7px] h-[53px] rounded bg-orange-600	"></div>
                <div className="w-[7px] h-[113px] rounded bg-violet-500	"></div>
              </div>
              <div className="flex gap-1 items-baseline	absolute left-[610px] top-[48px]">
                <div className="w-[7px] h-[91px] rounded bg-cyan-500	"></div>
                <div className="w-[7px] h-[53px] rounded bg-orange-600	"></div>
                <div className="w-[7px] h-[123px] rounded bg-violet-500	"></div>
              </div>
            </div>
            <div className="flex ml-24 gap-16">
              <div className="text-[#64748b] text-sm font-normal">Mon</div>

              <div className="text-[#64748b] text-sm font-normal">Tue</div>
              <div className="text-[#64748b] text-sm font-normal">Wed</div>
              <div className="text-[#64748b] text-sm font-normal">Thur</div>
              <div className="text-[#64748b] text-sm font-normal">Fri</div>
              <div className="text-[#64748b] text-sm font-normal">Sat</div>
              <div className="text-[#64748b] text-sm font-normal">Sun</div>
            </div>

            <div className="flex mx-16 my-5 gap-4 text-center">
              <div className="flex justify-center items-center gap-1 ">
                <div className="w-[8px] h-[8px] bg-cyan-500 rounded-[50%]	"></div>
                <span className="text-sm text-[#475569] font-normal">
                  Workout
                </span>
              </div>
              <div className="flex justify-center items-center gap-1">
                <div className="bg-orange-600	w-[8px] h-[8px] rounded-[50%]"></div>
                <span className="text-sm text-[#475569] font-normal">
                  Calories
                </span>
              </div>
              <div className="flex justify-center items-center gap-1">
                <div className="bg-violet-500 w-[8px] h-[8px] rounded-[50%]"></div>
                <span className="text-sm text-[#475569] font-normal">
                  Steps
                </span>
              </div>
            </div>
          </div>

          <div className="mt-9 flex flex-col text-center items-center justify-center w-[726px]">
            <table className="w-[786px] flex flex-col gap-4 items-center text-sm border-collapse">
              <thead>
                <tr>
                  <th className="gap-2.5 w-[160px] h-[19px] text-[#475569] px-[16px] font-bold	text-sm	">
                    Food
                  </th>
                  <th className="gap-2.5 w-[140.5px] h-[19px] text-[#475569] px-[16px] font-bold	text-sm">
                    Meal
                  </th>
                  <th className="gap-2.5 w-[140.5px] h-[19px] text-[#475569] px-[16px] font-bold	text-sm">
                    Calories
                  </th>
                  <th className="gap-2.5 w-[140.5px] h-[19px] text-[#475569] px-[16px] font-bold	text-sm">
                    Priorities
                  </th>
                  <th className="gap-2.5 w-[140.5px] h-[19px] text-[#475569] px-[16px] font-bold	text-sm">
                    Carbs
                  </th>
                </tr>
              </thead>

              <tbody className="">
                <tr className="bg-white rounded-md gap-4 h-[52px]">
                  <th className="flex items-center gap-2 w-[160px] h-[52px] px-[16px] py-[10px] text-[#475569] font-bold	">
                    <img
                      src="src/image/food.png"
                      alt=""
                      className="w-[32px] h-[32px] rounded-full bg-orange-100"
                    />{" "}
                    Burrito
                  </th>
                  <td className="w-[140.5px] h-[52px] px-[16px] py-[10px] gap-2 text-[#475569] font-medium	text-sm	">
                    Pizza Burger
                  </td>
                  <td className="w-[140.5px] h-[52px] px-[16px] py-[10px] gap-2 text-[#475569] font-medium	text-sm">
                    Receiving
                  </td>
                  <td className="w-[140.5px] h-[52px] px-[16px] py-[10px] gap-2 text-[#475569] font-medium	text-sm">
                    01:00 AM
                  </td>
                  <td className="w-[140.5px] h-[52px] px-[16px] py-[10px] gap-2 text-[#475569] font-medium	text-sm">
                    20 gm
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="bg-white rounded-md gap-4 h-[52px]">
                  <th className="flex items-center gap-2 w-[160px] h-[52px] px-[16px] py-[10px] text-[#475569] font-bold	">
                    <img
                      src="src/image/food2.png"
                      alt=""
                      className="w-[32px] h-[32px] rounded-full bg-orange-100"
                    />{" "}
                    Burger
                  </th>
                  <td className="w-[140.5px] h-[52px] px-[16px] py-[10px] gap-2 text-[#475569] font-medium	text-sm	">
                    Pizza Burger
                  </td>
                  <td className="w-[140.5px] h-[52px] px-[16px] py-[10px] gap-2 text-[#475569] font-medium	text-sm">
                    Receiving
                  </td>
                  <td className="w-[140.5px] h-[52px] px-[16px] py-[10px] gap-2 text-[#475569] font-medium	text-sm">
                    01:00 AM
                  </td>
                  <td className="w-[140.5px] h-[52px] px-[16px] py-[10px] gap-2 text-[#475569] font-medium	text-sm">
                    20 gm
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="bg-white rounded-md gap-4 h-[52px]">
                  <th className="flex items-center gap-2 w-[160px] h-[52px] px-[16px] py-[10px] text-[#475569] font-bold	">
                    <img
                      src="src/image/food3.png"
                      alt=""
                      className="w-[32px] h-[32px] rounded-full bg-orange-100"
                    />{" "}
                    Meat
                  </th>
                  <td className="w-[140.5px] h-[52px] px-[16px] py-[10px] gap-2 text-[#475569] font-medium	text-sm	">
                    Lunch
                  </td>
                  <td className="w-[140.5px] h-[52px] px-[16px] py-[10px] gap-2 text-[#475569] font-medium	text-sm">
                    Receiving
                  </td>
                  <td className="w-[140.5px] h-[52px] px-[16px] py-[10px] gap-2 text-[#475569] font-medium	text-sm">
                    08:00 AM
                  </td>
                  <td className="w-[140.5px] h-[52px] px-[16px] py-[10px] gap-2 text-[#475569] font-medium	text-sm">
                    20 gm
                  </td>
                </tr>
              </tbody>
            </table>
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
              <div className="flex flex-col bg-white rounded p-[16px] h-[100px] w-[285px] gap-5">
                <div className="text-lg	font-medium	text-[#475569] leading-4 tracking-wider">
                  Monday
                </div>
                <div className="flex justify-between items-center text-center">
                  <div className="flex gap-2">
                    <img
                      src="src/image/box4.png"
                      alt=""
                      className="w-[43.11px] h-[32px]"
                    />
                    <div className="flex flex-col gap-0">
                      <div className="font-medium	text-sm	leading-4	tracking-tighter	text-[#1E293B]">
                        Stretch
                      </div>
                      <div className="font-normal	text-xs	tracking-tighter	leading-3	text-[#475569]">
                        At 08:00
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#FFF7ED] py-[4px] px-[8px] rounded-full text-[#F97316] font-medium	leading-4	text-base	">
                    20 Sets
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-white rounded p-[16px] h-[100px] w-[285px] gap-5">
                <div className="text-lg	font-medium	text-[#475569] leading-4 tracking-wider">
                  Tuesday
                </div>
                <div className="flex justify-between items-center ">
                  <div className="flex gap-1">
                    <img
                      src="src/image/box5.png"
                      alt=""
                      className="w-[43.11px] h-[32px] "
                    />
                    <div className="flex flex-col gap-0 ">
                      <div className="font-medium	text-sm	leading-4	tracking-tighter	text-[#1E293B]">
                        Back Stretch
                      </div>
                      <div className="font-normal	text-xs	tracking-tighter	leading-3	text-[#475569]">
                        At 08:00
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#FFF7ED] py-[4px] px-[8px] rounded-full text-[#F97316] font-medium	leading-4	text-base	flex">
                    10 Round
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-white rounded p-[16px] h-[100px] w-[285px] gap-5">
                <div className="text-lg	font-medium	text-[#475569] leading-4 tracking-wider">
                  Wednesday
                </div>
                <div className="flex justify-between items-center text-center">
                  <div className="flex gap-2">
                    <img
                      src="src/image/box6.png"
                      alt=""
                      className="w-[43.11px] h-[32px]"
                    />
                    <div className="flex flex-col gap-0">
                      <div className="font-medium	text-sm	leading-4	tracking-tighter	text-[#1E293B]">
                        Yoga
                      </div>
                      <div className="font-normal	text-xs	tracking-tighter	leading-3	text-[#475569]">
                        20 min
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#FFF7ED] py-[4px] px-[8px] rounded-full text-[#F97316] font-medium	leading-4	text-base	">
                    20 Sets
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <header className="flex justify-between items-center text-center">
              <h1 className="text-xl	font-bold	text-[#475569]">Goals</h1>
              <span
                className="text-sm font-medium text-[#F97316] flex justify-center items-center text-center gap-1 cursor-pointer"
                onClick={() => Navigate("/goals")}
              >
                View All <IoIosArrowForward />
              </span>
            </header>

            <div className="container flex flex-col mt-4 gap-6">
              <div className="flex flex-col bg-white rounded p-[13px] h-[66px] w-[285px] gap-5">
                <div className="flex justify-between items-center gap-0">
                  <div className="flex gap-2">
                    <div className="flex flex-col gap-0">
                      <div className="font-medium	text-sm	leading-4	tracking-tighter	text-[#1E293B]">
                        ABS & Stretch
                      </div>
                      <div className="font-normal	text-xs	tracking-tighter	leading-3	text-[#475569]">
                        Saturday, April 14 | 08:00 AM
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#FFF7ED] py-[4px] px-[8px] rounded-full text-[#F97316] font-medium	leading-4	text-base	">
                    30 Min/day
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-white rounded p-[13px] h-[66px] w-[285px] gap-5">
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    <div className="flex flex-col gap-0 ">
                      <div className="font-medium	text-sm	leading-4	tracking-tighter	text-[#1E293B]">
                        Push Up
                      </div>
                      <div className="font-normal	text-xs	tracking-tighter	leading-3	text-[#475569]">
                        Sunday, April 15 | 08:00 AM
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#FFF7ED] py-[4px] px-[8px] rounded-full text-[#F97316] font-medium	leading-4	text-base	flex">
                    50 Sets/day
                  </div>
                </div>
              </div>
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
    </div>
  );
};

export default Navbar;
