import React from "react";

export default function About() {
  return (
    <div className="w-full px-6 md:px-5 flex flex-col gap-6">
      {/* Content */}
      <div className="flex flex-col items-center mt-10 text-left">
        <h1 className="text-[#123] text-3xl font-bold mb-4 uppercase text-center">Who WE Are</h1>
        <p className="max-w-3xl text-center text-lg mb-6 font-medium">
          We are a dedicated team empowering women through technology. As creators of an innovative women’s safety app, we are committed to building a safer, more secure world—where women can move with confidence, anytime, anywhere.
        </p>

        <h1 className="text-[#123] text-3xl font-bold mb-4 text-center">WHAT WE DO</h1>
        <p className="max-w-3xl text-center text-lg mb-6 font-medium">
          At Adin, we craft innovative solutions to redefine women’s safety. Our powerful app offers real-time alerts, location sharing, and instant access to help when needed most. Our mission is to empower women and ensure safety is never a question—only a guarantee.
        </p>
      </div>

      {/* Image Section */}
      <div className="mb-6 flex items-center justify-center">
        <img
          src="https://img.freepik.com/free-photo/woman-working-while-pregnant_23-2149247983.jpg"
          alt="Banner Image"
          className="rounded-lg w-full max-w-lg object-cover transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        />
      </div>

      {/* Services */}
      <div className="flex flex-col items-center text-left">
        <h1 className="text-[#123] text-3xl font-bold mb-4 text-center">WE PROVIDE</h1>
        <p className="max-w-3xl text-center text-lg font-medium mb-4">
          We provide comprehensive safety solutions, real-time emergency assistance, self-defense tips, location tracking, and a supportive community to ensure the well-being of women everywhere.
        </p>
        <ul className="max-w-3xl text-lg mb-6 font-medium text-center  pl-6">
          <li>-Safety alarm</li>
          <li>-Live Location tracking</li>
          <li>-Automatic location sharing with authorities</li>
          <li>-Real-time emergency call/messages</li>
          <li>-Customizable alerts and notifications</li>
          <li>-Public awareness campaigns</li>
          <li>-Self-defense training sessions</li>
          <li>-24/7 helpline</li>
        </ul>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-[#040F25] p-6 md:p-10 rounded-2xl shadow-lg text-white max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission */}
          <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-start justify-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Mission</h2>
            <p className="text-gray-300  text-xl">
              "To empower women by providing innovative, accessible, and reliable safety solutions, fostering confidence, independence, and peace of mind in every journey they take."
            </p>
          </div>
          <img
            src="https://media.licdn.com/dms/image/v2/D5612AQF0vHqox7qczw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1692649332404?e=2147483647&v=beta&t=37ZLdyuMaBx19UYJBZqVz8uyeavRVoH-3uhF0g-GA0g"
            alt="Mission Image"
            className="rounded-lg w-full object-cover transition-transform duration-300 hover:scale-x-105 hover:shadow-xl"
          />

          {/* Vision */}
          <img
            src="https://img.freepik.com/premium-photo/whiteboard-woman-brainstorm-boardroom-idea-strategy-planning-office-management-project-vision-business-startup-communication-explain-feedback-female-person_590464-363552.jpg"
            alt="Vision Image"
            className="rounded-lg w-full object-cover  transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          />
          <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-start justify-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Vision</h2>
            <p className="text-gray-300 text-xl">
              "To create a world where every woman feels safe, supported, and empowered, using technology to bridge the gap between security and freedom, ensuring safety becomes a universal right, not a privilege."
            </p>
          </div>
        </div>
      </div>

      {/*Our team */}
      <div className="bg-amber-100 flex flex-col items-center p-2 mx-15 rounded-2xl md:flex-row gap-4 md:pt-13">
        <div className="border-white shadow-lg  p-4 w-1/2 rounded-2xl  md:h-20 m-2 ml-7  transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
         <h1>Member1</h1></div>
        <div className="border-white shadow-lg  p-4 w-1/2 rounded-2xl md:h-20 m-2  transition-transform duration-200 hover:scale-105 hover:shadow-2xl ">
        <h1>Member1</h1></div>
        <div className="border-white shadow-lg  p-4 w-1/2 rounded-2xl md:h-20 m-2  mr-7 transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
        <h1>Member1</h1></div>
      </div>
    </div>
  );
}
