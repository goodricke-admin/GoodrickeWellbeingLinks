import React from "react";
import { MdSettings } from "react-icons/md";
import IconButton from "@mui/material/IconButton";
import Socials from "../components/Socials";
import GetLinks from "../GetLinks";
import GetEvents from "../GetEvents";

function Home() {
  return (
    <div style={holder}>
      <div style={center_container}>
        <h1>Goodricke Wellbeing</h1>
        <div style={link_holder}>
          <GetLinks />
        </div>
        <Socials style={{ alignSelf: "end" }} />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ textAlign: "center", margin: "2px" }}>
          <b>
            Designed, Developed and Maintained by{" "}
            <a
              style={{ color: "#1f6f2e", textDecoration: "none" }}
              href="mailto:hew550@york.ac.uk"
            >
              Harry Wickham
            </a>{" "}
            @{" "}
            <a
              style={{ color: "#1f6f2e", textDecoration: "none" }}
              href="https://yordevs.com/"
            >
              Yordevs
            </a>
          </b>
        </p>
        <IconButton href="/admin">
          <MdSettings size="20" />
        </IconButton>
      </div>
    </div>
  );
}

const holder = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "100vw",
  height: "100vh",
};

const link_holder = {
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
};

const center_container = {
  justifyContent: "space-between",
  alignItems: "center",
  flexGrow: 1,
  flexDirection: "column",
  display: "flex",
  width: "inherit",
};

export default Home;
