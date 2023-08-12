import React from "react";
import styles from "../../styles";
import { Grid } from "@mui/material";
import basket_screen from "../../images/basket_screen.png";
import presona_1 from "../../images/persona_1.png";
import presona_2 from "../../images/persona_2.png";
import user_journey_map from "../../images/user_journey_map.png";
import paper_wireframes from "../../images/paper_wireframes.png";
import digital_wireframe_1 from "../../images/digital_wireframe_1.png";
import digital_wireframe_2 from "../../images/digital_wireframe_2.png";
import lofi_prototype from "../../images/lofi_prototype.png";
import before_and_after from "../../images/before_and_after.png";
import hifi_mockups from "../../images/highfi_mockups.png";
import hifi_prototype from "../../images/hifi_prototype.png";
import { AssignmentTurnedIn, MenuBook } from "@mui/icons-material";

export default function Coffeshop() {
  return (
    <Grid container>
      <Grid item xs={2}></Grid>
      <Grid item xs={4}>
        <h2 style={styles.header}>Goals</h2>
        <ul>
          <li>Create a rewards based coffesshop app</li>
          <li>Create an app that users can place orders on</li>
          <li>Create an easy to navigate app</li>
        </ul>
        <br />
        <br />
        <h2 style={styles.header}>The Problem</h2>
        <li>Making users loyal to a coffeeshop</li>
      </Grid>
      <Grid
        item
        xs={4}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <img height={400} src={basket_screen} alt="image of final app" />
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid
        item
        xs={4}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{
          borderRight: "solid 1px gray",
          marginTop: "100px",
        }}
      >
        <h1 style={{ paddingRight: "20px", ...styles.header }}>
          Understanding the user
        </h1>
      </Grid>
      <Grid
        item
        xs={4}
        container
        direction="column"
        // alignItems="center"
        justifyContent="center"
        style={{
          marginTop: "100px",
          paddingLeft: "100px",
        }}
      >
        <li>User research</li>
        <li>Personas</li>
        <li>Problem statements</li>
        <li>User journey maps</li>
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid item xs={8} style={{ paddingTop: 100 }}>
        <h2 style={styles.header}>User research: summary</h2>
        <p>
          I made up the user research but gained some ideas from some exemplars
          in my Google UX course. Initially I was only focused on the rewards
          side of the app but after some research I realised the value of users
          being able to order their coffees through the app
        </p>
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid item xs={8} style={{ paddingTop: 100, paddingBottom: 50 }}>
        <h2 style={styles.header}>User research: pain points</h2>
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid
        item
        xs={2}
        style={{ paddingTop: 20 }}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <span style={styles.painPointNumbers}>
          <h2 style={{ lineHeight: 0 }}>1</h2>
        </span>

        <h3 style={styles.header}>Pain Point</h3>
      </Grid>
      <Grid
        item
        xs={2}
        style={{ paddingTop: 20 }}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <span style={{ ...styles.painPointNumbers, padding: "10px 22px" }}>
          <h2 style={{ lineHeight: 0 }}>2</h2>
        </span>
        <h3 style={styles.header}>Pain Point</h3>
      </Grid>
      <Grid
        item
        xs={2}
        style={{ paddingTop: 20 }}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <span style={{ ...styles.painPointNumbers, padding: "10px 22px" }}>
          <h2 style={{ lineHeight: 0 }}>3</h2>
        </span>
        <h3 style={styles.header}>Pain Point</h3>
      </Grid>
      <Grid
        item
        xs={2}
        style={{ paddingTop: 20 }}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <span style={{ ...styles.painPointNumbers, padding: "10px 22px" }}>
          <h2 style={{ lineHeight: 0 }}>4</h2>
        </span>
        <h3 style={styles.header}>Pain Point</h3>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}></Grid>
      <Grid
        item
        xs={2}
        container
        direction="column"
        alignItems="center"
        style={{ padding: 20 }}
      >
        <center>
          <p>
            Other apps are hard to navigate because the user is dyslexic. To
            combat this my app will be mostly navigable through icons
          </p>
        </center>
      </Grid>
      <Grid
        item
        xs={2}
        container
        direction="column"
        alignItems="center"
        style={{ padding: 20 }}
      >
        <center>
          <p>
            Users using other apps would have issues of pre-ordered drinks being
            ready before they arrived. To combat this my app will have arrive
            times to improve organisation
          </p>
        </center>
      </Grid>
      <Grid
        item
        xs={2}
        container
        direction="column"
        alignItems="center"
        style={{ padding: 20 }}
      >
        <center>
          <p>
            Users using other apps couldn’t order drinks through the app meaning
            they would lose their seat or have their workflow interrupted. My
            app will have the ability to order drinks through it
          </p>
        </center>
      </Grid>
      <Grid
        item
        xs={2}
        container
        direction="column"
        alignItems="center"
        style={{ padding: 20 }}
      >
        <center>
          <p>
            Users found other apps hard to navigate. To combat this my app will
            have an easily usable nav bar at the bottom which is similar to
            other popular apps
          </p>
        </center>
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid item xs={8}>
        <h2 style={styles.header}>Personas</h2>
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid item xs={8}>
        <img src={presona_1} alt="persona 1" style={{ width: "100%" }} />
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid item xs={8} style={{ paddingTop: 50 }}>
        <img src={presona_2} alt="persona 2" style={{ width: "100%" }} />
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid item xs={8} style={{ paddingTop: 100 }}>
        <img
          src={user_journey_map}
          alt="user journey map"
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid
        item
        xs={4}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{
          borderRight: "solid 1px gray",
          marginTop: "100px",
        }}
      >
        <h1 style={{ paddingRight: "20px", ...styles.header }}>
          Starting the design
        </h1>
      </Grid>
      <Grid
        item
        xs={4}
        container
        direction="column"
        // alignItems="center"
        justifyContent="center"
        style={{
          marginTop: "100px",
          paddingLeft: "100px",
        }}
      >
        <li>Paper wireframes</li>
        <li>Digital wireframes</li>
        <li>Low fidelity prototypes</li>
        <li>Usability studies</li>
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid item xs={3} style={{ paddingTop: 100 }} direction="column">
        <h2 style={styles.header}>Paper wireframes</h2>
        <p>
          The goal is to create a homepage where users can order coffees through
          the app
        </p>
      </Grid>
      <Grid item xs={5} style={{ paddingTop: 100 }}>
        <img
          src={paper_wireframes}
          alt="paper wireframes"
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid item xs={3} style={{ paddingTop: 100 }} direction="column">
        <h2 style={styles.header}>Digital Wireframes</h2>
        <p>
          For this homepage I wanted a menu of items with a carousel of the
          user's favourite orders allowing users to quickly build their cart.
        </p>
      </Grid>
      <Grid item xs={5} style={{ paddingTop: 100 }}>
        <img
          src={digital_wireframe_1}
          alt="digital wireframe 1"
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid item xs={3} style={{ paddingTop: 100 }} direction="column">
        <p>
          I wanted users to be able to see their rewards as an intuitive image
          rather than in words or numbers. My thoughts behind this are that
          it’ll be easier for people to understand who are slow at reading
        </p>
      </Grid>
      <Grid item xs={5} style={{ paddingTop: 100 }}>
        <img
          src={digital_wireframe_2}
          alt="digital wireframe 2"
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid item xs={3} style={{ paddingTop: 100 }} direction="column">
        <h2 style={styles.header}>Low-fidelity prototype</h2>
        <p>
          The user can navigate between the pages using the nav bar and complete
          the flow of buying one of their favourite orders
        </p>
        <p>
          <a
            href="https://www.figma.com/proto/C8eon3bcoZV1rcx7reQXsN/NYC-cafe-wireframes?type=design&node-id=1-4&t=C8nhVt8lM0btaU9Z-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A4&mode=design"
            target="blank"
          >
            Figma prototype
          </a>
        </p>
      </Grid>
      <Grid item xs={5} style={{ paddingTop: 100 }}>
        <img
          src={lofi_prototype}
          alt="lo fi prototype"
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid item xs={8} style={{ paddingTop: 50 }}>
        <h2 style={styles.header}>Usability study: findings</h2>
        <p>
          I had five members in my usability study; 3 males and two females at
          ages ranging from 25 - 60. I interviewed people who use coffeeshops at
          least a few times a month. My research goal was to determine if the
          coffeeshop app is difficult to use.
        </p>
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid item xs={8} style={{ paddingTop: 50 }} container>
        <Grid item xs={6} container>
          <Grid item xs={12}>
            <h3 style={{ ...styles.header, color: "#f29900" }}>
              Round 1 findings
            </h3>
          </Grid>
          <Grid container item xs={12}>
            <Grid
              item
              xs={2}
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <span style={styles.findingsNumbers}>1</span>
            </Grid>
            <h3>Rewards were clear</h3>
          </Grid>
          <Grid container item xs={12}>
            <Grid
              item
              xs={2}
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <span
                style={{
                  ...styles.findingsNumbers,
                  padding: "0px 12px",
                }}
              >
                2
              </span>
            </Grid>
            <Grid item xs={9}>
              <h3>Adding favourites to the basket is confusing</h3>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid
              item
              xs={2}
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <span
                style={{
                  ...styles.findingsNumbers,
                  padding: "0px 12px",
                }}
              >
                3
              </span>
            </Grid>
            <Grid item xs={9}>
              <h3>Nav bar is easy and intuitive to use</h3>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={12}>
            <h3 style={{ ...styles.header, color: "#f29900" }}>
              Round 2 findings
            </h3>
          </Grid>

          <Grid container item xs={12}>
            <Grid
              item
              xs={2}
              container
              direction="column"
              alignItems="center"
              //   justifyContent="center"
            >
              <span style={{ ...styles.findingsNumbers, marginTop: 28 }}>
                1
              </span>
            </Grid>
            <Grid item xs={9}>
              <h3>Scrollbars need to be visible when appropriate</h3>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid
              item
              xs={2}
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <span
                style={{
                  ...styles.findingsNumbers,
                  padding: "0px 12px",
                }}
              >
                2
              </span>
            </Grid>
            <Grid item xs={9}>
              <h3>The app was easy to navigate</h3>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid
              item
              xs={2}
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <span
                style={{
                  ...styles.findingsNumbers,
                  padding: "0px 12px",
                }}
              >
                3
              </span>
            </Grid>
            <Grid item xs={9}>
              <h3>
                A notification needs to be there when an order is awaiting
                collection
              </h3>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid
        item
        xs={4}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{
          borderRight: "solid 1px gray",
          marginTop: "100px",
        }}
      >
        <h1 style={{ paddingRight: "20px", ...styles.header }}>
          Refining the design
        </h1>
      </Grid>
      <Grid
        item
        xs={4}
        container
        direction="column"
        // alignItems="center"
        justifyContent="center"
        style={{
          marginTop: "100px",
          paddingLeft: "100px",
        }}
      >
        <li>Mockups</li>
        <li>High-fidelity prototype</li>
        <li>Accessibility</li>
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid item xs={3} style={{ paddingTop: 100 }} direction="column">
        <h2 style={styles.header}>Before and after</h2>
        <p>
          The goal was to create a more detailed prototype closer to the final
          product including colours and images
        </p>
        <p></p>
      </Grid>
      <Grid item xs={5} style={{ paddingTop: 100 }}>
        <img
          src={before_and_after}
          alt="before and after usability study"
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid item xs={3} style={{ paddingTop: 100 }} direction="column">
        <h2 style={styles.header}>Mockups</h2>
        <p>High fidelity mockups of the screens in the coffeeshop app</p>
        <p></p>
      </Grid>
      <Grid item xs={5} style={{ paddingTop: 100 }}>
        <img
          src={hifi_mockups}
          alt="High fidelity mockups"
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid item xs={3} style={{ paddingTop: 100 }} direction="column">
        <h2 style={styles.header}>High-fidelity prototype</h2>
        <p>
          Next was creating a prototype using the high fidelity mockups. A user
          can navigate around the app using the nav bar and complete a flow of
          ordering drinks, checking out, and checking their collected rewards.
        </p>
        <p>
          <a
            href="https://www.figma.com/proto/st8EqDjo1172hg2DynM6Zu/NYC-app-hi-fi-prototype?type=design&node-id=4-2&t=CGUyO6txBkzAHKqJ-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=4%3A2&mode=design"
            target="blank"
          >
            Figma prototype
          </a>
        </p>
      </Grid>
      <Grid item xs={5} style={{ paddingTop: 100 }}>
        <img
          src={hifi_prototype}
          alt="high fidelity prototype"
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid item xs={8} style={{ paddingTop: 100, paddingBottom: 50 }}>
        <h2 style={styles.header}>Accessibility considerations</h2>
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid
        item
        xs={2}
        style={{ paddingTop: 20 }}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <span style={styles.accessibilityConsiderationsNumbers}>
          <h2 style={{ lineHeight: 0 }}>1</h2>
        </span>
      </Grid>
      <Grid
        item
        xs={2}
        style={{ paddingTop: 20 }}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <span
          style={{
            ...styles.accessibilityConsiderationsNumbers,
            padding: "10px 22px",
          }}
        >
          <h2 style={{ lineHeight: 0 }}>2</h2>
        </span>
      </Grid>
      <Grid
        item
        xs={2}
        style={{ paddingTop: 20 }}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <span
          style={{
            ...styles.accessibilityConsiderationsNumbers,
            padding: "10px 22px",
          }}
        >
          <h2 style={{ lineHeight: 0 }}>3</h2>
        </span>
      </Grid>
      <Grid
        item
        xs={2}
        style={{ paddingTop: 20 }}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <span
          style={{
            ...styles.accessibilityConsiderationsNumbers,
            padding: "10px 22px",
          }}
        >
          <h2 style={{ lineHeight: 0 }}>4</h2>
        </span>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}></Grid>
      <Grid
        item
        xs={2}
        container
        direction="column"
        alignItems="center"
        style={{ padding: 20 }}
      >
        <center>
          <p>
            To ensure that the colours are accessible I used high contrasting
            colours in my buttons and text
          </p>
        </center>
      </Grid>
      <Grid
        item
        xs={2}
        container
        direction="column"
        alignItems="center"
        style={{ padding: 20 }}
      >
        <center>
          <p>
            To ensure that the app is accessible for people who have trouble
            reading I have included pictures and graphics
          </p>
        </center>
      </Grid>
      <Grid
        item
        xs={2}
        container
        direction="column"
        alignItems="center"
        style={{ padding: 20 }}
      >
        <center>
          <p>
            To ensure that the app is accessible for screen readers I have
            included text with some of the icons and will have alt text for
            images and logos when the app progresses to development
          </p>
        </center>
      </Grid>
      <Grid
        item
        xs={2}
        container
        direction="column"
        alignItems="center"
        style={{ padding: 20 }}
      >
        <center>
          <p>
            To account for people who have trouble reading information quickly I
            have made my rewards section pictorial
          </p>
        </center>
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid
        item
        xs={4}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{
          borderRight: "solid 1px gray",
          marginTop: "100px",
        }}
      >
        <h1 style={{ paddingRight: "20px", ...styles.header }}>
          Going forward
        </h1>
      </Grid>
      <Grid
        item
        xs={4}
        container
        direction="column"
        // alignItems="center"
        justifyContent="center"
        style={{
          marginTop: "100px",
          paddingLeft: "100px",
        }}
      >
        <li>Takeaways</li>
        <li>Next steps</li>
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid item xs={8} style={{ paddingTop: 100, paddingBottom: 50 }}>
        <h2 style={styles.header}>Takeaways</h2>
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid
        item
        xs={4}
        style={{ paddingTop: 20 }}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <span
          style={{
            ...styles.takeawayIcons,
          }}
        >
          <AssignmentTurnedIn fontSize="large" />
        </span>
      </Grid>
      <Grid
        item
        xs={4}
        style={{ paddingTop: 20 }}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <span
          style={{
            ...styles.takeawayIcons,
          }}
        >
          <MenuBook fontSize="large" />
        </span>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}></Grid>
      <Grid
        item
        xs={4}
        container
        direction="column"
        alignItems="center"
        style={{ padding: 20 }}
      >
        <center>
          <h3 style={styles.header}>Impact</h3>
          <p>My prototypes were well received in the case studies</p>
        </center>
        <ul>
          <li>"Everything did what I expected it to do"</li>
          <li>
            "[I liked that] it was really pictorial, things showed me what I
            expected to see"
          </li>
        </ul>
      </Grid>
      <Grid
        item
        xs={4}
        container
        direction="column"
        alignItems="center"
        style={{ padding: 20 }}
      >
        <center>
          <h3 style={styles.header}>What I learned:</h3>
          <p>
            Throughout the project I learned that there were many more steps to
            creating a good checkout flow than I had previously thought
          </p>
        </center>
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid item xs={8} style={{ paddingTop: 100, paddingBottom: 50 }}>
        <h2 style={styles.header}>Next steps</h2>
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid
        item
        xs={4}
        style={{ paddingTop: 20 }}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <span
          style={{
            ...styles.nextStepsNumbers,
          }}
        >
          <h2 style={{ lineHeight: 0 }}>1</h2>
        </span>
      </Grid>
      <Grid
        item
        xs={4}
        style={{ paddingTop: 20 }}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <span
          style={{
            ...styles.nextStepsNumbers,
            padding: "10px 23px",
          }}
        >
          <h2 style={{ lineHeight: 0 }}>2</h2>
        </span>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}></Grid>
      <Grid
        item
        xs={4}
        container
        direction="column"
        alignItems="center"
        style={{ padding: 20 }}
      >
        <center>
          <p>
            The next steps I would take with this project would be to start
            developing it. It was a really interesting case study and deserves
            to be built out into a real app
          </p>
        </center>
      </Grid>
      <Grid
        item
        xs={4}
        container
        direction="column"
        alignItems="center"
        style={{ padding: 20 }}
      >
        <center>
          <p>
            I would run the app through some accessibility standards to ensure
            that the contrast was right for people with poor vision. I would
            also check the app with a screen reader
          </p>
        </center>
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={2} />
      <Grid item xs={8} style={{ paddingTop: 100, paddingBottom: 50 }}>
        <h2 style={styles.header}>Reflecting</h2>
        <p>
          I feel that I built prototypes that successfully completed my goals. I
          made a rewards based coffeeshop app that is easy to navigate and in
          which users could place orders. The most useful thing that I learned
          from this process was the importance of usability studies to detect
          previously unseen issues and that is something I will take forward
          into my future work. I like the style and finish of my final mockups
          and think that this would be a successful app were I to continue it to
          development.
        </p>
      </Grid>
    </Grid>
  );
}
