import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, CardHeader, CardBody, Input } from "reactstrap";
function BikeScreen() {
  const [bike, setBike] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://api.citybik.es/v2/networks?fields=id,name,href")
      .then((res) => {
          console.log(res.data)
        setBike(res.data.networks);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(bike);
  return (
    <Container>
      <Card>
        <CardHeader>
          <h1>City Bike Around The World</h1>
          <Input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search.."
          />
        </CardHeader>
        {loading ? (
          <div className="mt-5 text-center">
            <i
              style={{ fontSize: 50 }}
              className="fas text-success fa-spinner fa-spin mb-4"
            ></i>
            <h5>Please Wait ✋ We are Fetching Your Data..</h5>
          </div>
        ) : (
          bike &&
          bike
            .filter(
              (item) =>
                item.name &&
                item.name.toLowerCase().includes(search && search.toLowerCase())
            )
            .map((item) => (
              <Container className="p-4">
                <Card>
                  <CardBody>
                    <h3>Name:- {item.name}</h3>
                    <h3>ID:- {item.id}</h3>
                    <h3>Href:- {item.href}</h3>
                  </CardBody>
                </Card>
              </Container>
            ))
        )}
      </Card>
    </Container>
  );
}

export default BikeScreen;
