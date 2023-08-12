import { Grid } from "@mui/material";
import React from "react";
import styles from "../styles";

export default function Home() {
  return (
    <Grid container>
      <Grid item xs={2}></Grid>
      <Grid container item xs={10}>
        <Grid
          container
          direction="column"
          // alignItems="center"
          justifyContent="center"
          item
          xs={4}
        >
          <h2>Creative</h2>
          <p style={styles.homepageText}>
            Using Figma I’ve designed a number of UIs ranging from coffeeshop
            apps to websites that are being used today by the NHS.
          </p>
        </Grid>
        <Grid item xs={8}>
          <svg viewBox="0 0 25 20">
            <circle fill="#008D06" cx="25" cy="10" r="10" />
          </svg>
        </Grid>
      </Grid>
      <Grid container item xs={10}>
        <Grid item xs={9}>
          <svg viewBox="0 0 25 20">
            <circle fill="#008D06" cx="0" cy="10" r="10" />
          </svg>
        </Grid>
        <Grid
          container
          direction="column"
          // alignItems="center"
          justifyContent="center"
          item
          xs={3}
        >
          <h2>Ambitious</h2>
          <p style={styles.homepageText}>
            In my most recent role as a software developer I was the sole member
            of the UI team, creating a portal that allowed clinicians to query
            and see patient data.
          </p>
        </Grid>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}></Grid>
      <Grid container item xs={10}>
        <Grid
          container
          direction="column"
          // alignItems="center"
          justifyContent="center"
          item
          xs={4}
        >
          <h2>Self Starting</h2>
          <p style={styles.homepageText}>
            I taught myself to code in university while I was studying
            Philosophy because I realised my passion lay in creating beautiful,
            clean UIs.
          </p>
        </Grid>
        <Grid item xs={8}>
          <svg viewBox="0 0 25 20">
            <circle fill="#008D06" cx="25" cy="10" r="10" />
          </svg>
        </Grid>
      </Grid>
    </Grid>
  );
}
