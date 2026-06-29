 export function generateCode(block) {
  switch (block.type) {
    case 'image':
      return '<img class="preview-image" src="https://placehold.co/400x200" alt="image par defaut" />';
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
  image:`.preview-image {
  width: 100%; 
  height: 180px; 
  object-fit: cover; 
  display: block;
  }`,
  title:`.preview-title {
  font-size: 1.25rem; 
  font-weight: 700;
  color: #1e293b;
  margin-top: 0.5rem;
  }`,
  text:`.preview-text {
  font-size: 0.875rem; 
  color: #64748b; 
  line-height: 1.5;
  }`,
  button:`.preview-button {
  width: 100%; 
  background: #4f46e5; 
  color: white;border: none; 
  padding: 0.75rem 1rem; 
  border-radius: 0.5rem;
  font-family: inherit; 
  font-size: 0.875rem; 
  font-weight: 600;
  cursor: pointer; 
  margin-top: 0.5rem;
  }`,
  divider:`.preview-divider {
  border: none; 
  border-top: 1px solid #e2e8f0; 
  width: 100%;  
  margin: 0.5rem 0;
  }`,
  link:`.preview-link {
  color: #4f46e5; 
  font-size: 0.875rem; 
  font-weight: 600;
  text-decoration: none; 
  display: inline-block;
  }`,
  input:`.preview-input{
  width: 100%; 
  padding: 0.75rem 1rem; 
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem; 
  background: #f8fafc; 
  color: #1e293b;font-family: inherit; 
  font-size: 0.875rem; 
  outline: none;
  }`,
};


export const  CONTAINER_CSS_RULES = {
  card: `.card {
    padding: 1.5rem; 
    margin-top: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1); 
    gap: 1rem;  
    overflow: hidden; 
    width: 500px;
    } 
    .card > div:not(:first-child) { 
     padding: 0 1.5rem; 
     } .card > div:last-child { 
      padding-bottom: 1.5rem; 
    }`,
   form: `.form {
     display: flex;
     flex-direction: column;
     gap: 1.25rem;
     width: 500px;
     max-width: 100%;
   margin-top: 1rem;
   padding: 2rem;
   background-color: #ffffff;
   border-radius: 16px;
   border: 1px solid #e2e8f0;
   box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.04);
   }`
}


export function generateCodeCss(block,selectedIdComponent){
  const typesAvecDoublons = block.map(b => b.type);
  const typeUnique = [...new Set(typesAvecDoublons)];
  const regleCss = typeUnique.map(type => CSS_RULES[type]);
  // pour recuperer soit card ou formulaire
  const containerCSS = CONTAINER_CSS_RULES[selectedIdComponent];
  // pour creer un nouvelle objet avec pour le css 
  const finale = [...regleCss,containerCSS];
  const cssFinal = finale.join("\n");
  return cssFinal;
}

export function wrapWithContainer(generatedCode, selectedIdComponent){

  switch (selectedIdComponent) {
    case 'card':
      return `<div class="card">\n${generatedCode}\n</div>`;
    case 'form':
      return `<div class="form">\n<form method="">\n${generatedCode}\n</form>\n</div>`;
    default:
      return `Il a une erreur `;
  }
}

