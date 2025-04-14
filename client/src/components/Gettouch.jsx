import React, { useState } from "react";

export default function Gettouch() {
  const [data, SetData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
  }



  return (
    <div className="flex flex-col items-center justify-center px-4 py-6 sm:px-8 md:px-12 lg:px-16">
      <div className="w-full max-w-4xl mt-5 flex flex-col lg:flex-row gap-6 items-center bg-blue-100/20 border-white shadow-md text-justify rounded-lg p-6">
        {/* image */}
        <img
          src={"https://media1.popsugar-assets.com/files/thumbor/BlQPN5hQPBFt76sKB_loxwMG29k=/fit-in/792x594/top/filters:format_auto():upscale()/2020/04/06/688/n/1922729/tmp_HxkYDk_c61ff5c33a8bbdf6_PS18_Diggy_Popstock_1066.jpg"}
          alt=""
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-1/2 rounded-md"
        />
        {/* get in touch */}
        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-4xl font-bold">Get in Touch</h1>
            {/* name */}
            <label className="text-lg font-medium">Name</label>
            <input
              type="text"
              placeholder="ENTER YOUR NAME"
              value={data.name}
              onChange={(e) => {
                SetData({ ...data, name: e.target.value });
              }}
              className="text-sm px-3 py-2 outline-none bg-gray-100 border rounded-md"
            />
            {/* email */}
            <label className="text-lg font-medium">Email</label>
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              value={data.email}
              onChange={(e) => {
                SetData({ ...data, email: e.target.value });
              }}
              className="text-sm px-3 py-2 outline-none bg-gray-100 border rounded-md"
            />
            {/* talk */}
            <label className="text-lg font-medium">Talk to Us</label>
            <textarea
              value={data.comment}
              onChange={(e) => {
                SetData({ ...data, comment: e.target.value });
              }}
              className="text-sm px-3 py-2 h-24 outline-none bg-gray-100 border rounded-md resize-none"
            />
            {/* button */}
            <button
              type="submit"
              className="bg-gray-900 text-white rounded-2xl px-4 py-2 self-center md:self-end"
            >
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
