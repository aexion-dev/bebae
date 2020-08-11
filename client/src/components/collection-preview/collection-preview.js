import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
  variableWidth: true
}

const CollectionPreview = ({ name, products, limit, history, match}) => {
  const [swiped, setSwiped] = useState(false);

  const handleSwiped = useCallback(() => {
    setSwiped(true);
  }, [setSwiped]);

  const handleOnItemClick = useCallback(
    (e) => {
      if (swiped) {
        e.stopPropagation();
        e.preventDefault();
        setSwiped(false);
      } else {
        console.log('clicked');
      }
    },
    [swiped],
  );

  if(!products || products.length < 1)
    return null;

    return (
      <div className="collection-preview">
        <div className="collection-header">
          <h1 className="collection-title">GARDEN COLLECTION</h1>
          <h3 className="collection-season"><hr />FALL/WINTER '20</h3>
        </div>
        <Slider onSwipe={handleSwiped} {...settings}>
          {
            products
            ? products.filter((item, idx) => idx < limit || limit === -1)
              .map((item, idx) => (
                <div
                  key={idx}
                  className="collection-item"
                  style={{ width: 400 }}
                  onClickCapture={handleOnItemClick}>
                  <div className="collection-item-image">
                    <img src={item.imageUrl} alt="" onClick={() => history.push(`${match.url}/${item.routeName}`)} />
                  </div>
                  <div className="collection-item-info">
                    <h2 className="collection-item-name" onClick={() => history.push(`${match.url}/${item.routeName}`)}>{item.name}</h2>
                    <p className="collection-item-specs">Black/Multi<br />
                      ${item.price}.00
                    </p>
                  </div>
                </div>
              ))
            : null
          }
        </Slider>
      </div>
    )
}


const mapStateToProps = (state, ownProps) => ({
  products: selectProductsFromCollection(ownProps.collectionId)(state)
})

export default connect(mapStateToProps)(withRouter(CollectionPreview));
