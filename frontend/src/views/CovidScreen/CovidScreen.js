import React, { useEffect, useState } from 'react'
import axios from 'axios'
import{Button, Card, CardBody, CardHeader, Col, Container, Input, Row} from 'reactstrap'
import CovidPopulationApi from '../../Components/Api/CovidPopulationApi'
import { Link } from 'react-router-dom'
function CovidScreen() {
    const [data, setData] = useState(null)
    const [population, setPopulation] = useState(null)
    const [loading, setLoading] = useState(false)
    const [searchPopulation, setSearchPopulation] = useState("")

    useEffect(() => {
        setLoading(true)
        axios
          .get("https://api.covid19india.org/data.json")
          .then((res) => {
            setData(res.data.Countries);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
    } , [])
  return (
    <Container>
      <Card>
        <CardHeader>
          <h1>Covid-19</h1>
          <Row>
            <Col md="3">
              <h5>CovidPopulation</h5>
              <Input onChange={(e) => setSearchPopulation(e.target.value)} placeholder="type country name" />
            </Col>
            <Col md="3"></Col>
            <Col md="3"></Col>
            <Col md="3"></Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md="3">
              {CovidPopulationApi.filter((item) => item.country.toLowerCase().includes(searchPopulation.toLowerCase())).map((item) => (
                <Container>
                  <Card>
                    <CardBody>
                        <h5>Country Name:- {item.country}</h5>
                        <h5>Population:- {item.population}</h5>
                        <h5>SQ-KM-Area:- {item.sq_km_area}</h5>
                        <h5>Life-Expectancy:- {item.life_expectancy}</h5>
                        <h5>Elevation-in-meters:- {item.elevation_in_meters}</h5>
                        <h5>Continent:- {item.continent}</h5>
                        <h5>Abbreviation:- {item.abbreviation}</h5>
                        <h5>Location:- {item.location}</h5>
                        <h5>Iso:- {item.iso}</h5>
                        <h5>Capital-City:- {item.capital_city}</h5>
                    </CardBody>
                  </Card>
                  
                </Container>
              ))}
            </Col>
            <Col md="3"></Col>
            <Col md="3"></Col>
            <Col md="3"></Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
}

export default CovidScreen