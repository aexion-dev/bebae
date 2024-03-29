import React from 'react';
import { addCollection } from '../../firebase/firebase.utils';
import FormInput from '../../components/form-input/form-input';
import CustomButton from '../../components/custom-button/custom-button';

const init_state = {
  name: '',
  desc: '',
  season: '',
  iconUrl: '',
  imageUrl: '',
  slug:''
};

class AddCollectionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = init_state;
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const collection = this.state;

    try {
      await addCollection(collection);
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
        <h2>Add New Collection</h2>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='name'
            type='text'
            value={this.state.name}
            label='Name'
            handleChange={this.handleChange}
            required />
          <FormInput
            name='desc'
            type='text'
            value={this.state.desc}
            label='Desc'
            handleChange={this.handleChange}
            required />
          <FormInput
            name='season'
            type='text'
            value={this.state.season}
            label='Season'
            handleChange={this.handleChange}
            required />
          <FormInput
            name='iconUrl'
            type='url'
            value={this.state.iconUrl}
            label='Icon URL'
            handleChange={this.handleChange}
            required />
          <FormInput
            name='imageUrl'
            type='url'
            value={this.state.imageUrl}
            label='Image URL'
            handleChange={this.handleChange}
            required />
          <FormInput
            name='slug'
            type='text'
            value={this.state.slug}
            label='Slug'
            handleChange={this.handleChange}
            required />
          <div className='buttons'>
            <CustomButton type='submit'>Add Collection</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default AddCollectionPage;
