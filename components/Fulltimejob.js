import React, {useContext, useState, useEffect} from 'react'
import {Context} from '../Context'

import styled from "styled-components";
import { Link, useParams } from 'react-router-dom';


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
  // const {titleName} = useParams()


  const someJobs = jobs.map(job => {
              
                return (
                  <>
                    <Link to={`/Jobdescription/${job.id}`} key={job.id}>
                      <JobList>
                        <p>{job.company}</p>
                        <p>{job.title}</p>
                        <Logo src={job.company_logo} />
                        <button>{job.type}</button>
                        <p>{job.location}</p>
                        <p>{Date.now()}</p>
                      </JobList>
                    </Link>
                  </>
                );
            })


            // function JobfilteredByTitle() {
            //   const filteredjob = jobs
            //   .filter(jobfilter => jobfilter.title === titleName )
            //   .map(someJobs);
            //   if(filteredjob.length === 0) {
            //     return <p>Sorry </p>
            //   }
            //   return filteredjob
            // }

    return <div>{someJobs}</div>;
}

export default Fulltimejob;
