import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        textAlign: "center",
      }}
    >
      <div style={{ padding: "1rem" }}>
        <p style={{ margin: 0 }}>Copyright ⓒ {currentYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
