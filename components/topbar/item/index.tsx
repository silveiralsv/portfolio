import React from 'react';

import { Container, SelectedLine, ItemName } from './styles';

type ItemProps = {
  isActive: boolean
  refId: string
}

export const Item: React.FC<ItemProps> = ({isActive, children, refId}) => {
  return (
    <Container>
      <ItemName isActive={isActive} href={`#${refId}`}>{children}</ItemName>
      {isActive && <SelectedLine />}
    </Container>
  );
}
