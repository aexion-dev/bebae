import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { addItem, toggleCartHidden } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button';
import './product-options.scss';

const ProductOptions = ({ product, addItem, toggleCartHidden, hidden }) => {
  const [selectedOptions, setSelectedOptions] = useState({
    size: 'S'
  });

  const { sizes } = product;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { size } = selectedOptions;

    await addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.images[0].url,
      stripeId: product.stripeId,
      size
    });

    if(hidden) {
      await toggleCartHidden();
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelectedOptions({ ...selectedOptions, [name]: value });
  }

  return (
    <form className='product-options' onSubmit={handleSubmit}>
      {
        (sizes && sizes.length) > 0 ?
          <label className="group-label" htmlFor="size">SIZE:</label>
          : null
      }
      {
        sizes.map((size, idx) => (
          <span key={idx}>
            <input
              type="radio"
              name="size"
              value={size}
              onChange={handleChange}
              defaultChecked={idx === 0 ? true : false}
             />
            <label className="option-label">{size}</label>
          </span>
        ))
      }
      <CustomButton className="add-to-cart-btn" type='submit'>ADD TO CART</CustomButton>
    </form>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItem: item => dispatch(addItem(item)),
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductOptions);
