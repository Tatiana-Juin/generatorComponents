import { useState, useEffect } from "react";
import { DEFAULT_BLOCKS } from "../data/components";
export function useComponentBuilder() {
     // recuperer id de l'element, components
     const [selectedIdComponent, setSelectedIdComponent] = useState("");
    
      // Pour ajouter un block 
      const [block,setBlock] = useState([]);
    
      // Pour afficher un message erreur 
      const [errors, setErrors] = useState("");

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
        setErrors("Erreur tu doit selectionner un composant avant d'ajouter un bloc ");
        }
   
    }

    function removeBlock(id){
      // pour filter les blocks par rapport a id 
      const newBlocks = block.filter(b => b.id !== id);
      setBlock(newBlocks);
    }

 return {
    selectedIdComponent,
    setSelectedIdComponent,
    block,
    errors,
    handleClick,
    removeBlock,
  };
}