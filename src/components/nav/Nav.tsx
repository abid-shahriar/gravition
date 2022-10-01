import styled from 'styled-components';
import { Typography } from '../Typography';
import './nav.styles.scss';

const navItems = [
  {
    id: 1,
    name: 'Home',
    to: '#home'
  },
  {
    id: 2,
    name: 'About ',
    to: '#about'
  },
  {
    id: 3,
    name: 'Goal ',
    to: '#goal'
  },
  {
    id: 4,
    name: 'Components',
    to: '#setup'
  },
  {
    id: 5,
    name: 'Team',
    to: '#team'
  }
];

interface Props {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
}

export const Navbar = (props: Props) => {
  const handelToggle = () => {
    props.setToggle(!props.toggle);
  };

  return (
    <nav id='nav' className={props.toggle ? 'toggle nav' : 'nav'}>
      <StyledUl className='nav-menu'>
        {/* <div className='toggle-btn' onClick={handelToggle}>
          <p></p>
          <p></p>
          <p></p>
        </div> */}
        <Logo>
          <Typography clr='white' weight='400' size='28px'>
            TEAM GRAVITON
          </Typography>
        </Logo>
        <div className='menu-items'>
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={item.to}>
                <Typography size='20px'>{item.name}</Typography>
              </a>
            </li>
          ))}
        </div>
      </StyledUl>
    </nav>
  );
};

const Logo = styled.div`
  align-self: flex-start;
  flex-grow: 0;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
