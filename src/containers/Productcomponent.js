import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card } from "semantic-ui-react";

const Productcomponent = () => {
  const products = useSelector((state) => state.allProducts.products); 
console.log(products)
  const renderlist = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      
        <div className=" sixteen wide mobile eight wide tablet four wide computer column" key={id}>
          
          <Link to={`product/${id}`}>
            <Card.Group>
              <Card centered="true">
                <img src={image} wrapped ui={false} alt={title} height={200} className='images-container' />

                <Card.Content textAlign={"center"}>
                  <Card.Header id='card-header'>{title}</Card.Header>
                  <Card.Meta id='card-price'>${price}</Card.Meta>
                  <Card.Meta id='card-meta'>{category}</Card.Meta>
                </Card.Content>
              </Card>
            </Card.Group>
          </Link>
       
        </div>
      
    );
  });
  return <> {renderlist} 
  {console.log(renderlist)}</>;
};

export default Productcomponent;
