import React from 'react';
import { COMPONENTS, DEFAULT_BLOCKS,BLOCK_TYPES } from './data/components';
import ButtonComponents from './components/ButtonComponents';
import ButtonBlocks from './components/ButtonBlocks';
import Blocks from './components/Blocks';
import Header from './components/Header';
import { useState } from "react"

export default function App() {
  // recuperer id de l'element, components
 const [selectedIdComponent, setSelectedIdComponent] = useState(null);


  // Pour ajouter un block 
  const [block,setBlock] = useState([]);
  //  pour dire si le block existe avec id je recupere les block par defaut sinon je creer un tableau vide 
  const blocks = selectedIdComponent ? DEFAULT_BLOCKS[selectedIdComponent] : [];
  // pour recuperer id du blocks 
  function handleClick(idBlock){
    console.log(idBlock);
  }
  return (
    <>
    <Header />
      <main>
        <aside>
            <h2>Modele de base </h2>
            {/* Afficher juste les composants card et form */}
              {COMPONENTS.map(component =>(
              // Bouton pour les components card et formulaire 
                <ButtonComponents 
                  key={component.id} 
                  id={component.id} 
                  text={component.name}
                  onClick={() => setSelectedIdComponent(component.id)} 
                />
              ))}
              
            {/* afficher les block a ajouter  */}
            <h2>Blocks</h2>
            <div className='blocks'>
              {BLOCK_TYPES.map(blockType =>(
                <ButtonBlocks 
                  key={blockType.type} 
                  type={blockType.type} 
                  onClick={() => handleClick(blockType.type)}  
                />
              ))}
            </div>
        </aside>

          {/* bloc par defaut  */}
         <div className="blockDefault">
          <h2>Structure des blocks de {selectedIdComponent}</h2>
            {blocks.map(block => (
                <Blocks key={block.id} text={block.type} />
            ))}
          </div>

      </main>
     
    </>
  );
}

