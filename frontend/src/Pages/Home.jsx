import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import { useGetProductsQuery } from "../Slices/productsApiSlice";

const Home = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  console.log(" useGetProductsQuery", useGetProductsQuery());
  return (
    <>
      {/* {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <></>
      )} */}
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
