import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import DashboardLayout from "../components/Layouts/DashboardLayout";
import ProductCard from "../components/ProductCard/ProductCard";
import { ProductListCall } from "../services/ApiCalls";
import styles from "./styles/ProductList.module.scss";
const ProductList = () => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleProductList = async () => {
    try {
      const res = await ProductListCall();
      console.log("response===>", res);
      setResponse(res.data.products);
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
    <DashboardLayout>
      <div className={styles.ProductListPage}>
        <h1>All Products</h1>
        <Row className="g-4">
          {!loading ? (
            response.length &&
            response.map((item: any) => (
              <Col lg={6} xl={4} xxl={3} key={item.id}>
                <ProductCard
                  images={item.images[0]}
                  title={item.title}
                  description={item.description}
                />
              </Col>
            ))
          ) : (
            <>Loading...</>
          )}
        </Row>
      </div>
    </DashboardLayout>
  );
};

export default ProductList;
