import React from "react";
import Card from "react-bootstrap/Card";
import { slides } from "../data/slides";
import "./style.css";

const About = () => {
  return (
    <div id="about">
      {slides.map((slide) => {
        return (
          <>
            {" "}
            <Card className="budgetCard">
              <Card.Img variant="top" src={slide.url} />
              <Card.Body className="bg-dark text-light">
                <Card.Title>Budget</Card.Title>
                <Card.Text>{slide.caption}</Card.Text>
              </Card.Body>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default About;
