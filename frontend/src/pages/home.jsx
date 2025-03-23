import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <div className= 'bg-cover bg-center bg-[url("https://images.unsplash.com/photo-1588260369134-d64f66c5730b?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] h-screen pt-8  flex w-full justify-between flex-col bg-red-400'>
      <img className='w-16 ml-8'  src="/img/Uberlogo.png" alt="Uber Logo" />

        <div className='bg-white pb-7 py-5 px-4'>
            <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
            <Link to='/login' className='flex items-center justify-center w-full bg-black text-bold text-white py-3 rounded mt-4'>continue</Link>
        </div>  
      </div>
    </div>
  )
}

export default Home;