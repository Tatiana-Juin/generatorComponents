export default function BlockItem({ block }) {
 
  function handleDelete() {
    console.log(block.type);
  }
 
  return (
    <div className='oneBlock'>
      <p>{block.type}</p>
      <div className="block-actions">
        <button className="btn-icon" title="Monter">↑</button>
        <button className="btn-icon" title="Descendre">↓</button>
        <button className="btn-icon delete" title="Supprimer" onClick={handleDelete}>🗑</button>
      </div>
    </div>
  );
}