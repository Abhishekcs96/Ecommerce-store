import React from "react";
import { useSelector } from "react-redux";
import Productcomponent from "./Productcomponent";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Setproducts } from "../redux/actions/actions";

const Productlisting = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const feetch = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error:", err);
      });
    console.log(res);
    dispatch(Setproducts(res.data));
  };

  useEffect(() => {
    feetch();
  }, []);

  return (
    <div className="ui grid container ">
      <Productcomponent />
    </div>
  );
};

export default Productlisting;
