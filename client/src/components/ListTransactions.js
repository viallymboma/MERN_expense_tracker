import React, { useContext, useEffect } from 'react';
import { GlobalContext } from './context/GlobalContext';

import Transaction from './Transaction';

const ListTransactions = () => {

    const { transactions, getTransactions } = useContext(GlobalContext);

    useEffect(() => {
        getTransactions();
        console.log(getTransactions())
        // eslint-di-able-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(transactions)

    return (
        <div className='TransactionItemsList'>
            <h3>History</h3>
            {
                transactions.map(transaction => {
                    return (
                        <Transaction key={transaction._id} id={transaction._id} style={ transaction.amount > 0 ? { borderRight: "5px solid green" } : {borderRight: "5px solid red"}} name={transaction.text} amount={transaction.amount} />
                    )
                })
            }
        </div>
    )
}


export default ListTransactions;