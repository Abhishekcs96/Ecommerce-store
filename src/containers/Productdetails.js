import React from 'react'
import axios from 'axios' //to make api call
import { useEffect } from 'react'
import { SelectedProducts } from '../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Productdetails = () => {
    const product = useSelector(state => state.product)
    
    const {image, title, price, category, description} = product   
    const dispatch = useDispatch();
    const productID = useParams();
    const productID1 = productID.productId;   //extra step here, not needed, just for clarity 
    console.log(productID1)
    const fetchdetail = async () => {
        const response1 = await axios.get(`https://fakestoreapi.com/products/${productID1}`)
        
        .catch((err)=> {console.log("Error", err)})
        console.log(response1.data)
        dispatch(SelectedProducts(response1.data));
    }
    useEffect(()=>{
       if(productID && productID !== "") fetchdetail()
    },[productID]);
  return(
    <div className="ui grid container">
    {Object.keys(product).length === 0 ? (
      <div>...Loading</div>
    ) : (
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider"></div>
          <div className="middle aligned row">
            <div className="column lp">
              <img className="ui fluid image" src={image} alt= "product" />
            </div>
            <div className="column rp">
              <h1>{title}</h1>
              <h2>
                <a className="ui orange tag label">${price}</a>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p>{description}</p>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  )
    }
  export default Productdetails
  