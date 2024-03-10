"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ChooseTest from "../components/ChooseTest";
import QuestionUI from "./QuestionUI";
import ResultUI from "./ResultUI";

export default function Page() {
  const router = useRouter();
  const [form_id, setForm_id] = useState();
  // localStorage.removeItem("form_id");

  useEffect(() => {
    // setForm_id(localStorage.getItem("form_id"));
    setForm_id("77");
  }, []);

  if (form_id === null) router.push("/EntryForm");
  else {
    return (
      <div className="text-center mt-5">
        <QuestionUI />
        <ChooseTest />
      </div>
    );
  }
}
