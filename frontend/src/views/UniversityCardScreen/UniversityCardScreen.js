import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, Col, Container, Input, Row, Table } from 'reactstrap'

function UniversityCardScreen() {
    const [universities, setUniversities] = useState([])
    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const universitiesHandler = () => {
        axios
          .get(`http://universities.hipolabs.com/search?country=United+States`)
          .then((res) => {
              console.log(res.data)
            setUniversities(res.data);
            setIsLoading(false)
          });
    }
  return (
    <>
      <Container>
        <h1>UniversityCardScreen</h1>
        <Input
          placeholder="enter your university name"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={universitiesHandler}>Check Now</Button>
        {universities &&
          universities
            .filter((university) =>
              university.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((university) => (
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
            ))}
      </Container>
    </>
  );
}

export default UniversityCardScreen