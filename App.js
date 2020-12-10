import { func } from "prop-types"
import React, { useContext } from "react";
import styled from "styled-components";


import {Context} from './Context'
import Header from './components/Header'
import Typejob from './components/Checkjob'
import Fulltimejob from "./components/Fulltimejob";
import { Switch, Route, Link } from "react-router-dom";
import Jobdescription from './components/Jobdescription'



function App({children}) {

    return (
      <>
        <div>
          <div>
            <Switch>
              <Route exact path="/">
                <Typejob />
                <Fulltimejob />
              </Route>
              <Route exact path="/Jobdescription/:id">
                <Jobdescription />
              </Route>
            </Switch>
          </div>
        </div>
      </>
    );
}

export default App