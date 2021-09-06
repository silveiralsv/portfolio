import React from 'react';
import { FiPlus, FiHome } from 'react-icons/fi'

export type IconTypes = 'FiPlus' | 'FiHome'

export const renderIcon = (icon: IconTypes) => {
  switch (icon) {
    case 'FiPlus':  return <FiPlus/>
    case 'FiHome':  return <FiHome/>
    default:        break
  }
}

