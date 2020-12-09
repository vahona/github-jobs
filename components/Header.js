import React, {useContext} from 'react'

import styled from "styled-components";

import { Context } from "../Context";

import Images from '../image/backgroundImg.png'



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

const Forms = styled.form`
  text-align: center;
  display: flex;
  flex-direction: row;
  border: 1px solid grey;  
  margin-inline-start: 5%;
  margin-inline-end: 10%;
 
 

  
`;

const InputSerach = styled.input`
  padding-top: 1rem;
  padding-bottom: 1rem;
  flex-grow: 2;
`;

const ButtonSearch = styled.button`
  margin: 2px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: blue;
  color: white
`;

const Containerdiv = styled.div`
 

`

    export default function Header() {


    const { inputValue, setInputValue, searchButton } = useContext(Context);
    return (
      <Background>
        <Containerdiv>
          <Forms>
            <InputSerach
              placeholder="Title, companies, expertise or benefits"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <ButtonSearch type="button" onClick={searchButton}>
              Search
            </ButtonSearch>
          </Forms>
        </Containerdiv>
      </Background>
    );
}
