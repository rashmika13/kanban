import React, { useState } from "react";
import Modal from "react-modal";

// CSS Imports
import "./App.css";
import "./landing-page.css";

const modalStyles = {
  content: {
    width: "30%",
    height: "55%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

Modal.setAppElement("#root");

export default function Landing() {
  // Modal State
  const [setModalOpen] = useState(false);

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
          Kanban
        </h1>

        <h2
          style={{
            textAlign: "center",
            margin: "1rem 0",
            lineHeight: "1.7rem",
          }}
        >
          Simple.
          <br />
          Organized.
          <br />
          Accessible.
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
    </div>
  );
}
