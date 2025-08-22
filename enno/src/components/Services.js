// import React from 'react'
import Servicesdata from "./ServicesData";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Services = (props) => {
  return (
    
      <Card className="card-container border rounded-0 Servicesscard">
        <Card.Body style={{ padding: "23px" }}>
          <div className="ServicesIconn" style={{
            fontSize: "24px",
            margin: "0  auto 10px",
            color: "#ffffff",
            padding: "5px",
            borderRadius: "5px",
            alignItems: "center",
            backgroundColor: " #10bc69",
            width: "50px",
            height: "50px",
          }}>
            {props.ServicesIcons}
          </div>
          <Card.Title className="Card-Title ServicessTitle">
            {props.ServicesCardTitle}
          </Card.Title>
          <Card.Text className="Card-Text ServicesText">
            {props.ServicesCardText}
          </Card.Text>
        </Card.Body>
      </Card>
  
  );
};

const ServicesCard = () => {
  return (
    <div className="container my-5">
      <Row>
        {Servicesdata.map((ele1, index) => (
          <Col lg={4} md={6} sm={12} key={index} className="mb-4">
            <Services {...ele1} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ServicesCard;
