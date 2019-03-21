import React, {Component} from 'react';
import {Drawer, List, Divider, Col, Row,} from 'antd';
import { Link } from 'react-router-dom';


const pStyle = {
  fontSize: 26,
  fontWeight: 'bolder',
  color: 'rgb(24, 30, 114)',
  lineHeight: '24px',
  display: 'block',
  marginBottom: 16,
};

const DescriptionItem = ({ title, content }) => (
  <div
    style={{
      fontSize: 20,
      lineHeight: '22px',
      marginBottom: 7,
      color: 'rgb(24, 30, 114)',
    }}
  >
    <p
      style={{
        marginRight: 8,
        display: 'inline-block',
        color: 'rgb(12, 8, 247)',
      }}
    >
      {title}:
    </p>
    {content}
  </div>
);

class About extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className="drawer-cont">
        <List
          dataSource={[
            {
              name: 'Lily',
            }
          ]}
          bordered
          renderItem={item => (
            <List.Item key={item.id} actions={[<Link onClick={this.showDrawer}>About</Link>]}></List.Item>
          )}
        />
        <Drawer
          width={700}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p className="frames-title" style={{ ...pStyle, marginBottom: 24 }}>F R A M M E S by Estefany Velázquez</p>
          <Row className="drawer">
            <Col span={12}>
              <DescriptionItem title="City" content="CDMX & Barcelona" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Country" content="México" />
            </Col>
          </Row>
          <Row className="drawer">
            <Col span={12}>
              <DescriptionItem title="Birthday" content="September 24, 1990" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Instagram"  content={(
                  <Link to="https://www.instagram.com/estefanikq/?hl=en">estefanykq</Link>
                )}/>
            </Col>
          </Row>
          <Divider />
          <p style={pStyle}>Education</p>
          <Row className="drawer">
            <Col span={24}>
              <DescriptionItem
                title="Bachelor's degree"
                content="Universidad Nacional Autonoma de México -  Graphic Design "
              />
            </Col>
            <Col span={24}>
              <DescriptionItem
                title="Postgraduate degree"
                content="Centro Universitario de Diseño BAU - Motion Desing "
              />
            </Col>

          </Row>
          <Divider />
          <p style={pStyle}>Frammes</p>
          <Row className="drawer">
            <Col span={24}>
              <DescriptionItem title="Position" content="Digital Creator" />
            </Col>
            <Col span={24}>
              <DescriptionItem title="Responsibilities" content="General Management & Creative process" />
            </Col>
            <Col span={24}>
              <DescriptionItem
                title="Skills"
                content="Video Edition, Motion Design, Visual Art"
              />
            </Col>
          </Row>
          <Divider />
          <p style={pStyle}>Contact</p>
          <Row className="drawer">
            <Col span={12}>
              <DescriptionItem title="Email" content="fframmes@gmail.com" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="cel" content="+521 55 65 62 47 18" />
            </Col>
          </Row>
          <Row className="drawer">
            <Col span={24}>
              <DescriptionItem
                title="Instagram"
                content={(
                  <Link to="https://www.instagram.com/frammes_mx/?hl=en">Frammes</Link>
                )}
              />
            </Col>
          </Row>
        </Drawer>
      </div>
    );
  }
}
export default About;