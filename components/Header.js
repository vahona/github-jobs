import React, {useContext} from 'react'

import styled from "styled-components";

import { Context } from "../Context";

import Images from '../image/backgroundImg.png'
import {FormsValue, InputSerach, ButtonSearch, Containerdiv} from './Style'



const Background = styled.div`
  background-image: url(${Images});
  background-size: 300%;
  height: 200px;
  background-repeat: no-repeat;
  padding-top: 10%;

  @media (min-width: 760px) {
    background-size: 300%;
    height: 150px;
  }
`; 


    export default function Header() {


    const { inputValue, setInputValue, searchButton } = useContext(Context);
    return (
      <Background>
        <Containerdiv>
          <FormsValue>
            <InputSerach
              placeholder="Title, companies, expertise or benefits"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <ButtonSearch type="button" onClick={searchButton}>
              Search
            </ButtonSearch>
          </FormsValue>
        </Containerdiv>
      </Background>
    );
}
