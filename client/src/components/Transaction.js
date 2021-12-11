import React, { useContext } from 'react';
import { GlobalContext } from './context/GlobalContext';


const Transaction = (props) => {

    const { deleteTransaction } = useContext(GlobalContext)

    const sign = props.amount < 0 ? '-' : '+';

    console.log(props.id)

    return (
        <div className='TransactionItem' style={props.style}>

            <div className='info'>
                <h3>{props.name}</h3>
                <h2 >{sign}$ {Math.abs(props.amount)}.00 </h2>
            </div>

            <div className='btnClass'>
                <button onClick={() => deleteTransaction(props.id)} className='delete-btn'>X</button>
            </div>

        </div>

    )
}

export default Transaction;
