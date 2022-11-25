import React from "react";
import product1 from "../../images/image-product-1.jpg";
import productThumb1 from "../../images/image-product-1-thumbnail.jpg";
import productThumb2 from "../../images/image-product-2-thumbnail.jpg";
import productThumb3 from "../../images/image-product-3-thumbnail.jpg";
import productThumb4 from "../../images/image-product-4-thumbnail.jpg";
const products = [productThumb1, productThumb2, productThumb3, productThumb4];

const ShowCaseContainer = () => {
  return (
    <div className='showCase'>
      <div className='display'>
        <img
          className='display_img'
          src={product1}
          alt='#'
        />
      </div>

      <div className='aside_img'>
        {products.map((product, index) => {
          return (
            <img
              src={product}
              alt='#'
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShowCaseContainer;
