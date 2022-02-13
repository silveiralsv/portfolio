import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import Image from "next/image";

type ProjectCardProps = {
  url: string;
  title: string;
  text: string;
  image?: StaticImageData;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  url,
  title,
  text,
  image,
}) => {
  return (
    <Link href={url} passHref>
      <Card sx={{ maxWidth: 345, cursor: 'pointer', backgroundColor: '#153d65' }} >
        {image && (
          
          <Image src={image} height={240}/>
          
        )}

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
