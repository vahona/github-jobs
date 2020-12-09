import React, {useContext} from 'react'

import styled from "styled-components";
import { Context } from "../Context";

const Inputs = styled.input`
   zoom: 2
`

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
  BerlinJobState,
  setBerlinJobState,
  checkedBerlin,
  setCheckedBerlin,
  JobsBerlin,
} = useContext(Context);

    return (
      <div>
        <form>
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
          <div>
            <Inputs type="checkbox" />
            <label>London</label>
          </div>
          <div>
            <Inputs type="checkbox" />
            <label>Amsterdam</label>
          </div>
          <div>
            <Inputs type="checkbox" />
            <label>New york</label>
          </div>
          <div>
            <Inputs
              type="checkbox"
              onClick={(e) => JobsBerlin(checkedBerlin)}
            />

            <label>Berlin</label>
          </div>
        </form>
      </div>
    );
}
