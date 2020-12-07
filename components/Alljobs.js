import React, {useContext, useState, useEffect} from 'react'
import {Context} from '../Context'

function Alljobs() {
        const { state, dispatch } = useContext(Context);
        const { response, loading } = state;
        const [jobs, setJobs] = useState([])
        console.log("jj",jobs);

        useEffect(() => {
          (async () => {
                const result = await fetch("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=new+york");
                const data = await result.json()
                console.log("kk",data);
                setJobs(data)
          })()
          
        }, [])

        useEffect(() => {
          if(jobs.length > 0) {
             setJobs(jobs)
          }
        }, [jobs])

        // console.log(response);
    return (
        <div>
          {loading && <p> Loading ...</p> }
            {!loading && jobs.map(job => {
              console.log("lll",jobs);
                return (
                  <>
                    <p>{job.title}</p>
                  </>
                );
            })}
        </div>
    )
}

export default Alljobs
