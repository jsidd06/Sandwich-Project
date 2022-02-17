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
    <Container className="mt-2">
      {" "}
      <Card>
        <CardHeader className="text-center">
          <h1>Sandwich</h1>
        </CardHeader>
        <CardBody className="mt-1">
          <Row>
            {HomeScreenFormate.map((item, id) => (
              <Col
                md={3}
                key={id}
                className="mt-5"
              >
                <Link className="overlay-image" to={`${item.link}`}>
                  <ImgOverlay
                    imgSrc={item.img}
                    bgColor="pink"
                    position="right"
                    width="300px"
                    height="350px"
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