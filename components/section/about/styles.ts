import styled from 'styled-components'

export const Container = styled.div`
  padding: 15% 15%;
  width: 100%;
  height: 100vh;
  h1 {
    font-size: 5rem;
    color: var(--white)
  }

  span {
    font-size: 1.2rem;
    color: var(--gray-500)
  }
`

export const ButtonsContainer = styled.div`
margin-top: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .about-primary, .about-secondary {
    width: 45% !important;
  }
  
`

