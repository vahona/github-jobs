import React, { useContext, useState, useEffect } from "react";
import { Context } from "../Context";

import styled from "styled-components";
import { Link, useParams } from "react-router-dom";


const Logo = styled.img`
  width: 20%;
  height: 100%;
  float: left;
  margin: 1rem
`;

const JobList = styled.div`
  background: white;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  position: relative
`;

const LinkJob = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: Roboto;
  font-size: 13px
`;

const DateLocation = styled.div`
  display: flex;
  position: absolute;
  top: 70%;
  right: 0;
  color:gray
  

`;

const Dates = styled.p`
  margin: 1rem

`
const NameTitle = styled.div`
   
`

function Fulltimejob() {
  const { jobs, setJobs, NewYorkJob, setNewYorkJob } = useContext(Context);


  const someJobs = jobs.map((job) => {
    return (
      <LinkJob to={`/Jobdescription/${job.id}`} key={job.id}>
        <JobList>
          <Logo src={job.company_logo} />
          <NameTitle>
            <p>{job.company}</p>
            <p>{job.title}</p>
            <button>{job.type}</button>
          </NameTitle>

          <DateLocation>
            <p>{job.location}</p>
            <Dates>{Date.now()}</Dates>
          </DateLocation>
        </JobList>
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
