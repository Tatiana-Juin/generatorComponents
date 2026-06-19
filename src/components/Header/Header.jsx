
export default function Header({onGenerate }) {
  return (
    <div>
        <header className='header'>
        <h1>GeneratorComponents</h1>
         <button className="btn-code" onClick={onGenerate}>Generer le code</button>
      </header>
    </div>
  )
}
