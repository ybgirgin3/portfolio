import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Flex} from "@chakra-ui/react";

export default class Header extends Component {
  NavBarStyle: React.CSSProperties = {
    background: '#364d79',
    position: "sticky"
  }

  NavBarItemStyle: React.CSSProperties = {
    width: '80px',
    height: '30px',
    color: 'white',
    marginLeft: '10px',
    textAlign: "center",
    border: '2px solid black',
    borderRadius: '10px',
  }


  render() {
    return (
      <nav style={this.NavBarStyle}>
        <Flex
          w="100%"
          px="6"
          py="5"
          align="center"
          justify="center"
        >
          <NavLink style={this.NavBarItemStyle} to="/">Girggin</NavLink>
          <NavLink style={this.NavBarItemStyle} to="/aboutme">About</NavLink>
          <NavLink style={this.NavBarItemStyle} to="/contact">Contact</NavLink>
        </Flex>
      </nav>
    );
  }
}
