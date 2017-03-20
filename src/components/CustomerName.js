import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const stateToProps = state => ({
  items: state.basket.length,
  name: state.user.name
});

const CustomerName = ({ name, items }) => (
  <div>Hello, {name}! ({items} {items === 1 ? 'item' : 'items'})</div>
);

CustomerName.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.number.isRequired
};

export default connect(stateToProps)(CustomerName);
