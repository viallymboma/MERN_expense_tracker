import React, {useContext} from 'react';
import { GlobalContext } from './context/GlobalContext';


const IncomeExpenseDisplay = () => {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const positiveAmounts = amounts.filter(amount => amount > 0)
    const negativeAmounts = amounts.filter(amount => amount < 0)

    console.log(positiveAmounts)
    console.log(negativeAmounts)

    const totalPositiveAmounts = positiveAmounts.reduce((acc, item) => acc = acc + item, 0).toFixed(2)
    const totalNegativeAmounts = negativeAmounts.reduce((acc, item) => acc = acc + item, 0).toFixed(2)
    return (
        <div className='IncomeExpensesDisplayContainer'>


            <div className='IncomeContainerDiv center'>
                <h4>INCOME</h4>
                <div className='incomeValue centerIn'>
                    <h3>
                        + $ { totalPositiveAmounts }
                    </h3>
                </div>
            </div>

            <div className='ExpenseContainerDiv center'>
                <h4>EXPENSE</h4>
                <div className='expenseValue centerIn'>
                    <h3>
                        - $ { totalNegativeAmounts }
                    </h3>
                </div>
            </div>
            
        </div>
    )
}


export default IncomeExpenseDisplay;