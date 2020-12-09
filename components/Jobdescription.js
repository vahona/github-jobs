import React, { useContext } from "react";

import { useParams, useHistory } from "react-router-dom";

import { Context } from "../Context";
import { AiOutlineArrowLeft } from "react-icons/Ai";

export default function Jobdescription() {
  const { jobs, setJobs} = useContext(Context);
  const {id} = useParams()
  const history = useHistory()

  const job = jobs.find(job => job.id === id)

  return (
    <div>
      <h2>
        <AiOutlineArrowLeft onClick={() => history.goBack()} />
      </h2>
         <div key={descriptions.id}>{job.description}</div>
    </div>
  );
}
