import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    country: "",
    state: "",
    city: "",
    pincode:""
  });
const Nevigate=useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();
     try{
      console.log(formData);

      const response=await axios.post('http://localhost:3000/register',formData)

      const data=response.data;
      console.log(response);
      Nevigate("/login")
      
     }
     catch(error){
      console.log(error.message)
     }

  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white-100 p-4">
      {/* Registration Form */}
      <div className="bg-white shadow-md rounded-xl p-6 w-full md:w-1/2 max-w-lg ml-10">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-semibold text-center text-[#132958] mb-2">
            Register
          </h1>
          <h2 className="text-sm font-medium text-center mb-4">
            Welcome! Please enter your details
          </h2>

          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Inputs */}
            <div className="flex flex-col">
              <label className="text-lg font-medium mt-2 mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your name" required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="border border-gray-400 rounded-lg text-sm px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#132958]"
              />

              <label className="text-lg font-medium mt-2 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email" required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="border border-gray-400 rounded-lg text-sm px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#132958]"
              />

              <label className="text-lg font-medium mt-2 mb-1 ">Phone</label>
              <input
                type="text"
                placeholder="Enter your phone number" required
                value={formData.phone} 
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="border border-gray-400 rounded-lg text-sm px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#132958]"
              />
              <label className="text-lg font-medium mt-2 mb-1 ">Password</label>
              <input
                type="password"
                placeholder="Enter your password" required
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="border border-gray-400 rounded-lg text-sm px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#132958]"
              />


            </div>

            {/* Right Inputs */}
            <div className="flex flex-col">
              <label className="text-lg font-medium   mb-1 md:mt-2   ">Country</label>
              <input
                type="text"
                placeholder="Enter your country" required
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                className="border border-gray-400 rounded-lg text-sm px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#132958]"
              />

              <label className="text-lg font-medium mt-2 mb-1">State</label>
              <input
                type="text"
                placeholder="Enter your state" required
                value={formData.state}
                onChange={(e) =>
                  setFormData({ ...formData, state: e.target.value })
                }
                className="border border-gray-400 rounded-lg text-sm px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#132958]"
              />

              <label className="text-lg font-medium mt-2 mb-1">City</label>
              <input
                type="text"
                placeholder="Enter your city" required
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                className="border border-gray-400 rounded-lg text-sm px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#132958]"
              />
               <label className="text-lg font-medium mt-2 mb-1">Pincode</label>
              <input
                type="text"
                placeholder="Enter your pincode"required
                value={formData.pincode}
                onChange={(e) =>
                  setFormData({ ...formData, pincode: e.target.value })
                }
                className="border border-gray-400 rounded-lg text-sm px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#132958]"
              />
            </div>
          </div>

          {/* Register Button */}
          <button className="bg-[#132958] text-white rounded-lg mt-4 p-2 w-full hover:bg-[#0f1e48] transition duration-200">
            Register
          </button>

          {/* OR Divider */}
          <h1 className="text-center mt-3 text-gray-500">OR</h1>

          {/* Login Link */}
          <h1 className="text-center font-medium">
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className="text-[#132958] hover:underline">Login</span>
            </Link>
          </h1>
        </form>
      </div>

      {/* Registration Image  */}
      <div className="hidden md:flex md:w-1/2 justify-center items-center ml-20">
        <img
          src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?semt=ais_hybrid"
          alt="Register illustration"
          className="w-full max-w-fit"
        />
      </div>


    </div>
  );
}
