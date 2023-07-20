import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setProducts } from "../redux/actions/actions";
import axios from "axios";
import { url } from "../api/url";

const SingleProduct = () => {
 const dispatch = useDispatch();

const products = useSelector(state => state.reducer.products) || []
//console.log(products,'Products')

const fetchProducts = async () => {

    try {
        const response = await axios.get(url)
        dispatch(setProducts(await response.data))
        
    } catch (error) {
        console.log(error)
    }

    
}

useEffect(() => {
    fetchProducts()
   },[]);


if(products === undefined){
    return (
        <div>Loading...</div>
    )
}

  const renderProducts = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four cloumn wide" key={id}>
        <div className="ui link cards">
          <div className="card">
            <div className="image" >
              {" "}
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta">{category}</div>
              <div className="meta price">$ {price}</div>
            </div>
          </div>
        </div>
        {category}
      </div>
    );
  });



return <>{renderProducts}</>;


};

export default SingleProduct;
