import { Button, Container, Divider, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import logo from "../assets/logocrop.png";
import { FaGithub, FaLinkedinIn, FaRegCopyright } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiTypescript } from "react-icons/si";

export const Footer: React.FC = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 5,
        pt: 15,
        pb: 20,
      }}
    >
      <Container sx={{height: '1px', width: '100%', background: '#ffffff96', opacity: 0.3, mb: '2rem'}}/>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          "& img": { width: "60px !important", height: "60px !important" },
          alignItems: "center",
          justifyContent: "center",
          mb: 3,
        }}
      >
        <div>
          <Image src={logo} />
        </div>
        <Typography
          variant="body1"
          component="div"
          sx={{ mt: 2 }}
          color="#5278a0c1"
          fontWeight={550}
        >
          {"Living, learning & leveling up one day at a time."}
        </Typography>
      </Container>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 3,
          "& a+a": { ml: 1 },
        }}
      >
        <Button
          variant="outlined"
          sx={{ p: 1, m: 0, minWidth: "unset", borderRadius: "100%" }}
          href="https://github.com/silveiralsv"
        >
          <FaGithub size={"1.25rem"} color="#1976d2" />
        </Button>
        <Button
          variant="outlined"
          sx={{ p: 1, m: 0, minWidth: "unset", borderRadius: "100%" }}
          href="https://www.linkedin.com/in/lucas-silveira-007160139/"
        >
          <FaLinkedinIn size={"1.25rem"} color="#1976d2" />
        </Button>
        <Button
          variant="outlined"
          sx={{ p: 1, m: 0, minWidth: "unset", borderRadius: "100%" }}
          href="https://mail.google.com/mail/u/0/?fs=1&to=silveira.lsv@gmail.com&su=HI&body=Hello&tf=cm"
        >
          <HiOutlineMail size={"1.25rem"} color="#1976d2" />
        </Button>
      </Container>
      <Typography
        variant="body2"
        component="div"
        sx={{ mt: 2, display: "flex" }}
        alignItems="center"
        justifyContent={"center"}
        color="#5278a0c1"
        fontWeight={500}
      >
        Handcrafted by me{" "}
        <FaRegCopyright style={{ margin: "0 0.2rem 0 0.2rem" }} />
        <Typography
          variant="body2"
          component="div"
          color="#5278a0c1"
          fontWeight={650}
        >
          silveiralsv
        </Typography>
      </Typography>
      <Typography
        variant="caption"
        component="div"
        sx={{ mt: 2, display: "flex" }}
        alignItems="center"
        justifyContent={"center"}
        color="#5278a0c1"
        fontWeight={500}
      >
        Made with{" "}
        <SiTypescript style={{ marginLeft: '0.2rem' }} />
        
      </Typography>
    </Container>
  );
};
