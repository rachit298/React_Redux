import styles from "./CartItem.module.css";

import { connect } from "react-redux";

import {
  adjustQty,
  removeFromCart,
} from "../../../redux/Shopping/Shopping_actions";
import { useState } from "react";

const CartItem = ({ item, removeFromCart, adjustQty }) => {
  const [input, setInput] = useState(item.qty);

  function onChangeHandler(event) {
    setInput((oldValue) => event.target.value);
    adjustQty(item.id, event.target.value);
  }

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={item.image}
        alt={item.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{item.title}</p>
        <p className={styles.details__desc}>{item.description}</p>
        <p className={styles.details__price}>$ {item.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          className={styles.actions__deleteItemBtn}
          onClick={() => removeFromCart(item.id)}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, input) => dispatch(adjustQty(id, input)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
