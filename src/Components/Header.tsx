import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  navStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: '20px',
    background: '#364d79',
    color: '#fff',
  };
  navLinkStyle: React.CSSProperties = {
    margin: '10px',
  };

  render() {
    return (
      <nav style={this.navStyle}>
        <NavLink style={this.navLinkStyle} to="/">
          Girgin
        </NavLink>
        <NavLink style={this.navLinkStyle} to="/aboutme">
          About
        </NavLink>
        <NavLink style={this.navLinkStyle} to="/projects">
          Projects
        </NavLink>
        <NavLink style={this.navLinkStyle} to="/contact">
          Contact
        </NavLink>
      </nav>
    );
  }
}
