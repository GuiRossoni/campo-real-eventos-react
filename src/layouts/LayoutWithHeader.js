import React from 'react';
import Header from '../components/Header';

const LayoutWithHeader = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default LayoutWithHeader;