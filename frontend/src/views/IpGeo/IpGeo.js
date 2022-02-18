import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Container } from "reactstrap";
import axios from "axios";
function IpGeo() {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://api.techniknews.net/ipgeo/49.36.217.125")
      .then((res) => {
        setInfo(Object.entries(res.data));
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container>
      <Card>
        <CardHeader>
          <h3>Info-About-You</h3>
        </CardHeader>
        <CardBody>
          {isLoading ?  <div className="mt-5 text-center p-3">
            <i
              style={{ fontSize: 50 }}
              className="fas text-success fa-spinner fa-spin mb-4"
            ></i>
            <h5>Please Wait ✋ We are Fetching Your Data..</h5>
          </div> : info && info.map(([key, value], index) => (
            <Card key={index} className="p-4">
              <h5>
                {key} : {value || "N/A"}
              </h5>
            </Card>
          ))}
        </CardBody>
      </Card>
    </Container>
  );
}

export default IpGeo;
