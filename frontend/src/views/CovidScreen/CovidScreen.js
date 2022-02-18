import React, { useState } from 'react'
import{ Card, CardBody, CardHeader, Col, Container, Input, Row} from 'reactstrap'
import CovidPopulationApi from '../../Components/Api/CovidPopulationApi'
function CovidScreen() {
    const [searchPopulation, setSearchPopulation] = useState("")
  return (
    <Container>
      <Card>
        <CardHeader>
          <h1 className="text-center">Covid-19</h1>
          <Row className="text-center">
            <Col md="6">
              <h5>CovidPopulation</h5>
              <Input
                onChange={(e) => setSearchPopulation(e.target.value)}
                placeholder="type country name"
              />
            </Col>
            <Col md="6" className="mt-5">
              <h5>Covid Live</h5>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md="6">
              {CovidPopulationApi.filter((item) =>
                item.country
                  .toLowerCase()
                  .includes(searchPopulation.toLowerCase())
              ).map((item) => (
                <Container className="p-2">
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
            <Col md="6">
              <Container className="text-center">
                <CardBody>
                  <h5 style={{fontSize:50}}>Covid Live Data</h5>
                  <a style={{textAlign: 'center',textDecoration: 'none',fontSize:40}} href="https://covidlive.com.au/" target="_blank">Link</a>
                </CardBody>
              </Container>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
}

export default CovidScreen