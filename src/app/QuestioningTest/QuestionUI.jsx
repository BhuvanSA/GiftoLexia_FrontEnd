import React, { useEffect, useState } from "react";
import axios from "axios";

const QuestionUI = (props) => {
  const [intros, setIntros] = useState();
  const [questions, setQuestions] = useState();
  const [strengths, setStrengths] = useState();
  const language = localStorage.getItem("form_language");
  const age = localStorage.getItem("form_age");

  useEffect(() => {
    get_data();
  }, []);

  function get_data() {
    axios.get(`http://127.0.0.1:5000/survey/${language}/${age}`).then((res) => {
      console.log(res);
      setIntros(res["data"]["intro"]);
      setQuestions(res["data"]["questions"]);
      setStrengths(res["data"]["strengths"]);
    });
  }

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold mb-4">QuestionUI</h1>
        {/* Render each intro */}
        <div>
          {intros &&
            intros.map((intro, index) => <div key={index}>{intro}</div>)}
        </div>

        {/* Render each question */}
        <div>
          {questions &&
            questions.map((question, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-lg font-semibold mb-2">{question.title}</h2>
                <p className="mb-3">{question.question}</p>
                {/* Render question options here */}
                <div className="space-y-2">
                  {question.options.map((option) => (
                    <div key={option.optid} className="flex items-center">
                      <input
                        type="radio"
                        name={`q${question.qid}`}
                        id={`q${question.qid}_${option.optid}`}
                        className="mr-2"
                      />
                      <label htmlFor={`q${question.qid}_${option.optid}`}>
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Render each strength */}
        <div>
          {strengths &&
            strengths.map((strength, index) => (
              <div
                key={index}
                className="bg-green-100 py-2 px-4 rounded-lg mb-2"
              >
                {strength}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionUI;
