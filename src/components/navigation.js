import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles";
import me from "../images/me.png";

export default function Navigation() {
  const { navigationLinkStyle } = styles;
  return (
    <Grid container padding={5}>
      <Grid item xs={1}>
        <img
          alt="profile picture"
          src={me}
          style={{ borderRadius: "50%", height: "80px" }}
        />
      </Grid>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        component={Link}
        to="/"
        style={navigationLinkStyle}
        item
        xs={1}
      >
        About
      </Grid>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        component={Link}
        to="work"
        style={navigationLinkStyle}
        item
        xs={1}
      >
        Work
      </Grid>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        component={Link}
        to="resume"
        style={navigationLinkStyle}
        item
        xs={1}
      >
        Resume
      </Grid>
    </Grid>
  );
}
