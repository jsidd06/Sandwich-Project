import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";
import ReactPaginate from "react-paginate";
import { ImgOverlay } from "image-overlay-react";
import HomeScreenFormate from "../../Data/Data";
function Home() {
  const [data,setData] = useState(HomeScreenFormate);
   const [noOfPages, setNoOfPages] = useState(0);
   const [currentPage, setCurrentPage] = useState(0);
   const [currentItem, setCurrentItem] = useState([]);
   const [itemsPerPage, setItemsPerPage] = useState(8);
    useEffect(() => {
      const endOffset = currentPage + itemsPerPage;
      setCurrentItem(data.slice(currentPage, endOffset));
      setNoOfPages(Math.ceil(data.length / itemsPerPage));
    }, [currentPage, itemsPerPage, data]);
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      setCurrentPage(newOffset);
    };
  return (
    <>
      <Container className="mt-2">
        {" "}
        <Card className="cool">
          <CardHeader className="text-center">
            <h1>Sandwich</h1>
          </CardHeader>
          <CardBody className="mt-1">
            <Row>
              {currentItem.map((item, id) => (
                <Col md={3} key={id} className="mt-5 cardShadow p-3">
                  <Link className="overlay-image" to={`${item.link}`}>
                    <ImgOverlay
                      imgSrc={item.img}
                      bgColor="pink"
                      position="right"
                      width="300px"
                      height="350px"
                      fSize="48px"
                      fColor="gray"
                    >
                      {item.imgOverlay}
                    </ImgOverlay>
                  </Link>
                </Col>
              ))}
            </Row>
          </CardBody>
          <CardFooter>
              <ReactPaginate
                previousLabel={"Back"}
                nextLabel={"Next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={data.length / itemsPerPage}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
              />
          </CardFooter>
        </Card>
      </Container>
    </>
  );
}

export default Home;