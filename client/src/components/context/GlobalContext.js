import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
    transactions: [],
    error: null,
    loading: true
}

console.log(initialState.transactions)

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    const getTransactions = async () => {
        try {
            const res = await axios.get('/api/v1/transactions');
            console.log(res.data.data)
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            })
        } catch (error) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data.error
            })
        }
    }

    const deleteTransaction = async (id) => {
        try {
            console.log(id)
            const res = await axios.delete(`/api/v1/transactions/${id}`);
            dispatch ({
                type: 'DELETE_TRANSACTION',
                payload: res.data.data,
            })

        } catch (err) {
            
            dispatch ({
                type: 'DELETE_TRANSACTION_ERROR',
                payload: err.response.data.error,
            })
        }
    }

    const addTransaction = async (transaction) => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/v1/transactions', transaction, config)
            dispatch ({
                type: 'ADD_TRANSACTION',
                payload: res.data.data,
            })
        } catch (err) {
            dispatch ({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error,
            })
        }

    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        addTransaction,
        deleteTransaction,
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