import React, { useEffect, useState } from "react";

import axios from "axios";

const QuestionUI = (props) => {
  const [intros, setIntros] = useState();
  const [questions, setQuestions] = useState();
  const [strengths, setStrengths] = useState();
  const [selectedOptions, setSelectedOptions] = useState({});
  const [age, setAge] = useState();
  const [got_results, setGot_Results] = useState(false);
  const [results, setResults] = useState();

  useEffect(() => {
    getdata().then(() => setAge(localStorage.getItem("form_age")));
  }, []);

  const getdata = async () => {
    const age_temp = localStorage.getItem("form_age");
    const language = localStorage.getItem("form_language");
    axios
      .get(`http://test.nishithpshetty.cf:8080/survey/${language}/${age_temp}`)
      .then((res) => {
        console.log(res);
        setIntros(res["data"]["intro"]);
        setQuestions(res["data"]["questions"]);
        setStrengths(res["data"]["strengths"]);
      });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const child_name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const age = localStorage.getItem("form_age");
    const language = localStorage.getItem("form_language");
    axios
      .post("http://test.nishithpshetty.cf:8080/survey", {
        selectedOptions,
        age_group: age,
        child_name,
        language,
        email,
      })
      .then((response) => {
        setGot_Results(true);
        setResults(response.data["msg"]);
        // console.log(response.data["msg"]); // Handle the response as needed
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  }

  return (
    <div className="bg-white min-h-screen ">
      <div className="bg-white rounded-lg shadow-md mx-20 my-10 p-3">
        {/* Render each intro */}
        <div className="p-3 bg-gray-100 rounded-lg">
          {intros &&
            intros.map((intro, index) => (
              <div className=" text-2xl font-bold py-2" key={index}>
                {intro}
              </div>
            ))}
        </div>

        <h1 className="text-4xl font-semibold my-10">
          Answer the following questions
        </h1>
        {/* Render each question */}
        <form onSubmit={handleSubmit}>
          <div>
            {questions &&
              questions.map((question, index) => (
                <div
                  key={index}
                  className="mb-6 mx-10 border-2 border-slate-300 rounded-lg p-3"
                >
                  {/* <h2 className="text-lg font-semibold mb-2">{index + 1}.</h2> */}
                  <p className="mb-3 text-xl text-left">
                    {index + 1}. {question.question}
                  </p>
                  {/* Render question options here */}
                  <div className="text-left">
                    {question.options.map((option) => (
                      <div key={option.optid} className="">
                        <input
                          type="radio"
                          name={`q${question.qid}`}
                          id={`q${question.qid}_${option.optid}`}
                          className="mr-2"
                          required
                          onChange={() =>
                            setSelectedOptions((prevSelected) => ({
                              ...prevSelected,
                              [question.qid]: option.optid,
                            }))
                          }
                        />
                        <label htmlFor={`q${question.qid}_${option.optid}`}>
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            <button
              type="submit"
              className="disabled:bg-gray-600 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
        {got_results && (
          <div className="border-2 border-grey-500 text-2xl bg-slate-100 m-2 my-10 p-5 rounded-xl">
            {results}
          </div>
        )}

        <div className="bg-green-100 py-2 px-4 rounded-lg m-2">
          <h1 className="text-4xl font-semibold my-10">
            {" "}
            Some Noticeble Strengths
          </h1>
          {/* Render each strength */}
          {strengths &&
            strengths.map((strength, index) => (
              <div className="text-lg text-left p-2 m-3" key={index}>
                {strength}
                <hr className="mt-3" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionUI;
