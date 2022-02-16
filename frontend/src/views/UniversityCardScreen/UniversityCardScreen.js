import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Row,
} from "reactstrap"
function UniversityCardScreen() {
  const [universities, setUniversities] = useState([]);
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  const [isloading, setIsloading] = useState(true);
  const universitiesHandler = () => {
    axios
      .get(`http://universities.hipolabs.com/search?${country}=United+States`)
      .then((res) => {
        console.log(res.data);
        setUniversities(res.data);
        setIsloading(false);
      });
  };
  return (
    <>
      <Container style={{ textAlign: "center" }} className="mt-5">
        <h1>All Universities Find Here</h1>
        <Input
          placeholder="enter your university name"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button className="mt-3" onClick={universitiesHandler}>Check Now</Button>
        { universities  &&
          universities
            .filter((university) =>
              university.country.toLowerCase().includes(search.toLowerCase())
            )
            .map((university) => (
              <>
                <Card>
                  <CardBody>
                    <Row>
                      <Col md="4">
                        <h1>{university.name}</h1>
                      </Col>
                      <Col md="4">
                        <h1>{university.country}</h1>
                      </Col>
                      <Col md="4">
                        <a href={`${university.web_pages}`} target="_blank">
                          {university.web_pages}
                        </a>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </>
            ))}
      </Container>
    </>
  );
}

export default UniversityCardScreen;
