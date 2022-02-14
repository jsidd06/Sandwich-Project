import React, { useState } from 'react'
import axios from 'axios'
import {Container,Row,Col,Input,Button} from 'reactstrap'
function WeatherCardScreen() {
    const [weather,setWeather] = useState({})
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
      <Container>
          <h1>Weather</h1>
          <Input onChange={(e) => setCity(e.target.value)} />
          <Button onClick={weatherCall}>Search</Button>
          {weather.main && (
                <Row>
                    <Col>
                        <h2>{weather.name}</h2>
                        <h3>{weather.main.temp}</h3>
                    </Col>
                </Row>
          )}
      </Container>
  )
}

export default WeatherCardScreen

