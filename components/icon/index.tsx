import React from 'react';
import { FiPlus, FiHome, FiGithub, FiLinkedin } from 'react-icons/fi'

export type IconTypes = 'FiPlus' | 'FiHome' | 'FiGithub' | 'FiLinkedin'

export const renderIcon = (icon: IconTypes, onClick: (() => void) | undefined) => {
  switch (icon) {
    case 'FiPlus':    return <FiPlus onClick={onClick}/>
    case 'FiHome':    return <FiHome onClick={onClick}/>
    case 'FiGithub':  return <FiGithub onClick={onClick}/>
    case 'FiLinkedin':  return <FiLinkedin onClick={onClick}/>
    default:        break
  }
}

