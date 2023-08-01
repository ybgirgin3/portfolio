import React, { Component } from 'react';
import { Carousel } from 'antd';
import HomeContent from '../Content/HomeContent';

export default class HomeScreen extends Component {
  private contentStyle: React.CSSProperties = {
    height: window.innerHeight,
    color: '#fff',
    background: '#364d79',
  };
  render() {
    return (
      <Carousel className="h-100">
        <div>
          <h3 style={this.contentStyle}>
            <HomeContent />
          </h3>
        </div>
        <div>
          <h3 style={this.contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={this.contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={this.contentStyle}>4</h3>
        </div>
      </Carousel>
    );
  }
}
