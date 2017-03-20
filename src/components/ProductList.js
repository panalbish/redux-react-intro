import React, { PropTypes } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToBasket } from '../reducers';

import './ProductList.css';

const stateToProps = state => ({
  products: state.products
});

const actionToProps = dispatch => ({
  onAddToBasketClick: bindActionCreators(addToBasket, dispatch)
});

const ProductList = ({ products, onAddToBasketClick }) => (
  <div className="rsProductLists">
    {products.map(product => (
      <div className="rsProduct" key={product.id}>
        <p className="rsProductDescription">{product.description}</p>
        <button
          className="addToCartButton"
          onClick={() => onAddToBasketClick(product.id)}
        >
          Add to basket
        </button>
      </div>
    ))}
  </div>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired,
  onAddToBasketClick: PropTypes.func.isRequired
};

export default connect(stateToProps, actionToProps)(ProductList);
