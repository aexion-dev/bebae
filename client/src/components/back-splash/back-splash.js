import React, { useEffect, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './back-splash.scss';

const BackSplash = ({ width, color }) => {
  const { toggleBackground } = useContext(ThemeContext);

  useEffect(() => {
    toggleBackground(true);

    return () => {
      toggleBackground(false);
    };
  }, []);

  return (
    <div
      className="back-splash"
      style={{width: width, backgroundColor: color}}>
    </div>
  )
}

export default BackSplash;
