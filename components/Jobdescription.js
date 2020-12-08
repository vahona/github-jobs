import React, { useContext } from "react";

import { useParams, useHistory } from "react-router-dom";

import { Context } from "../Context";
import { AiOutlineArrowLeft } from "react-icons/Ai";

export default function Jobdescription() {
  const { jobs, setJobs } = useContext(Context);
  const {jobId} = useParams()
  const history = useHistory()

  const job = jobs.find(job => job.id === jobId)

  return (
    <div>
      <h2>
        <AiOutlineArrowLeft onClick={() => history.goBack()} />
      </h2>
      {job.map((descriptions) => {
        return <div key={descriptions.id}>{descriptions?.description}</div>;
      })}
    </div>
  );
}
