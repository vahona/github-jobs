import { func } from "prop-types"
import React, { useContext } from "react";
import styled from "styled-components";


import {Context} from './Context'
import Header from './components/Header'
import Typejob from './components/Checkjob'
import Fulltimejob from "./components/Fulltimejob";

const Headers = styled.h1`
  text-align: center;
`;

const Countainer = styled.div`
 
  display: grid;
  grid-template-columns: 30% auto;
  margin-top: 2rem

`;


function App({children}) {

    return (
      <>
        <Headers>Github jobs</Headers>
        <Header />
        <Countainer >
          <Typejob />
          <Fulltimejob />
        </Countainer>
      </>
    );
}

export default App