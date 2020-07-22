import React from 'react';
import { addProduct } from '../../firebase/firebase.utils';
import { createStripeProduct } from '../../stripe/stripe.utils';
import FormInput from '../../components/form-input/form-input';
import CustomButton from '../../components/custom-button/custom-button';

const init_state = {
  name:'',
  desc:'',
  price:'',
  sizes: [ 'S', 'M', 'L', 'XL' ],
  imageUrl:'',
  collection: '',
  slug:''
};

class AddProductPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = init_state;
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const product = this.state;
    product.price = product.price * 100;

    try {
      const { stripeId } = await createStripeProduct(product);
      await addProduct({ stripeId, ...product });
      this.setState(init_state);
    } catch (error) {
      console.log(error);
    }

    this.setState(init_state);
  }


  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value})
  }

  render() {
    return (
      <div className='add-collection-page'>
        <h2>Add New Product</h2>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='name'
            type='text'
            value={this.state.name}
            label='name'
            handleChange={this.handleChange}
            required />
          <FormInput
            name='desc'
            type='text'
            value={this.state.desc}
            label='desc'
            handleChange={this.handleChange}
            />
          <FormInput
            name='price'
            type='number'
            value={this.state.price}
            label='price'
            handleChange={this.handleChange}
            required />
          <FormInput
            name='imageUrl'
            type='url'
            value={this.state.imageUrl}
            label='ImageUrl'
            handleChange={this.handleChange}
            required />
          <FormInput
            name='collection'
            type='text'
            value={this.state.collection}
            label='Collection ID'
            handleChange={this.handleChange}
            required />
          <FormInput
            name='slug'
            type='text'
            value={this.state.slug}
            label='slug'
            handleChange={this.handleChange}
            required />
          <div className='buttons'>
            <CustomButton type='submit'>Add Product</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default AddProductPage;
