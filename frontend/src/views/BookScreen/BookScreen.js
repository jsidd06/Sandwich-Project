import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, CardHeader, CardBody, Input } from "reactstrap";
function BookScreen() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json")
      .then((res) => {
        setBook(Object.entries(res.data).flat());
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(book);
  return (
    <Container>
      <Card>
        <CardHeader>
          <h1>Book</h1>
          <Input onChange={(e) => setSearch(e.target.value)} />
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
          book &&
          book
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
                    <h3>Language:- {item.language}</h3>
                    <h3>Author:- {item.author}</h3>
                    <h3>Direction:- {item.direction}</h3>
                    <a href={`${item.source}`}>Link:- {item.source}</a>
                    <h5>Comments:- {item.comments}</h5>
                    <a href={`${item.link}`}>Link:- {item.link}</a>
                    <br></br>
                    <a href={`${item.linkmin}`}>Link:- {item.linkmin}</a>
                  </CardBody>
                </Card>
              </Container>
            ))
        )}
      </Card>
    </Container>
  );
}

export default BookScreen;
