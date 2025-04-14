import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"


export default function Login() {
  const [message,setMessage]=useState("")
  const [otpSent, setOtpSent] = useState(false);
  const [useOtpLogin, setUseOtpLogin] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    otp:""
  });
  const Nevigate=useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData)
    //password part
    try{
    const response= await axios.post('http://localhost:3000/login',formData);

        if(response.status==200){
          localStorage.setItem("token",response.data.token)
          localStorage.setItem("id",response.data.user._id)
          console.log(response.data)
        Nevigate("/dashboard")
        
      }
    }
    catch(err){
      setMessage("Invaild Email or password")
    }
  }
  //
  async function handleSendOtp() {
    if (!formData.email) {
      setMessage("Please enter an email to receive OTP.");
      return;
    }
    try {
      console.log(formData.email)
      await axios.post("http://localhost:3000/send-otp",formData);
      setOtpSent(true);
      setMessage("OTP sent successfully!");
    } catch (err) {
      setMessage("Failed to send OTP. Try again.");
    }
  }
  //send
 
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white p-4">
      {/* Login Form */}
      <div className="bg-white shadow-md rounded-xl p-6 w-full md:w-1/3">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-semibold  text-center text-[#132958] mb-2">
            Login
          </h1>
          <h2 className="text-sm font-medium text-center mb-4">
            Welcome Back! Please enter your details
          </h2>

          {/* Email */}
          <label className="text-lg font-medium mt-2 mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email" required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border border-gray-400 rounded-lg text-sm px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#132958]"
          />

          {/* Login with OTP Checkbox */}
          <div className="flex items-center gap-2 mt-3">
            <input type="checkbox" id="otpLogin" className="h-4 w-4" onChange={()=>setUseOtpLogin(!useOtpLogin)} />
            <label htmlFor="otpLogin" className="text-md font-medium">
              Login with OTP
            </label>
          </div>

          {/* Password */}
          {!useOtpLogin && (
            <>
            <label className="text-lg font-medium mt-4 mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password" required
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="border border-gray-400 rounded-lg text-sm px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#132958]"
          />

            </>
          )}
          {/* otp login */}
          {useOtpLogin &&(
            <>
            <label className="text-lg font-medium mt-4 mb-1">Enter OTP</label>
              <input
                type="text"
                placeholder="Enter OTP"
                required
                value={formData.otp}
                onChange={(e) => setFormData({...formData, otp: e.target.value})}
                className="border border-gray-400 rounded-lg text-sm px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#132958]"
              />
              <button type="button" onClick={handleSendOtp} className="text-blue-600 underline mt-2">
                {otpSent ? "Resend OTP" : "Send OTP"}
              </button>
          </>)}

          {/* Login Button */}
           {message!==""&& <p className="text-center text-red-500 mt-2">{message}</p>}
          <button type="submit" className="bg-[#132958] text-white rounded-lg mt-4 p-2 w-full hover:bg-[#0f1e48] transition duration-200">
            Login
          </button>
          <h1 className="text-center mt-3 text-gray-500">OR</h1>

          {/* Register Link */}
          <h1 className="text-center font-medium">
            New User?{" "}
            <Link to={"/Register"}>
              <span className="text-[#132958] hover:underline">Register</span>
            </Link>
          </h1>
        </form>
      </div>

      {/* Login Image */}
      <div className="hidden md:flex md:w-1/2 justify-center items-center">
        <img
          src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?semt=ais_hybrid"
          alt="Login illustration"
          className="w-full max-w-fit rounded-2xl"
        />
      </div>
    </div>
  );
}
