import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardBody,
  CardHeader,
  CardImg,
  Col,
  Container,
  Input,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
function TechCrunchArticles() {
  const [articals, setArticals] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=166ff5e1c97a400fbbcb588ed6cc9d3e"
      )
      .then((res) => {
        console.log(setArticals(res.data.articles));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container>
      <Card>
        <CardHeader className="text-center mt-3 p-3">
          <h1 style={{ color: "blue" }}>Live Articles</h1>
          <hr></hr>
          <Row className="p-2">
            <Col md="2">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/live-all-articles"
              >
                {" "}
                <h4>Live All Articles</h4>
              </Link>
            </Col>
            <Col md="3">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/business-articles"
              >
                {" "}
                <h4>Business Articles</h4>
              </Link>
            </Col>
            <Col md="3">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/last-six-month-articles"
              >
                {" "}
                <h4>Last Six Month Articles</h4>
              </Link>
            </Col>
            <Col md="2">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/tech-crunch-article"
              >
                {" "}
                <h4>Tech Crunch Articles</h4>
              </Link>
            </Col>
            <Col md="2">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/yesterday-article"
              >
                {" "}
                <h4>Yesterday Articles</h4>
              </Link>
            </Col>
          </Row>
          <Input
            placeholder="enter the author name"
            onChange={(e) => setSearch(e.target.value)}
          />
        </CardHeader>
        <CardBody>
          {loading ? (
            <div className="mt-5 text-center">
              <i
                style={{ fontSize: 50 }}
                className="fas text-success fa-spinner fa-spin mb-4"
              ></i>
              <h5>Please Wait ✋ We are Fetching Your Data..</h5>
            </div>
          ) : (
            articals &&
            articals
              .filter(
                (item) =>
                  item.author &&
                  item.author
                    .toLowerCase()
                    .includes(search && search.toLowerCase())
              )
              .map((artical, index) => (
                <Card key={index} className="p-4">
                  <h5>Author:- {artical.author || "N/A"}</h5>
                  <h5>Title:- {artical.title || "N/A"}</h5>
                  <h5>Content:- {artical.content || "N/A"}</h5>
                  <h5>Description:- {artical.description || "N/A"}</h5>
                  <a href={`${artical.url}`} target="_blank" className="mb-3">
                    {" "}
                    Link:-
                    {artical.url}
                  </a>
                  <CardImg
                    style={{ maxHeight: "400px", maxWidth: "400px" }}
                    src={`${artical.urlToImage}`}
                    alt="Card image cap"
                  />
                  <h6 className="mt-3">
                    PublishedAt:- {artical.publishedAt || "N/A"}
                  </h6>
                </Card>
              ))
          )}
        </CardBody>
      </Card>
    </Container>
  );
}

export default TechCrunchArticles;
