import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../redux/shop/shop.selectors';
import { useWindowSize } from '../utils/windowSize';
import CollectionPreview from '../components/collection-preview/collection-preview';
import './collection_page.scss';

const CollectionPage = ({ collection, updateBackgroundWidth }) => {

  const size = useWindowSize();
  let bgWidth = 0;

  switch(true) {
    case (size.width < 768):
      bgWidth = null;
      break;
    case (size.width < 1024):
      bgWidth = "calc(125px + calc(calc(100vw - 150px) * .15))";
      break;
    case (size.width < 1280):
      bgWidth = 'calc(150px + calc(calc(100vw - 150px) * .15))';
      break;
    default:
      bgWidth = 'calc(75px + calc(calc(100vw - 150px) * .15))';
  }

  useEffect(() => {
    updateBackgroundWidth(bgWidth);
  }, [bgWidth, updateBackgroundWidth]);

  if(!collection[0] || collection.length > 1)
    return null;

  const { id, ...otherCollectionProps } = collection[0];

  return (
    <div className='collection-page'>
      <CollectionPreview
        key={id}
        collectionId={id}
        limit={-1}
        {...otherCollectionProps} />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionSlug)(state)
})

export default connect(mapStateToProps)(CollectionPage);
