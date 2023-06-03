import styled from 'styled-components';

const Header = styled.div`
    background: #14213d;
    width: 98.8vw;
    padding: 1.5rem;
`

const Title = styled.h2`
    color: #fff;
`
const TitleLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    margin-left: 3rem;

    &:visited {
    color:#fff;
}
`

const Navbar = () => {
    return (
        <Header>
            <Title> <TitleLink href='/'>Rick y Morty</TitleLink></Title>
        </Header>
    )
}

export default Navbar;