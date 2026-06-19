import { COMPONENTS } from "../../data/components";
import Button from "../../components/Button/Button";
 
export default function ComponentSelector({ onSelect }) {
  return (
    <>
      <h2>Modele de base</h2>
      {COMPONENTS.map(component => (
        <Button
          key={component.id}
          id={component.id}
          text={component.name}
          onClick={() => onSelect(component.id)}
        />
      ))}
    </>
  );
}