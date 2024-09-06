import { Header } from "../components/Header";
import levelimg from "../assets/icons/carbon_skill-level-basic.svg";

const ChallengesDetailPage = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#003145] w-full py-16 px-8 flex justify-center relative">
        <div
          className="max-w-[1442px] w-full text-left rounded-lg shadow-lg p-8 relative"
          style={{
            width: "1442px",
            height: "419px",
            top: "64px",
            left: "-1px",
          }}
        >
          <div
            className="absolute bg-[#FFDB70] text-black py-2 px-4 rounded-br-lg text-sm font-medium"
            style={{
              top: "0",
              left: "0",
            }}
          >
            Starts on 17th Jun'22 09:00 PM (India Standard Time)
          </div>

          <div className="mt-4 -ml-7">
            <div className="mt-8 text-left">
              <h2 className="text-[32px] font-bold text-white">
                Data Sprint 72 - Butterfly Identification
              </h2>
              <p className="text-[18px] font-medium text-white mt-2">
                Identify the class to which each butterfly belongs to
              </p>
            </div>

            <button className="flex justify-center px-3 py-2 mt-4 bg-white rounded-md">
              <img src={levelimg} alt="Difficulty" className="w-8 h-6 text-white" />
              <span className="ml-2 text-[18px] text-left font-medium text-black">
                Easy
              </span>
            </button>
          </div>
        </div>
      </div>


      <div className="flex justify-center w-full mt-4">
        <div
          className="flex justify-between items-center w-full max-w-[1440px] bg-white shadow-lg p-4"
          style={{
            height: "66px",
            top: "483px",
            left: "-1px",
          }}
        >
          <div className="flex items-center">
            <h3 className="text-[24px] font-semibold text-[#003145] mr-4">
              Overview
                <div className="h-1 mt-6 bg-green-500 w-26" />
            </h3>
          
          </div>

          <div className="flex gap-4">
            <button className="px-6 py-2 text-white bg-green-500 rounded-md hover:bg-green-600">
              Edit
            </button>
            <button className="px-6 py-2 text-white bg-red-500 rounded-md hover:bg-red-600">
              Delete
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full mt-4">
        <div
          className="bg-white w-[80%] rounded-lg p-8 max-w-[1440px]"
          style={{
            height: "322px",
            top: "595px",
            left: "126px",
          }}
        >
          <p className="text-[16px] text-gray-600 leading-relaxed mb-4">
            Butterflies are the adult flying stage of certain insects belonging
            to an order or group called Lepidoptera. The word "Lepidoptera"
            means "scaly wings" in Greek. This name perfectly suits the insects
            in this group because their wings are covered with thousands of tiny
            scales overlapping in rows.
          </p>
          <p className="text-[16px] text-gray-600 leading-relaxed mb-4">
            An agency of the Governmental Wildlife Conservation is planning to
            implement an automated system based on computer vision so that it
            can identify butterflies based on captured images. As a consultant
            for this project, you are responsible for developing an efficient
            model.
          </p>
          <p className="text-[16px] text-gray-600 leading-relaxed">
            Your task is to build an Image Classification Model using CNN that
            classifies to which class of weather each image belongs to.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChallengesDetailPage;
