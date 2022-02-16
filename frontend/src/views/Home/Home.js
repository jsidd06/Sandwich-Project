import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";
import { ImgOverlay } from "image-overlay-react";
import HomeScreenFormate from "../../Data/Data";
function Home() {
  return (
    <Container>
      {" "}
      <Card>
        <CardHeader>
          <h1>Sandwich</h1>
        </CardHeader>
        <CardBody>
          <Row>
            {HomeScreenFormate.map((item, id) => (
              <Col md={4} key={id}>
                <Link className="overlay-image" to={`${item.link}`}>
                  <ImgOverlay
                    imgSrc={item.img}
                    bgColor="pink"
                    position="right"
                    width="400px"
                    height="500px"
                    fSize="48px"
                    fColor="gray"
                  >
                    {item.imgOverlay}
                  </ImgOverlay>
                </Link>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
}

export default Home;