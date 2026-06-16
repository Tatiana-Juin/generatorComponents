import React from 'react'

export default function Blocks({text}) {
  return (
    <div className='oneBlock'>
        <p>{text}</p>
        <div className="block-actions">
           <button className="btn-icon" title="Monter">↑</button>
           <button className="btn-icon" title="Descendre">↓</button>
           {/* bouton pour supprimer   */}
           <button className="btn-icon delete" title="Supprimer">🗑</button> 
        </div>
    </div>
  )
}
