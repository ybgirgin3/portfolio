import React, { Component } from 'react';

export default class HomeScreen extends Component {
  private mainContentStyle: React.CSSProperties = {
    height: window.innerHeight,
    color: '#fff',
    background: '#364d79',
  };
  render() {
    return (
      <div style={this.mainContentStyle}>
        <div style={contentStyle}>
          <h1 style={bannerName}>Yusuf Berkay Girgin</h1>
          <h3 style={bannerJob}>Software Developer</h3>
          <br></br>
          <br></br>
          <h4 style={h4Style}>
            <p>Born in 1998 in Sakarya, Turkey. </p>
            <p>Graduated From Electrical and Electronics Engineering</p>
            <p>Worked in Backend, Machine Learning, Robotics projects</p>
          </h4>
        </div>
      </div>
    );
  }
}

const contentStyle: React.CSSProperties = {
  color: '#fff',
  background:
    'linear-gradient(325deg, rgba(2,0,36,1) 0%, rgba(7,31,0,1) 0%, rgba(0,140,255,1) 84%);',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
};

const bannerName: React.CSSProperties = {
  color: '#fff',
  fontSize: '60px',
  fontFamily: 'Great Vibes', // <-- FONT IS USED HERE
};

const bannerJob: React.CSSProperties = {
  fontSize: '20px',
  fontFamily: 'Barlow', // <-- FONT IS USED HERE
};

const h4Style: React.CSSProperties = {
  fontFamily: 'EB Garamond',
  fontSize: '30px',
};
