import React from 'react';
import { ReactJs, Flutter, Linkedin, Instagram, Github, Facebook } from '@icons-pack/react-simple-icons';
import { HomeRounded, BarChartRounded } from '@material-ui/icons';

import { Container, ContainerDesktop, SocialNetworks, Pages } from './styles';

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
        <Pages>
          <HomeRounded className= "iconsMaterial"/>
          <BarChartRounded className= "iconsMaterial"/>
          <Flutter className= "icons"/>
          <ReactJs className= "icons"/>
        </Pages>        
        <SocialNetworks>
          <a href= "https://www.linkedin.com/in/matheus-kildere-35947618b/"><Linkedin color= "var(--greySocialNetworks)"  className= "socialIcons"/></a>
          <a href= "https://www.linkedin.com/in/matheus-kildere-35947618b/"><Instagram color= "var(--greySocialNetworks)"  className= "socialIcons"/></a>
          <a href= "https://www.linkedin.com/in/matheus-kildere-35947618b/"><Github color= "var(--greySocialNetworks)"  className= "socialIcons"/></a>
          <a href= "https://www.linkedin.com/in/matheus-kildere-35947618b/"><Facebook color= "var(--greySocialNetworks)" className= "socialIcons"/></a>
        </SocialNetworks>
      </ContainerDesktop>
    </div>
  );
}

export default Drawer;