import { useReducer } from "react";


function CounterWithReducer(){

    const reducer = (state, action) => {
        switch(action){
            case "Increment": 
            return { ...state, count: state.count + 1 };
            case "Decrement": 
            return { ...state, count: state.count - 1 };
            case "Reset" : 
            return { count: 0 };
            default: 
            return state
        }
    }

    const initialState = { count: 0 };

    const [state, dispatch] = useReducer(reducer, initialState);

    return <div>

        <h2>Counter {state.count}</h2>
        <button onClick={()=>dispatch("Increment")}>Increment</button>
        <button onClick={()=>dispatch("Decrement")}>Decrement</button>
        <button onClick={()=>dispatch("Reset")}>Reset</button>

    </div>
}

export default CounterWithReducer;