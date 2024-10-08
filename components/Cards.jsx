import React from 'react';
import Image from 'next/image';
import PokemonType from './PokemonType';

// Card that displays the pokemon basic information
const Cards = ({ pokeVal, capitalizeFirstLetter, pokeNameColorWithIcon, individualPokecard }) => {
    const pokeImg = pokeVal.sprites.other.dream_world.front_default ? pokeVal.sprites.other.dream_world.front_default : pokeVal.sprites.other['official-artwork'].front_default ? pokeVal.sprites.other['official-artwork'].front_default : '/pokemon.svg';
    return (
        // individualPokecard prop Hides or displays some information that is only available on specific page like pokemon voice is only available on individual pokemon page and not all pokemon pages
        <div className={`bg-black text-white card border-[3px] bg-gradient-to-r from-[#001f3f] via-[#0057a3] to-[#0a84ff] border-gradient w-[17.5rem] md:w-[18.5rem] ${individualPokecard === true ? 'h-auto' : 'sm:h-[30.5rem] overflow-y-scroll'} m-[1.4rem] px-5 pt-2 space-y-4 ${individualPokecard === true ? 'md:animate-slideToLeft animate-slideToBottom' : 'hover:cursor-pointer hover:shadow-2xl hover:shadow-lime-500 hover:transform hover:scale-105'} scrollbar-hide`}>
            <div className='flex justify-center border-2 border-black rounded-tl-[250%] rounded-bl-[130%] rounded-tr-[180%] rounded-br-[200%] h-36 md:h-40 items-center w-full bg-gradient-to-bl from-purple-700 via-fuchsia-200 to-sky-400'>
                {/* displays the pokemon image */}
                <Image src={pokeImg} alt="Pokemon Image" width={500} height={300} className='w-28 h-28 md:w-32 md:h-32' priority={true} />
            </div>

            {/* Displays the pokemon name */}
            <div className="pokeName flex justify-center mt-3">
                <span className='text-2xl text-center font-bold'>{capitalizeFirstLetter(pokeVal.name)}</span>
            </div>

            {/* Displays the pokemon type */}
            <div className="pokeType flex justify-evenly" key={pokeVal.id}>
                {
                    pokeVal.types.map((val, index) => {
                        return (
                            <div className="flex items-center px-2 py-0.5 rounded-md" style={{ backgroundColor: pokeNameColorWithIcon[val.type.name].color }} key={index}>
                                {/* reusable component to display the pokemon type icon and its respective type color */}
                                <PokemonType pokeNameColorWithIcon={pokeNameColorWithIcon} typeValue={val.type.name} />
                                {/* Type name */}
                                <span className={`mx-1.5 text-white`} key={val.slot} >{capitalizeFirstLetter(val.type.name)}</span>
                            </div>
                        )
                    })
                }
            </div>

            {/* Displays the basic stats of the pokemon */}
            <div className="pokeStats flex justify-between flex-wrap">
                <span className='mx-1'>Height: {pokeVal.height}</span>
                <span className='mx-1'>Weight: {pokeVal.weight}</span>
                <span className='mx-1'>Speed: {pokeVal.stats[5].base_stat}</span>
                <span className='mx-1'>Experience: {pokeVal.base_experience}</span>
                <span className='mx-1'>Attack: {pokeVal.stats[1].base_stat}</span>
                <span className='mx-1'>Defense: {pokeVal.stats[2].base_stat}</span>
            </div>

            {/* Displays the abilities of the pokemon */}
            <div>
                <span className='text-xl'>Abilities: </span>
                <ul className='flex flex-col mb-2 pl-2 flex-wrap-reverse'>
                    {
                        pokeVal.abilities.map((currAbility, index) => <li className='list-disc text-base' key={index}>{capitalizeFirstLetter(currAbility.ability.name)}</li>)
                    }
                </ul>
            </div>
        </div>

    )
}

export default Cards;