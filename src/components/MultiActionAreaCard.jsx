import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ChromeReaderModeRounded } from "@mui/icons-material";

import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/android-chrome-384x384.png"
          alt="transient logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Transient Calulator
          </Typography>
          <Typography variant="body2" color="text.secondary">
            TransientC is a plug-in to generate dynamical graph with more than 3
            cycles. TransientC helps you calculate and visualize your data in
            the web browser.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <ChromeReaderModeRounded />
          Install on Chrome
        </Button>
      </CardActions>
    </Card>
  );
}
