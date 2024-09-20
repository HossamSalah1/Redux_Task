import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axiosInstance from "../../AxiosConfig/AxiosConfig";


export default function ProductDetails() {
  // const { id } = useParams();
  // //console.log(id);
  const product=useLoaderData()
  // const [product, setProduct] = useState({});
  // async function getProductById() {
  //   try {
  //     const res = await axiosInstance.get(`/products/${id}`);
  //     console.log(res.data);
  //     setProduct(res.data);
  //     //  console.log(product);

  //     //console.log(product);
  //     //console.log(product);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // useEffect(() => {
  //   getProductById();
  // }, []);
  return (
    <div>
      <br />
      <Card>
        <Card.Img
          variant="top"
          src={product.image}
          style={{ width: "400px", height: "400px" }}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export const loader = async (arg) => {

  const res = await axiosInstance.get(`/products/${arg.params.id}`);
  return res.data

}
