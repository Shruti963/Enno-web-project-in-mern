// import React from "react";
import Card from "react-bootstrap/Card";
import CardData from "./CardData";
import "./CustomCard.css"
const CustomCard = (props) => {
  return (
    <Card className="col-lg-4 d-flex card-container  Home-card">
      <Card.Body style={{     padding: "50px 30px",    transition: "all ease-in-out 0.4s",
    height: "100%" }}>
        <div className="cardiconss" >
          {props.icons}
        </div>
        <Card.Title className="Card-Title">{props.CardTitle}</Card.Title>
        <Card.Text className="Card-Text">{props.CardText}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const CardContainer = () => {
  return (
    <>
      {CardData.map((ele1, index) => (
        <CustomCard key={index} {...ele1} />
      ))}
    </>
  );
};

export default CardContainer;
