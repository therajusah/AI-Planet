import { useState } from "react";
import { Header } from "../components/Header";
import { MdCloudUpload } from "react-icons/md";

interface ChallengeData {
  challengeName: string;
  startDate: string;
  endDate: string;
  description: string;
  image: string | null;
  levelType: string;
}

const CreateChallenge: React.FC = () => {
  const [challengeName, setChallengeName] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string | null>(null);
  const [levelType, setLevelType] = useState<string>("Easy");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const newChallenge: ChallengeData = {
      challengeName,
      startDate,
      endDate,
      description,
      image,
      levelType,
    };

    try {
      const storedData = localStorage.getItem("challengeData");

      const existingChallenges: ChallengeData[] = storedData
        ? JSON.parse(storedData)
        : [];

      if (!Array.isArray(existingChallenges)) {
        throw new Error(
          "Invalid data format in localStorage, expected an array."
        );
      }

      const updatedChallenges = [...existingChallenges, newChallenge];

      localStorage.setItem("challengeData", JSON.stringify(updatedChallenges));

      setChallengeName("");
      setStartDate("");
      setEndDate("");
      setDescription("");
      setImage(null);
      setLevelType("Easy");

      alert("Challenge saved successfully!");
    } catch (error) {
      console.error("Error saving challenge data:", error);
      alert("Failed to save challenge. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex justify-start">
        <div className="w-3/5 mx-8 p-8">
          <h1 className="text-2xl font-semibold mb-8 text-gray-800">
            Create New Challenge
          </h1>
          <div className="space-y-8">
            {/* Challenge Name */}
            <div className="w-full">
              <label
                htmlFor="challengeName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Challenge Name
              </label>
              <input
                type="text"
                id="challengeName"
                value={challengeName}
                onChange={(e) => setChallengeName(e.target.value)}
                className="w-[50%] p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Start Date */}
            <div className="w-full">
              <label
                htmlFor="startDate"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-[50%] p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* End Date */}
            <div className="w-full">
              <label
                htmlFor="endDate"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-[50%] p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Description */}
            <div className="w-full">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-[65%] p-2 border border-gray-300 rounded-md"
                rows={6}
              ></textarea>
            </div>

            {/* Image Upload */}
            <div className="w-full">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Image
              </label>
              <label
                htmlFor="image"
                className="flex items-center cursor-pointer"
              >
                <MdCloudUpload className="h-6 w-6 text-gray-500 mr-2" />
                <span className="text-gray-500">Upload</span>
              </label>
              <input
                type="file"
                id="image"
                onChange={handleImageUpload}
                className="hidden"
              />
              {image && (
                <img
                  src={image}
                  alt="Uploaded"
                  className="h-16 w-16 object-cover rounded-md mt-2"
                />
              )}
            </div>

            {/* Level Type */}
            <div className="w-full">
              <label
                htmlFor="levelType"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Level Type
              </label>
              <select
                id="levelType"
                value={levelType}
                onChange={(e) => setLevelType(e.target.value)}
                className="w-[50%] p-2 border border-gray-300 rounded-md"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="w-full">
              <button
                onClick={handleSubmit}
                className="w-[40%] bg-green-600 text-white p-2 rounded-lg text-lg hover:bg-green-700 focus:outline-none"
              >
                Create Challenge
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateChallenge;
