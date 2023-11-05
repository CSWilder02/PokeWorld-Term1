import { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import logo from "./logo.png";

import api from "../3d pokemmon/api.png";

function BasicNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navbarStyle = {
    position: "fixed",
    width: "100%",
    height: "130px",
    padding: "25px",
    backgroundColor: scrolled ? "#111111" : "transparent",
    transition: "background-color 0.3s ease-in-out",
  };

  return (
    <Navbar style={navbarStyle}>
      <Container>
        <Navbar.Brand href="/">
          <img style={{ width: "90px", paddingTop: "20px" }} src={logo} />
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink
            style={{
              color: "white",
              marginLeft: "350px",
              textDecoration: "none",
              paddingTop: "30px",
            }}
            href="/"
          >
            Landing
          </NavLink>
          <NavLink
            style={{
              color: "white",
              marginLeft: "90px",
              textDecoration: "none",
              paddingTop: "30px",
            }}
            href="/compare"
          >
            Compare
          </NavLink>
          <NavLink
            style={{
              color: "white",
              marginLeft: "90px",
              textDecoration: "none",
              paddingTop: "30px",
            }}
            href="/time"
          >
            Time
          </NavLink>
          
          <img style={{width: '40px', marginLeft: '380px', height: '40px', marginTop: '25px' }} src={api}  />


        </Nav>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;
