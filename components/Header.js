import React from 'react'

import styled from "styled-components";

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
    return (
      <div>
        <Forms>
          <InputSerach placeholder="Title, companies, expertise or benefits" />
          <ButtonSearch>Search</ButtonSearch>
        </Forms>
      </div>
    );
}
