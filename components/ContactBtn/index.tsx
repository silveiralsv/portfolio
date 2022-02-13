import React from 'react';

// import { Container } from './styles';

type ContactButnProps = {
  icon: React.ReactNode
}

export const ContactBtn: React.FC<ContactButnProps> = ({icon}) => {
  return (<div className="p-3 bg-gray-600 skew-x-6 rounded hover:cursor-pointer hover:scale-110 transition-all delay-75">
      {icon}
     </div>);
}

