import React from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem, clearItemFromCart } from '../../redux/cart/cart.actions';
import { formatPrice } from '../../utils/price';
import './checkout-item.scss';


const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { name, imageUrl, price, size, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{size}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className='price'>{formatPrice(price)}</span>
      <span className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  clearItem: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
