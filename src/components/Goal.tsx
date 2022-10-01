import styled from 'styled-components';
import { Typography } from './Typography';

export const Goal = () => {
  return (
    <Container id='goal'>
      <Title>Our project goal</Title>
      <Typography clr='white' size='20px' textalign='left' weight='300'>
        Considering all the circumstances, we are bringing a combined solution, Venus Hybrid Energy Storage System (VHESS) which will produce energy
        by using INSITU super critical CO2 and can Carbon di oxide which is at supercritical condition because of the Venus surface high temperature
        and pressure.
      </Typography>

      <ImageSection>
        <img src='/abc.jpeg' alt='abc' />
        <img src='/abc2.jpeg' alt='abc2' />
      </ImageSection>

      <Typography clr='white' size='20px' textalign='left' weight='300' margin='2rem 0 0 0'>
        We designed a gas power turbine which will take the supercritical (450 degree Celsius) CO2 by the inlet and while going through the converging
        nozzle the pressure of the gas increases. Then that high pressured super critical gas is flown over the turbine and thus turbine rotates.
        Instead of connecting the turbine shaft directly with the generator, we have taken a different approach. We have designed the shaft which
        would go through the flywheel chamber. The chamber is kept sealed by using two O ring on the top and the bottom of the flywheel chamber to
        keep the chamber vacuumed. The shaft is designed through the flywheel vacuum chamber to transmit the rotational energy from the turbine shaft
        to the flywheel rotor instead of converting the mechanical energy to electrical energy by the generator. Though it creates a high chance of
        failure in maintaining the vacuum of the flywheel chamber. But by doing this, we avoid the energy conversion. We used a conveyer belt to
        transmit the energy from the shaft to the flywheel rotor.
      </Typography>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 7rem 0;
  text-align: center;
`;

const Title = styled(Typography)`
  color: white;
  font-size: 28px;
  text-transform: uppercase;
  border-bottom: 2px solid white;
  display: inline-block;
  margin-bottom: 3rem;
`;

const ImageSection = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 500px;
    height: 500px;
    border-radius: 3px;

    &:first-child {
      margin-right: 2rem;
    }
  }
`;
