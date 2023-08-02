import React, { Component } from 'react';
import HomeContent from '../Content/HomeContent';

export default class HomeScreen extends Component {
private contentStyle: React.CSSProperties = {
    height: window.innerHeight,
    color: '#fff',
    background: '#364d79',
  };

  render() {
    return (
        <div style={this.contentStyle}>
            <HomeContent />
        </div>
    );
  }
}
