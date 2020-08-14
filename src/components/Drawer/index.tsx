import React from 'react';
import { ReactJs, Flutter } from '@icons-pack/react-simple-icons';
import { HomeRounded, BarChartRounded } from '@material-ui/icons';

import { Container, ContainerDesktop } from './styles';

const Drawer: React.FC = () => {
  return (
    <div>
      <Container>
        <HomeRounded className= "iconsMaterial"/>
        <BarChartRounded className= "iconsMaterial"/>
        <Flutter className= "icons"/>
        <ReactJs className= "icons"/>
      </Container>
      <ContainerDesktop>
        <HomeRounded className= "iconsMaterial"/>
        <BarChartRounded className= "iconsMaterial"/>
        <Flutter className= "icons"/>
        <ReactJs className= "icons"/>
      </ContainerDesktop>
    </div>
  );
}

export default Drawer;