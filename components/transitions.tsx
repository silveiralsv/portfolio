
import React from 'react';
import { easing, Slide, useScrollTrigger } from "@mui/material";

export function HideOnScroll(props : any) {
  const { children } = props;
  
  const trigger = useScrollTrigger({
    threshold: 200,
    disableHysteresis: true,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const ShowOnScroll: React.FC  = ({children}) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 300
  });
  return (
    <Slide direction="down" in={trigger} easing={{enter:easing.easeIn }} exit={false} > 
      {children as any}
    </Slide>
)
}

