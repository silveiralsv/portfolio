import React from 'react';
import Image from 'next/image'

import hero from '../assets/hero.svg'
import home from '../assets/home.svg'
import { ContactBtn } from '../ContactBtn';
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';


export const HomeSection: React.FC = () => {
  return (
  <div className=" snap-start w-screen h-screen flex flex-col md:flex-row justify-between ">
    <div className='flex h-1/2 md:h-screen w-fit  py-5'>
      <Image src={home} alt='home' />
    </div>


    <span className=" grow text-center my-auto text-5xl text-gray-300">
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

    </span>


  </div>
) }