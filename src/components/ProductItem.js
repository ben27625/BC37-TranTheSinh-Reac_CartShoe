import React, { Component } from "react";
import styles from "./ProductItem.module.css";

export default class ProductItem extends Component {
  render() {
    const { name, price, image } = this.props.item;

    return (
      <div className={styles.item}>
        <img className={styles.img} alt="" src={image} />
        <h4>Tên : {name}</h4>
        <h4>Giá :{price}</h4>
        <button
          onClick={() => this.props.addToCart(this.props.item)}
          className={styles.btn}
        >
          Add to cart
        </button>
        <br />
        <br />

        <button
          onClick={() => {
            this.props.setSelectedItem(this.props.item);
          }}
          className={styles.btn}
        >
          Xem chi tiết
        </button>
      </div>
    );
  }
}
