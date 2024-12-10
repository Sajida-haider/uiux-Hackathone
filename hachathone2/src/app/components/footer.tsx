import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        height: "auto",
        margin: "0 auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "", // background color
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        {/* Address Section */}
        <div style={{ flex: 1, paddingRight: "20px" }}>
          <h4>Address</h4>
          <p>400 University Drive Suite 200 Coral Gables,</p>
          <p>FL 33134 USA</p>
        </div>

        {/* Links Section */}
        <div style={{ flex: 1, paddingLeft: "20px" }}>
          <h4>Links</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "10px" }}>Home</li>
            <li style={{ marginBottom: "10px" }}>Shop</li>
            <li style={{ marginBottom: "10px" }}>About</li>
            <li style={{ marginBottom: "10px" }}>Contact</li>
          </ul>
        </div>

        {/* Help Section */}
        <div style={{ flex: 1, paddingLeft: "20px" }}>
          <h4>Help</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "10px" }}>Payment Options</li>
            <li style={{ marginBottom: "10px" }}>Returns</li>
            <li style={{ marginBottom: "10px" }}>Privacy Policies</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div style={{ flex: 1, paddingLeft: "20px" }}>
          <h4>Newsletter</h4>
          <form style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              style={{
                marginBottom: "10px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
            <button
              style={{
                backgroundColor: "#000",
                color: "#fff",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p>2022 Meubel House. All rights reserved</p>
      </div>

    </footer>
  );
};

export default Footer;
