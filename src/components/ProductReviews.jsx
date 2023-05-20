import React from 'react'
import ProductReviewCard from './ProductReviewCard'
import '../styles/productReviews.css'

const ProductReviews = ({productReviews}) => {
  return (
    <div className='productReviews'>
        {
            productReviews.map((item, index)=>(
                <ProductReviewCard image={item.image} name={item.name} review={item.review} price={item.price} index={index} key={item.image}/>
            ))
        }
    </div>
  )
}

export default ProductReviews