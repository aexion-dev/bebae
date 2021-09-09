import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { selectProductsFromCollection } from '../../redux/shop/shop.selectors';
import Slider from "react-slick";
import { formatPrice } from '../../utils/price';
import CustomButton from '../custom-button/custom-button';
import LeftArrowSVG from '../../assets/arrow-left.svg';
import RightArrowSVG from '../../assets/arrow-right.svg';
import './collection-preview.scss';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div>
      <div className={className} onClick={onClick}>
        <img alt="Next" src={RightArrowSVG} />
      </div>
      <div className="back-btn-container">
        <Link to='/shop'>
        <span className="nav-arrow nav-arrow-left"></span>
        <span className="link-text">Back</span>
        </Link>
      </div>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img alt="Previous" src={LeftArrowSVG} />
    </div>
  );
}

const CollectionPreview = ({ name, season, iconUrl, products, limit, history, match}) => {
  const settings = {
    className: "collection-slider",
    arrows: true,
    infinite: false,
    swipeToSlide: true,
    variableWidth: true,
    focusOnSelect: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

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
      }
    },
    [swiped],
  );

  if(!products || products.length < 1)
    return null;

    return (
      <div className="collection-preview">
        <div className="collection-header">
          <div className="collection-title">
            <img className="collection-icon" src={iconUrl} alt="" />
            <h1>{name}</h1>
          </div>
          <h3 className="collection-season"><span>{ season }</span></h3>
        </div>
        <Slider onSwipe={handleSwiped} {...settings}>
          {
            products
            ? products.filter((item, idx) => idx < limit || limit === -1)
              .map((item, idx) => (
                <div
                  key={idx}
                  className="collection-item"
                  item-slug={item.slug}
                  onClickCapture={handleOnItemClick}>
                  <div className="collection-item-image">
                    <img src={item.images[0].url} alt="" />
                  </div>
                  <div className="collection-item-info">
                    <h2 className="collection-item-name" onClick={() => history.push(`${match.url}/${item.slug}`)}>{item.name}</h2>
                    <p className="collection-item-specs">Black/Multi<br />
                      {formatPrice(item.price)}
                    </p>
                    <CustomButton
                      className="collection-btn"
                      onClick={() => history.push(`${match.url}/${item.slug}`)}>Shop Now</CustomButton>
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
