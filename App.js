import { func } from "prop-types"
import React, { useContext } from "react";
import styled from "styled-components";


import {Context} from './Context'
import Header from './components/Header'
import Typejob from './components/Checkjob'
import Fulltimejob from "./components/Fulltimejob";
import { Switch, Route, Link } from "react-router-dom";
import Jobdescription from './components/Jobdescription'

const Headers = styled.h1`
  text-align: center;
`;

const Countainer = styled.div`
  @media (min-width: 760px) {
    display: grid;
    grid-template-columns: 30% auto;
    margin-top: 2rem;
  }
`;


function App({children}) {

    return (
      <>
        <Headers>Github jobs</Headers>
        <Header />
        <Countainer>
          <Switch>
            <Route exact path="/">
              <Typejob />
              <Fulltimejob />
            </Route>
            <Route exact path="/Jobdescription">
              <Jobdescription />
            </Route>
          </Switch>
        </Countainer>
      </>
    );
}

export default App