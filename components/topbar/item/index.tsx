import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { Container, SelectedLine, ItemName } from './styles';

type ItemProps = {
  refId: string
}

export const Item: React.FC<ItemProps> = ({ children, refId}) => {
  const [isActive, setIsActive] = useState(false)
  const router = useRouter()

  const handleItemClick = (to: string) => {
    router.push(to)
  }

  useEffect(() => (
    setIsActive(router.pathname === refId)
  ), [refId, router.pathname])

  
  return (
    <Container>
      <ItemName isActive={isActive} onClick={() => handleItemClick(refId)}>{children}</ItemName>
      {isActive && <SelectedLine />}
    </Container>
  );
}
