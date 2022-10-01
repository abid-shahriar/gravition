import { useState } from 'react';
import styled from 'styled-components';
import { About } from './components/About';
import { Components } from './components/Components';
import { Goal } from './components/Goal';
import { Home } from './components/Home';
import { Navbar } from './components/nav/Nav';
import { Team } from './components/Team';

import './styles/main.scss';

export const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <Navbar toggle={toggle} setToggle={setToggle} />

      <Main>
        <Home />
        <About />
        <Goal />
        <Components />
        <Team />
      </Main>
    </div>
  );
};

const Main = styled.main`
  margin-top: 4rem;
`;
