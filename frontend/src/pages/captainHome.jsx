import React from 'react'

const captainHome = () => {
  return (
   <div className='h-screen relative'>
    <img className="w-16 absolute ml-3 mt-3 mb-10" src="/img/Uberlogo.png" alt="Uber Logo" />
    <div className='h-screen w-screen'>
    {/* imsge for temporary use */}
    <img className="h-full w-full object-cover" src="https://www.uberpeople.net/attachments/20180725_222331-jpg.246575/"/>
    </div>
    <div className='bg-white h-screen flex flex-col justify-end absolute top-0 w-full'>
    <div className='h-[30%] p-5 bg-white'>
    <h4 className='text-2xl font-semibold'>Find a trip</h4>
    <form>
      <input className='bg-[#eee] px-10 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder="Add a Pickup Location" />
      <input className='bg-[#eee] px-10 py-2 text-base rounded-lg mt-3 w-full' type="text" placeholder="Add a Dropoff Location" />
    </form>
    </div>
    <div className='h-0 bg-red-500 p-5 '></div>
    </div>
   </div>
  )
}

export default captainHome
