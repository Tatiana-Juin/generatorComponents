import {generateCode} from "./generators";



export default function CodeGenerator({block,onGenerate}) {
  const generatedCode = block.map(b => generateCode(b)).join("\n");

  // fonction pour copier 
  function handleCopy(){
    navigator.clipboard.writeText(generatedCode);
  
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
          <button className="preview-button" onClick={handleCopy}> Copier</button>
          <pre className="code-box">
           <code>
              {generatedCode}
            </code>
          </pre>
        </div>

      </div>
    </div>
  )
}
