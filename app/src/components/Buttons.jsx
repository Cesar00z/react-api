import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
   
`

const Button = styled.button`
    background: #38b000;
    padding: 1rem;
    border: none;
    transition: all 0.5s ease;
    margin: 1rem;
    &:hover {
        background: #008000;
        cursor:pointer;
    }
`

export default function Buttons({ info, prevPage, nextPage }) {
    const handlerPrevPage = () => prevPage()

    const handlerNextPage = () => nextPage()

    return (
        <Container>
            {
                info.prev ? <Button onClick={handlerPrevPage}>Anterior</Button> : null
            }
            {
                info.next ? <Button onClick={handlerNextPage}>Siguiente</Button> : null
            }
        </Container>
    )
}