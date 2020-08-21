import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    max-height: 100%;
`;

export const PeopleInfo = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 800px) {
        margin-right: 12%;
        margin-left: 6%;
        margin-top: 7%;
    }

    @media (max-width: 799px) and (min-width: 500px) {
        margin-right: 18%;
        margin-left: 6%;
        margin-top: 7%;
    }

    @media (max-width: 500px) {
        margin-right: 12%;
        margin-left: 12%;
        margin-top: 10%;
    }
`;

export const About = styled.div`
    > p {
        margin-top: 5%;
        font-size: 100%;
        font-weight: 500;
        text-align: justify;
        font-family: 'Segoe UI';
    }

    > h1 {
        font-size: 70px;
        color: var(--white);
        text-align: left;
        transform: none;
    }

    > h2 {
        font-weight: 100;
        font-size: 20px;
        color: var(--orange);
        text-align: left;
        font-family: 'Segoe UI';
    }
`;

export const Foto = styled.div`
    margin-left: 5%;

    img {
        width: 300px;
        border-radius: 5% 5%;
    }

    @media (max-width: 750px) {
        margin-top:  10%;
        margin-bottom:  20%;
    }
`;

export const Row = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    
    @media (max-width: 750px) {
        display: flex;
        flex-direction: column;
    }

`;