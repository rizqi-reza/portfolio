import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const LoaderComponent = () => {
  return (
    <Loader
      type="TailSpin"
      color="#283593"
      height={80}
      width={80}
      style={{ width: '100%', height: '100vh', textAlign: 'center', marginTop: '25%' }}
    />
  );
};

export default LoaderComponent;
