import { useComponentBuilder } from './hooks/useComponentBuilder';
import Header from './components/Header/Header';
import Sidebar from './features/sidebar/Sidebar';
import Canvas from './features/canvas/Canvas';
import Preview from './features/preview/Preview';
import { useState } from 'react';
import CodeGenerator from './features/codegen/CodeGenerator';

 
export default function App() {
  const {
    selectedIdComponent,
    setSelectedIdComponent,
    block,
    errors,
    handleClick,
    removeBlock,
    moveUp,
    moveDown
  } = useComponentBuilder();
  
  // POUR AFFICHER OU NON LE CODE GENERER
  const [showCodeGen,setShowCodeGen] = useState(false);
  // Pour affiche ou pas la fenetre de code 
  function onGenerate(){
    setShowCodeGen(!showCodeGen);
  }
  return (
    <>
      <Header onGenerate={onGenerate}/>
      <main>
        
        <Sidebar
          onSelect={setSelectedIdComponent}
          onAdd={handleClick}
        />
        <Canvas
          selectedIdComponent={selectedIdComponent}
          block={block}
          errors={errors}
          removeBlock={removeBlock}
          moveUp = {moveUp}
          moveDown={moveDown}
        />
        
        <Preview 
          selectedIdComponent={selectedIdComponent} 
          block={block} 
        />

         {showCodeGen && <CodeGenerator block={block} onGenerate={onGenerate} />}

      </main>
     
    </>
  );
}