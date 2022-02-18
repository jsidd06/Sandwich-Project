import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Card, CardBody, CardHeader, CardImg, Container, Input} from "reactstrap"
function Articals() {
    const [articals, setArticals] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios.get(
          "https://newsapi.org/v2/everything?q=tesla&from=2022-01-18&sortBy=publishedAt&apiKey=166ff5e1c97a400fbbcb588ed6cc9d3e"
        ).then((res) => {
            console.log(setArticals(res.data.articles))
            setLoading(false)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
  return (
    <Container>
      <Card>
        <CardHeader className="text-center mt-3">
          <h4>Live All Articals</h4>
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

export default Articals