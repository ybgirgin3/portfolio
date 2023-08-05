import React from 'react';
import { Timeline } from 'antd';

type Props = {
  label: string; // date
  children: string;
  dot?: any;
  color: string;
};

export const TimelineFactory: React.FC<Props> = (props) => {
  return (
    <div>
      <Timeline.Item
        dot={props.dot}
        color={props.color}
        style={{ fontSize: 50 }}>
        {props.label} =={props.children}
      </Timeline.Item>
    </div>
  );
};
