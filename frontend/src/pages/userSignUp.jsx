import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const UserSignUp = () => {
  const [email , setEmail]= useState('');
  const [password , setPassword]= useState('');
  const [firstName , setFirstName]= useState('');
  const [lastName , setLastName]= useState('');
  const [userData, setUserData]= useState({});
  const submitHandler=(e)=>{
    e.preventDefault()
    setUserData({
      fullName:{
        firstname: firstName,
        lastname: lastName
      },
      email:email,
      password:password
    })
    

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  }
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <img className="w-16 mb-10" src="/img/Uberlogo.png" alt="Uber Logo" />
          <h3 className="text-base font-medium mb-2 ">what's your name</h3>
          <div className="flex justify-between gap-8">
          <input
            required
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="bg-[#1d1b1b15] mb-5  rounded px-4 py-2  w-1/2 text-lg placeholder:text-base"
            placeholder="First name"
          />
          <input
            required
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="bg-[#1d1b1b15] mb-5 rounded px-4 py-2  w-1/2 text-lg placeholder:text-base"
            placeholder="Last name"
          />
          </div>
          <h3 className="text-base font-medium mb-2 ">what's your e-mail</h3>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#1d1b1b15] mb-5 rounded px-4 py-2 w-full  text-lg placeholder:text-base"
            placeholder="email@example.com"
          />
          <h3 className="text-base  font-medium mb-2">Enter Password</h3>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#1d1b1b15] mb-7 rounded px-4 py-2 w-full  text-lg placeholder:text-base"
            placeholder="password"
          />
          <button className="bg-[#111] mb-2 text-white font-semibold rounded px-4 py-2 w-full border text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          Already have a account?{" "}
          <Link to="/login" className="text-blue-600">
            
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className='text-[12px] leading-tight'>This site is protected by reCaptcha and the <span className='underline'>Google privacy Policy</span> and <span className='underline'>Terms of services apply</span></p>
      </div>
    </div>
  )
}

export default UserSignUp;