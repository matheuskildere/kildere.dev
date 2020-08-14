import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    max-height: 100%;
    overflow-y: auto;

`;

export const PeopleInfo = styled.div`
    margin-left: 30px;
    margin-top: 40px;
    margin-right: 30px;

    display: flex;
    flex-direction: column;
    
    > h1 {
        font-size: 50px;
        color: var(--white);
        text-align: left;
    }
    > h2 {
        font-weight: 100;
        font-size: 20px;
        color: var(--orange);
        text-align: left;
    }
`;

export const About = styled.div`
    margin-top: 50px;
    > p {
        font-weight: 500;
        text-align: justify;
    }

    @media (min-width: 500px) {
        margin-right: 15%;
    }
    @media (min-width: 700px) {
        margin-right: 12%;
    }
`;