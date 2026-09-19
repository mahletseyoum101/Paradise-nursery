import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "./redux/CartSlice";

import "./App.css";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          Paradise Nursery 🌿
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>

          <Link to="/plants">
            Plants
          </Link>

          <Link to="/cart" className="cart-link">
            🛒 Cart

            <span className="cart-count">
              {totalItems}
            </span>
          </Link>
        </div>
      </nav>

      <main className="cart-page">
        <div className="cart-container">

          <div className="cart-heading">
            <h1>Shopping Cart</h1>
          </div>

          {cartItems.length === 0 ? (
            <div className="empty-cart">

              <h2>Your cart is empty 🌱</h2>

              <p>
                Discover some beautiful plants and
                add them to your cart.
              </p>

              <Link to="/plants">
                <button className="continue-button">
                  Continue Shopping
                </button>
              </Link>

            </div>
          ) : (
            <>
              {cartItems.map((item) => {
                const itemTotal =
                  item.price * item.quantity;

                return (
                  <div
                    className="cart-item"
                    key={item.id}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />

                    <div>
                      <h2 className="cart-item-name">
                        {item.name}
                      </h2>

                      <p className="cart-item-price">
                        Unit Price: ${item.price}
                      </p>

                      <div className="quantity-controls">

                        <button
                          className="quantity-button"
                          onClick={() =>
                            dispatch(
                              decreaseQuantity(item.id)
                            )
                          }
                        >
                          −
                        </button>

                        <span className="quantity">
                          {item.quantity}
                        </span>

                        <button
                          className="quantity-button"
                          onClick={() =>
                            dispatch(
                              increaseQuantity(item.id)
                            )
                          }
                        >
                          +
                        </button>

                      </div>
                    </div>

                    <div className="cart-item-right">

                      <div className="item-total">
                        ${itemTotal.toFixed(2)}
                      </div>

                      <button
                        className="delete-button"
                        onClick={() =>
                          dispatch(
                            removeFromCart(item.id)
                          )
                        }
                      >
                        Delete
                      </button>

                    </div>
                  </div>
                );
              })}

              <div className="cart-summary">

                <div className="cart-total">
                  Total: ${totalAmount.toFixed(2)}
                </div>

                <div className="cart-actions">

                  <Link to="/plants">
                    <button className="continue-button">
                      Continue Shopping
                    </button>
                  </Link>

                  <button
                    className="checkout-button"
                    onClick={() =>
                      alert("Checkout Coming Soon!")
                    }
                  >
                    Checkout
                  </button>

                </div>

              </div>
            </>
          )}

        </div>
      </main>
    </>
  );
}

export default CartItem;
