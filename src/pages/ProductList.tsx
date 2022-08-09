import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { ProductListCall } from "../services/ApiCalls";

const ProductList = () => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleProductList = async () => {
    try {
      const res = await ProductListCall();
      console.log("response===>", res);
      setResponse(res.data);
      if (res.status === 200) {
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleProductList();
  }, []);
  return (
    <div>
      <div className="userListPage">
        <Row className="g-4">
          {!loading ? (
            response.length &&
            response.map((item: any) => (
              <Col md={4} key={item.id}>
                <div className="singleUser">
                  <div className="singleUser_head">
                    <div className="singleUser_img">
                      <img src={item.image} alt="" />
                    </div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.email}</p>
                    </div>
                  </div>
                  <div className="deleteUser">
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => {}}
                    >
                      Add to cart
                    </Button>
                  </div>
                </div>
              </Col>
            ))
          ) : (
            <>Loading...</>
          )}
        </Row>
      </div>
    </div>
  );
};

export default ProductList;
