import type { NextPage } from 'next'

import {Container, SectionContainer} from './styles'

const About: NextPage = () => {
  return (
    <SectionContainer>
    <Container>
    <h1>Frontend</h1>
      <span>In-depth knowledge with Frontend developing. Creating high performance responsive apps looking to learn and apply new tools available on the market</span>
      <br/>

      <span>Working tools</span>
      
      <li>JavaScript</li>
      <li>CSS</li>
      <li>HTML</li>
      <li>Redux</li>
      <li>NextJS</li>
      <li>React Hooks</li>
      <li>Webpack</li>
      <li>Testing frameworks like Mocha and Jest</li>
      <li>Agile software development methodologies</li>
      <li>CI/CD with Gitflow and GitActions</li>
    </Container>

    <Container>
      <h1>Mobile</h1>
    </Container>
    <Container>
    <span>I have been working with NodeJS and experiencing dif high performance responsive apps looking to learn and apply new tools available on the market</span>
      <br/>

      <span>Working tools</span>
      
      <li>JavaScript</li>
      <li>CSS</li>
      <li>HTML</li>
      <li>Redux</li>
      <li>React Hooks</li>
      <li>Webpack</li>
      <li>Testing frameworks like Mocha and Jest</li>
      <li>Agile software development methodologies</li>
      <li>CI/CD with Gitflow and GitActions</li>
    </Container>
    </SectionContainer>
  )
}

export default About
