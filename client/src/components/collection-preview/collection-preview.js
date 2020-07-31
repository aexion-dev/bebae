import React from 'react';
import { connect } from 'react-redux';
import { selectProductsFromCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../collection-item/collection-item';
import Slider from "react-slick";
import './collection-preview.scss';

const settings = {
  className: "collection-slider",
  arrows: false,
  infinite: false,
  slidesToShow: 3.5,
  swipeToSlide: true,
  afterChange: function(index) {
    console.log(
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    );
  }
}

const CollectionPreview = ({ name, products, limit, history, match}) => {
  if(!products || products.length < 1)
    return null;

    return (
      <div className="collection-preview">
        <div className="collection-header">
          <h1 className="collection-title">GARDEN COLLECTION</h1>
          <h3 className="collection-season"><hr />FALL/WINTER '20</h3>
        </div>
        <Slider {...settings}>
          {
            products
            ? products.filter((item, idx, history, match) => idx < limit || limit === -1)
              .map((item, idx, history, match) => (
                <div key={idx} className="collection-item">
                  <div className="product-image">
                    <img src={item.imageUrl} alt="" />
                  </div>
                  <h2 className="product-name">{item.name}</h2>
                  <p className="product-specs">Black/Multi<br />
                    {item.price}
                  </p>
                </div>
              ))
            : null
          }
        </Slider>
      </div>
    )

  // return (
  //   <div className='collection-preview'>
  //     <h1 className='title'>{name}</h1>
  //     <div className='preview'>
  //       {
  //         products
  //         ?  products.filter((item, idx, history, match) => idx < limit || limit === -1)
  //             .map((item, idx, history, match) => (
  //               <CollectionItem key={idx} item={item} history match />
  //             ))
  //         : null
  //       }
  //     </div>
  //   </div>
  // )
}


const mapStateToProps = (state, ownProps) => ({
  products: selectProductsFromCollection(ownProps.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPreview);
