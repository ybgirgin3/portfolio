import React, { Component } from 'react';
// import { QRCode } from 'antd';
import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import { Contact } from '../Data/Contacts';
import { QRCodeFactory } from '../Components/QRCodeFactory';

export default class ContactScreen extends Component {
  render() {
    return (
      <div>
        <Tabs centered defaultActiveKey="1" type="card" size="large">
          {Contact?.map((data, _) => (
            <TabPane key={data.key} tab={data.label}>
              <div style={mainPageContainer}>
                <h1 style={titleStyle}>{data.text}</h1>
                <QRCodeFactory
                  children={data.children}
                  containerStyle={mainPageContainer}
                  icon={data.icon}
                />
                or
                <h2 style={innerTitleStyle}>{data.children}</h2>
              </div>
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

const mainPageContainer: React.CSSProperties = {
  width: '100%',
  height: window.innerHeight - 200,
  // backgroundColor: 'wheat',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
};

const titleStyle: React.CSSProperties = {
  fontSize: '40px',
};

const innerTitleStyle: React.CSSProperties = {
  fontSize: '30px',
};
