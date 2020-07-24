import React, { useState } from 'react';
import './product-image.scss';

// const testObj = [
//   {
//     id: 0,
//     view: 'Front',
//     url: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
//   },
//   {
//     id: 1,
//     view: 'Left Side',
//     url: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
//   },
//   {
//     id: 2,
//     view: 'Right Side',
//     url: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
//   },
//   {
//     id: 3,
//     view: 'Back',
//     url: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
//   }
// ]


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
