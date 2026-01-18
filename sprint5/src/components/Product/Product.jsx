import React from 'react';
import { useParams } from 'react-router';

export const Product = () => {
  const {productId} = useParams();
  return <div>Product{productId}</div>;
};
