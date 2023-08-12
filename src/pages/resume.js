import React from "react";
import styles from "../styles";
import { Grid } from "@mui/material";

export default function Resume() {
  return (
    <Grid container>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <div style={styles.text}>
          <h2 style={styles.header}>Personal Statement</h2>
          I’m a creative and friendly individual who is passionate about
          designing clean, beautiful, intuitive UIs. I am self motivated and
          self starting; for example in university I taught myself to code in C#
          and I am currently in a self funded UX design course with google. I’m
          a problem solver having chosen to study Philosophy at university
          because of the value I place on logical thinking. My background is in
          healthcare technology and I am looking for a career to continue my
          personal growth and to work for a company with a social conscience
          that makes a genuine impact on improving people’s lives.
          <h2 style={styles.header}>EMPLOYMENT HISTORY</h2>
          <h2 style={styles.header}>
            Synanetics – Health & Care Interoperability
          </h2>
          <h3 style={styles.header}>UI Developer Sept 2019 – Jan 2023</h3>
          <p>
            I joined Synanetics when it was a 6 person company as the sole UI
            developer and have participated in the company’s growth through to
            it employing 30+ people. Initially my role was to support a team of
            cloud platform developers who were building the prestigious and
            transformational Yorkshire & Humber Care Record – an
            interoperability platform connecting 76 major health and care
            organisations and 100s of GP practises, care homes and third sector
            care providers. In this role I was responsible for the development
            of an ‘Onboarding Suite’, a software product which enabled
            self-service onboarding of data providers and data consumers to the
            platform. Through consortium comprising Google and Deloitte,
            Synanetics was engaged to develop a Population Health Management
            capability for the YHCR and I undertook responsibility, working as
            part of a multi-disciplinary team formed from Synanetics, Deloitte
            and Google, for the development of data acquisition tooling. This
            software suite enabled clinical researchers to specify datasets
            required for PHM analysis and to acquire the data from the YHCR
            platform. The suite can be seen demonstrated at:
            https://www.youtube.com/watch?v=ETVnDSww4-A Synanetics were engaged
            to develop a Clinical Portal to enabled clinicians to engage with
            data available through the YHCR platform. I helped grow a team of UI
            developers which continue to develop this product which can be seen
            demonstrated at: https://www.youtube.com/watch?v=6gt3S8JwwdY. Within
            this team I was responsible for realising a unique architecture for
            UI development which allows functional components developed in
            different technologies and served from different locations to be
            blended within a common UI canvas. I facilitated team growth by
            contributing to UI/UX standards, code maintenance practises, testing
            approaches and training new team members. The technology
            underpinning the YHCR has been branded INTERWEAVE and now supports a
            geography covering over 20% England’s population. Independent
          </p>
          <h3 style={styles.header}>App Developer 2018-present</h3>
          <p>
            I’ve always been interested in exploring new technologies and in my
            own time I’ve developed Android apps for commercial use, which
            include An app to facilitate tracking progress at the gym An app to
            enable independent coffee shops to operate a rewards system
          </p>
          <h3 style={styles.header}>TECHNOLOGIES AND STANDARDS</h3>
          <p>React</p>
          <p>Xamarin</p>
          <p>Node.JS</p>
          <p>PostgreSQL</p>
          <p>Bitbucket</p>
          <p>Google Cloud</p>
          <p>HL7 FHIR</p>
          <h2 style={styles.header}>EDUCATION</h2>
          <h3 style={styles.header}>Degree Bristol University</h3>
          <p>BA Philsophy 2:1</p>
          <h3 style={styles.header}>A levels Ripon Grammar School</h3>
          <p>English Literature A*</p>
          <p>Maths A</p>
          <p>Latin A</p>
          <p>Chemistry A</p>
          <h3 style={styles.header}>GCSEs Ripon Grammar School</h3>
          <p>9 A*s</p>
          <p>1 A</p>
          <p>2 Bs</p>
        </div>
      </Grid>
    </Grid>
  );
}
