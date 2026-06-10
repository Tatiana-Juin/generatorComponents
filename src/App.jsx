import React from 'react';
import { COMPONENTS, DEFAULT_BLOCKS,BLOCK_TYPES } from './data/components';
import ButtonComponents from './components/ButtonComponents';
import ButtonBlocks from './components/ButtonBlocks';
import Blocks from './components/Blocks';
import ButtonCode from './components/ButtonCode';



export default function App() {
 

  return (
    <>
      <header className='header'>
        <h1>GeneratorComponents</h1>
        <ButtonCode text={"Generer le code"} />
      </header>
      <main>
        <aside>
            <h2>Modele de base </h2>
            {/* Afficher juste les composants card et form */}
              {COMPONENTS.map(component =>(
              // Bouton pour les components card et formulaire 
                <ButtonComponents key={component.id} text={component.name} />
              ))}
            {/* afficher les block a ajouter  */}
            <h2>Blocks</h2>
            <div className='blocks'>
              {BLOCK_TYPES.map(blockType =>(
              
                <ButtonBlocks key={blockType.type} type={blockType.type} />
              ))}
            </div>
        </aside>
      </main>
      {/* <ul>
        {Object.entries(DEFAULT_BLOCKS).map(([cle,valeur])=>(
          <React.Fragment key={cle}>
          <li >{cle}</li>
          
          {valeur.map(blockValeur=>(
            <Blocks key={blockValeur.id} text={blockValeur.type}/>
            
          ))}
          
          </React.Fragment>
        ))}
      </ul> */}
    </>
  );
}

