import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardBody, Col, Container, Input, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
function UniversityCardScreen() {
  const [universities, setUniversities] = useState([]);
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://universities.hipolabs.com/search?${country}=United+States`)
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
  },[]);
  return (
    <>
      <Container style={{ textAlign: "center" }} className="mt-5">
        <h1>All Universities Find Here</h1>
        <Input
          placeholder="Enter Your University Name or You Can Enter also Country Name"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          maxLength="50"
          minLength="3"
          valid={search.length > 0}
        />
        <ToastContainer />
        {isLoading ? (
          <div className="mt-5 text-center p-3">
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
                <Card className="mt-2 p-2">
                  <CardBody>
                    <Row>
                      <Col md="4">
                        <h4>{university.name}</h4>
                      </Col>
                      <Col md="4">
                        <h5>{university.country}</h5>
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
