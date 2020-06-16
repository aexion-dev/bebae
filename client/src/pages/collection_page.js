import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../redux/shop/shop.selectors';
import CollectionPreview from '../components/collection-preview/collection-preview';
import './collection_page.scss';

const CollectionPage = ({ collections }) => {
  if(!collections || collections.length > 1)
    return null;

  const { id, ...otherCollectionProps } = collections;

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
  collections: selectCollection(ownProps.match.params.collectionSlug)(state)
})

export default connect(mapStateToProps)(CollectionPage);