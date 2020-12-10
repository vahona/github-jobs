import React, { useContext, useState, useEffect } from "react";
import { Context } from "../Context";

import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

import {Logos, JobLists, DateLocations, Datess, NameTitles} from './Style'


const LinkJob = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: Roboto;
  font-size: 13px
`;



function Fulltimejob() {
  const { jobs, setJobs, NewYorkJob, setNewYorkJob } = useContext(Context);


  const someJobs = jobs.map((job) => {
    return (
      <LinkJob to={`/Jobdescription/${job.id}`} key={job.id}>
        <JobLists>
          <Logos src={job.company_logo} />
          <NameTitles>
            <p>{job.company}</p>
            <p>{job.title}</p>
            <button>{job.type}</button>
          </NameTitles>

          <DateLocations>
            <p>{job.location}</p>
            <Datess>{Date.now()}</Datess>
          </DateLocations>
        </JobLists>
      </LinkJob>
    );
  });



  return (
    <div>
      
      {someJobs}
    </div>
  );
}

export default Fulltimejob;
