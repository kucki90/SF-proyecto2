import {useState, useEffect} from 'react';
import CharacterList from './CharacterList';
import { useParams } from 'react-router-dom';

const CharactersListContainer = () => {

    const [characters, setCharacters] = useState([])
    const {id} = useParams()
    console.log(`id en useParams`, id);

    const getCharacters = async () => {
        let url = `https://rickandmortyapi.com/api/character/`;
        const response = await fetch(url);
        const data = await response.json();
        console.log('data:', data.results);
        if (id) {
            setCharacters(data.results.filter((character) => character.id == id)) // id de la API y id del hook useParams
        }else{
            setCharacters(data.results) // seteamos los characters con el resultado de la API
        }
    }
    useEffect(() => {
        getCharacters();
    }, [id]); // lo ejecutamos con useEffect
    return(
        <div className='characterListContainer'>
            {characters.length === 0 ? (
                <div className='spinnerContainer'>
                    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

                </div>
            ) : ( 
                <CharacterList characters={characters} />

            )}
        </div>
    )

}

export default CharactersListContainer;