import React from 'react'

type ArrowButtonProps = {
    icon: React.ReactElement;
}

function ArrowButton({icon}: ArrowButtonProps) {
  return (
    <button className='bg-light-peach rounded-full p-2'>
        {icon}
    </button>
  )
}

export default ArrowButton