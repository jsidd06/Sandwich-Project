import React, { useState } from 'react'
import {Button, Card, Container, Row} from 'reactstrap'
import axios from 'axios'
function QuotesScreen() {
  const [quotes, setQuotes] = useState([]);
  const submitHandler = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        console.log(res.data);
        setQuotes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container className="text-center mt-5 quotesBody">
      <h1>Welcome to Quotes World</h1>
      <Button
        className="mt-2 mb-4"
        style={{ paddingLeft: 50, paddingRight: 50 }}
        color="primary"
        onClick={submitHandler}
        type="submit"
      >
        New Quote
      </Button>
      {<Card>hi</Card> && (
        <Row>
          <h1 className="newStyle">
            {quotes.content}
          </h1>
          <h4 className="cursorStyle">{quotes.author}</h4>
        </Row>
      )}
    </Container>
  );
}

export default QuotesScreen;