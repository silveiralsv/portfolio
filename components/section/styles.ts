import { Carousel } from 'antd'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  .slick-dots, .slick-dots-left {
    button {
      background: var(--gray-600) !important;
    }
    
    .slick-active{
      button {
        background: var(--gray-400) !important;
      }
    }

  }
`





