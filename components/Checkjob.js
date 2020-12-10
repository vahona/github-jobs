import React, {useContext} from 'react'

import styled from "styled-components";
import { Context } from "../Context";
import Header from "./Header";


const Inputs = styled.input`
   zoom: 2
`

const Forms = styled.form`
   @media (min-width: 760px) {
    float: left;
    padding: 1rem;
  }
`;

const Inputs2 = styled.input`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 10px;
  padding-bottom: 10px;
`;





export default function Typejob() {

const {
  inputValueLocation,
  setInputValueLocation,
  JobsBerlin,
  JobsLondon,
} = useContext(Context);

    return (
      <div>
        <Header />
        <Forms>
          <div>
            <Inputs type="checkbox" />
            <label>Full time</label>
          </div>
          <div>
            <label>Location</label>
            <Inputs2
              placeholder="City, State, zip code or country"
              type="text"
              value={inputValueLocation}
              onChange={(e) => setInputValueLocation(e.target.value)}
            />
          </div>
          {}
          <div>
            <Inputs type="checkbox" onClick={(e) => JobsLondon()} />
            <label>London</label>
          </div>
          <div>
            <Inputs type="checkbox" onClick={(e) => JobsBerlin()} />

            <label>Berlin</label>
          </div>
          <div>
            <Inputs type="checkbox" />
            <label>Amsterdam</label>
          </div>
          <div>
            <Inputs type="checkbox" />
            <label>New york</label>
          </div>
        </Forms>
      </div>
    );
}
