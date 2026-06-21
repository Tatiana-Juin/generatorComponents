function renderBlock(block){
    switch(block.type){
        case 'image':
            return <img src="https://placehold.co/400x200" alt="image par defaut" />
            
        case  'heading' : 
            return <h2>Titre par defaut </h2>
            
        case 'text' : 
            return <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, ab!</p>
            
        case 'button':
            return <button>Bouton</button>
            
        default:
            return <p>Cela n'existe pas</p>
    }
}

export default function Preview({selectedIdComponent,block}) {
  return (
    <div className={selectedIdComponent}>
        {block.map(b =>(
            <div key={b.id}>
                {renderBlock(b)}
            </div>
        ))}

    </div>
  )
}
