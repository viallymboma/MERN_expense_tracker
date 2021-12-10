import React, {useContext} from 'react';
import { GlobalContext } from './context/GlobalContext';

const BanlanceDisplay = () => {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount)
    const total = amounts.reduce((acc, item) => acc = acc + item, 0).toFixed(2)

    console.log(amounts)
    console.log(total)
    return (
        <div className='BalanceContainer'>
            <h4>Your Balance</h4>
            <h1 id='balance'>${total}</h1>
        </div>
    )
}

export default BanlanceDisplay;
