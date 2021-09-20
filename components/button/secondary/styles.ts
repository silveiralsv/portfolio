import styled from 'styled-components'
import {darken} from 'polished'

export const Container = styled.div`
  button {
    background-color: var(--gray-600);
    color: var(--white);
    font-weight: 700;
    
    border: 0;
    border-radius: 4px;
    padding: 16px 100px;

    display: flex;
    align-items: center;

    svg {
      margin-right: 0.25rem;
    }

    &:hover {
      background-color: ${darken(0.1, '#7A748E')};
    }

    transition: background-color, 0.2s;
  }
`



