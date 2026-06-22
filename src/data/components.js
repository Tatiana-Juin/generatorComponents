// LISTE DES COMPOSANT DISPONIBLE 
export const COMPONENTS = [
  { id: 'card', name: 'Card' },
  { id: 'form', name: 'Formulaire' },
  
];
// BLOCK
export const BLOCK_TYPES = [
  { type: 'image' },
  { type: 'title' },
  { type: 'text' },
  { type: 'button' },
  { type: 'divider' },
  { type: 'link' },
  { type: 'input' },
  {type:'textarea'},
];
// BLOCK PAR DEFAUT SELON CE QUE L'ON SELECTIONNE
export const DEFAULT_BLOCKS = {
  card: [
    { id: 1, type: 'image'},
    { id: 2, type: 'title', text: 'Titre de la carte', level: 2 },
    { id: 3, type: 'text', text: 'Description courte du contenu de la carte.' },
    { id: 4, type: 'button', text: 'En savoir plus', variant: 'primary' },
  ],
  form: [
    { id: 1, type: 'title', text: 'Contactez-nous', level: 2 },
    { id: 2, type: 'text', text: 'Remplissez le formulaire et nous vous répondrons sous 24h.' },
    { id: 3, type: 'input', label: 'Votre nom', placeholder: 'Jean Dupont' },
    { id: 4, type: 'input', label: 'Email', placeholder: 'jean@exemple.fr' },
    { id: 5, type: 'button', text: 'Envoyer', variant: 'primary' },
  ],

};