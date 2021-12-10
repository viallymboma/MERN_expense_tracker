import React from 'react';
import ActionContent from './ActionContent';
// import AddTransaction from './AddTransaction';
import BanlanceDisplay from './BanlanceDisplay';
import IncomeExpenseDisplay from './IncomeExpenseDisplay';
// import ListTransactions from './ListTransactions';
import Title from './Title';

const Main = () => {
    return (
        <div className='Container'>
            <Title />

            <BanlanceDisplay />

            <IncomeExpenseDisplay />

            <ActionContent />
        </div>
    )
}


export default Main;