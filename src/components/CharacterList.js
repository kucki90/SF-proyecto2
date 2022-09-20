import Character from './Character';
//  /characters/:id debe traer solamente un personaje
const CharacterList= ({characters}) => { // prop recibida del container
    return(
        <div className='cardsContainer'>
            {characters.map((character,index)=> {
                return (
                    <div className='cardContainer'>
                        <Character 
                            key={index}
                            id={character.id}
                            image={character.image}
                            name={character.name}
                            specie={character.species}
                            status={character.status}
                        />

                    </div>
                )
            })}
        </div>
        
    )
}

export default CharacterList;