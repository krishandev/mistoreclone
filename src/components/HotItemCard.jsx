import React from 'react'
import '../styles/hotItemCard.css'

const HotItemCard = ({image, name, price, index}) => {
  return (
    <div className='hotItemCard'>
        <div className='hotProducts'>
        <img src={image} alt={`${index} product`}/>
        <p>{name}</p>
        <span>{price}</span>
        </div>

    </div>
  )
}

export default HotItemCard