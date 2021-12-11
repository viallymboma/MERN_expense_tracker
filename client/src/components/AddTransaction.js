import React, { useState, useContext } from 'react'
import { GlobalContext } from './context/GlobalContext';


const AddTransaction = () => {

    const { addTransaction } = useContext(GlobalContext)

    const [item_name, setItem_namet] = useState()
    const [amount, setamount] = useState()

    const onSubmited = (e) => {
        e.preventDefault();

        const newTransaction = {
            // id: Math.floor(Math.random(GlobalContext)),
            text: item_name,
            amount: parseFloat(amount)
        }

        addTransaction(newTransaction);
    }

    return (
        <div className='FormContainer'>
            <h3>Add new Transaction</h3>
            <form className='FormContent' onSubmit={onSubmited}>
                <div className='FormControl'>
                    <input type="text" value={item_name} onChange={(e) => setItem_namet(e.target.value)} placeholder="Enter Expense name..." />
                </div>

                <div className='FormControl'>
                    <input type="number" value={amount} onChange={(e) => setamount(e.target.value)} placeholder="Enter amount..." />
                </div>

                <div className='FormControl'>
                    <button className='btn'>Add Transaction</button>
                </div>

            </form>

        </div>
    )
}

export default AddTransaction;