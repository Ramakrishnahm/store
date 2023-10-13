import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductsList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://strapi-store-server.onrender.com/api/products")
      .then((res) => setData(res.data.data));
  }, []);

  return (
    <div className="main">
      <div>
        <h3>{data.length} products</h3>
        <div>
          <button>List</button>
          <button>Grid</button>
        </div>
        <hr />
      </div>

      <>
        {data.map((product, index) => (
          <div className="products">
            <Link to={"/productdetails" + product.id} key={index}>
              <img
                src={product["attributes"]["image"]}
                alt="lamp"
                loading="lazy"
              />
              <p>{product["attributes"]["title"]}</p>
              <span>{product["attributes"]["price"]}</span>
            </Link>
          </div>
        ))}
      </>
    </div>
  );
}
export default ProductsList;
