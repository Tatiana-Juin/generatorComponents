import { useState } from "react"
function renderBlock(block){
    switch(block.type){
        case 'image':
            return <img src="https://placehold.co/400x200" alt="image par defaut" />
            
        case  'title' : 
            return <h2>Titre par defaut </h2>
            
        case 'text' : 
            return <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, ab!</p>
            
        case 'button':
            return <button>Bouton</button>
        case 'divider':
             return <hr />
        case 'link':
            return <a href="#">Lien</a> 
        case 'input':
            return <input type="text" name="" id="" disabled />  
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
        <button onClick={handleShow}>Preview</button>
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
