import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Slide,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import React, { useState } from "react";
import { FaMobileAlt, FaNode, FaReact } from "react-icons/fa";
import { ShowOnScroll } from "../transitions";

export const About: React.FC = () => {
  return (
    <>
    <Container
      sx={{
        minWidth: "100%",
        backgroundColor: "#153d65",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ pt: 15 }}
        gutterBottom
      >
        {"Hi, I’m Lucas. Nice to meet you."}
      </Typography>
      <Typography  align="center" sx={{ px: "25%", pb: '15%' }} >
        {
          "Since beginning my journey as a developer nearly 5 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one bug at a time."
        }
      </Typography>

      </Container>
      <Grid container spacing={0.5} sx={{ position: 'sticky', mt: '-10%', px: 5, height: 'fit-content'}}>
        <Grid item xs={4} sx={{display: 'flex'}}>
          <Card  sx={{display: 'flex', flexDirection: 'column'}}>
            <CardMedia
              component="div"
              sx={{
                p: 5,
                display: "flex",
                justifyContent: "center",
                "& svg": { height: "60px", width: "60px" },
              }}
            >
              <FaReact color="#153d65" />
            </CardMedia>
            <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent:"space-between", height: "100%"}}>
            <Container sx={{px: '0 !important', mb: '5rem'}}>

                <Typography
                variant="overline"
                align="center"
                component="div"
                fontWeight={800}
                fontSize={"1.4rem"}                
                >
                Front-end
              </Typography>
              <Typography align="center" component="div" >
                I like to code things from scratch, and enjoy bringing ideas to
                life in the browser.
              </Typography>
                  </Container>
                  <Container sx={{px: '0 !important'}}>

            <Typography
                variant="subtitle1"
                align="center"
                component="div"
                fontWeight={800}
                fontSize={"1.15rem"}
                >
                Technologies
              </Typography>
              <Typography align="center"  component="div" >
                JavaScript, ReactJS, NextJs, WebPack, SASS, LESS, Express,
                MongoDB, Github and more.
              </Typography>
            </Container>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} sx={{display: 'flex'}}>
          <Card sx={{display: 'flex', flexDirection: 'column'}}>
            <CardMedia
              component="i"
              sx={{
                p: 5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "& svg": { height: "60px", width: "60px" },
              }}
            >
              <FaNode color="#153d65" />
            </CardMedia>
            <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent:"space-between", height: "100%"}}>
            <Container sx={{px: '0 !important', mb: '5rem'}}> 
              
              <Typography
                variant="overline"
                align="center"
                component="div"
                fontWeight={800}
                fontSize={"1.4rem"} 
              >
                Back-end
              </Typography>
              <Typography align="center"  component="div" >
                Getting projects off the drawing board, always following the API specifications and discussing with the whole team.
              </Typography>
                </Container>
              <Container sx={{px: '0 !important'}}> 
              <Typography
                variant="subtitle1"
                align="center"
                component="div"
                fontWeight={800}
                fontSize={"1.15rem"}
              >
                Technologies
              </Typography>
              <Typography align="center"  component="div"  >
                JavaScript, NodeJS, NestJS, Apollo, GraphQL, Express, MongoDB, AdonisJS, Postgre and more.
              </Typography>
                </Container>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{height: '100%'}}>
            <CardMedia
              component="i"
              sx={{
                p: 5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "& svg": { height: "60px", width: "60px" },
              }}
            >
              <FaMobileAlt color="#153d65" />
            </CardMedia>
            <CardContent>
            <Container sx={{px: '0 !important', mb: '5rem'}}> 
            
              <Typography
                variant="overline"
                align="center"
                component="div"
                fontWeight={800}
                fontSize={"1.4rem"}
                
              >
                Mobile
              </Typography>
              <Typography align="center"  component="div">
                {"I 've created android and iOS apps with React Native. I'm also familiar with Flutter, Swift and Java."}
              </Typography>
            </Container>
            <Container sx={{px: '0 !important'}}> 
              <Typography
                variant="subtitle1"
                align="center"
                component="div"
                fontWeight={800}
                fontSize={"1.15rem"}
                >
                Technologies
              </Typography>
              <Typography align="center"  component="div">
                JavaScript, React Native, Expo, Firebase, Flutter, Swift, Java and more.
              </Typography>
                </Container>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    
    </>
  );
};

