// FUNCTION POUR GENERER DU CODE 
function generateCode(block) {
  switch (block.type) {
    case 'image':
      return '<img className="preview-image" src="https://placehold.co/400x200" alt="image par defaut" />';
    case 'title':
      return ' <h2 className="preview-title">Titre par defaut </h2>';
    case 'text':
      return '<p className="preview-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, ab!</p>';
    case 'button':
      return '<button className="preview-button">Bouton</button>';
    case 'divider':
        return '<hr className="preview-divider" />'
    case 'link':
        return '<a className="preview-link" href="#">Lien</a>'
    case 'input':
        return '<input type="text" name="" id="" disabled />' 
    case 'textarea':
        return '<textarea name="" id="">textarea</textarea>'
        
    case 'label':
        return '<label htmlFor="">Label</label>'
    default:
      return '';
  }
}
export default function CodeGenerator({block}) {
  return (
    <pre>
     <code>
        {block.map(b =>generateCode(b)).join("\n")}
      </code>
    </pre>
  )
}
