import React, { useEffect, useState } from "react";
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
 useEffect(() => {
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
 } ,[])
  return (
    <Container style={{ textAlign: "center" }}>
      <Card>
        <CardHeader>
          <h1>Animal</h1>
        </CardHeader>
        <CardBody>
          <h3>Animal Facts</h3>
          <Input
            placeholder="Type Animal Name"
            onChange={(e) => setAnimalName(e.target.value)}
            value={animalName}
            maxLength="20"
            minLength="3"
          />
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
