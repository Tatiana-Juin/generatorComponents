import BlockItem from "./BlockItem";
 
export default function Canvas({ selectedIdComponent, block, errors,removeBlock }) {
  return (
    <div className="blockDefault">
      <h2>Structure des blocks de {selectedIdComponent}</h2>
      <p>{errors}</p>
      {block.map(blocks => (
        <BlockItem key={blocks.id} block={blocks} removeBlock={removeBlock} />
      ))}
    </div>
  );
}