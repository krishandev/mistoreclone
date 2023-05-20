import React from 'react'
import VideoCard from './VideoCard'
import '../styles/videos.css'

const Videos = ({videos}) => {
  return (
    <div className='videos'>
        {
            videos.map((item, index)=>(
                <VideoCard image={item.image} name={item.name} key={item.image} index={index}/>
            ))
        }
    </div>
  )
}

export default Videos