import { useNavigate, useParams } from "react-router-dom";
import Layout from "../Layout";

const Product = () => {
  const params = useParams();
  console.log(params);

  const arrayProducts = [
    { id: 1, name: "Stolica", price: "100e" },
    { id: 2, name: "Banana", price: "2e" },
    { id: 1, name: "Sto", price: "500e" },
    { id: 1, name: "Kauc", price: "5000e" },
  ];

  const selectedProduct = arrayProducts[params.productId];

  return (
    <Layout>
      {selectedProduct ? (
        <div>
          <p>{selectedProduct.id}</p>
          <p>{selectedProduct.name}</p>
          <p>{selectedProduct.price}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </Layout>
  );
};

export default Product;
