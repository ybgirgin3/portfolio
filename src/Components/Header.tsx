import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <nav>
        <NavLink to="/">Girggin</NavLink>
        <NavLink to="/aboutme">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
      </nav>
    );
  }
}
