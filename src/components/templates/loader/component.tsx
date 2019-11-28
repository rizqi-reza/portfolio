import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const LoaderComponent = () => {
  return <Loader type="TailSpin" color="#283593" height={100} width={100} timeout={3000} />;
};

export default LoaderComponent;
