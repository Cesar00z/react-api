import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CharacterCard = styled.div`
  width: 300px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const CharacterImage = styled.img`
  width: 100%;
  height: auto;
`;

const CharacterName = styled.h2`
  margin-top: 10px;
  font-size: 24px;
`;

const CharacterStatus = styled.p` 
  margin-top: 5px;
  font-size: 16px;
`;

const CharacterSpecies = styled.p`
  margin-top: 5px;
  font-size: 16px;
`;

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      setCharacters(response.data.results);
    }

    fetchCharacters();
  }, []);

  return (
    <Container>
      {characters.map(character => (
        <CharacterCard key={character.id}>
          <CharacterImage src={character.image} alt={character.name} />
          <CharacterName>{character.name}</CharacterName>
          <CharacterStatus>{character.status}</CharacterStatus>
          <CharacterSpecies>{character.species}</CharacterSpecies>
        </CharacterCard>
      ))}
    </Container>
  );
}

export default App;