
const Transaction = require('../models/Transactions');

// @desc     Get all transactions
// @route    GET /api/v1/transactions
// @access   Public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

// @desc     Add transaction
// @route    GET /api/v1/transactions
// @access   Public
exports.addTransaction = async (req, res, next) => {

    try {
        const { text, amount } = req.body;

        const transaction = await Transaction.create(req.body);

        return res.status(201).json({
            suscess: true,
            data: transaction
        })
    } catch (err) {

        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            })
        }
        console.log(err)

    }

    res.send('POST transactions');
}

// @desc     Delete transaction
// @route    GET /api/v1/transactions
// @access   Public
exports.deleteTransaction = async (req, res, next) => {

    try {
        const transaction = await Transaction.findById(req.params.id);

        if (!transaction) {
            return res.status(404).json({
                success: false,
                error: 'The requested transaction cannot be found!'
            });
        }
        await transaction.remove()

        return res.status(200).json({
            success: true,
            data: {}
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
    // res.send('DELETE transactions');
}


// errors: {
//     text: ValidatorError: Please add some text
//         at validate (/home/vially/WORK/react_projects/income_tracker/MERN_expense_tracker/MERN_expense_tracker/node_modules/mongoose/lib/schematype.js:1277:13)
//         at /home/vially/WORK/react_projects/income_tracker/MERN_expense_tracker/MERN_expense_tracker/node_modules/mongoose/lib/schematype.js:1260:7
//         at Array.forEach (<anonymous>)
//         at SchemaString.SchemaType.doValidate (/home/vially/WORK/react_projects/income_tracker/MERN_expense_tracker/MERN_expense_tracker/node_modules/mongoose/lib/schematype.js:1210:14)
//         at /home/vially/WORK/react_projects/income_tracker/MERN_expense_tracker/MERN_expense_tracker/node_modules/mongoose/lib/document.js:2704:18
//         at processTicksAndRejections (node:internal/process/task_queues:78:11) {
//       properties: [Object],
//       kind: 'required',
//       path: 'text',
//       value: undefined,
//       reason: undefined,
//       [Symbol(mongoose:validatorError)]: true
//     }
//   }


