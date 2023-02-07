import { React, useState, useEffect } from "react";
import { useParams } from "react-router";
import { getSingleProduct } from "../../service/product";
import { client } from "../../utils/http";
import Card from 'react-bootstrap/Card';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSingleProduct = async () => {
      const res = await client.get(`/product/${id}`);
      if (res.status !== 200) {
        throw new Error("Failed to get product ...");
      }
      const data = await res.data.product;
      setTimeout(() => {
        setLoading(false);
        setProduct(data);
      }, 3000);
      console.log("Get success ...: ", res.data.product);
      return;
    };
    getSingleProduct();
  }, []);

  const Loading = () => {
    return <div> Loading...</div>;
  };

  const ShowProduct = () => {
    return (
      <div>
        <h2>{product.id}</h2>
        <h>{product.name}</h>
      </div>
    );
  };
  // return <div>{loading ? <Loading /> : <ShowProduct />}</div>;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ProductDetail;
