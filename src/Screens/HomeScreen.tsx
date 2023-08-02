import React, {Component} from 'react';
import HomeContent from '../Content/HomeContent';

export default class HomeScreen extends Component {
  private contentStyle: React.CSSProperties = {
    height: window.innerHeight - 500 ,
    marginTop: '80px',
    color: '#fff',
    background: '#364d79',
  };

  render(): React.JSX.Element {
    return (
      <div style={this.contentStyle}>
        <HomeContent/>
      </div>
    );
  }
}
