import { useEffect, useState } from "react";
import React from "react";

function App() {
  const [message, setMessage] = useState("Loading...");
  const [health, setHealth] = useState("Checking...");

  useEffect(() => {
    fetch("/api/message")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch(() => {
        setMessage("Backend connection failed");
      });

    fetch("/api/health")
      .then((response) => response.json())
      .then((data) => {
        setHealth(data.status);
      })
      .catch(() => {
        setHealth("unhealthy");
      });
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        background: "#f4f7fb"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "12px",
          width: "500px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
        }}
      >
        <h1>ZEDA Mini Application</h1>

        <p>
          Frontend → Nginx → Backend
        </p>

        <hr />

        <h3>Backend Message</h3>

        <p>{message}</p>

        <h3>Backend Health</h3>

        <p>{health}</p>
      </div>
    </div>
  );
}

export default App;
