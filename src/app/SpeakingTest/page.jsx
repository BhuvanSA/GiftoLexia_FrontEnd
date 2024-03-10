"use client";
import RecorderUI from "./RecorderUI";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import ChooseTest from "../components/ChooseTest";

export default function Page() {
  // const form_id = localStorage.getItem("form_id");
  const form_id = "99";
  const router = useRouter();
  // localStorage.removeItem("form_id");
  if (form_id === null) router.push("/EntryForm");
  else {
    return (
      <>
        <RecorderUI />
        <ChooseTest />
      </>
    );
  }
}
