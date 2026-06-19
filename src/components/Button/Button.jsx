export default function Button({ text, id, type, onClick }) {
  return (
    <button className='btn-components' value={id} onClick={onClick}>
      {type} {text}
    </button>
  );
}