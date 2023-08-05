import React from 'react';
import { QRCode } from 'antd';

type Props = {
  children: string;
  icon: string;
  containerStyle: React.CSSProperties;
};

export const QRCodeFactory: React.FC<Props> = (props) => {
  return (
    <div style={props.containerStyle}>
      <QRCode
        type="svg"
        errorLevel="H"
        size={400}
        value={props.children}
        icon={props.icon}
      />
    </div>
  );
};
