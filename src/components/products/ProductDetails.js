import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../cart/CartContext";
const productObj = {
  options: [1, 2, 3, 4, 5],
};
function ProductDetails() {
  const [productDetails, setProductDetails] = useState(null);
  const [option] = useState(productObj.options);

  // const {dispatch} = useContext(CartContext)
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then((res) => res.json())
      .then((res) => setProductDetails(res.data.data));
  }, [id]);

  return (
    <>
   { JSON.stringify(productDetails)}
      {productDetails &&
        <div className="productDetails">
          <img
            src={productDetails.attributes.image}
            alt="lamp"
            loading="lazy"
          />
          <div className="productdetailsdetailscontent">
            <h2>{productDetails.attributes.title}</h2>
            <h4>{productDetails.attributes.company}</h4>
            <span>{productDetails.attributes.price}</span>
            <p>{productDetails.attributes.description}</p>
            <div>
              <label>colors</label>
              {productDetails.attributes.colors.map((color) =>
                <input type="color" key={color} value={color} />
              )}
            </div>
            <div>
              <label>Amount</label> <br />
              <select id="company">
                {option.map(value => <option value={value} key ={value}>{value}</option>)}
              </select>
            </div>
            <div >
              <button
             
               >ADD TO BAG</button>
          <Link to="/home">Home</Link>
            </div>
          </div>
        </div>
      }

      <h3>hello world</h3>
    </>
  );
}
export default ProductDetails;
