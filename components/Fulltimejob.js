import React, {useContext, useState, useEffect} from 'react'
import {Context} from '../Context'

import styled from "styled-components";
import { Link } from 'react-router-dom';


const Logo = styled.img`
     width: 20%
`

const JobList = styled.div`
  background: white;
  padding: 1rem;
  margin: 1rem
`;

function Fulltimejob() {

  const { jobs, setJobs } = useContext(Context);

    return (
        <div>
            {jobs.map(job => {
              
                return (
                  <>
                    <JobList>
                        <p>{job.company}</p>
                        <p>{job.title}</p>
                        <Logo src={job.company_logo} />
                        <button>{job.type}</button>
                        <p>{job.location}</p>
                        <p>{Date.now()}</p>
                    </JobList>
                  </>
                );
            })}
        </div>
    )
}

export default Fulltimejob;
