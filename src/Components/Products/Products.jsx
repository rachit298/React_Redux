import styles from "./Products.module.css";

import Product from "./Product/Product";

//allows us connect redux store to react component
import { connect } from "react-redux";

const Products = ({ products }) => {
  console.log(products);
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
  );
};

// we can choose which state in our redux store we want this component to have access to
const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
