
import { Link } from 'react-router-dom'

const Character = ({ name, image, status, specie, id }) => {
    return ( //aca va la card
        <div className='cardPrueba'>
            <div key={id} className="col-lg-4 col-md-6 col-12 mb-3 position-relative " >
                <div className="cards d-flex flex-column justify-content-center">
                    <img src={image} className="card-img-top" alt={name} />
                    <h2 className='card-title'>{name}</h2>
                    <h5 className="cardText"><span> Especie:</span> {specie}</h5>
                    <h5 className="cardText"><span> Estado:</span>{status}</h5>
                    <Link to={`/characters/${id}`}>
                        <div >
                            <button className='buttonDetail'>Detail</button>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Character;
