import React, {useContext} from 'react'

import styled from "styled-components";

import { Context } from "../Context";

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
`;

export default function Header() {

    const { inputValue, setInputValue } = useContext(Context);
    return (
      <div>
        <Forms onSubmit={setInputValue} >
          <InputSerach placeholder="Title, companies, expertise or benefits" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <ButtonSearch>Search</ButtonSearch>
        </Forms>
      </div>
    );
}
