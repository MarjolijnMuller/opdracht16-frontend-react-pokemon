import './PokeCart.css';
import axios from "axios";
import {useEffect, useState} from "react";

function PokeCart(props) {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {

        async function getPokemon() {
            try {
                const response = await axios.get(props.url);
                console.log(response.data);
                setPokemon(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        if (props.url) {
            getPokemon();
        }

        return () =>
            console.log('unmount')
    }, [])


    return (
        <article className="PokeCart">
            {pokemon.name? (
                <>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} className="PokeImg"/>
                    <p><strong>Weight: </strong>{pokemon.weight}</p>
                    <div className="pokeAbiliteis">
                        <p><strong>Abilites: </strong></p>
                        {pokemon.abilities.map((ability) => (
                        <p key={ability.ability.name}>{ability.ability.name}</p>
                    ))}
                    </div>
                </>) : <p>Loading Pokemon...</p>}
        </article>
)
}

export default PokeCart;