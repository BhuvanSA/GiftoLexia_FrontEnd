"use client";
import { useState } from "react";
import EntryFrom from "../components/EntryForm";
import SelectTest from "../components/SelectTest";

export default function Page() {
  const [vEntry, setVEntry] = useState(false);

  return (
    <>
      <EntryFrom setter={setVEntry} />
      {vEntry && <SelectTest />}
    </>
  );
}
