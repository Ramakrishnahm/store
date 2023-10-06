import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const productObj = {
  options: [1, 2, 3, 4, 5]
}
function ProductDetails() {
  const [productDetails, setProductDetails] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then((res) => setProductDetails(res.data.data))
  }, [id])
  const [options] = useState(productObj.options);
  return (
    <>
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
                {options.map(value => <option value={value}>{value}</option>)}
              </select>
            </div>
            <div >
              <button>ADD TO BAG</button>
            </div>
          </div>
        </div>
      }
    </>
  )
}
export  default ProductDetails ;