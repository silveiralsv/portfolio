import React, { useEffect, useState } from 'react';
import { Container, PageSpacer } from './styles';
import {Item} from './item'
import { useRouter } from 'next/router'

export const NavBar: React.FC = ({children}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState<string>('Home');

  const router = useRouter()

  const handleOnMouseOver = () => {
    setIsExpanded(!isExpanded);
    console.log('here', activeItem)
  }

  

  useEffect(() => {
    setActiveItem(router.pathname)
  }, [router.pathname])

  
  return (
    <>
    <Container onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOver}>
      <Item to="/" icon="FiHome" label="Home" isActive={activeItem === '/'} />
      <Item to="/teste" icon="FiPlus" label="Projects" isActive={activeItem === '/teste'} />
      <Item to="/ui" icon="FiPlus" label="About" isActive={activeItem === '/'} />
      <Item to="/ai" icon="FiPlus" label="Contact" isActive={activeItem === '/'} />
    </Container>
    <PageSpacer isExpanded={isExpanded}>
      {children}
    </PageSpacer>
    </>
  );
}
