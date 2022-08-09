import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./ProductCard.module.scss";
interface IProps {
  images: string;
  title: string;
  description: string;
}
const ProductCard = (props: IProps) => {
  return (
    <div className={styles.singleProduct}>
      <div className={styles.singleProduct_head}>
        <div className={styles.singleProduct_img}>
          <img src={props.images} alt="" />
        </div>
        <div className={styles.productContent}>
          <h4>{props.title}</h4>
          <p>{props.description}</p>
        </div>
      </div>
      <div className={styles.deleteProduct}>
        <Button variant="outline-danger" size="sm" onClick={() => {}}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
