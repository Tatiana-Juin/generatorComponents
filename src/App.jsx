import React from 'react';
import { useEffect } from 'react';
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

  // Pour afficher un message erreur 
  const [errors, setErrors] = useState("");

  //Utilise useEffect pour definir les blocks par defaut quand on clique sur card 
  useEffect(() =>{
    // si on selectionne un element alors on affiche ce par defaut 
    if(selectedIdComponent){
      setBlock(DEFAULT_BLOCKS[selectedIdComponent]);
      // ajoute setErrors pour effacer le message erreur au cas ou il est pas selectioner de card , components 
       setErrors("");
    }
    else{
      setBlock([]);
    }
  }, [selectedIdComponent]);

  
  // pour recuperer id du blocks 
  function handleClick(idBlock){
    // pour verifier qu'un composant a etait selectionner 
    if(selectedIdComponent){
      // Je creer un nouvelle objet avec le type  
      const defaultValuesBlock = {
        id: Date.now(),
        type : idBlock,
        
      };
      // pour ajouter a mes blocks mes nouveau blocks par defaut 
      setBlock([...block,defaultValuesBlock]);

    }
    else{
       setErrors("Erreur tu doit selectionner un composant avabt d'ajouter un bloc ");
    }
   
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
          
          <h2>Structure des blocks de 
            {selectedIdComponent}</h2>
            <p>{errors}</p>
            {block.map(blocks => (
                <Blocks key={blocks.id} text={blocks.type} />
            ))}
          </div>

      </main>
     
    </>
  );
}

