import React, { useState } from "react";
import { SkillsContainer } from "../Skills";

export const About: React.FC = () => {
  return (
    <div className="h-screen w-screen  bg-gray-300 space-y-16 p-8">
      <span className="flex  text-center text-gray-800 text-3xl mx-auto max-w-fit py-3 scroll-px-11 md:px-24 tracking-[.50em] border-gray-800 border-4 ">
        SKILLS
      </span>
      <div className="px-3 md:px-24">
        <SkillsContainer />
      </div>
    </div>
  );
};
