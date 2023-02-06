import { React, useState, useEffect } from "react";
import { useParams } from "react-router";
import { getSingleProduct } from "../../service/product";
import { client } from "../../utils/http";

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
      const data = await res.product
      setTimeout(() => {
        setLoading(false);
        setProduct(data);
      }, 3000);
      console.log("Get success ...: ", res.product);

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
  return <div>{loading ? <Loading /> : <ShowProduct />}</div>;
};

export default ProductDetail;
