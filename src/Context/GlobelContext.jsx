import {  createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

const initailState = {
    watchlist:  localStorage.getItem(process.env.REACT_APP_WATCHLIST_STORAGE_KEY) ?
        JSON.parse(localStorage.getItem(process.env.REACT_APP_WATCHLIST_STORAGE_KEY)) :
        [],
    watched:  localStorage.getItem(process.env.REACT_APP_WATCHED_STORAGE_KEY) ?
        JSON.parse(localStorage.getItem(process.env.REACT_APP_WATCHED_STORAGE_KEY)) :
        [],
}


const GlobelContext = createContext(initailState);

const ContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initailState);
    
    useEffect(() => {
        console.log(state);

        localStorage.setItem(
            process.env.REACT_APP_WATCHED_STORAGE_KEY,
            JSON.stringify(state.watched)
        );

        localStorage.setItem(
            process.env.REACT_APP_WATCHLIST_STORAGE_KEY,
            JSON.stringify(state.watchlist)
        );

    }, [state])

    return (
        <GlobelContext.Provider 
            value= {{
                watchlist: state.watchlist, 
                watched: state.watched, 
                MoviesDispatch : dispatch,
            }}>
            {children}                      
        </GlobelContext.Provider>
    )
}
const useMovieContext = () => {
    return useContext(GlobelContext)
}

export default ContextProvider;
export { GlobelContext, useMovieContext };