import React from 'react';
import { Card, Badge, Tag, Empty } from 'antd';

type Props = {
  mainTitle: string;
  innerTitle: string;
  extraUrl?: string;
  imageUrl?: string;
  langs: string[];
  projectType: string;
};

export const CardFactory: React.FC<Props> = (props) => {
  return (
    <div>
      <Badge.Ribbon text={props.projectType} color="blue">
        <Card
          title={props.mainTitle}
          bordered={true}
          style={cardStyle}
          cover={
            props.imageUrl ? (
              <img alt="imageUrl" src={props.imageUrl} />
            ) : (
              <Empty />
            )
          }>
          <p style={titleStyle}>{props.innerTitle}</p>
          <a href={props.extraUrl} style={{ color: 'blue' }}>
            See Project..
          </a>
          <br></br>
          <br></br>
          {props.langs.map((lang, _) => (
            <Tag style={{ margin: '2px' }} color="blue">
              {lang.toUpperCase()}
            </Tag>
          ))}
        </Card>
      </Badge.Ribbon>
    </div>
  );
};

const cardStyle: React.CSSProperties = {
  width: '300px',
  marginLeft: '20px',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
};

const titleStyle: React.CSSProperties = {
  // fontWeight: 'bold',
};
