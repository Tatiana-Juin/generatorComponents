import React from 'react'

export default function ButtonBlocks({type,onClick}) {
  return (
        <button className='btn-components' onClick={onClick}> {type} </button>
    
  )
}
