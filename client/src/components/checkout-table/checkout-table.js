import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { formatPrice } from '../../utils/price';
import CheckoutItem from '../checkout-item/checkout-item';
import CheckoutButton from '../checkout-button/checkout-button';
import './checkout-table.scss';

const CheckoutTable = ({ cartItems, total }) => (
  <div className='checkout-table'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Size</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map((cartItem, idx) =>
        <CheckoutItem key={idx} cartItem={cartItem} />
      )
    }
    <div className='total'>
      <span>TOTAL: {formatPrice(total)}</span>
    </div>
    <CheckoutButton items={cartItems}/>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutTable);
