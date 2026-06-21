// LISTE DES COMPOSANT DISPONIBLE 
export const COMPONENTS = [
  { id: 'card', name: 'Card', desc: 'Carte avec image, texte, bouton' },
  { id: 'form', name: 'Formulaire', desc: 'Formulaire de contact' },
  
];
// BLOCK
export const BLOCK_TYPES = [
  { type: 'image',   icon: '🖼',  label: 'Image' },
  { type: 'title', icon: 'H',   label: 'Titre' },
  { type: 'text',    icon: '¶',   label: 'Paragraphe' },
  { type: 'button',  icon: '⬜',  label: 'Bouton' },
  { type: 'divider', icon: '—',   label: 'Séparateur' },
  { type: 'link',    icon: '🔗',  label: 'Lien' },
  { type: 'input',   icon: '✏️',  label: 'Champ texte' },
];
// BLOCK PAR DEFAUT SELON CE QUE L'ON SELECTIONNE
export const DEFAULT_BLOCKS = {
  card: [
    { id: 1, type: 'image', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop', alt: 'Image de la carte' },
    
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