export default function ButtonComponents({text,id,onClick}) {

  return (
    <div>
        <button className="btn-components" value={id} onClick={onClick}> {text} </button>
    </div>
  )
}
