import React from 'react';

import {GoLocation} from 'react-icons/go'
import { Container, useScrollTrigger } from '@mui/material';

export const HomeSection: React.FC = () => {
  const trigger = useScrollTrigger()
  console.log(`@@@@@ [LOG] ${new Date().toLocaleString()}  -> trigger`, trigger)
  return (
    <Container id="home" key={"home"} sx={{width: '100%', height: '100vh'}}> 
      {/* <Row>
        <Col xxl={12}>
          <h1>{"Hi I'm Lucas"}</h1>
        </Col>
        <Col xxl={12}>
          <h4>{"Full-Stack developer, passionated for JavaScript stacks"}</h4>
        </Col>
        <Col xxl={12}>
          <LocationContainer>
            <GoLocation color='#92938a'/>        
            {"São Paulo, Brazil"}
          </LocationContainer>
        </Col>
      </Row> */}
    </Container>
  );
}
