import React from 'react';

const Image = ({url}) => {
  return (
    <div className='mx-auto'>
      <img className='rounded-lg border flex-initial object-cover h-64 w-96' src={url} />
    </div>
    
  )
}

export default Image;