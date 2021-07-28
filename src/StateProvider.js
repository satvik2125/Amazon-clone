import React,{createContext, useContext, useReducer} from 'react';

// preparing the data layer
export const StateContext = createContext();


//wrap our components,provide the provider
export const StateProvider = ({reducer,initialState,children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);



//to use it inside a component
export const useStateValue = () => useContext(StateContext);