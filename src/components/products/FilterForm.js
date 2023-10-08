import { useState } from "react";

function Filterform() {
  const [categories] = useState(["all", "Tables", "Chairs", "Kids", "Sofas", "Beds"]);
  const [company] = useState(["all", "Modenza", "Luxora", "Artifex", "Comfora", "Homestead"]);
  const [sort] = useState(["all", "a-z", "z-a", "high", "low", "medium"]);
  const [form, setForm] = useState({ searchproduct: "", categories: "", company: "", sortby: "", range: "", freeshipping: false })

 
  const handleChange = (ev) => {
    const { name, type, value, checked } = ev && ev.target;
    setForm((prev) => ({ ...prev, [name]: (type === "checkbox" || type === "radio") ? checked : value }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
    setForm({ searchproduct: "", categories: "", company: "", sortby: "", range: "", freeshipping: "" });
  }




  return (
    <div className="filterform">
      <form onSubmit={handleSubmit}>
        <section className="choice">
          <div>
            <label>Search Product</label> <br />
            <input id="search" type="text" name="searchproduct" onChange={handleChange} value={form.searchproduct} />
          </div>
          <div>
            <label>Select Category</label> <br />


            <select id="category" onChange={handleChange} name="categories" value={form.categories}>
              {categories.map((category) => <option>{category}</option>)}

            
            
            </select>
          </div>
          <div>
            <label>Select Company</label> <br />
            <select id="company" onChange={handleChange} name="company" value={form.company}>
              {company.map((category) => <option>{category}</option>)}
            
            
            </select>
          </div>
          <div>
            <label>Sort By</label> <br />
            <select id="sort" onChange={handleChange} name="sortby" value={form.sortby} >
              {sort.map((category) => <option>{category}</option>)

              }
           
            </select>
          </div>
        </section>
        <section className="buttons">
          <div className="range">
            <input type="range" name="range"
              onChange={handleChange} value={form.range} />
          </div>
          <div>
            <label>Free Shipping</label> <br />
            <input id="check" type="checkbox" name="freeshipping" onChange={handleChange} value={form.freeshipping} />
          </div>
          <div>
            <button className="btnsearch">SEARCH</button>
          </div>
          <div>
            <button type="reset" className="btnreset">
              RESET
            </button>
          </div>
        </section>
      </form>
    </div >
  );
}

export default Filterform;