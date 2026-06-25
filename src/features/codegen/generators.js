 export function generateCode(block) {
  switch (block.type) {
    case 'image':
      return '<img className="preview-image" src="https://placehold.co/400x200" alt="image par defaut" />';
    case 'title':
      return ' <h2 class="preview-title">Titre par defaut </h2>';
    case 'text':
      return '<p class="preview-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, ab!</p>';
    case 'button':
      return '<button class="preview-button">Bouton</button>';
    case 'divider':
        return '<hr class="preview-divider" />'
    case 'link':
        return '<a class="preview-link" href="#">Lien</a>'
    case 'input':
        return '<input type="text" name="" id="" class="preview-input" disabled />' 
    case 'textarea':
        return '<textarea name="" id="" disabled >textarea</textarea>'
        
    case 'label':
        return '<label htmlFor="">Label</label>'
    default:
      return '';
  }
}

// POUR LE CSS 
export const CSS_RULES = {
  image:`.preview-image {width: 100%; height: 180px; object-fit: cover; display: block;}`,
  title:`.preview-title {font-size: 1.25rem; font-weight: 700;color: #1e293b;margin-top: 0.5rem;}`,
  text:`.preview-text {font-size: 0.875rem; color: #64748b; line-height: 1.5;}`,
  button:`.preview-button {width: 100%; background: #4f46e5; color: white;border: none; padding: 0.75rem 1rem; border-radius: 0.5rem;font-family: inherit; font-size: 0.875rem; font-weight: 600;cursor: pointer; margin-top: 0.5rem;}`,
  divider:`.preview-divider {border: none; border-top: 1px solid #e2e8f0; width: 100%;  margin: 0.5rem 0;}`,
  link:`.preview-link {color: #4f46e5; font-size: 0.875rem; font-weight: 600;text-decoration: none; display: inline-block;}`,
  input:`.preview-input{width: 100%; padding: 0.75rem 1rem; border: 1px solid #e2e8f0;border-radius: 0.5rem; background: #f8fafc; color: #1e293b;font-family: inherit; font-size: 0.875rem; outline: none;}`,
};

export function generateCodeCss(block){
  const typesAvecDoublons = block.map(b => b.type);
  const typeUnique = [...new Set(typesAvecDoublons)];
  const regleCss = typeUnique.map(type => CSS_RULES[type]) 
  const cssFinal = regleCss.join("\n");
  return cssFinal;
}