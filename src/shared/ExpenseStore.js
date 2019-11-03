import { writable } from 'svelte/store'
import { tweened } from 'svelte/motion'
import { cubicOut } from 'svelte/easing'
//easing.net
import expenseServices from './ExpenseServices.js'

let expensesFirestore = []
const store = writable([])

expenseServices.readExpense().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        expensesFirestore = [
            ...expensesFirestore,
            {
                id: doc.id,
                date: doc.data().date,
                amount: parseFloat(doc.data().amount),
                paymentType: doc.data().paymentType,
                category: doc.data().category,
                quantity: doc.data().quantity,
                subTotal: parseFloat(doc.data().subTotal)
            }
        ]
    })
    store.set(expensesFirestore)
    console.log(store)
}).catch(err => console.error(err.message))

export const totalTweenStore = tweened(0, {
    delay: 1200,
    duration: 1000,
    easing: cubicOut
})

export default store