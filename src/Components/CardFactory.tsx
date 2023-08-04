import React from 'react';
import { Card, Badge, Tag, Spin } from 'antd';

type Props = {
  mainTitle: string;
  innerTitle: string;
  extraUrl?: string;
  imageUrl?: string;
  langs: string[];
  projectType: string;
};

// export default class CardFactory extends Component {
export const CardFactory = (props: Props) => {
  return (
    <div>
      <Badge.Ribbon text={props.projectType} color="blue">
        <Card
          title={props.mainTitle}
          bordered={true}
          style={cardStyle}
          cover={props.imageUrl ? <img src={props.imageUrl} /> : <Spin />}>
          <p style={titleStyle}>{props.innerTitle}</p>
          <a href={props.extraUrl} style={{ color: 'blue' }}>
            More Info...
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

const h1Style: React.CSSProperties = {
  fontSize: '30px',
  textAlign: 'center',
};

const cardStyle: React.CSSProperties = {
  width: '300px',
  marginLeft: '20px',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
};

const titleStyle: React.CSSProperties = {
  // fontWeight: 'bold',
};
