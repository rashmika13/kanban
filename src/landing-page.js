import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import CallMadeIcon from "@material-ui/icons/CallMade";

// CSS Imports
import "./App.css";
import "./landing-page.css";
import Carousel from "react-bootstrap/Carousel";

// const modalStyles = {
//   content: {
//     width: "30%",
//     height: "55%",
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
// };

Modal.setAppElement("#root");

export default function Landing() {
  // // Modal State
  // const [setModalOpen] = useState(false);
  return (
    <div className="main-container">
      <div className="intro">
        <h1
          style={{
            textAlign: "center",
            color: "white",
            margin: "1rem 0",
            marginTop: "4rem",
            fontSize: "2.5rem",
          }}
        >
          Kanban 2.0
        </h1>
        <Link to="/kanban">
          Get Started <CallMadeIcon />
        </Link>
        <h2
          style={{
            color: "white",
            textAlign: "center",
            margin: "1rem 0",
            lineHeight: "1.7rem",
          }}
        >
          Keep it simple.
          <br />
          <br></br>
          Keep it organized.
          <br />
          <br></br>
          Keep it accessible.
        </h2>

        <h3
          style={{
            textAlign: "center",
            width: "40%",
            fontWeight: "200",
            color: "white",
            fontSize: "1.25rem",
            margin: "1rem 0",
          }}
        >
          Task tracking for your everyday needs
        </h3>
      </div>
      <div className="instruction">
        <div id="instructionTitle">See how it Works</div>
        <div>
          <Carousel>
            <Carousel.Item>
              <img
                className="instructionPic"
                src="./kb1.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="instructionPic"
                src="./c1.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="instructionPic"
                src="./c2.png"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="instructionPic"
                src="./c5.png"
                alt="Fourth slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
