import { useRouter } from "next/navigation";
import React from "react";

const SelectTest = () => {
  const router = useRouter();
  return (
    <div className="mx-20 my-10 p-5 bg-gray-100 rounded-lg border-gray-500 transition duration-500 ease-in">
      <h2 className="mb-5 mt-0 font-medium text-xl">Choose a test below:</h2>
      <div className="space-x-4">
        <button
          className="disabled:bg-gray-600 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
          onClick={() => router.push("/QuestioningTest")}
        >
          Question Test
        </button>
        <button
          className="disabled:bg-gray-600 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
          onClick={() => {
            router.push("/SpeakingTest");
          }}
        >
          Speaking Test
        </button>
        <button
          className="disabled:bg-gray-600 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
          onClick={() => router.push("/ListeningTest")}
        >
          Listening Test
        </button>
      </div>
    </div>
  );
};

export default SelectTest;
