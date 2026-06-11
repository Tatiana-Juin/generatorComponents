import React from 'react';
import { COMPONENTS, DEFAULT_BLOCKS,BLOCK_TYPES } from './data/components';
import ButtonComponents from './components/ButtonComponents';
import ButtonBlocks from './components/ButtonBlocks';
import Blocks from './components/Blocks';
import Header from './components/Header';


export default function App() {
 

  return (
    <>
    <Header />
      <main>
        <aside>
            <h2>Modele de base </h2>
            {/* Afficher juste les composants card et form */}
              {COMPONENTS.map(component =>(
              // Bouton pour les components card et formulaire 
                <ButtonComponents key={component.id} id={component.id} text={component.name} />
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

