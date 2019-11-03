import { db } from './firebase.js'

function createExpense(newExpense) {
    return db.collection('expenses').add(newExpense)
}

function readExpense() {
    return db.collection('expenses').get()
}

function updateExpense(expense) {
    return db.collection('expenses').doc(expense.id).update({ ...expense })
}

function deleteExpense(expense) {
    return db.collection('expenses').doc(expense.id).delete()
}

const expenseServices = {
    createExpense,
    readExpense,
    updateExpense,
    deleteExpense
}

export default expenseServices