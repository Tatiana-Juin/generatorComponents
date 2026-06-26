import {generateCode,generateCodeCss} from "./generators";
import { useState } from "react";


export default function CodeGenerator({block,onGenerate}) {
  const generatedCode = block.map(b => generateCode(b)).join("\n");
  const generatedCodeCss = generateCodeCss(block);
  // Pour voir si on doit afficher le message pour de copie
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);

  // fonction pour copier 
  function handleCopy(generate, setCopied){
    navigator.clipboard.writeText(generate);
    setCopied(true)
    setTimeout(()=>{
      setCopied(false)
    },3000);
    
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
           {copiedHtml && (
            <p className="message-copied">Code copier</p>
          )}
          <button className="preview-button" onClick={() => handleCopy(generatedCode,setCopiedHtml)}> Copier</button>
         
          <pre className="code-box">
           <code>
              {generatedCode}
            </code>
          </pre>
          {/* POUR LE CSS  */}
          <h3>CSS</h3>
          {/* BOUTON POUR LE CSS */}
          {copiedCss && (
            <p className="message-copied">Code copier </p>
          )}
          <button className="preview-button" onClick={() => handleCopy(generatedCodeCss,setCopiedCss)} > Copier</button>
          
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
