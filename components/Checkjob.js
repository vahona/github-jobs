import React, {useContext} from 'react'

import styled from "styled-components";
import { Context } from "../Context";
import Header from "./Header";
import {Inputs, Forms, Inputs2, Headers} from './Style'



export default function Typejob() {

const {
  inputValueLocation,
  setInputValueLocation,
  JobsBerlin,
  JobsLondon,
} = useContext(Context);

    return (
      <div>
        <Headers>
          Github <span> jobs </span>
        </Headers>
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
