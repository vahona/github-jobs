import React, { useContext, useState, useEffect } from "react";
import { Context } from "../Context";

import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const Logo = styled.img`
  width: 20%;
`;

const JobList = styled.div`
  background: white;
  padding: 1rem;
  margin: 1rem;
`;

const LinkJob = styled(Link)`
  text-decoration: none;
  color: black;
`;

function Fulltimejob() {
  const { jobs, setJobs } = useContext(Context);

  const someJobs = jobs.map((job) => {
    return (
      <LinkJob to={`/Jobdescription/${job.id}`} key={job.id}>
        <JobList>
          <p>{job.company}</p>
          <p>{job.title}</p>
          <Logo src={job.company_logo} />
          <button>{job.type}</button>
          <p>{job.location}</p>
          <p>{Date.now()}</p>
        </JobList>
      </LinkJob>
    );
  });

  return <div>{someJobs}</div>;
}

export default Fulltimejob;
