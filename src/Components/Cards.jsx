import React from 'react'
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] max-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="Single" />
                <h2 className='text-center text-2xl font-bold py-8'>Single User</h2>
                <p className='text-center font-bold text-4xl'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send upto 2 GB</p>
                </div>
                <button className='bg-[#00df9a] rounded-md w-[200px] font-medium my-6 mx-auto py-3 text-black'>Start Trial</button>
            </div>
            <div className='w-full bg-gray-100 shadow-xl flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto bg-transparent mt-[-3rem] bg-white' src={Double} alt="Single" />
                <h2 className='text-center text-2xl font-bold py-8'>Single User</h2>
                <p className='text-center font-bold text-4xl'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send upto 2 GB</p>
                </div>
                <button className='bg-black text-[#00df9a] rounded-md w-[200px] font-medium my-6 mx-auto py-3'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="Single" />
                <h2 className='text-center text-2xl font-bold py-8'>Single User</h2>
                <p className='text-center font-bold text-4xl'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send upto 2 GB</p>
                </div>
                <button className='bg-[#00df9a] rounded-md w-[200px] font-medium my-6 mx-auto py-3 text-black'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards