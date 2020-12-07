import React, { Children, createContext, useReducer, useEffect } from 'react'

const Context = React.createContext()

function ContextProvider({children}) {

    const [state, dispatch] = useReducer (
      (state, action) => {
        switch (action.type) {
          case " FETCH-API-DATA": {
            const url = "https://jobs.github.com/positions.json?description=python&location=new+york";
            state = fetch(url);
            response = state.json();

              }

            return {
              ...state,
              loading: false,
              job: response,
            };


          default: {
            break;
          }
        }

        return state;
      },

      {
        loading: true,
        job: []
      }
    );

    useEffect(() => {
         dispatch({ type: "FETCH-API-DATA" });
    }, [])


    return (
        <Context.Provider value = {{state, dispatch}} >
            {children}
        </Context.Provider>
    )
}



export {ContextProvider, Context}