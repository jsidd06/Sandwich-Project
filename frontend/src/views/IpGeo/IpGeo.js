import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Container } from "reactstrap";
import axios from "axios";
function IpGeo() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.techniknews.net/ipgeo/49.36.217.125")
      .then((res) => {
        setInfo(Object.entries(res.data));
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
          {info.map(([key, value], index) => (
            <Card key={index} className="p-4">
              <p>
                {key} : {value || "N/A"}
              </p>
            </Card>
          ))}
        </CardBody>
      </Card>
    </Container>
  );
}

export default IpGeo;
