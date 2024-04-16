import React from "react";
import { Food } from "../food";
import { plan } from "../Weeklyplan";

const Diet = () => {
  return (
    <div className="las">
      <div className="absolute flex top-32 -z-10 left-72">
        <div className="flex flex-col gap-6 max-w-3xl z-10">
          <div className="flex flex-col relative overflow-hidden justify-center rounded-xl h-40 w-[726px]">
            <div className="bg-gradient-to-r from-orange-500 from-50% via-white-500 via-90% to-white-500 to-90% absolute w-[786px] -z-10 h-[400px]"></div>
            <img
              src="src/image/diet.jpeg"
              alt=""
              className="absolute h-[290px] top-[-75px] left-[400px] -z-20"
            />
            <strong className="ml-4 w-[346px] h-[33px] text-2xl	text-white	">
              Plan Your Diet Plan This Week
            </strong>
            <span className="ml-4 w-[306px] h-[54px] text-xs	font-normal	leading-4	tracking-widest	text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod
            </span>
          </div>

          <div className="flex flex-col text-center items-center justify-center w-[726px]">
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
              {Food.map((foods) => {
                return (
                  <>
                    <tbody className="cursor-pointer">
                      <tr className="bg-white rounded-md gap-4 h-[52px]">
                        <th className="flex items-center gap-2 w-[160px] h-[52px] px-[16px] py-[10px] text-[#475569] font-bold	">
                          <img
                            src={foods.img}
                            alt=""
                            className="w-[32px] h-[32px] rounded-full bg-orange-100"
                          />
                          {foods.food}
                        </th>
                        <td className="w-[140.5px] h-[52px] px-[16px] py-[10px] gap-2 text-[#475569] font-medium	text-sm	">
                          {foods.meal}
                        </td>
                        <td className="w-[140.5px] h-[52px] px-[16px] py-[10px] gap-2 text-[#475569] font-medium	text-sm">
                          {foods.Calories}
                        </td>
                        <td className="w-[140.5px] h-[52px] px-[16px] py-[10px] gap-2 text-[#475569] font-medium	text-sm">
                          {foods.Priorities}
                        </td>
                        <td className="w-[140.5px] h-[52px] px-[16px] py-[10px] gap-2 text-[#475569] font-medium	text-sm">
                          {foods.Carbs}
                        </td>
                      </tr>
                    </tbody>
                  </>
                );
              })}
            </table>
          </div>
        </div>
        <div className="flex flex-col ml-[30px] w-[275px] z-10">
          <div className="">
            <header className="flex justify-between items-center text-center">
              <h1 className="text-xl	font-bold	text-[#475569]">Week Plan</h1>
            </header>

            <div className="container flex flex-col mt-4 gap-6">
              {plan.map((week) => {
                return (
                  <>
                    <div className="flex flex-col bg-white rounded p-[13px] h-[66px] w-[285px] gap-1 cursor-pointer">
                      <div className="flex justify-between items-center gap-0">
                        <div className="flex gap-1">
                          <div className="flex flex-col gap-0">
                            <div className="font-extrabold	text-sm	leading-4	tracking-tighter	text-[#1E293B]">
                              {week.day}
                            </div>
                            <div className="font-normal	text-xs	tracking-tighter	leading-3	text-[#475569]">
                              {week.food}
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#FFF7ED] py-[4px] px-[8px] rounded-full text-[#F97316] font-medium	leading-4	text-base	">
                          {week.time}
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
            <div className="absolute w-[134px] h-[134px] bg-[#7C6DD766] rounded-full left-[196px] top-[106px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diet;
