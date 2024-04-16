import React from "react";

const Progress = () => {
  return (
    <div className="las">
      <div className="absolute flex top-32 -z-10 left-72">
        <div className="flex flex-col gap-6 w-[726px] z-10">
          <div className="flex flex-col relative overflow-hidden justify-center rounded-xl h-40 w-[726px]">
            <div className="bg-gradient-to-r from-orange-500 from-45% via-white-500 via-90% to-white-500 to-90% absolute w-[786px] -z-10 h-[400px]"></div>
            <img
              src="src/image/Progress.jpeg"
              alt=""
              className="absolute h-[280px] top-[-45px] left-[390px] -z-20"
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
        </div>
      </div>
    </div>
  );
};
export default Progress;
