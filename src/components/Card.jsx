import React from 'react'

function Card({username="no", image}) {
  return (
    <>
        <img src= {image} />
        
        {username}
        <div className="bg-orange-300 text-white p-4">
      The picture has amazing look
    </div>
    </>
  )
}

export default Card

