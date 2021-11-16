import type { NextPage } from "next";
import { useRef, useState } from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import Spinner from "../components/spinner";

const Home: NextPage = () => {
  const [url, setUrl] = useState();
  const [loading, setLoading] = useState(false);
  const urlInputRef = useRef<HTMLInputElement>(null);

  function onUrlSubmit() {
    setLoading(true);
    const url = urlInputRef?.current?.value;
    console.log(url);
  }

  return (
    <div className="flex min-h-screen md:p-8 p-2 justify-center bg-red-50">
      <div className="w-full md:w-4/6 lg:w-4/6  h-auto md:p-10 p-5">
        <h1 className="text-center text-2xl md:text-4xl font-bold">
          QR Code Generator
        </h1>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="text"
            placeholder="https://google.com"
            ref={urlInputRef}
            className="border-2 w-full md:w-auto py-1 px-5 rounded-md border-gray-300 active:border-gray-500 flex-1 transition-all md:mr-5"
          />
          <button
            className="flex-shrink-0 text-white bg-purple-500 border-0 py-1 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg sm:mt-0 active:translate-y-1 transition-all"
            onClick={onUrlSubmit}
          >
            Create QR
          </button>
        </div>
        {loading && <Spinner />}
      </div>
    </div>
  );
};

export default Home;
