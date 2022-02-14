import React from 'react';
import Image from 'next/image'
import home from '../assets/home.svg'
import { ContactBtn } from '../ContactBtn';
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';


export const HomeSection: React.FC = () => {
  return (
  <div className="flex flex-col lg:flex-row items-center p-8 h-full">
    <div className='flex h-[50vh] lg:h-[90vh] animate-unfold-slow'>
      <Image src={home} alt='home' layout='intrinsic'/>
    </div>


    <div className="text-center text-5xl text-gray-300 mx-auto my-auto ">
      {"Welcome, I am Lucas"}
      <p className='text-3xl'>
        <span className="mx-3 mt-5 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-500 relative inline-block">
          <span className='relative text-white'>
            Creative
          </span>
        </span>
        Full-Stack Developer</p>

      <div className='flex items-center justify-center mt-5 space-x-5'>
        <ContactBtn icon={<FaLinkedin className='w-8 h-8 -skew-x-6' />} />
        <ContactBtn icon={<FaGithub className='w-8 h-8 -skew-x-6' />} />
        <ContactBtn icon={<FiMail className='w-8 h-8 -skew-x-6' />} />
      </div>

    </div>


  </div>
) }