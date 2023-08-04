import React, { Component } from 'react';
import { Row } from 'antd';

import { projects } from '../Data/Projects';
import { CardFactory } from '../Components/CardFactory';

// styling
export default class ProjectsScreen extends Component {
  container: React.CSSProperties = {
    // backgroundColor: 'lightgrey',
  };
  rowStyle: React.CSSProperties = {
    marginTop: '20px',
  };

  render() {
    return (
      <div style={this.container}>
        {/* first row */}
        <Row style={this.rowStyle}>
          {projects.firstRow.map((project, index) => (
            <CardFactory key={index} {...project} />
          ))}
        </Row>
        {/* second row */}
        <Row style={this.rowStyle}>
          {projects.secondRow.map((project, index) => (
            <CardFactory key={index} {...project} />
          ))}
        </Row>
      </div>
    );
  }
}
