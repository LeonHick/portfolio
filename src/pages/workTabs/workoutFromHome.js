import React from "react";
import styles from "../../styles";
import { Grid } from "@mui/material";
import hero from "../../images/workout_from_home_hero.png";
import content from "../../images/workout_from_home_content.png";
import navigation from "../../images/workout_from_home_navigation.png";

export default function WorkoutFromHome() {
  return (
    <Grid container>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <h2 style={styles.header}>Goals</h2>
        <ul>
          <li>Create an easy to navigate app</li>
          <li>Create workouts that people can do at home</li>
          <li>Give tips on how people can do exercises more efficiently</li>
        </ul>
        <br />
        <br />
        <img
          src={hero}
          alt="Workout from Home hero"
          style={{ width: "100%" }}
        />
        <br />
        <br />
        Building the{" "}
        <a target="blank" href="http://www.workoutfromhome.uk">
          {" "}
          Workout from Home website{" "}
        </a>{" "}
        was really exciting because it was the first website I built for myself.
        My goal was to create a website that made it less daunting for people to
        get fit and build muscle from home during lockdown.
        <h2 style={styles.header}>Challenges</h2>
        <ul>
          <li>Writing the content</li>
          <li>Creating an aesthetic layout</li>
          <li>Hosting the website</li>
        </ul>
        <h3 style={styles.header}>Writing the content</h3>
        Writing the content of the website stretched me in a number of ways. It
        improved my ability to write documents which translates into software
        development through writing documentation for code. It also tested my
        ability to follow through on a task once it was started. I am proud to
        ay that I've written and completed a number of articles for the website.
        Below is an example <br />
        <br />
        <img
          alt="workout from home content"
          style={{ width: "100%" }}
          src={content}
        />
        <h3 style={styles.header}>Creating an aesthetic layout</h3>
        It was important to me to create something tht looked beautiful and was
        easy to navigate. The main challenge was how a user would be shown the
        information of which workouts were available to view. I solved this
        problem by having a grid layout with custom "header" cards that showed
        each workout. In the cards I placed an image that summed up the workout
        with a brief description of the level of the workout and how long it
        would take.The cards themselves I elevated on the page to make them
        stand out and to give the page an aesthetic "3d" effect.
        <br />
        <br />
        <img
          style={{ width: "100%" }}
          alt="workout from home navigation"
          src={navigation}
        />
        <h3 style={styles.header}>Hosting the website</h3>
        Hosting the website was the most challenging thing because I had never
        hosted anything before. It took some research but I was so proud when I
        first managed to host it and I could look up a real url with my website
        behind it. I hosted the site through namecheap.com
        <h2 style={styles.header}>Reflecting</h2>
        I'm happy to say that I achieved the goals I set out for myself at the
        start of the project; I created and hosted a website that allows people
        to follow workout routines from home with helpful tips and tricks to
        improve their workouts.
      </Grid>
    </Grid>
  );
}
