import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../redux/shop/shop.selectors';
import CustomButton from '../components/custom-button/custom-button';
import './collections_list_page.scss';

const CollectionsListPage = ({ collections, history, match, updateBackgroundWidth }) => {
  const [activeId, setActiveId] = useState(collections[0].id);

  useEffect(() => {
    updateBackgroundWidth('660px');
  }, [updateBackgroundWidth]);

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
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default withRouter(connect(mapStateToProps)(CollectionsListPage));
