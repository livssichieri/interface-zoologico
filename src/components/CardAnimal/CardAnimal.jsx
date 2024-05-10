import imgNotFound from '../../assets/img-not-found.png'
import './CardAnimal.css'

function CardAnimal({ animal }) {

    const exibeID = () => {
        console.log(animal.id, "\n", animal);
    }
    return (
        <>
            <div className='card-animal'>
                <img src={imgNotFound} alt="Imagem não encontrada" onClick={exibeID} />
                <p>Nome: {animal.nomeanimal}</p>
                <p>Gênero: {animal.generoanimal}</p>
                <p>Espécie: {animal.tipoanimal}</p>
                <p>Envergadura: {animal.envergadura}</p>
            </div>
        </>
    );
}

export default CardAnimal