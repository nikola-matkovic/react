import { useLocation, useParams } from "react-router-dom";
import Layout from "../Layout";
const Product = () => {
    const id = params.productId;
    const params = useParams();
    console.log(params);
    const products  = [
        {naziv: "jabuka", kolicina: 154, boja: "zelena"},
        {naziv: "banana", kolicina: 13, boja: "žuta"},
        {naziv: "narandža", kolicina: 44, boja: "narandžasta"},
    ]
    let radi;
    if (id > products.length){
        radi = true;
    }
    return (
    <Layout>
        greška == false && {
                <div>
                    <h1>{products[id].naziv}</h1>
                    <p>{products[id].kolicina}</p>
                    <p>{products[id].boja}</p>
                </div>
        }
        greška && <p>greška</p>
    </Layout>
  );
};

export default Product;
