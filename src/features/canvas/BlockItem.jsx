export default function BlockItem({ block,removeBlock,moveUp,moveDown }) {
 
  function handleDelete() {
    removeBlock(block.id)
  }
  function handleUp(){
    moveUp(block.id)
  }

  function handleDown(){
    moveDown(block.id)
  }
 
  return (
    <div className='oneBlock'>
      <p>{block.type}</p>
      <div className="block-actions">
        <button className="btn-icon" title="Monter" onClick={handleUp}>↑</button>
        <button className="btn-icon" title="Descendre" onClick={handleDown}>↓</button>
        <button className="btn-icon delete" title="Supprimer" onClick={handleDelete}>🗑</button>
      </div>
    </div>
  );
}