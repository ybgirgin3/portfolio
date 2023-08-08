import React, { Component } from 'react';
import { Row } from 'antd';

import { Projects } from '../Data/Projects';
import { CardFactory } from '../Components/CardFactory';

// styling
export default class ProjectsScreen extends Component {
  container: React.CSSProperties = {
    backgroundColor: '#364d79',
    // textAlign: 'center',
  };
  rowStyle: React.CSSProperties = {
    // marginTop: '20px',
  };

  innerContainerStyle: React.CSSProperties = {
    marginTop: '20px',
  };

  render() {
    return (
      <div style={this.container}>
        {/* first row */}
        <Row style={this.rowStyle}>
          {Projects.map((project, index) => (
            <div style={this.innerContainerStyle}>
              <CardFactory key={index} {...project} />
            </div>
          ))}
        </Row>
      </div>
    );
  }
}
