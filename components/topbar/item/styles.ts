import styled from 'styled-components'
import {lighten} from 'polished'

export const Container = styled.div`
  position: relative;  
  cursor: pointer;

  span {
    &:hover {
      color: ${lighten(0.25, '#7A748E')};
    }
  }
`

export const SelectedLine = styled.div`
  position: absolute;  
  height: 0.20rem;
  width: 100%;
  border-radius: 0 0 4px 4px;
  bottom: -1;
  background-color: var(--red-600);
`

type ItemNameProps = {
  isActive: boolean
}

export const ItemName = styled.a<ItemNameProps>`
  color: ${(props) => props.isActive ? 'var(--red-600)' : 'var(--gray-600)'};
  font-weight: 800px;
  font-size: 1.15rem;
  transition: color, 0.2s;
`