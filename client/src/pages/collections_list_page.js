import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../redux/shop/shop.selectors';
import { useWindowSize } from '../utils/windowSize';
import CustomButton from '../components/custom-button/custom-button';
import './collections_list_page.scss';

const CollectionsListPage = ({ collections, history, match, updateBackgroundWidth }) => {
  const [activeId, setActiveId] = useState(collections[0].id);

  const { changePageTheme } = useContext(ThemeContext);
  const size = useWindowSize();
  let bgWidth = 0;

  switch(true) {
    case (size.width < 768):
      bgWidth = "calc(100vw - 65px)";
      break;
    case (size.width < 1024):
      bgWidth = "calc(100vw - 85px)";
      break;
    case (size.width < 1280):
      bgWidth = 415;
      break;
    default:
      bgWidth = 615;
  }

  useEffect(() => {
    changePageTheme("collection-list");

    return () => {
      changePageTheme("default");
    }
  }, [changePageTheme]);

  useEffect(() => {
    updateBackgroundWidth(bgWidth);
  }, [bgWidth, updateBackgroundWidth]);

  const handleClick = (id) => {
    setActiveId(id);
  }

  return (
    <div className="collections-page">
      <div className="collections-list">
        {
          collections
            .map(({ id, name, desc, imageUrl, iconUrl, slug }) => (
              <div key={id} className={`collection-container ${id === activeId ? 'active' : ''}`}>
                <div className="image-container">
                  <img className="collection-image" src={imageUrl} alt="" />
                  <img className="collection-icon" src={iconUrl} alt="" />
                </div>
                <div className="details-container">
                  <h2 className="collection-title">{name}</h2>
                  <p className="collection-desc">{desc}</p>
                  <CustomButton
                    inverted
                    className="collection-btn"
                    onClick={() => history.push(`${match.url}/${slug}`)}>Shop Collection</CustomButton>
                </div>
              </div>
          ))
        }
      </div>
      <div className="collections-nav">
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
