import React from 'react';

type SkillsProps = {
  icon: React.ReactNode;
  alt: string;
  text: string;
}

export const Skills: React.FC<SkillsProps> = ({icon, alt, text}) => {
  return (
      <span className='flex snap-center tracking-[0.35em] font-mono flex-col items-center'>
      {icon}
      <span className="mt-3">{text}</span>
    </span>
  );
}
