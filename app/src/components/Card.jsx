import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 0;
    gap: 1.5rem;
`
const CardCharacter = styled.div`
    width: 280px;
    border: 1px solid #0096c7;
    border-radius: 0.2rem;
    `
const CharacterImage = styled.img`
    width: 100%;
    height: auto;
`

const CharacterName = styled.h2`
    color: #fff;
    padding: 0.5rem;
`

const CharacterInfo = styled.p`
    color: #fff;
    padding: 0.3rem;
`

const Characters = ({ data }) => {
    return (
        <Container>
            {
                data.map((char, idx) => (
                    <CardCharacter key={idx}>
                        <CharacterImage src={char.image} />
                        <CharacterName>{char.name}</CharacterName>
                        <CharacterInfo>Especie: {char.species}</CharacterInfo>
                        <CharacterInfo>Estado: {char.status}</CharacterInfo>
                        <CharacterInfo>Origen: {char.origin.name}</CharacterInfo>
                        <CharacterInfo>Ubicacion: {char.location.name}</CharacterInfo>
                    </CardCharacter>
                ))
            }
        </Container>
    )
}

export default function Card({ characters }) {
    // return <Container data={characters} />
    return <Characters data={characters} />
}