import { BLOCK_TYPES } from "../../data/components";
import Button from "../../components/Button/Button";
 
export default function BlockPalette({ onAdd }) {
  return (
    <>
      <h2>Blocks</h2>
      <div className='blocks'>
        {BLOCK_TYPES.map(blockType => (
          <Button
            key={blockType.type}
            type={blockType.type}
            onClick={() => onAdd(blockType.type)}
          />
        ))}
      </div>
    </>
  );
}