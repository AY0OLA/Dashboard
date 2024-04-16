import React from "react";
import { Days } from "../days";

const Schedule = () => {
  return (
    <div className="las">
      <div className="absolute flex top-32 -z-10 left-72">
        <div className="flex flex-col gap-6 w-[726px] z-10">
          <div className="flex flex-col relative overflow-hidden justify-center rounded-xl h-40 w-[726px]">
            <div className="bg-gradient-to-r from-orange-500 from-45% via-white-500 via-90% to-white-500 to-90% absolute w-[786px] -z-10 h-[400px]"></div>
            <img
              src="src/image/gym.jpeg"
              alt=""
              className="absolute h-[280px] top-[-15px] left-[390px] -z-20"
            />
            <strong className="ml-4 w-[326px] h-[33px] text-2xl	text-white	">
              Work On Your Fitness Targets
            </strong>
            <span className="ml-4 w-[306px] h-[54px] text-xs	font-normal	leading-4	tracking-widest	text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod
            </span>
          </div>

          <div className="container flex flex-wrap gap-2 justify-center">
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
      </div>
    </div>
  );
};
export default Schedule;
