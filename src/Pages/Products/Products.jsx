import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../AxiosConfig/AxiosConfig";



export default function Products() {

   const navigate=  useNavigate()
    const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("http://localhost:3000/todos",{
      params:{
        limit:5,
      },

    }
      )
      .then((res) => {
       // console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

      axios.post()
  }, []);




  return <>
   <Row xs={1} md={4} className="g-4">
      {products.map((prd) => (
        <Col key={prd.id}>
          <Card>
            <Card.Img variant="top" src={prd.image} />
            <Card.Body>
              <Card.Title>{prd.title}</Card.Title>
              <Card.Text>
               {prd.description}
              </Card.Text>
            </Card.Body>

            <button className="btn btn-primary" onClick={()=>{
                navigate(`/productDetails/${prd.id}`)
            }}> details</button>
          </Card>
        </Col>
      ))}
    </Row>





  </>;
}
