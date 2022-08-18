import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DashboardLayout from "../components/Layouts/DashboardLayout";
import ProductCard from "../components/ProductCard/ProductCard";
import { addCart } from "../store/CartSlice";
import { fetchProducts } from "../store/ProductSlice";
import styles from "./styles/ProductList.module.scss";
const ProductList = () => {
  const dispatch = useDispatch();
  const productsFromApi = useSelector(
    (state: any) => state.product.data.products
  );
  const status = useSelector((state: any) => state.product.status);
  // const [productList, setProductList] = useState([]);
  const [productLength, setProductLength] = useState(20);
  const AddToCart = (product: object) => {
    dispatch(addCart(product));
    console.log("product===>", product);
  };
  useEffect(() => {
    dispatch(fetchProducts(productLength));
  }, []);

  useEffect(() => {
    window.onscroll = () => {
      if (
        productsFromApi.length >= productLength &&
        window.innerHeight + window.scrollY >= document.body.offsetHeight
      ) {
        const newVal = productLength + 20;
        setProductLength(newVal);
        dispatch(fetchProducts(newVal));
      }
    };
  });

  return (
    <DashboardLayout>
      <div className={styles.ProductListPage}>
        <div className="listingHeader">
          <h1>All Products</h1>
          <div className="searchField">
            <input
              className="form-control"
              placeholder="search user"
              // value={searchValue}
              // onChange={handleSearch}
              type="text"
            />
            {/* {searchedUsers.length ? (
              <div className="searchList">
                <ul>
                  {searchedUsers.map((userSingle: IUser) => (
                    <Link to={`/user/${userSingle.id}`} key={userSingle.id}>
                      <li>
                        <h5>{`${userSingle.firstName} ${userSingle.lastName}`}</h5>
                        <span>{userSingle.email}</span>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            ) : (
              <></>
            )} */}
          </div>
          <Button>Add Product +</Button>
        </div>
        <Row className="g-4">
          {productsFromApi && status === "idle" ? (
            productsFromApi.map((item: any) => (
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
          ) : status === "error" ? (
            <Col>Something went wrong.</Col>
          ) : (
            <Col>Loading...</Col>
          )}
        </Row>
        {/* <h2 className={`${styles.loadMore} ${loadMore ? styles.show : ""}`}>
          Loading....
        </h2> */}
      </div>
    </DashboardLayout>
  );
};

export default ProductList;
