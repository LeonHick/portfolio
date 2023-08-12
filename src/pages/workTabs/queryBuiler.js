import React from "react";
import styles from "../../styles";
import { Grid } from "@mui/material";
import query_builder_login from "../../images/query_builder_login.png";
import query_builder_tool from "../../images/query_builder_tool.png";
import query_builder_dashboard from "../../images/query_builder_presend.png";
import query_builder_home from "../../images/query_builder_home.png";

export default function QueryBuidler() {
  return (
    <Grid container>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <h2 style={styles.header}>Goals</h2>
        <ul>
          <li>Create a portal allowing users to Query the FHIR API</li>
          <li>
            Create functionality allowing users to build complex requests in a
            user friendly way
          </li>
          <li>Show the results of queries to clinicians</li>
          <li>Create an easy to navigate portal</li>
        </ul>
        <br />
        <br />
        <p>
          This was my first project in the working world and I was the sole
          developer for it
        </p>
        <br />
        <br />
        <img
          src={query_builder_login}
          alt="Query builder login screen"
          style={{ width: "100%" }}
        />
        <br />
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <h3 style={styles.header}>
          Building the query tool that must be intuitive and easy for clinicians
          to use
        </h3>
        <br />
        <p>
          This was the biggest challenge when creating the Query Builder. FHIR
          requests can be complicated often requiring a chain of requests. It
          was my challenge to build an interface where a clinician can build
          that chain. To solve this problem I created a screen where users could
          create datasets to search for and then drag and drop the requests into
          a tree of information. The name of the links between datasets was
          calculated within the front end to ensure that they were the proper
          linkages set out in the FHIR specifications.
        </p>
        <br />
        <br />
        <img
          src={query_builder_tool}
          style={{ width: "100%" }}
          alt="Query builder tool"
        />
        <br />
        <br />
        <br />
        <p>
          The portal would then show a summary of the request to the clinician
          and translate the tree into language that the API can understand
          before sending off a request
        </p>
        <br />
        <br />
        <img
          src={query_builder_dashboard}
          alt="Request dashboard"
          style={{ width: "100%" }}
        />
        <br />
        <br />
        <br />
        <p>
          The request would then be available to view by the clinician in a
          table on the homescreen
        </p>
        <br />
        <br />
        <img
          src={query_builder_home}
          style={{ width: "100%" }}
          alt="Query builder tool"
        />
        <br />
        <br />
        <h2 style={styles.header}>Reflection</h2>
        <p>
          I am proud of this project given that it was my first introduction to
          developing in a proffesional environment. As the sole developer on the
          project I was entrusted to solve any issues myself. I feel I
          successfuly achieved the goal of an easy to navigate portal. The drag
          and drop builder tool was completed to a level that I'm proud of and I
          think it succeeds as a tool for allowing clinicians without detailed
          knowledge of FHIR to build a complex query. Throughout this project I
          learned the importance of hitting deadlines. It also developed my
          design and development skills, especially the drag and drop
          functionality which was particularly complicated to build.
        </p>
      </Grid>
    </Grid>
  );
}
