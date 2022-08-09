import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Navbar className={styles.navbar}>
        <Navbar.Brand>
          <Link to="/">Navbar</Link>
        </Navbar.Brand>
        <Nav>
          <Nav.Link as="li">
            <NavLink to="/">Home</NavLink>
          </Nav.Link>
          <Nav.Link as="li">
            <NavLink to="/about">About</NavLink>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
export default Header;
