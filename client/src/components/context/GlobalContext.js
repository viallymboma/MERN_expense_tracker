import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transactions: []
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    const deleteTransaction = (id) => {
        dispatch ({
            type: 'DELETE_TRANSACTION',
            payload: id,
        })
    }

    const addTransaction = (transaction) => {
        dispatch ({
            type: 'ADD_TRANSACTION',
            payload: transaction,
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}











// transactions: [
//     { id: 1, item_name: 'Flower', amount: -20 },
//     { id: 2, item_name: 'Salary', amount: 4000 },
//     { id: 3, item_name: 'Book', amount: -20 },
//     { id: 4, item_name: 'Shirt', amount: -50 },
//     { id: 5, item_name: 'Table', amount: -150 },
//     // { id: 5, name: 'Table', amount: -150 },
// ]