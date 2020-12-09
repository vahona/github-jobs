import React, {useContext} from 'react'

import styled from "styled-components";

import { Context } from "../Context";

import Images from '../image/backgroundImg.png'



const Background = styled.div`
  background-image: url(${Images});
  background-size: 300%;
  height: 200px;
  background-repeat: no-repeat;
  padding-top: 10%
`; 

const Forms = styled.form`
  text-align: center;
  display: flex;
  flex-direction: row;
  border: 1px solid grey;  
  margin-inline-start: 10%;
  margin-inline-end: 10%;
 
 

  
`;

const InputSerach = styled.input`
  padding-left: 20%;
  padding-right: 20%;
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
