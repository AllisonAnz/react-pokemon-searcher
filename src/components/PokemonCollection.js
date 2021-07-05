import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

//Since this is a container comp, we don't use this.props. we just have to use the same of the prop that was passed in 
//so pokemon and toggleImage were props from the parent class PokemonIndex
//Card.Group shows 6 items per row 
//we map through pokemon array and for each pokemon, we send a key, pokemon and toggle image prop to <PokemonCard>
const PokemonCollection = ({ pokemon, toggleImage }) => (
  <Card.Group itemsPerRow={6}>
    {pokemon.map(pokemon => (
      <PokemonCard key={pokemon.id} pokemon={pokemon} toggleImage={toggleImage} />
    ))}
  </Card.Group>
)

export default PokemonCollection