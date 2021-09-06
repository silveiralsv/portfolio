import styled from 'styled-components'
import {darken} from 'polished'

export const Container = styled.div`
  


  button {
    background-color: var(--green-600);
    color: var(--white);
    font-weight: 700;
    
    border: 0;
    padding: 16px 147px;

    display: flex;
    align-items: center;

    svg {
      margin-right: 0.25rem;
    }

    &:hover {
      background-color: ${darken(0.2, '#49AB6C')};
    }
    
    transition: background-color, 0.2s;
  }

  
`



