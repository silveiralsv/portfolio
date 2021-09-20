import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  padding: 1.5rem 0rem;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: linear-gradient(158.71deg, rgba(255, 255, 255, 0.208) -100%, rgba(255, 255, 255, 0.0208) 100%);

  border: 1px solid;
  border-image-source: linear-gradient(169.15deg, rgba(255, 255, 255, 0.032) 0%, rgba(238, 237, 237, 0.2) 96.79%);
`

export const SocialMediaContainer = styled.div`
  display: flex;
  div+div{
    margin-left: 25%;
  }
`

export const NavContainer = styled.div`
 display: flex;
 position: absolute;

 right: 1.5rem;

 margin-left: 15%;
 svg+svg {
   margin-left: 10px;
 }

 svg {
   width: 1.5rem;
   height: 1.5rem;
   color: var(--gray-600);
   cursor: pointer;

   &:hover {
    color: ${lighten(0.25, '#7A748E')};
   }

   transition: color, 0.2s;

 }
`



