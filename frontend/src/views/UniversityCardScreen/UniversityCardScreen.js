import axios from "axios";
import React, { useState } from "react";
import { Button, Card, CardBody, Col, Container, Input, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
function UniversityCardScreen() {
  const [universities, setUniversities] = useState([]);
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const universitiesHandler = () => {
    setIsLoading(true);
    axios
      .get(`http://universities.hipolabs.com/search?${country}=United+States`)
      .then((res) => {
        console.log(res.data);
        setUniversities(res.data);
        setIsLoading(false);
        toast.success("Universities Data Fetched Successfully");
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };
  return (
    <>
      <Container style={{ textAlign: "center" }} className="mt-5">
        <h1>All Universities Find Here</h1>
        <Input
          placeholder="enter your university name"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          maxLength="50"
          minLength="3"
          valid={search.length > 0}
        />
        <Card className="mt-4 p-5">
          <Row>
            <Col md="4">
              <h6>
                if you like the check the data you can easily check without
                filing input filed. when you get all data then you can type also
                and it will help you to find your data if it's in over storage
                data.
              </h6>
            </Col>
            <Col md="4">
              <Button className="mt-3 mb-4" color="warning" onClick={universitiesHandler}>
                Check Now
              </Button>
            </Col>
            <Col md="4">
              <Button className="mt-3 mb-4" color="success" onClick={universitiesHandler}>
                Search Now
              </Button>
            </Col>
          </Row>
        </Card>
        <ToastContainer />
        {isLoading ? (
          <div className="mt-5 text-center">
            <i
              style={{ fontSize: 50 }}
              className="fas text-success fa-spinner fa-spin mb-4"
            ></i>
            <h5>Please Wait ✋ We are Fetching Your Data..</h5>
          </div>
        ) : (
          universities &&
          universities
            .filter(
              (university) =>
                university.name.toLowerCase().includes(search.toLowerCase()) ||
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
            ))
        )}
      </Container>
    </>
  );
}

export default UniversityCardScreen;
