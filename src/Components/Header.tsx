import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// react lazy
// const HomeScreen = React.lazy(() => import('../Screens/HomeScreen'));
// const AboutScreen = React.lazy(() => import('../Screens/AboutScreen'));
// const SkillScreen = React.lazy(() => import('../Screens/SkillScreen'));

// const Loading = () => <p>Loading...</p>;

export default class Header extends Component {
  render() {
    return (
      <nav className="px-2 py-3 space-y-2 font-medium text-slate-700">
        <NavLink
          className="block px-3 py-2 rounded-md text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
          to="/">
          Girggin
        </NavLink>
        <NavLink
          className="block px-3 py-2 rounded-md text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
          to="/aboutme">
          About
        </NavLink>
        <NavLink
          className="block px-3 py-2 rounded-md text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
          to="/skills">
          Skills
        </NavLink>
      </nav>
    );
  }
}
