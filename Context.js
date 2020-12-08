import React, { Children, createContext, useReducer, useEffect, useState } from 'react'

const Context = React.createContext()

function ContextProvider({children}) {

          const [jobs, setJobs] = useState([]);
          console.log("jj", jobs);

          useEffect(() => {
            (async () => {
              const result = await fetch(
                "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=node"
              );
              const data = await result.json();
              console.log("kk", data);
              setJobs(data);
            })();
          }, []);

          useEffect(() => {
            if (jobs == []) {
              return null;
            } else {
              setJobs(jobs);
            }
          }, [jobs]);



    return (
      <Context.Provider value={{ jobs, setJobs }}>{children}</Context.Provider>
    );
}



export {ContextProvider, Context}