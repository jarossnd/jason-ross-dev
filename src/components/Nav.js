import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
// import 'typeface-roboto-mono';

const NavStyles = styled.nav``;

class Nav extends Component {
  state = {
    scrolledClass: 'notFixed',
    checked: false,
  };

  render() {
    const { checked } = this.state;
    return (
      <div>
        <NavStyles>
          <section className="top-nav">
            <div>
              <Link to="/">&lt;JR /&gt;</Link>
            </div>
            <input id="mobileMenuCheckbox" type="checkbox" checked={checked} />

            <label
              className="menu-button-container"
              htmlFor="mobileMenuCheckbox"
              onClick={() => {
                this.setState({
                  checked: !checked,
                });
              }}
            >
              <div className="menu-button" />
            </label>
            <ul className="menu">
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    this.setState({ checked: false });
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/posts"
                  onClick={() => {
                    this.setState({ checked: false });
                  }}
                >
                  Posts
                </Link>
              </li>
              <li>
                <Link
                  to="/uses"
                  onClick={() => {
                    this.setState({ checked: false });
                  }}
                >
                  Uses
                </Link>
              </li>
              <li>
                <Link
                  to="/donate"
                  onClick={() => {
                    this.setState({ checked: false });
                  }}
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  to="/links"
                  onClick={() => {
                    this.setState({ checked: false });
                  }}
                >
                  Links
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => {
                    this.setState({ checked: false });
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => {
                    this.setState({ checked: false });
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </section>
        </NavStyles>
      </div>
    );
  }
}

export default Nav;
