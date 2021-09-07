import styled from 'styled-components'
import {lighten} from 'polished'

export const Container = styled.div`
  position: relative;  
  cursor: pointer;

  &:hover {
    span {
      color: ${lighten(1, '#7A748E')};
    }
  }

`

export const SelectedLine = styled.div`
  position: absolute;  
  height: 1.5px;
  width: 100%;
  border-radius: 0 0 4px 4px;
  bottom: 0;
  background-color: white;
`

type ItemNameProps = {
  isActive: boolean
}

export const ItemName = styled.a<ItemNameProps>`
  color: ${(props) => props.isActive ? 'var(--white)' : 'var(--gray-600)'};
  font-weight: 700px;
  
  transition: color, 0.2s;

`