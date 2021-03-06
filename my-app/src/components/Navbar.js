import React from 'react'

const Container = styled.div`
    height: 60px;
`;


const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;


const Left = styled.div`
    flex: 1;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`

const Center = styled.div`
    flex: 1;
`;
const Right = styled.div`
    flex: 1;
`;

const navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left></Left>
                <Center></Center>
                <Right></Right>
            </Wrapper>
        </Container>
    )
}

export default navbar
