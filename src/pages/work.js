import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import styles from "../styles";
import WorkoutFromHome from "./workTabs/workoutFromHome";
import Coffeshop from "./workTabs/coffeeShopInNYC";
import QueryBuidler from "./workTabs/queryBuiler";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography style={{ fontFamily: "Quicksand", ...styles.text }}>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ paddingBottom: 40 }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            style={{ fontFamily: "Quicksand", textTransform: "none" }}
            label="An app for a coffeeshop in NYC"
            {...a11yProps(0)}
          />
          <Tab
            style={{ fontFamily: "Quicksand", textTransform: "none" }}
            label="Workout from Home website"
            {...a11yProps(1)}
          />
          <Tab
            style={{ fontFamily: "Quicksand", textTransform: "none" }}
            label="Query Builder"
            {...a11yProps(2)}
          />
        </Tabs>
      </Grid>

      <CustomTabPanel value={value} index={0}>
        <Coffeshop />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <WorkoutFromHome />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <QueryBuidler />
      </CustomTabPanel>
    </>
  );
}
