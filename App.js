import { func } from "prop-types"
import React, { useContext } from "react";

import {Context} from './Context'
import Header from './components/Header'
import Typejob from './components/Checkjob'
import Alljobs from './components/Alljobs'


function App({children}) {

    return (
    <>
      <h1>Github jobs</h1>
      <Header/>
      <Typejob/>
      <Alljobs/>
    </>
    )
}

export default App