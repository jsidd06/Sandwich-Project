import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Input,
  Row,
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
function Animal() {
  const [animal, setAnimal] = useState([]);
  const [animalName, setAnimalName] = useState("");
  const [loading, setLoading] = useState(false);
  const submitHandler = () => {
    setLoading(true);
    axios
      .get("https://api.publicapis.org/entries")
      .then((res) => {
        setAnimal(res.data.entries);
        setLoading(false);
        toast.success("Animal Data Fetched Successfully");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <Container style={{ textAlign: "center" }}>
      <Card>
        <CardHeader>
          <h1>Animal</h1>
        </CardHeader>
        <CardBody>
          <h3>Animal Facts</h3>
          <Input
            placeholder="find with name"
            onChange={(e) => setAnimalName(e.target.value)}
            value={animalName}
            maxLength="20"
            minLength="3"
          />
          <Card className="mt-4 p-3">
            <Row>
              <Col md="6">
                <h6>
                  if you like the check the data you can easily check without filing
                  input filed. when you get all data then you can type also and it will help you to find your data if it's in
                  over storage data.
                </h6>
              </Col>
              <Col md="6">
                <Button className="mt-3 mb-4" color="info" onClick={submitHandler}>
                  {loading ? "Loading..." : "Search Now" || "Search Now"}
                </Button>
              </Col>
            </Row>
          </Card>
          <ToastContainer />
          {loading ? (
            <div className="mt-5 text-center">
              <i
                style={{ fontSize: 50 }}
                className="fas text-success fa-spinner fa-spin mb-4"
              ></i>
              <h5>Please Wait ✋ We are Fetching Your Data..</h5>
            </div>
          ) : (
            animal &&
            animal
              .filter((animal) => {
                return animal.API.toLowerCase().includes(
                  animalName.toLowerCase()
                );
              })
              .map((animal) => (
                <Card className="mt-4">
                  <CardBody>
                    {" "}
                    <Row>
                      <Col md="3">
                        <p>Description:- {animal.Description}</p>
                      </Col>
                      <Col md="3">
                        <a href={animal.Link}>Link:- {animal.Link}</a>
                      </Col>
                      <Col md="3">
                        {" "}
                        <p>API:- {animal.API}</p>
                      </Col>
                      <Col md="3">
                        {" "}
                        <p>Category:- {animal.Category}</p>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              ))
          )}
        </CardBody>
      </Card>
    </Container>
  );
}

export default Animal;
