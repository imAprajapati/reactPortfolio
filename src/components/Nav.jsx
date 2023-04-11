import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.3rem 1rem",
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
          maxHeight: "70px",
          margin: "5px",
          borderRadius: "7px",
          background: 'linear-gradient(202deg, rgba(226,225,231,0.3393732492997199) 0%, rgba(251,251,251,0.7819502801120448) 11%)'
        }}
      >
        <div
          style={{
            maxHeight: "70px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "7px",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "1.6rem",
              letterSpacing: "2px",
              backgroundImage:
                "linear-gradient(315deg, #090979 0%, #020024 74%)",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              textTransform: "uppercase",
            }}
          >
            React Technical
          </h1>
        </div>
        <div
          style={{
            width: "30%",
            borderRadius: "7px",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
            background: "linear-gradient(202deg, rgba(226,225,231,0.3393732492997199) 0%, rgba(224,227,235,0.7819502801120448) 41%)"
          }}
        >
          <ul
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              listStyle: "none",
            }}
          >
            <li>
              <NavLink
                style={{
                  color: "linear-gradient(202deg, rgba(226,225,231,0.3393732492997199) 0%, rgba(25,26,29,0.7819502801120448) 46%)",
                  textDecoration: "none",
                  fontSize: "1.2rem",
                  fontWeight: "500",
                  fontSmooth: "always",
                  textTransform: "uppercase",
                  textShadow: "1px 1px 10px rgba(0,0,2,0.2)",
                }}
                exact
                to="/"
                className="nav-link"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink style={styles.nav_container} exact  to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink style={styles.nav_container} exact to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink style={styles.nav_container} exact to="/service" className="nav-link">
                Service
              </NavLink>
            </li>
            <li>
              <NavLink style={styles.nav_container} exact  to="/user/Ankit" className="nav-link">
                User
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

const styles = {
  main_container: {},
  nav_container: {
    color: "linear-gradient(202deg, rgba(226,225,231,0.3393732492997199) 0%, rgba(25,26,29,0.7819502801120448) 46%)",
    textDecoration: "none",
    fontSize: "1.2rem",
    fontWeight: "500",
    fontSmooth: "always",
    textTransform: "uppercase",
    textShadow: "1px 1px 10px rgba(0,0,2,0.2)",
  },
};

export default Nav;
