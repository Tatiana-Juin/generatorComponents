import ButtonCode from "./ButtonCode"



export default function Header() {
  return (
    <div>
        <header className='header'>
        <h1>GeneratorComponents</h1>
        <ButtonCode text={"Generer le code"} />
      </header>
    </div>
  )
}
