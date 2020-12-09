import React, { useContext } from "react";

import { useParams, useHistory } from "react-router-dom";


import styled from "styled-components";
import { Context } from "../Context";
import { AiOutlineArrowLeft } from "react-icons/Ai";



const Logo = styled.img`
  width: 20%;
  height: 100%;
  float: left;
  margin: 1rem;
`;

const JobList = styled.div`
  background: white;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  position: relative;
`;



const DateLocation = styled.div`
  display: flex;
  position: absolute;
  top: 70%;
  right: 0;
  color: gray;
`;

const Dates = styled.p`
  margin: 1rem;
`;

export default function Jobdescription() {
  const { jobs, setJobs} = useContext(Context);
  const {id} = useParams()
  const history = useHistory()

  const job = jobs.find(job => job.id === id)

  console.log(job);

  


  return (
    <div>
      <h2>
        <AiOutlineArrowLeft onClick={() => history.goBack()} />
        Back
      </h2>
      <JobList>
        <Logo src={job?.company_logo} />
        <div>
          <p>{job?.company}</p>
          <p>{job?.title}</p>
          <button>{job?.type}</button>
        </div>

        <DateLocation>
          <p>{job?.location}</p>
          <Dates>{Date.now()}</Dates>
        </DateLocation>
      </JobList>
      <div>{job?.description.replace(/<[^>]+>/g, "")}</div>
    </div>
  );
}
