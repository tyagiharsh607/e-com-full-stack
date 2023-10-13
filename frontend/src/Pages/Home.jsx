import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import { useGetProductsQuery } from "../Slices/productsApiSlice";
// import { productsApiSlice } from "../Slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Alert } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import ProductCarousel from "../components/ProductCarousel";

const Home = () => {
  const { keyword } = useParams();
  const { data: products, isLoading, error } = useGetProductsQuery(keyword);
  return (
    <>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default Home;
