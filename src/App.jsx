import { useComponentBuilder } from './hooks/useComponentBuilder';
import Header from './components/Header/Header';
import Sidebar from './features/sidebar/Sidebar';
import Canvas from './features/canvas/Canvas';
 
export default function App() {
  const {
    selectedIdComponent,
    setSelectedIdComponent,
    block,
    errors,
    handleClick,
    removeBlock
  } = useComponentBuilder();
 
  return (
    <>
      <Header />
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
        />
      </main>
    </>
  );
}