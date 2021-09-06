/* eslint-disable @next/next/link-passhref */
import React from 'react';
import Link from 'next/link'
import { Container, ItemName } from './styles';
import { IconTypes, renderIcon} from '../../icon'

type IITemProps = {
  to:string;
  icon: IconTypes
  label: string;
  isActive: boolean
}

export const Item: React.FC<IITemProps> = ({to, label, icon, isActive }) => {
  return (
    <Container isActive={isActive}>
      {icon && renderIcon(icon)}
      <Link href={to}>
        <ItemName>{label}</ItemName>
      </Link>
    </Container>
  );
}
