import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../redux/shop/shop.selectors';
import CustomButton from '../components/custom-button/custom-button';
import BackSplash from '../components/back-splash/back-splash';
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
          .map(({ id, name, desc, imageUrl, iconUrl, slug }) => (
            <div key={id} className="collection-details">
              <div className="image-container">
                <img className="collection-image" src={imageUrl} alt="" />
                <img className="collection-icon" src={iconUrl} alt="" />
              </div>
              <h2 className="collection-title">{name}</h2>
              <p className="collection-desc">{desc}</p>
              <CustomButton
                inverted
                className="collection-btn"
                onClick={() => history.push(`${match.url}/${slug}`)}>Shop Collection</CustomButton>
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
      <BackSplash width="calc(15px + 645px)" color="black" />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default withRouter(connect(mapStateToProps)(CollectionsListPage));
