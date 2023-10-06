function FeatureProducts() {
    return (
      <>
        <h3 id="productheading">Featured Products</h3>
          <hr/>
        <div className="products">
          <div>
            <a href="#">
              <img
                src={
                  "https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600"
                }
                alt="lamp"
                loading="lazy"
                
              />
              <p>Avant-Grade-Lamp</p>
              <span>$179.99</span>
            </a>
          </div>
          <div>
            <a href="#">
              <img
                
                src={
                  "https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                alt="table"
                loading="lazy"
              />
              <p>Coffee Table</p>
              <span>$179.99</span>
            </a>
          </div>
          <div>
            <a href="#">
              <img
               
                src={
                  "https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600"
                }
                alt="bed"
                loading="lazy"
                
              />
              <p>Comfy Bed</p>
              <span>$129.99</span>
            </a>
          </div>
        </div>
      </>
    );
  }
  
  export default FeatureProducts;