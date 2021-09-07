import React from 'react';
import { FiPlus, FiHome, FiGithub, FiLinkedin } from 'react-icons/fi'

export type IconTypes = 'FiPlus' | 'FiHome' | 'FiGithub' | 'FiLinkedin'

export const renderIcon = (icon: IconTypes) => {
  switch (icon) {
    case 'FiPlus':    return <FiPlus/>
    case 'FiHome':    return <FiHome/>
    case 'FiGithub':  return <FiGithub/>
    case 'FiLinkedin':  return <FiLinkedin/>
    default:        break
  }
}

