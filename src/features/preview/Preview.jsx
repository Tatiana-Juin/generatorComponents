import { useState } from "react"
function renderBlock(block){
    switch(block.type){
        case 'image':
            return <img className="preview-image" src="https://placehold.co/400x200" alt="image par defaut" />
            
        case  'title' : 
            return <h2 className="preview-title">Titre par defaut </h2>
            
        case 'text' : 
            return <p className="preview-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, ab!</p>
            
        case 'button':
            return <button className="preview-button">Bouton</button>
        case 'divider':
             return <hr className="preview-divider" />
        case 'link':
            return <a className="preview-link" href="#">Lien</a> 
        case 'input':
            return <input type="text" name="" id="" disabled />  
        case 'textarea':
            return <textarea name="" id="">textarea</textarea>
        
        default:
            return <p>Cela n'existe pas</p>
    }
}

export default function Preview({selectedIdComponent,block}) {

    const [showPreview, setShowPreview] = useState(false);

    // switch entre voir et pas voir le résultat
    function handleShow(){
        setShowPreview(!showPreview);
    }

  return (
    <div>
        <button className="btn-code" onClick={handleShow}>Preview</button>
        {showPreview ?(
            <div className={selectedIdComponent}>
        {block.map(b =>(
            <div key={b.id}>
                {renderBlock(b)}
            </div>
        ))}

            </div>
        ) : (
            <p>Clique sur Preview pour voir le resultat</p>
        )}
    </div>
    
  )
}
