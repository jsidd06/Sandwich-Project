import React, { useState } from 'react'
import axios from 'axios'
import {Container,Row,Col,Input,Button, CardBody, Card} from 'reactstrap'
function WeatherCardScreen() {
    const [weather,setWeather] = useState(null)
    const [city,setCity] = useState('')
    const weatherCall = () => {
        axios
          .get(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c85ce601f31f707c153537eac865348f&units=metric`
          )
          .then((response) => {
            console.log(response.data);
            setWeather(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
    }
  return (
    <Container style={{ textAlign: "center" }} className="mt-5">
      <h1>Weather</h1>
      <Input
        onChange={(e) => setCity(e.target.value)}
        placeholder="enter your city name"
      />
      <Button className="mt-3" onClick={weatherCall}>
        Search
      </Button>
      {weather ? (
        <Container style={{ textAlign: "center" }} className="mt-4">
          <Card>
            <CardBody>
              <Row>
                <Col md="6">
                  <h3>City Name:- {weather.name}</h3>
                  <h3>City Description:- {weather.weather[0].description}</h3>
                  <h3>City Sunrise:- {weather.sys.sunrise}</h3>
                </Col>
                <Col md="6">
                  <h3>City Temperature:- {weather.main.temp}</h3>
                  <h3>City feels_like:- {weather.main.feels_like}</h3>
                  <h3>City Sunset:- {weather.sys.sunset}</h3>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <h3>City Humidity:- {weather.main.humidity}</h3>
                  <h3>City Temperature:- {weather.main.temp}</h3>
                  <h3>City Wind:- {weather.wind.speed}</h3>
                </Col>
                <Col md="6">
                  <h3>City Pressure:- {weather.main.pressure}</h3>
                  <h3>City Temp_Max:- {weather.main.temp_max}</h3>
                  <h3>City Temp_Min:- {weather.main.temp_min}</h3>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      ) : (
        <h1 className="mt-5">No weather Found!😥</h1>
      )}
    </Container>
  );
}

export default WeatherCardScreen

