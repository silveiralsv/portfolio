import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 5rem;
  /* position: sticky;
  top: 0 */
  
`

export const SocialMediaContainer = styled.div`
  display: flex;
  div+div{
    margin-left: 25%;
  }
`

export const NavContainer = styled.div`
 display: flex;

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
    color: ${lighten(1, '#7A748E')};
   }

   transition: color, 0.2s;

 }
`



