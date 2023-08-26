import React, { useRef, useState } from "react";

const Recorder = () => {
  const [recording, setRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);
  const mediaRecorderRef = useRef(null);

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(function (mediaStream) {
        const mediaRecorder = new MediaRecorder(mediaStream);
        mediaRecorderRef.current = mediaRecorder;
        setRecording(true);

        mediaRecorder.addEventListener("dataavailable", function (event) {
          if (event.data.size > 0) {
            setAudioChunks((prevChunks) => [event.data]);
          }
        });

        mediaRecorder.start();
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && recording) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  const uploadRecording = () => {
    if (audioChunks.length === 0) {
      console.log("No recording available.");
      return;
    }

    const blob = new Blob(audioChunks, { type: "audio/mp3" });
    const formData = new FormData();
    formData.append("audio_data", blob, "recording.mp3");

    fetch("http://127.0.0.1:5000/record", {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <button
        type="button"
        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        onClick={startRecording}
      >
        Record
      </button>

      <button
        type="button"
        className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
        onClick={stopRecording}
      >
        Stop
      </button>

      <button
        type="button"
        className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
        onClick={uploadRecording}
      >
        Upload
      </button>
    </div>
  );
};

export default Recorder;
