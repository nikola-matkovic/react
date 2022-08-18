import { useLocation, useParams } from "react-router-dom";
import Layout from "../Layout";
const Product = () => {
    const id = params.productId;
    const params = useParams();
    console.log(params);
    const products  = [
        {id: 1, naziv: "jabuka", kolicina: 154, boja: "zelena"},
        {id: 2, naziv: "banana", kolicina: 13, boja: "žuta"},
        {id: 2, naziv: "narandža", kolicina: 44, boja: "narandžasta"},
    ]
    products.filte
    return (
    <Layout>
        radi && {
                <div>
                    <h1>{products[id].naziv}</h1>
                    <p>{products[id].kolicina}</p>
                    <p>{products[id].boja}</p>
                </div>
        }
        radi && <p>greška</p>
    </Layout>
  );
};

export default Product;
