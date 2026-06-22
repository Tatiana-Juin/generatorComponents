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
  {type:'label'},
];
// BLOCK PAR DEFAUT SELON CE QUE L'ON SELECTIONNE
export const DEFAULT_BLOCKS = {
  card: [
    { id: 1, type: 'image'},
    { id: 2, type: 'title' },
    { id: 3, type: 'text' },
    { id: 4, type: 'button' },
  ],
  form: [
    { id: 1, type: 'title' },
    { id: 2, type: 'text' },
    {id: 3, type:'label'},
    { id: 4, type: 'input' },
    {id: 5, type:'label'},
    { id: 6, type: 'input' },
    { id: 7, type: 'button' },
  ],

};