import styled from 'styled-components';

export const Home = () => {
  return (
    <Container id='home'>
      <ImageSection>
        <img src='/team-gravition.jpeg' alt='team gravition' />
      </ImageSection>
    </Container>
  );
};

const Container = styled.div`
  min-height: 95vh;
  width: 100vw;
`;

const ImageSection = styled.div`
  img {
    width: 100vw;
    height: 95vh;
  }
`;
