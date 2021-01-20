import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  
  background: var(--black);
  width: 100%;

  display: flex;
  justify-content: space-around;

  padding: 8px min(0px, max(10vw, 10px));

  @media (min-width: 500px) {
    display: none;
  }

  > p {
    font-weight: 500;
    text-align: justify;
  }

  .icons {
    color: #FFFF;
    width: 25px;
    height: 25px;
    cursor: pointer;

    &:hover,
    &.active {
        fill: var(--orange)
    }
  }
    .iconsMaterial {
        color: #FFFF;
        width: 30px;
        height: 30px;
        cursor: pointer;

        &:hover,
        &.active {
            fill: var(--orange)
        }
    }
`;

export const ContainerDesktop = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 2;
  
  background: var(--black);
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 0px 25px;

  @media (max-width: 500px) {
    display: none;
  }

  > p {
    font-weight: 500;
    text-align: justify;
  }

`;

export const Pages = styled.div`
  display: flex;
  flex-direction: column;

  .icons {
    margin-top: 12px;
    margin-bottom: 12px;
    color: #FFFF;
    width: 30px;
    height: 30px;
    cursor: pointer;

    &:hover,
    &.active {
        fill: var(--orange)
    }
  }
  .iconsMaterial {
        margin-top: 12px;
        margin-bottom: 12px;
        color: #FFFF;
        width: 35px;
        height: 35px;
        cursor: pointer;

        &:hover,
        &.active {
            fill: var(--orange)
        }
    }
`;

export const SocialNetworks = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 5px;

  .socialIcons {
    margin-top: 6px;
    margin-bottom: 6px;
    width: 20px;
    height: 20px;
    cursor: pointer;

    &:hover,
    &.active {
        fill: var(--orange)
    }
  }
`;