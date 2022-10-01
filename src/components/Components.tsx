import styled from 'styled-components';
import { Typography } from './Typography';
import { YoutubeEmbed } from './YoutubeVideo';

export const Components = () => {
  return (
    <Container id='setup'>
      <Title>Components Used in Our Project</Title>

      <ImageSection>
        <img src='/components.jpeg' alt='components' />
      </ImageSection>

      <VideoSection>
        <YoutubeEmbed embedId='_M3mTrWMx6E' />
      </VideoSection>
      <LinkSection>
        <Typography size='20px' clr='white'>
          3D CAD model:{' '}
          <a href='https://grabcad.com/library/vhess-venus-hybrid-energy-storage-system-1'>
            https://grabcad.com/library/vhess-venus-hybrid-energy-storage-system-1
          </a>
        </Typography>
        <Typography size='20px' clr='white'>
          Team Profile in NASA App Challenge:
          <a href='https://2022.spaceappschallenge.org/challenges/2022-challenges/exploring-venus/teams/team-graviton/project'>
            https://2022.spaceappschallenge.org/challenges/2022-challenges/exploring-venus/teams/team-graviton/project
          </a>
        </Typography>
      </LinkSection>
    </Container>
  );
};

const LinkSection = styled.div`
  margin-top: 3rem;

  & > * {
    margin-top: 20px;
  }

  a {
    display: inline-block;
    color: #acacac;
  }
`;
const VideoSection = styled.div`
  margin-top: 4rem;

  iframe {
    border-radius: 5px;
  }
`;

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
