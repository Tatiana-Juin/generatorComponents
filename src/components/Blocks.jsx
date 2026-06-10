import React from 'react'

export default function Blocks({key,text}) {
  return (
    <div>
        <p key={key}>{text}</p>
    </div>
  )
}
