import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./ProductCard.module.scss";
interface IProps {
  images: string;
  title: string;
  description: string;
  price: string;
  discount: string;
  addCart?: any;
  removeCart?: any;
}
const ProductCard = (props: IProps) => {
  return (
    <div className={styles.singleProduct}>
      <div className={styles.singleProduct_inner}>
        <div className={styles.singleProduct_img}>
          <img src={props.images} alt="" />
        </div>
        <div className={styles.productContent}>
          <div className={styles.productText}>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <div className={styles.rateWrap}>
              <span className={styles.price}>{`Price - ₹${props.price}`}</span>
              <span
                className={styles.discount}
              >{`${props.discount} % Off`}</span>
            </div>
          </div>
          <div className={styles.deleteProduct}>
            {props.addCart ? (
              <Button
                variant="outline-danger"
                size="sm"
                onClick={props.addCart}
              >
                Add to cart
              </Button>
            ) : (
              <Button
                variant="outline-danger"
                size="sm"
                onClick={props.removeCart}
              >
                Remove from cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
