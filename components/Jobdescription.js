import React, { useContext } from "react";

import { Context } from "../Context";

export default function Jobdescription() {

    const { jobs, setJobs } = useContext(Context);

    return (
        <div>
            {jobs.map((descriptions) => {
                return <div>{descriptions.description}</div>;
            })}
        </div>
    )
}
