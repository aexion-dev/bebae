import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../redux/shop/shop.selectors';
import collectionImage from '../assets/img/collection-image-sample.png';
import CustomButton from '../components/custom-button/custom-button';
import './collections_list_page.scss';

const CollectionsListPage = ({ collections, history, match }) => {
  const [activeId, setActiveId] = useState(collections[0].id);

  const handleClick = (id) => {
    setActiveId(id);
  }

  return (
    <div className="collections-page">
      {
        collections
          .filter(collection => collection.id === activeId)
          .map(({ id, name, imageUrl, routeName }) => (
            <div key={id} className="collection-details">
              <div className="image-container">
                <img className="collection-image" src={collectionImage} alt="" />
                <img className="collection-icon" src="" alt="" />
              </div>
              <h2 className="collection-title">{name}</h2>
              <p className="collection-desc">Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed eu tellus ex. Etiam vel
                tincidunt libero. Phasellus vel faucibus arcu, vitae liquam leo.
                Nunc urna quam, ultrices vitae arcu sit amet, egestas tincidunt
                nisl. Vivamus neque justo, gravida sit amet arcu non, vehicula
                fringilla ipsum. Proin eget tincidunt ante, ac mollis tellus.</p>
              <CustomButton
                className="collection-btn"
                onClick={() => history.push(`${match.url}/${routeName}`)}>Shop Collection</CustomButton>
            </div>
        ))
      }
      <div className="collections-list">
        {
          collections.map(({ id, imageUrl}) => (
            <div
              key={id}
              onClick={() => handleClick(id)}
              className={id === activeId ? "collection-card active" : "collection-card"}
              style={{
                backgroundImage: `url(${imageUrl})`}}>
            </div>
          ))
        }
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default withRouter(connect(mapStateToProps)(CollectionsListPage));
