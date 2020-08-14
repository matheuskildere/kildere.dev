import React from 'react';

import { Container, PeopleInfo, About } from './styles';


const Home: React.FC = () => {
  document.title = 'Matheus Kildere'
  return (
    <Container>
      <PeopleInfo>
        <h1>Matheus Kildere</h1>
        <h2>Graduando em Engenharia de Software</h2>

        <About>
          <p>
            Atualmente, graduando em Engenharia de Software na Universidade Federal do Pampa, trabalhando com desenvolvimento mobile em Flutter e Freelancer. Hoje, apaixonado pelo Framework Flutter e pela linguagem Java, mas nem sempre foi assim.
            Há um ano e dois meses atrás eu estava no terceiro ano do ensino médio, e como quase 50% dos estudantes, ainda não sabia com o que gostaria de trabalhar ou aprofundar meus estudos. Nas ferias conheci o Gustavo Guanabara e decidi ser um dos pequenos gafanhotos dele, fiz o Exame Nacional do Ensino Médio e consegui passar para uma faculdade Federal, na mesma estudei e aprendi a linguagem Java e participei de um mini-curso de Flutter, desde então, decidi ir mais a fundo no desenvolvimento de ambos.
            Hoje trabalho em uma Startup como desenvolvedor flutter e faço Freelancer de sites e aplicativos nas horas vagas. 
          </p>
        </About>
      </PeopleInfo>
    </Container>
  );
}

export default Home;