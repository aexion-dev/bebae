import React from 'react';
import { useWindowSize } from '../utils/windowSize';
import CustomButton from '../components/custom-button/custom-button';
import BackSplash from '../components/back-splash/back-splash';
import './test_page.scss';

const TestPage = () => {
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

  return (
    <>
    <div className="collections-page">
      <div className="collections-list">
        <div className="collection-container active">
          <div className="image-container">
            <img className="collection-image" src="https://firebasestorage.googleapis.com/v0/b/bebae-84b85.appspot.com/o/collection-image-sample.png?alt=media&token=ed339329-e129-485d-a1ae-a05b0e8e8d24" alt="" />
            <img className="collection-icon" src="https://firebasestorage.googleapis.com/v0/b/bebae-84b85.appspot.com/o/collection-icon-sample.png?alt=media&token=bf8805e4-25ff-46ba-b1b5-4d323398cf5f" alt="" />
          </div>
          <div className="details-container">
            <h2>Classic Collection</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              tellus ex. Etiam vel tincidunt libero. Phasellus vel faucibus arcu,
              vitae liquam leo.</p>
            <CustomButton>Shop Collection</CustomButton>
          </div>
        </div>
        <div className="collection-container">
          <div className="image-container">
            <img className="collection-image" src="https://firebasestorage.googleapis.com/v0/b/bebae-84b85.appspot.com/o/collection-image-sample.png?alt=media&token=ed339329-e129-485d-a1ae-a05b0e8e8d24" alt="" />
            <img className="collection-icon" src="https://firebasestorage.googleapis.com/v0/b/bebae-84b85.appspot.com/o/garden-collection-icon.png?alt=media&token=6d56463e-6e16-4a59-8eb4-75fbc6845fd0" alt="" />
          </div>
          <div className="details-container">
            <h2>Garden Collection</h2>
            <p>Nunc urna quam, ultrices vitae arcu sit amet, egestas tincidunt nisl.
              Vivamus neque justo, gravida sit amet arcu non, vehicula fringilla
              ipsum. Proin eget tincidunt ante, ac mollis tellus.</p>
            <CustomButton>Shop Collection</CustomButton>
          </div>
        </div>
      </div>
      <div className="collections-nav">
        <div className="collection-card active">
        </div>
        <div className="collection-card">
        </div>
      </div>
    </div>
    <BackSplash width={bgWidth} color="black" />
    </>
  )
}

export default TestPage;
