import {generateCode,generateCodeCss} from "./generators";



export default function CodeGenerator({block,onGenerate}) {
  const generatedCode = block.map(b => generateCode(b)).join("\n");
  const generatedCodeCss = generateCodeCss(block)
  // fonction pour copier 
  function handleCopy(generate){
    navigator.clipboard.writeText(generate);
  
  }
  return (
  
    <div className="popup-overlay">
      <div className="popup-content">
        
        <div className="popup-header">
          <h2>Code Généré - HTML CSS</h2>
          {/* Un petit bouton pour fermer la pop-up */}
          
          <button className="close-btn" onClick={onGenerate}>✕</button>
        </div>

        <div className="popup-body">
          <h3>HTML</h3>
          <button className="preview-button" onClick={() => handleCopy(generatedCode)}> Copier</button>
          <pre className="code-box">
           <code>
              {generatedCode}
            </code>
          </pre>
          {/* POUR LE CSS  */}
          <h3>CSS</h3>
          {/* BOUTON POUR LE CSS */}
          <button className="preview-button" onClick={() => handleCopy(generatedCodeCss)} > Copier</button>
           <pre className="code-box">
           <code>
              {generatedCodeCss}
            </code>
          </pre>
        </div>

      </div>
    </div>
  )
}
