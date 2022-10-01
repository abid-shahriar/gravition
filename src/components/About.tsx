import styled from 'styled-components';
import { Typography } from './Typography';

export const About = () => {
  return (
    <Container id='about'>
      <Title>About us</Title>

      <Typography clr='white' size='20px' textalign='left' weight='300'>
        Venus is called earth’s twin because of their similarity in size and structure. But with its sulfuric acid clouds, temperature of over 450°C,
        and surface pressure of 92 bar, is one of the most hostile planetary environments in the solar system. Due to this, Venus is facing problem
        regarding energy storage system for a long time. Previous missions to the surface of Venus have failed to operate for more than two hours. As
        the currently available batteries cannot operate in the extreme environment, our main challenge is to design an energy storage system that
        supports a surface lander or rover on the surface of Venus for at least 60 days
      </Typography>

      <ImageSection></ImageSection>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 7rem 0;
  text-align: center;
`;

const ImageSection = styled.div``;

const Title = styled(Typography)`
  color: white;
  font-size: 28px;
  text-transform: uppercase;
  border-bottom: 2px solid white;
  display: inline-block;
  margin-bottom: 3rem;
`;
