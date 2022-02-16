import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  CardImg,
  Col,
  Container,
  Row,
} from "reactstrap";
import weather from "../../Images/11machin-illo-articleLarge-v3.jpg";
import { ImgOverlay } from "image-overlay-react";
import "image-overlay-react/dist/index.css";
import university from "../../Images/20virus-briefing-rice-university-virtual-mobileMasterAt3x.jpg";
function Home() {
  return (
    <Container style={{ textAlign: "center" }}>
      <Card>
        <CardHeader>
          <h1>Sandwich</h1>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md="4">
              <Link className="overlay-image" to="/weather">
                <ImgOverlay
                  imgSrc={weather}
                  bgColor="pink"
                  position="right"
                  width="400px"
                  height="500px"
                  fSize="48px"
                  fColor="gray"
                >
                  OPEN WEATHER APP
                </ImgOverlay>
              </Link>
            </Col>
            <Col md="4">
              <Link to="/university">
                <ImgOverlay
                  imgSrc={university}
                  bgColor="pink"
                  position="right"
                  width="100%"
                  maxWidth="400px"
                  height="500px"
                  fSize="48px"
                  fColor="gray"
                >
                  OPEN UNIVERSITY APP
                </ImgOverlay>
              </Link>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
}

export default Home;
