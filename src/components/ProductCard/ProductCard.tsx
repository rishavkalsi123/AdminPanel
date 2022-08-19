import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { IProductData } from "../../interfaces";
import styles from "./ProductCard.module.scss";
interface IProps {
  product: IProductData;
  addCart?: any;
  editCard?: any;
  removeCart?: any;
}
const ProductCard = (props: IProps) => {
  return (
    <div className={styles.singleProduct}>
      <div className={styles.singleProduct_inner}>
        <div className={styles.singleProduct_img}>
          <img src={props.product.thumbnail} alt="" />
        </div>
        <div className={styles.productContent}>
          <div className={styles.productText}>
            <h4>{props.product.title}</h4>
            <p>{props.product.description}</p>
            <div className={styles.rateWrap}>
              <span
                className={styles.price}
              >{`Price - ₹${props.product.price}`}</span>
              <span
                className={styles.discount}
              >{`${props.product.discountPercentage} % Off`}</span>
            </div>
          </div>
          <div className={styles.deleteProduct}>
            {props.addCart ? (
              <>
                <Button
                  className="me-2"
                  variant="outline-danger"
                  size="sm"
                  onClick={props.editCard}
                >
                  Edit
                </Button>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={props.addCart}
                >
                  Add to cart
                </Button>
              </>
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
