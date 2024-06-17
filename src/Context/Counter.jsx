import { createContext } from "react";

export const CounterContext = createContext(null);

export const CounterProvider = (props) => {
    return (
        <CounterContext.Provider>
            <h1>Okay</h1>
        </CounterContext.Provider>
    )
}