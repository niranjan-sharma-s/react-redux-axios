import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { url } from "../api/url";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct,deleteProduct } from "../redux/actions/actions";

const SingleProoductDetails = () => {
  const product = useSelector((state) => state.singleProductReducer);
  const { id, title, price, image, category, description } = product;

  let { productId } = useParams();

  const dispatch = useDispatch();

  const fetchSingleProductDetails = async () => {
    const response = await axios.get(`${url}/${productId}`).catch((error) => {
      console.log(error);
    });
    dispatch(selectProduct(response.data));
  };

  useEffect(() => {
    if (productId) fetchSingleProductDetails();

    return() => {
        dispatch(deleteProduct())
    }
  }, [productId]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two cloumn stackable center aligned grid">
            <div className="ui vertical divider"></div>
            <div className="middle aligned row">
              <div className="column 1p">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex='0'>
                    <div className="hidden content">
                        <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add to cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProoductDetails;
