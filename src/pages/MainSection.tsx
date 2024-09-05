import React, { useState, useRef } from "react";
import rocket from "../assets/icons/PicsArt_04-14-04.42 1.svg";
import img1 from "../assets/icons/Group 1000002515.svg";
import img2 from "../assets/icons/Group 1000002516.svg";
import img3 from "../assets/icons/Group 1000002518.svg";
import img4 from "../assets/icons/carbon_notebook-reference.svg";
import img5 from "../assets/icons/Vector.svg";
import img6 from "../assets/icons/Robot.svg";
import img7 from "../assets/icons/IdentificationCard.svg";

import s3img1 from "../assets/cardimage/Group 1000002771.png";
import s3img2 from "../assets/cardimage/Group 1000002766.png";
import { FaSearch } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { Header } from "../components/Header";

export const MainSection: React.FC = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const filterButtonRef = useRef<HTMLButtonElement>(null);

  const toggleFilter = () => {
    setFilterOpen(!isFilterOpen);
  };

  return (
    <div>
      <Header />
      <div className="pb-12 text-white bg-[#003145] w-full h-full">
        <div className="container flex flex-col-reverse items-center justify-between px-8 py-12 mx-auto text-center md:flex-row">
          <div className="flex items-start ml-14 md:w-1/2">
            <div className="w-[6px] h-[80px] bg-yellow-500 mr-6 self-start mt-2"></div>
            <div className="text-left">
              <h1 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
                Accelerate Innovation <br /> with Global AI Challenges
              </h1>
              <p className="mb-8 text-md">
                AI Challenges at DPhi simulate real-world problems. It is a{" "}
                <br /> great place to put your AI/Data Science skills to test on{" "}
                <br /> diverse datasets allowing you to foster learning through{" "}
                <br /> competitions.
              </p>
              <div className="flex justify-center mt-8 md:justify-start">
                <button className="px-6 py-3 font-semibold text-black bg-white rounded-lg bg-primary hover:bg-primary-dark">
                  Create Challenge
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={rocket}
              alt="Rocket Icon"
              className="mx-auto mb-6 md:mb-0"
            />
          </div>
        </div>
      </div>

      <section className="flex items-center justify-center py-6 bg-[#002A3B]">
        <div className="container flex items-center justify-between mx-auto text-center w-[85%]">
          <div className="flex items-center space-x-2">
            <div className="w-16 h-16">
              <img src={img1} alt="AI model submissions" />
            </div>
            <div className="mb-2 text-left">
              <h3 className="font-bold text-white">100K+</h3>
              <p className="text-gray-300">AI model submissions</p>
            </div>
          </div>
          <div className="w-px h-12 bg-gray-300" /> {/* Small vertical line */}
          <div className="flex items-center space-x-2">
            <div className="w-16 h-16">
              <img src={img2} alt="Data Scientists" />
            </div>
            <div className="mb-2 text-left">
              <h3 className="font-bold text-white">50K+</h3>
              <p className="text-gray-300">Data Scientists</p>
            </div>
          </div>
          <div className="w-px h-12 bg-gray-300" /> {/* Small vertical line */}
          <div className="flex items-center space-x-2">
            <div className="w-16 h-16">
              <img src={img3} alt="AI Challenges hosted" />
            </div>
            <div className="mb-2 text-left">
              <h3 className="font-bold text-white">100+</h3>
              <p className="text-gray-300">AI Challenges hosted</p>
            </div>
          </div>
        </div>
      </section>

      <div className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-10 text-3xl font-semibold text-black">
            Why Participate in{" "}
            <span className="text-green-600">AI Challenges?</span>
          </h2>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz3333333333333333333333333333333333333333
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 w-[90%] md:w-[75%]">
          <div className="p-6 bg-[#F8F9FD] rounded-lg shadow-md max-w-[95%] mx-auto">
            <div className="flex flex-col items-start mb-4">
              <div className="w-8 h-8 mb-2">
                <img src={img4} alt="Prove your skills" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Prove your skills</h3>
            </div>
            <p className="text-sm text-gray-500">
              Gain substantial experience by solving real-world problems and pit
              against others to come up with innovative solutions.
            </p>
          </div>
          <div className="p-6 bg-[#F8F9FD] rounded-lg shadow-md max-w-[95%] mx-auto">
            <div className="flex flex-col items-start mb-4">
              <div className="w-8 h-8 mb-2">
                <img src={img5} alt="Learn from community" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Learn from community
              </h3>
            </div>
            <p className="text-sm text-gray-500">
              One can look and analyze the solutions submitted by the other Data
              Scientists in the community and learn from them.
            </p>
          </div>
          <div className="p-6 bg-[#F8F9FD] rounded-lg shadow-md max-w-[95%] mx-auto">
            <div className="flex flex-col items-start mb-4">
              <div className="w-8 h-8 mb-2">
                <img src={img6} alt="Challenge yourself" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Challenge yourself</h3>
            </div>
            <p className="text-sm text-gray-500">
              There is nothing for you to lose by participating in a challenge.
              You can fail safe, learn out of the entire experience and bounce
              back harder.
            </p>
          </div>
          <div className="p-6 bg-[#F8F9FD] rounded-lg shadow-md max-w-[95%] mx-auto">
            <div className="flex flex-col items-start mb-4">
              <div className="w-8 h-8 mb-2">
                <img src={img7} alt="Earn recognition" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Earn recognition</h3>
            </div>
            <p className="text-sm text-gray-500">
              You will stand out from the crowd if you do well in AI challenges.
              It not only helps you shine in the community but also earns
              rewards.
            </p>
          </div>
        </div>
      </div>

      <section className="relative w-full py-12">
        <div className="container mx-auto text-center">
          {/* Search */}
          <div className="relative w-full mx-auto h-[50vh]">
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-[#002A3B] shadow-md">
              <h2 className="mb-6 text-2xl font-semibold text-white">
                Explore Challenges
              </h2>
              <div className="flex flex-col items-center mb-6 space-y-4 md:space-y-0 md:flex-row md:justify-center md:space-x-4">
                <div className="relative w-full md:w-[100%]">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-[60vw] py-2 pl-10 text-black bg-white rounded-md focus:outline-none whitespace-nowrap"
                  />
                  <FaSearch className="absolute text-gray-500 transform -translate-y-1/2 top-1/2 left-3" />
                </div>
                {/* Filter button */}
                <div className="relative">
                  <button
                    ref={filterButtonRef}
                    onClick={toggleFilter}
                    className="flex items-center px-4 py-2 text-black bg-white rounded-md"
                  >
                    Filter
                  </button>
                  {isFilterOpen && (
                    <div
                      className="absolute left-0 z-10 w-[200px] p-4 mt-2 bg-white rounded-md shadow-lg"
                      style={{ top: "calc(100% + 4px)" }}
                    >
                      <div className="mb-4">
                        <h4 className="mb-2 text-lg font-semibold">Status</h4>
                        <div className="flex flex-col space-y-2">
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              name="status"
                              value="all"
                              className="mr-2"
                            />
                            All
                          </label>
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              name="status"
                              value="active"
                              className="mr-2"
                            />
                            Active
                          </label>
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              name="status"
                              value="upcoming"
                              className="mr-2"
                            />
                            Upcoming
                          </label>
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              name="status"
                              value="past"
                              className="mr-2"
                            />
                            Past
                          </label>
                        </div>
                      </div>
                      <div className="my-4 border-b"></div>{" "}
                      {/* Small line shadow */}
                      <div className="mb-4">
                        <h4 className="mb-2 text-lg font-semibold">Level</h4>
                        <div className="flex flex-col space-y-2">
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              name="level"
                              value="easy"
                              className="mr-2"
                            />
                            Easy
                          </label>
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              name="level"
                              value="medium"
                              className="mr-2"
                            />
                            Medium
                          </label>
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              name="level"
                              value="hard"
                              className="mr-2"
                            />
                            Hard
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Challenge Cards */}
          <div className="py-12 bg-[#003145]">
            <div className="grid grid-cols-1 gap-6 mx-auto md:gap-6 md:grid-cols-3 w-[80%]">
              {[s3img1, s3img2, s3img1, s3img2, s3img1, s3img2].map(
                (imgSrc, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col w-[300px] h-[420px] bg-white rounded-lg shadow-md"
                  >
                    <img
                      src={imgSrc}
                      alt="Challenge"
                      className="object-cover w-full h-48 mb-4 rounded-t-lg"
                    />
                    <div className="flex flex-col flex-grow p-4">
                      <h3 className="mb-2 text-xl font-semibold">
                        Data Science Bootcamp - Graded Datathon
                      </h3>
                      <p className="text-sm text-gray-600">Starts in</p>
                      <p className="mb-4 text-sm text-gray-600">
                        00 Days : 15 Hours : 22 Mins
                      </p>
                    </div>
                    <button className="absolute flex items-center px-4 py-2 space-x-2 text-white transform -translate-x-1/2 bg-green-600 rounded-lg bottom-6 left-1/2 whitespace-nowrap">
                      <AiOutlineCheck className="text-lg" />
                      <span className="text-sm">Participate Now</span>
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
