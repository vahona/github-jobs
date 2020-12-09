    import React, {
      Children,
      createContext,
      useReducer,
      useEffect,
      useState,
    } from "react";

    const Context = React.createContext();

    function ContextProvider({ children }) {
    // Set state to store the data

      const [jobs, setJobs] = useState([]);
      const [description, setDescription] = useState([]);
      const [inputValue, setInputValue] = useState("");
      const [inputValueLocation, setInputValueLocation] = useState("");
      const [title, setTitle] = useState([]);
      const [BerlinJobState, setBerlinJobState ] = useState([]);
      const [checkedBerlin, setCheckedBerlin] = useState(false);

      // const [loading, setLoading] = useState(false)

      console.log(jobs);

      // Use useEffect to fetch the data from API

      useEffect(() => {
        (async () => {
          const result = await fetch(
            "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=node"
          );
          const data = await result.json();
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

      // Filtering the jobs by its title, company, enterprise and benefit

      const SomeJobs = jobs.filter((job) => job.title.toLowerCase().includes(inputValue.toLowerCase()));

      useEffect(() => {
          setJobs(SomeJobs);
      }, [title, inputValue]);

      // Filtering by Location

      const SomeJobByLocation = jobs.filter((works) => works.location.toLowerCase().includes(inputValueLocation.toLowerCase()));

      useEffect(() => {
        setJobs(SomeJobByLocation);
      }, [location, inputValueLocation]);

      // Function to display the filtering

      function searchButton() {
        console.log(SomeJobByLocation);
          return SomeJobByLocation;
          }

      // Filtering by the type


      // Filtering by the Location Londown

      const BerlinJobs = jobs.filter((job) => job.location ===  "Berlin");

      console.log(BerlinJobs);

      function JobsBerlin() {
        if(!checkedBerlin) {
          setCheckedBerlin(BerlinJobState)
          return BerlinJobs
        }
        else {
          return jobs
        }
      }
      

      useEffect(() => {
        setJobs(BerlinJobs);
      }, ["Berlin", checkedBerlin]);



      return (
        <Context.Provider
          value={{
            jobs,
            setJobs,
            inputValue,
            setInputValue,
            inputValueLocation,
            setInputValueLocation,
            BerlinJobState,
            setBerlinJobState,
            checkedBerlin,
            setCheckedBerlin,
            searchButton,
            JobsBerlin,
          }}
        >
          {children}
        </Context.Provider>
      );
    }

   export { ContextProvider, Context };
