"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Page() {
  const form_id = localStorage.getItem("form_id");
  const router = useRouter();
  // localStorage.removeItem("form_id");
  if (form_id === null) router.push("/EntryForm");
  else {
    return <div className="text-center mt-5">Listening Test Goes Here</div>;
  }
}
