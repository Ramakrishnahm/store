

import ProductsList from "./ProductsList"
import FilterForm from "./FilterForm"
import  ProductDetails  from "./ProductDetails"
function Product() {
    return (
        <div>
            <FilterForm />
         <ProductsList />
         {/* <ProductDetails/>   */}
        </div>
    )
}
export default Product