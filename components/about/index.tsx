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
import { ScrollOn, ShowOnScroll } from "../transitions";

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
      <Typography  align="center" sx={{ px: {xs: "10%", md: '25%'}, pb: {xs: '25%', md: '15%'} }} >
        {
          "Since beginning my journey as a developer nearly 5 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one bug at a time."
        }
      </Typography>

      </Container>
      <Grid container spacing={{xs: 2, md: 2}} sx={{ position: 'sticky', mt: '-8vh !important', px: {xs: 1, md: 2}}}>
        <Grid item xs={12} md={4} sx={{display: 'flex'}}>
        <ScrollOn >
          <Card  sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
            <CardMedia
              component="div"
              sx={{
                p: {md: 3, xs: 1},
                display: "flex",
                justifyContent: "center",
                "& svg": { height: "10rem", width: "10rem" },
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
          </ScrollOn >
        </Grid>
        <Grid item xs={12} md={4} sx={{display: 'flex'}}>
        <ScrollOn >

          <Card sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
            <CardMedia
              component="i"
              sx={{
                p: {md: 3, xs: 1},
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "& svg": { height: "10rem", width: "10rem" },
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
                </ScrollOn>
        </Grid>
        <Grid item xs={12} md={4} sx={{display: 'flex'}}>
        <ScrollOn >
          <Card sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
            <CardMedia
              component="i"
              sx={{
                p: {md: 3, xs: 1},
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "& svg": { height: "10rem", width: "10rem" },
              }}
            >
              <FaMobileAlt color="#153d65" />
            </CardMedia>
            <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent:"space-between", height: "100%", width: '100%'}}>
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
          
</ScrollOn>
        </Grid>
      </Grid>
    
    </>
  );
};

