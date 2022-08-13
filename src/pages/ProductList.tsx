import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import DashboardLayout from "../components/Layouts/DashboardLayout";
import ProductCard from "../components/ProductCard/ProductCard";
import { ProductListCall } from "../services/ApiCalls";
import { addCart } from "../store/CartSlice";
import styles from "./styles/ProductList.module.scss";
const ProductList = () => {
  const dispatch = useDispatch();
  const [productList, setProductList] = useState([]);
  const [response, setResponse] = useState({});
  const [productLength, setProductLength] = useState(20);
  const [loading, setLoading] = useState(true);
  const [loadMore, setLoadMore] = useState(false);
  const handleProductList = async (limit: number = productLength) => {
    try {
      const res = await ProductListCall(limit);
      setResponse(res.data);
      setProductList(res.data.products);
      console.log("productList===>", res);
      if (res.status === 200) {
        setLoading(false);
        setLoadMore(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const AddToCart = (product: object) => {
    dispatch(addCart(product));
    console.log("product===>", product);
  };
  useEffect(() => {
    handleProductList();
  }, []);

  useEffect(() => {
    window.onscroll = () => {
      if (
        productList.length >= productLength &&
        window.innerHeight + window.scrollY >= document.body.offsetHeight
      ) {
        const newVal = productLength + 20;
        setLoadMore(true);
        setProductLength(newVal);
        handleProductList(newVal);
      }
    };
  });

  return (
    <DashboardLayout>
      <div className={styles.ProductListPage}>
        <h1>All Products</h1>
        <Row className="g-4">
          {!loading ? (
            productList.length &&
            productList.map((item: any) => (
              <Col lg={6} xl={4} xxl={3} key={item.id}>
                <ProductCard
                  images={item.thumbnail}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  discount={item.discountPercentage}
                  addCart={() => {
                    AddToCart(item);
                  }}
                />
              </Col>
            ))
          ) : (
            <>Loading...</>
          )}
        </Row>
        <h2 className={`${styles.loadMore} ${loadMore ? styles.show : ""}`}>
          Loading....
        </h2>
      </div>
    </DashboardLayout>
  );
};

export default ProductList;
