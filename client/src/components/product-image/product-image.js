import React, { useState } from 'react';
import './product-image.scss';

const ProductImage = ({ images }) => {
  const [activeImg, setActiveImg] = useState(0);

  if(!images || images.length < 1)
    return null;

  const handleClick = (id) => {
    setActiveImg(id)
  }

  return (
    <div className="product-image">
      {
        images.map(image =>
          <img
            key={image.id}
            className={image.id === activeImg ? 'active' : 'inactive'}
            src={image.url}
            alt="" />
        )
      }
      <ul className="view-menu">
        {
          images.map(image =>
            <li
              key={image.id}
              onClick={() => handleClick(image.id)}
              className={image.id === activeImg ? 'active' : 'inactive'}>
              <hr />{image.view}
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default ProductImage;
