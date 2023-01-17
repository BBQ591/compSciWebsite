import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HorizontalScroll from "react-horizontal-scrolling";
import { Link } from "react-router-dom";
export default function Main() {
  const [Brianhover, setBrianHover] = useState(false);
  const [Spencerhover, setSpencerHover] = useState(false);
  const [Carterhover, setCarterHover] = useState(false);
  const [Lindseyhover, setLindseyHover] = useState(false);

  const [BrianClick, setBrianClick] = useState(false);
  const [SpencerClick, setSpencerClick] = useState(false);
  const [CarterClick, setCarterClick] = useState(false);
  const [LindseyClick, setLindseyClick] = useState(false);

  return (
    <div>
      <div
        style={{
          backgroundImage: "url(" + require("../computer.jpg") + ")",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {" "}
        <h1
          style={{
            color: "White",
            flex: 1,
            lineHeight: 3,
            textAlign: "center",
            marginTop: 0,
            fontSize: 75,
          }}
        >
          COMPUTER SCIENCE CLUB{" "}
        </h1>
        <div
          style={{
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              // justifyContent: "space-evenly",
              flexDirection: "row",
              display: "flex",
              paddingTop: 30,
            }}
          >
            <div
              style={{
                flex: 1,
                textAlign: "center",
              }}
            >
              <h2 style={{ lineHeight: 2 }}>MEETINGS</h2>
              <body style={{ lineHeight: 2, fontSize: 22, paddingLeft: 20 }}>
                Time: Tuesdays after school from 3:15-4:15 (flexible depending
                on members)
              </body>
              <body style={{ lineHeight: 2, fontSize: 22 }}>Room: CS 341</body>
              <a
                href={"https://www.youtube.com/watch?v=XfMr6vLPBOo"}
                style={{ fontSize: 22 }}
              >
                Link to setting up your coding environment
              </a>
            </div>
            <div
              style={{
                flex: 1,
                textAlign: "center",
              }}
            >
              <h2 style={{ lineHeight: 2 }}>CONTACT INFORMATION</h2>
              <body style={{ lineHeight: 2, fontSize: 22 }}>
                Sponsor: Mr. Jackson (kjackson@ortn.edu)
              </body>
              <body style={{ lineHeight: 2, fontSize: 22 }}>
                President: Brian Qu (qubri000@ortn.edu)
              </body>
              <body style={{ lineHeight: 2, fontSize: 22 }}>
                Remind Code: 3cg2ga7
              </body>
            </div>
          </div>
          {/* break between the two */}
          <div
            style={{
              // justifyContent: "space-evenly",
              flexDirection: "row",
              display: "flex",
            }}
          >
            <div
              style={{
                flex: 1,
                textAlign: "center",
                paddingTop: 40,
                marginBottom: 40,
              }}
            >
              <h2 style={{ lineHeight: 2 }}>GOALS</h2>
              <body style={{ lineHeight: 2, fontSize: 22 }}>
                1. Have fun and raise awareness about the growing field of
                coding
              </body>
              <body style={{ lineHeight: 2, fontSize: 22 }}>
                2. Teach all members to code in React to build websites
              </body>
              <body style={{ lineHeight: 2, fontSize: 22 }}>
                3. Build websites for clubs outside of Computer Science Club at
                ORHS
              </body>
              {/* <body style={{ fontSize: 22, color: "white" }}>4.</body> */}
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "rgba(100, 100, 100, 0.8)" }}>
          <div>
            <h2
              style={{
                color: "White",
                lineHeight: 1,
                justifyContent: "center",
                flex: 1,
                alignItems: "center",
                textAlign: "center",
                fontSize: 50,
                paddingTop: 25,
                paddingBottom: 25,
              }}
            >
              MEMBERS
            </h2>
          </div>
          <HorizontalScroll>
            {/* <div
          style={{
            height: 250,
            backgroundColor: "Black",
            width: 250,
            borderRadius: 20,
          }}
        > */}
            <button
              style={{
                borderRadius: 20,
                opacity: Brianhover ? 0.5 : 1,
                boxShadow: "1px 2px 9px black",
                fontSize: 30,
                backgroundImage: "url(" + require("../soccer.jpg") + ")",
                backgroundSize: "cover",
                color: "white",
                width: 300,
                height: 300,
                color: "purple",
                marginRight: 30,
                marginLeft: 30,
              }}
              onMouseOver={() => setBrianHover(true)}
              onMouseOut={() => setBrianHover(false)}
              onClick={() => setBrianClick(true)}
            ></button>

            {/* </div> */}
            <button
              style={{
                borderRadius: 20,
                height: 300,
                width: 300,
                opacity: Spencerhover ? 0.5 : 1,
                boxShadow: "1px 2px 9px black",
                fontSize: 30,
                backgroundImage: "url(" + require("../spencerPic.jpg") + ")",
                backgroundSize: "cover",
                color: "white",
                marginLeft: 30,
                marginRight: 30,
              }}
              onMouseOver={() => setSpencerHover(true)}
              onMouseOut={() => setSpencerHover(false)}
              onClick={() => setSpencerClick(true)}
            ></button>
            <button
              style={{
                borderRadius: 20,
                height: 300,
                width: 300,
                opacity: Carterhover ? 0.5 : 1,
                boxShadow: "1px 2px 9px black",
                fontSize: 30,
                backgroundImage: "url(" + require("../danielPic.jpg") + ")",
                backgroundSize: "cover",
                color: "white",
                marginLeft: 30,
                marginRight: 30,
              }}
              onMouseOver={() => setCarterHover(true)}
              onMouseOut={() => setCarterHover(false)}
              onClick={() => setCarterClick(true)}
            ></button>
            <button
              style={{
                borderRadius: 20,
                height: 300,
                width: 300,
                opacity: Lindseyhover ? 0.5 : 1,
                boxShadow: "1px 2px 9px black",
                fontSize: 30,
                backgroundImage: "url(" + require("../lindseyPic.jpg") + ")",
                backgroundSize: "cover",
                color: "white",
                marginLeft: 30,
                marginRight: 30,
              }}
              onMouseOver={() => setLindseyHover(true)}
              onMouseOut={() => setLindseyHover(false)}
              onClick={() => setLindseyClick(true)}
            ></button>
          </HorizontalScroll>
        </div>
        <div className="container mt-3">
          <Modal show={BrianClick}>
            <Modal.Header closeButton onClick={() => setBrianClick(false)}>
              <Modal.Title>Brian Qu</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Brian loves to play soccer, and he is on the ODP team and on TSSA
              soccer club. Furthermore, he is the winner of the TN03 district
              Congressional App Challenge (app name called ORHS Scheduling) and
              is in the Silver division for USACO. He knows how to code in
              Python, React, React-Native, and Java. He is currently teaching
              the Computer Science Club to code in React to create websites.
            </Modal.Body>
          </Modal>
        </div>
        <div className="container mt-3">
          <Modal show={SpencerClick}>
            <Modal.Header closeButton onClick={() => setSpencerClick(false)}>
              <Modal.Title>Spencer Pendley</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Spencer likes reading, writing, math, and sleeping
            </Modal.Body>
          </Modal>
        </div>
        <div className="container mt-3">
          <Modal show={CarterClick}>
            <Modal.Header closeButton onClick={() => setCarterClick(false)}>
              <Modal.Title>Daniel Vogt</Modal.Title>
            </Modal.Header>
            <Modal.Body>A successful hardworking politician.</Modal.Body>
          </Modal>
        </div>
        <div className="container mt-3">
          <Modal show={LindseyClick}>
            <Modal.Header closeButton onClick={() => setLindseyClick(false)}>
              <Modal.Title>Lindsey Fiscor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              A high school senior on the robotics team 4265 Secret City
              Wildbots, she plans to go to college but isn’t sure where she is
              going yet.
            </Modal.Body>
          </Modal>
        </div>
      </div>
      <div style={{ paddingBottom: 100 }}>
        <h1
          style={{
            textAlign: "center",

            fontSize: 50,
            marginBottom: 30,
          }}
        >
          BENEFITS
        </h1>

        <div
          style={{
            flexDirection: "row",

            display: "flex",
          }}
        >
          <div style={{ flex: 1, textAlign: "center" }}>
            {/* <Link
              style={{
                textAlign: "center",

                fontSize: 22,

                paddingLeft: 10,

                paddingRIght: 10,
                lineHeight: 2,
              }}
              to="/CodingLanguages"
            >
              {" "}
              Learn programming in different languages
            </Link> */}
            <h2
              style={{
                textAlign: "center",

                fontSize: 22,

                paddingLeft: 10,

                paddingRIght: 10,
                lineHeight: 2,
              }}
            >
              Learn programming in different languages
            </h2>
            <h2
              style={{
                textAlign: "center",

                fontSize: 22,

                paddingLeft: 10,

                paddingRIght: 10,
                lineHeight: 2,
              }}
            >
              Web development to build your own webpages
              <h2
                style={{
                  textAlign: "center",

                  fontSize: 22,

                  paddingLeft: 10,

                  paddingRight: 10,
                  lineHeight: 2,
                }}
              >
                App development to make fun apps
              </h2>
            </h2>
          </div>
          <div style={{ flex: 1 }}>
            <h2
              style={{
                paddingRight: 10,

                textAlign: "center",

                fontSize: 22,

                paddingLeft: 10,
                lineHeight: 2,
              }}
            >
              Build problem solving skills
              <h2
                style={{
                  paddingRight: 10,

                  paddingLeft: 10,

                  textAlign: "center",

                  fontSize: 22,
                  lineHeight: 2,
                }}
              >
                Participate in coding competitions
                <h2
                  style={{
                    paddingRight: 10,

                    paddingLeft: 10,

                    textAlign: "center",

                    fontSize: 22,
                    lineHeight: 2,
                  }}
                >
                  Good on college resume
                </h2>
              </h2>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
