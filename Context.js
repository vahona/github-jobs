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
      const [NewYorkJob, setNewYorkJob] = useState([]);
      const [description, setDescription] = useState([]);
      const [inputValue, setInputValue] = useState("");
      const [inputValueLocation, setInputValueLocation] = useState("");
      const [title, setTitle] = useState([]);
      const [BerlinJobState, setBerlinJobState ] = useState([]);
      const [checkedBerlin, setCheckedBerlin] = useState(false);
      const [LondonJobState, setLondonJobState] = useState([]);
      const [checkedLondon, setCheckedlondon] = useState(false);

      // const [loading, setLoading] = useState(false)

      console.log(jobs);

      // Use useEffect to fetch the data from API

      const fullTime = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1&search=code"; 
      const NewYork = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=new+york"; 

      useEffect(() => {
        (async () => {
          const result = await fetch(fullTime);
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

      
      // Fetching New Yourk job


        // useEffect(() => {
        //   (async () => {
        //     const result = await fetch(NewYork);
        //     const dataNew = await result.json();
        //     setJobs(dataNew);
        //   })();
        // }, []);

        // useEffect(() => {
        //   if (NewYorkJob == []) {
        //     return null;
        //   } else {
        //     setNewYorkJob(NewYorkJob);
        //   }
        // }, [NewYorkJob])



      //jobs.github.com/positions.json?description=python&location=new+york

      // Filtering the jobs by its title, company, enterprise and benefit

       const SomeJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(inputValue.toLowerCase())
      );

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



      // Filtering by the Location Berlin

      const BerlinJobs = jobs.filter((job) => job.location ===  "Berlin");


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



        const LondonJobs = jobs.filter((job) => job.location === "London");

        function JobsLondon() {
          if (!checkedLondon) {
            setCheckedlondon(LondonJobState);
            return LondonJobs;
          } else {
            return jobs;
          }
        }

        useEffect(() => {
          setJobs(LondonJobs);
        }, ["London", checkedLondon]);



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
            LondonJobState,
            setLondonJobState,
            checkedLondon,
            setCheckedlondon,
            JobsLondon,
          }}
        >
          {children}
        </Context.Provider>
      );
    }

   export { ContextProvider, Context };
