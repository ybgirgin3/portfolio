import React, { Component } from 'react';
import { Timeline, ConfigProvider } from 'antd';

import { Experiences } from '../Data/Experiences';
import { TimelineFactory } from '../Components/TimelineFactory';

export default class ExperiencesScreen extends Component {
  render() {
    return (
      <div style={container}>
        <ConfigProvider
          theme={{
            components: {
              Timeline: {
                itemPaddingBottom: 30,
                colorSplit: 'red',
                fontSize: 20,
                tailColor: 'blue',
              },
            },
          }}>
          <Timeline
            reverse={true}
            mode="alternate"
            pending="Collecting Experiences..">
            {Experiences.map((data, _) => (
              <TimelineFactory
                dot={data.dot}
                color={data.color}
                label={data.label}
                children={data.children}
              />
            ))}
          </Timeline>
        </ConfigProvider>
      </div>
    );
  }
}

const container: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '50px',
  width: window.innerWidth,
  height: window.innerHeight - 200,
};
