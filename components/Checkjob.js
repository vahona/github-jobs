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
  checked,
  setChecked,
  checkedLondon,
  setCheckedLondon,
} = useContext(Context);

    return (
      <div>
        <form>
          <div>
            <Inputs type="checkbox" onClick={setChecked} />
            <label>Full time</label>
          </div>
          <div>
            <Inputs2
              placeholder="City, State, zip code or country"
              type="text"
              value={inputValueLocation}
              onChange={(e) => setInputValueLocation(e.target.value)}
            />
            <label>Location</label>
          </div>
          <div>
            <Inputs
              type="checkbox"
              onClick={(e) => setCheckedLondon()}
            />
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
            <Inputs type="checkbox" />
            <label>Berlin</label>
          </div>
        </form>
      </div>
    );
}
