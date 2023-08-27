import React from "react";
import { useRouter } from "next/navigation";

const ChooseTest = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mt-5 ml-7">
        <button
          className="disabled:bg-gray-600 text-white bg-blue-700 hover:bg-blue-800
        focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
        rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600
        light:hover:bg-blue-700 light:focus:ring-blue-800 mr-5"
        >
          Home
        </button>
        <button
          className="disabled:bg-gray-600 text-white bg-blue-700 hover:bg-blue-800
        focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
        rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600
        light:hover:bg-blue-700 light:focus:ring-blue-800 mr-80"
        >
          Submit
        </button>
        <button
          className="disabled:bg-gray-600 text-white bg-blue-700 hover:bg-blue-800
        focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
        rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600
        light:hover:bg-blue-700 light:focus:ring-blue-800 ml-52"
          onClick={() => router.push("/ListeningTest")}
        >
          Listening Test
        </button>
        <button
          className="disabled:bg-gray-600 text-white bg-blue-700 hover:bg-blue-800
        focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
        rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600
        light:hover:bg-blue-700 light:focus:ring-blue-800 ml-5"
          onClick={() => router.push("/QuestioningTest")}
        >
          Questioning Test
        </button>
      </div>
    </div>
  );
};

export default ChooseTest;
