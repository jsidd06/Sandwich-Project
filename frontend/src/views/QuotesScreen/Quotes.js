import React, { useState } from 'react'
import {Button, Card, Container, Row} from 'reactstrap'
import axios from 'axios'
function QuotesScreen() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const submitHandler = () => {
    setLoading(true);
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        console.log(res.data);
        setQuotes(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container className="text-center mt-5 quotesBody">
      <h1 className="newOne">Welcome to Quotes World!</h1>
      {quotes.content ? (
        <>
          <Container className="text-center mt-3">
            <Card className="mt-3 p-3">
              <h2 className="newStyle p-3">{quotes.content}</h2>
              <h4 className="cursorStyle p-2">Author Name:- {quotes.author}</h4>
            </Card>
          </Container>
        </>
      ) : (
        <h1>No Quotes Found 🤔</h1>
      )}
      <Button
        className="mt-4 mb-4"
        style={{ paddingLeft: 50, paddingRight: 50 }}
        color="dark"
        onClick={submitHandler}
        type="submit"
      >
        {loading ? "Loading..." : "New Quote"}
      </Button>
    </Container>
  );
}

export default QuotesScreen;