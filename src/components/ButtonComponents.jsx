import { useState } from "react"
import { DEFAULT_BLOCKS } from "../data/components"


export default function ButtonComponents({text,id}) {
  const [textComponents,setTextComponents] = useState("");
  return (
    <div>
        <button className="btn-components" value={id}> {text} </button>
    </div>
  )
}
