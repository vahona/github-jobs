import React, { useContext } from "react";

import { useParams, useHistory } from "react-router-dom";


import styled from "styled-components";
import { Context } from "../Context";
import { AiOutlineArrowLeft } from "react-icons/Ai";
import {Logo,
JobList,
DateLocation,
Dates,
Text,
Container,
Button,
Company,
Description,
MoreInfo}
from './Style'



export default function Jobdescription() {
  const { jobs, setJobs} = useContext(Context);
  const {id} = useParams()
  const history = useHistory()

  const job = jobs.find(job => job.id === id)

  console.log(job);


  return (
    <Description>
      <div>
        <h1>
          Github <span>jobs</span>
        </h1>
        <h2>
          <AiOutlineArrowLeft onClick={() => history.goBack()} />
          Back to search
        </h2>
        <p>How to apply</p>
        <p>
          {" "}
          Please Email a copy of your resume and online portfolio to{" "}
          <span> wes@Kosisto.com & cc</span>
          <span>eric@kosisto.com</span>
        </p>
      </div>
      <div>
        <Container>
          <Company>{job?.company}</Company>
          <Button>{job?.type}</Button>
        </Container>
        <JobList>
          <div>
            <Logo src={job?.company_logo} />
          </div>

          <MoreInfo>
            <div>
              <DateLocation>
                <Dates>{Date.now()}</Dates>
              </DateLocation>
              <p>{job?.title}</p>
            </div>

            <DateLocation>
              <p>{job?.location}</p>
            </DateLocation>
          </MoreInfo>
        </JobList>

        <Text>{job?.description.replace(/<[^>]+>/g, "")}</Text>
      </div>
    </Description>
  );
}
