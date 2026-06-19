import ComponentSelector from "./ComponentSelector";
import BlockPalette from "./BlockPalette";
 
export default function Sidebar({ onSelect, onAdd }) {
  return (
    <aside>
      <ComponentSelector onSelect={onSelect} />
      <BlockPalette onAdd={onAdd} />
    </aside>
  );
}