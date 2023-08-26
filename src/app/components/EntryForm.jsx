"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function EntryForm(props) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("English");
  const [age, setAge] = useState("");
  const [tandc, setTandc] = useState(false);
  const [sBtn, setSBtn] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, name, language, age, tandc);
    setSBtn(false);
    axios
      .post(
        "http://127.0.0.1:5000/submitEntryForm",
        JSON.stringify({
          email: email,
          name: name,
          language: language,
          age: age,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        console.log("posteed", res["data"]["id"]);
        localStorage.setItem("form_id", res["data"]["id"]);
        props.setter(true);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="pt-5">
      <h1 className="text-center text-4xl font-bold my-10 hero__title">
        Early Screening CheckList
      </h1>
      <p className="text-center mb-10 hero__subtitle">Enter child details</p>

      <form className="mx-20" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
          >
            Your email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500 light:shadow-sm-light"
            placeholder="name@email.com"
            value={email}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
          >
            Your childs name
          </label>
          <input
            type="name"
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500 light:shadow-sm-light"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="languages"
            className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
          >
            Select language
          </label>
          <select
            id="languages"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
            onChange={(e) => setLanguage(e.target.value)}
            value={language}
            required={true}
            placeholder="Select a language"
          >
            <option disabled>Select a language</option>
            <option>Test</option>
            <option>English</option>
            <option>Hindi</option>
            <option>Kannada</option>
            <option>Marathi</option>
            <option>Malyalam</option>
            <option>Tamil</option>
            <option>Telugu</option>
            <option>Punjabi</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="agegroup"
            className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
          >
            Select childs age group
          </label>
          <select
            id="agegroup"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
            onChange={(e) => setAge(e.target.value)}
            value={age}
            required={true}
          >
            <optgroup label="Select an option" disabled>
              <option value="" hidden>
                Select an option
              </option>
            </optgroup>
            <optgroup label="Age Groups">
              <option value="3-5">3 - 5 years</option>
              <option value="5-8">5 - 8 years</option>
              <option value="8-12">8 - 12 years</option>
            </optgroup>
          </select>
        </div>

        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 light:bg-gray-700 light:border-gray-600 light:focus:ring-blue-600 light:ring-offset-gray-800 light:focus:ring-offset-gray-800"
              onChange={(e) => setTandc(!tandc)}
              value={tandc}
              required
            />
          </div>
          <label
            htmlFor="terms"
            className="ml-2 text-sm font-medium text-gray-900 light:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="https://giftolexia.com/terms-and-condition/"
              className="text-blue-600 hover:underline light:text-blue-500"
              target="_blank"
            >
              terms and conditions
            </a>
          </label>
        </div>
        <button
          type="submit"
          // disabled={!(tandc && sBtn)}
          className="disabled:bg-gray-600 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EntryForm;
