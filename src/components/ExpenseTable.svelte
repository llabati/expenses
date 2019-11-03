<script>
import { fade } from 'svelte/transition'
import ExpenseRow from './ExpenseRow.svelte'
import expenseServices from '../shared/ExpenseServices.js'
import store from '../shared/ExpenseStore.js'
export let expenses

let fadeOptions = {
  duration: 1200
}

function updateExpense(event){
  const updatedExpense = event.detail
  expenseServices.updateExpense(updatedExpense)
    .then(() => {
      store.update(data => {
        const idx = data.findIndex(expense => expense.id === updatedExpense.id)
        data[idx] = updatedExpense
        return [ ...data ]
      })
    })
}

function deleteExpense(event){
  const deletedExpense = event.detail
  expenseServices.deleteExpense(deletedExpense)
    .then(() => {
      store.update(data => {
        data = data.filter(expense => expense.id !== deletedExpense.id)
        return [ ...data ]
      })
    })
}
</script>

<style></style>


<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Date</th>
      <th scope="col">Moyen de paiement</th>
      <th scope="col">Catégorie</th>
      <th scope="col">Montant</th>
      <th scope="col">Quantité</th>
      <th scope="col">Sous-total</th>
      <th scope="col" />
    </tr>
  </thead>
  <tbody>
    { #each expenses as exp }
        <ExpenseRow expense={ exp } on:expense-update={ updateExpense } on:expense-delete={ deleteExpense }></ExpenseRow>
        <!--<tr transition:fade={ fadeOptions }>
            <th scope="row">{ exp.id }</th>
            <td>{ exp.date }</td>
            <td>{ exp.paymentType }</td>
            <td>{ exp.category }</td>
            <td>{ exp.amount }</td>
            <td>{ exp.quantity }</td>
            <td>{ exp.subTotal }</td>
        </tr> -->
    { /each }
  </tbody>
</table>