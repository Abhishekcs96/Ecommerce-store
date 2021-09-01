import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card } from "semantic-ui-react";

const Productcomponent = () => {
  const products = useSelector((state) => state.allProducts.products); 

  const renderlist = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <>
        <div className="four wide column" key={id}>
          <Link to={`product/${id}`}>
            <Card.Group>
              <Card centered="true">
                <img src={image} wrapped ui={false} alt={title} height={200} />

                <Card.Content textAlign={"center"}>
                  <Card.Header>{title}</Card.Header>
                  <Card.Meta>${price}</Card.Meta>
                  <Card.Meta>{category}</Card.Meta>
                </Card.Content>
              </Card>
            </Card.Group>
          </Link>
        </div>
      </>
    );
  });
  return <> {renderlist} </>;
};

export default Productcomponent;
