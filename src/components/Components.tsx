import styled from 'styled-components';
import { Typography } from './Typography';

export const Components = () => {
  return (
    <Container id='setup'>
      <Title>Components Used in Our Project</Title>

      <ImageSection>
        <img src='/components.jpeg' alt='components' />
      </ImageSection>
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
  img {
    border-radius: 3px;
  }
`;
