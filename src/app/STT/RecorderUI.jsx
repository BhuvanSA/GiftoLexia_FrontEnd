"use client";
import React, { useEffect, useState } from "react";
import Recorder from "./Recorder";

const RecorderUI = () => {
  // Replace {{ expected }}, {{ actual }}, and {{ calculate }} with appropriate state variables
  const [expected, setExpected] = useState("");
  const [actual, setActual] = useState("");
  const [calculate, setCalculate] = useState("");

  const makeAPICall = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/", { mode: "cors" });
      const data = await response.json();
      setExpected(data.expected);
      setActual("Your Transcript Goes here");
      setCalculate("");
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    makeAPICall();
  }, []);

  function receiveTranscribe() {
    fetch(
      "http://127.0.0.1:5000/transcribe",
      {
        method: "POST",
      },
      { mode: "cors" }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setPosts(data);
        setActual(data.actual_transcription);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  function receiveCalculate() {
    fetch(
      "http://127.0.0.1:5000/calculate",
      {
        method: "GET",
      },
      { mode: "cors" }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setPosts(data);
        setActual(data.actual);
        setCalculate(data.calculate);
        setExpected(data.expected);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  return (
    <div className="container mx-auto">
      <div
        className=" mt-5 rounded border-2 p-2  "
        style={{ minHeight: "96px" }}
      >
        <p>{expected}</p>
      </div>

      <div className=" mt-2">
        <Recorder />
        <div
          className=" mt-5 p-2 rounded border-2"
          style={{ minHeight: "96px" }}
        >
          <p>{actual}</p>
        </div>
        <button
          type="button"
          className="mt-2 text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
          onClick={receiveTranscribe}
        >
          Transcribe
        </button>
      </div>

      <div className=" mt-2">
        <div
          className=" mt-5 rounded border-2 p-2"
          style={{ minHeight: "96px" }}
        >
          <p>{calculate}</p>
        </div>
        <button
          type="button"
          className=" mt-2 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          onClick={receiveCalculate}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default RecorderUI;
