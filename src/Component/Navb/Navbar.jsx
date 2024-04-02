import React from "react";
import "./Navbar.css";
import { CgGym } from "react-icons/cg";
import { PiFootprintsThin } from "react-icons/pi";
import { LiaGripfire } from "react-icons/lia";

const Navbar = () => {
  return (
    <>
      <div className="navsItem">
        <div className="firstNav">
          <div className="box">
            <div className="overlay"></div>
            <img src="src/image/strech.jpeg" alt="" />
            <strong>Track Your Daily Activities</strong>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod
            </span>
          </div>
          <div className="boxs">
            <div className="boxsContent">
              <div className="icon">
                <div className="back">
                  <CgGym className="bar" />
                </div>
                <div className="flex">
                  Workout <span>4 hrs</span>
                </div>
              </div>
            </div>
            <div className="boxsContent2">
              <div className="icon">
                <div className="back">
                  <LiaGripfire className="fire" />
                </div>
                <div className="flex">
                  Calories <span>1800 kcl</span>
                </div>
              </div>
            </div>
            <div className="boxsContent3">
              <div className="icon">
                <div className="back">
                  <PiFootprintsThin className="fire" />
                </div>
                <div className="flex">
                  Steps <span>2200 steps</span>
                </div>
              </div>
            </div>
          </div>
          <div className="chart">
            <div className="goal">
              <h1 className="progress">Goal Progress</h1>
              <label for="excerise">
                <select id="excerise" name="excerise">
                  <option value="1">Weekly</option>
                  <option value="2">Daily</option>
                  <option value="3">Monthly</option>
                  <option value="4">Yearly</option>
                </select>
              </label>
            </div>
            <div className="chartContent">
              <div className="numbers">
                <span>100%</span>
                <span>80%</span>
                <span>60%</span>
                <span>40%</span>
                <span>20%</span>
                <span>0%</span>
              </div>
              <div className="line">
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
              </div>
            </div>
            <div className="days">
              <div className="dayChat">
                <div className="charts">
                  <div className="cray"></div>
                  <div className="orange"></div>
                  <div className="violet"></div>
                </div>
                <div className="day">Mon</div>
              </div>
              <div className="dayChat">
                <div className="charts">
                  <div className="cray2"></div>
                  <div className="orange2"></div>
                  <div className="violet2"></div>
                </div>
                <div className="day">Tue</div>
              </div>
              <div className="dayChat">
                <div className="charts">
                  <div className="cray3"></div>
                  <div className="orange3"></div>
                  <div className="violet3"></div>
                </div>
                <div className="day">Wed</div>
              </div>
              <div className="dayChat">
                <div className="charts">
                  <div className="cray4"></div>
                  <div className="orange4"></div>
                  <div className="violet4"></div>
                </div>
                <div className="day">Thur</div>
              </div>
              <div className="dayChat">
                <div className="charts">
                  <div className="cray5"></div>
                  <div className="orange5"></div>
                  <div className="violet5"></div>
                </div>
                <div className="day">Fri</div>
              </div>
              <div className="dayChat">
                <div className="charts">
                  <div className="cray5"></div>
                  <div className="orange5"></div>
                  <div className="violet5"></div>
                </div>
                <div className="day">Sat</div>
              </div>
              <div className="dayChat">
                <div className="charts">
                  <div className="cray5"></div>
                  <div className="orange5"></div>
                  <div className="violet5"></div>
                </div>
                <div className="day">Sun</div>
              </div>
            </div>

            <div className="note">
              <div className="color">
                <div className="cyan"></div>
                <span>Workout</span>
              </div>
              <div className="color">
                <div className="orange"></div>
                <span>Calories</span>
              </div>
              <div className="color">
                <div className="purple"></div>
                <span>Steps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
