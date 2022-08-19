import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddProductForm from "../components/AddProduct/AddProduct";
import DashboardLayout from "../components/Layouts/DashboardLayout";
import SidebarLayout from "../components/Layouts/SidebarLayout";
import ProductCard from "../components/ProductCard/ProductCard";
import { IProductData } from "../interfaces";
import { ProductSearch } from "../services/ApiCalls";
import { addCart } from "../store/CartSlice";
import { setProducts } from "../store/ProductSlice";
import { fetchProducts } from "../store/ProductSlice";
import styles from "./styles/ProductList.module.scss";
const ProductList = () => {
  const dispatch = useDispatch();
  const productsFromApi = useSelector(
    (state: any) => state.product.data.products
  );
  const status = useSelector((state: any) => state.product.status);
  const [productLength, setProductLength] = useState(20);
  const [searchValue, setSearchValue] = useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [editProduct, setEditProduct] = useState<IProductData | null>();

  const handleToggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const AddToCart = (product: IProductData) => {
    dispatch(addCart(product));
  };
  const handleAddProduct = (product: IProductData) => {
    setEditProduct(null);
    handleToggleSidebar();
  };
  const handleEditProduct = (product: IProductData) => {
    setEditProduct(product);
    handleToggleSidebar();
  };
  useEffect(() => {
    dispatch(fetchProducts(productLength));
  }, []);

  useEffect(() => {
    window.onscroll = () => {
      if (
        productsFromApi?.length >= productLength &&
        window.innerHeight + window.scrollY >= document.body.offsetHeight
      ) {
        const newVal = productLength + 20;
        setProductLength(newVal);
        dispatch(fetchProducts(newVal));
      }
    };
  });
  const handleUpdateProduct = (product: IProductData) => {
    const productCopy = productsFromApi;
    try {
      const userIndex = productCopy.findIndex(
        (item: IProductData) => item.id == product.id
      );
      const value = productsFromApi[userIndex];
      if (userIndex !== -1) {
        let updatedValue = productCopy[userIndex];
        updatedValue = {
          ...updatedValue,
          ...product,
        };
        productCopy[userIndex] = updatedValue;
      } else {
        dispatch(setProducts([...productCopy]));
      }
    } catch (err) {
      console.log("errrr", err);
    }
    dispatch(setProducts([...productCopy]));
  };
  const callSearchApi = async () => {
    try {
      const res = await ProductSearch(searchValue);
      setSearchedProducts(res.data.products);
    } catch (err) {}
  };

  const handleSearch = (e: any) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue) {
      callSearchApi();
    } else {
      setSearchedProducts([]);
    }
  }, [searchValue]);

  return (
    <DashboardLayout>
      <div className={styles.ProductListPage}>
        <div className="listingHeader">
          <h1>All Products</h1>
          <div className="searchField">
            <input
              className="form-control"
              placeholder="search user"
              value={searchValue}
              onChange={handleSearch}
              type="text"
            />
            {searchedProducts ? (
              <div className="searchList">
                <ul>
                  {searchedProducts.map((productSingle: IProductData) => (
                    <Link
                      to={`/product/${productSingle.id}`}
                      key={productSingle.id}
                    >
                      <li>
                        <h5>{productSingle.title} </h5>
                        <span>{productSingle.description}</span>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div>
          <Button onClick={handleAddProduct}>Add Product +</Button>
        </div>
        <Row className="g-4">
          {productsFromApi && status === "idle" ? (
            productsFromApi.map((item: any) => (
              <Col lg={6} xl={4} xxl={3} key={item.id}>
                <ProductCard
                  product={item}
                  addCart={() => {
                    AddToCart(item);
                  }}
                  editCard={() => {
                    handleEditProduct(item);
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
        <SidebarLayout
          title={`${editProduct ? "Edit Products" : "Add Products"}`}
          show={openSidebar}
          handleToggle={handleToggleSidebar}
        >
          <AddProductForm
            productEdit={editProduct}
            updateProductList={handleUpdateProduct}
            toggleSidebar={handleToggleSidebar}
          />
        </SidebarLayout>
      </div>
    </DashboardLayout>
  );
};

export default ProductList;
