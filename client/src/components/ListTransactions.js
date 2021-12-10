import React, {useContext} from 'react';
import { GlobalContext } from './context/GlobalContext';

import Transaction from './Transaction';

const ListTransactions = () => {

    const {transactions} = useContext(GlobalContext)
    console.log(transactions)

    return (
        <div className='TransactionItemsList'>
            <h3>History</h3>
            {
                transactions.map(transaction => {
                    return (
                        <Transaction key={transaction.id} id={transaction.id} style={ transaction.amount > 0 ? { borderRight: "5px solid green" } : {borderRight: "5px solid red"}} name={transaction.item_name} amount={transaction.amount} />
                    )
                })
            }
            {/* <Transaction style={{ borderRight: "5px solid green" }} name="Book Sold" amount={+100} />
            <Transaction style={{ borderRight: "5px solid red" }} name="Camera" amount={-50} />
            <Transaction style={{ borderRight: "5px solid green" }} name="Cash In" amount={+70} /> */}
        </div>
    )
}


export default ListTransactions;