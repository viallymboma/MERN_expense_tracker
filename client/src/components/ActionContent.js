import React from 'react'
import AddTransaction from './AddTransaction';
import ListTransactions from './ListTransactions';

const ActionContent = () => {
    return (
        <div className='ActionContainer'>
            <AddTransaction />
            <ListTransactions />

        </div>
    )
}


export default ActionContent;
