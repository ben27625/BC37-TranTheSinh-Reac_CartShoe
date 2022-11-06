import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    return (
      <div
        className="position-fixed w-100 h-100 top-0 left-0"
        style={{
          backgroundColor: "rgba(0,0,0,0.8)",
        }}
      >
        <div
          className="w-50 bg-white position-absolute p-5"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <button
            onClick={this.props.hideCart}
            className="btn btn-dark position-absolute"
            style={{ top: "10px", right: "10px" }}
          >
            X
          </button>
          <h2 className="text-center fs-3">Giỏ hàng</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Mã SP</th>
                <th>Tên SP</th>
                <th>Hình ảnh</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
                <th>Thành tiền</th>
                <th> </th>
              </tr>
            </thead>

            <tbody>
              {this.props.cart.map((item) => {
                return (
                  <tr>
                    <td>{item.prod.id}</td>
                    <td>{item.prod.name}</td>
                    <td>
                      <img
                        src={item.prod.image}
                        alt=""
                        style={{ width: 100 }}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-info"
                        onClick={() =>
                          this.props.decreaseQuantity(item.prod.id)
                        }
                      >
                        {" "}
                        -
                      </button>
                      <span className="mx-2 fs-5">{item.quantity}</span>
                      <button
                        className="btn btn-info"
                        onClick={() =>
                          this.props.increaseQuantity(item.prod.id)
                        }
                      >
                        +
                      </button>
                    </td>
                    <td>{item.prod.price}</td>
                    <td>{item.quantity * item.prod.price}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.deleteCartItem(item.prod.id);
                        }}
                        className="btn btn-danger"
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

//
