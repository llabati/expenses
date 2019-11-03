<script>
	//import { onMount } from 'svelte'
	import ExpenseTable from './components/ExpenseTable.svelte'
	import ExpenseCreate from './components/ExpenseCreate.svelte'
	import ExpenseTotal from './components/ExpenseTotal.svelte'
	import store from './shared/ExpenseStore.js'
	//import { db } from './shared/firebase.js'

	export let title
	let expenses = []
	//let expensesFirestore = []

	store.subscribe(data => {
		expenses = data
	})
/*
	onMount(() => {
		db.collection('expenses').onSnapshot(collectionSnapshot => {
			expensesFirestore = []
			collectionSnapshot.forEach(doc => {
				expensesFirestore = [ ...expensesFirestore, 
					{
						id: doc.id,
						date: doc.data().date,
						amount: doc.data().amount,
						paymentType: doc.data().paymentType,
						category: doc.data().category,
						quantity: doc.data().quantity,
						subTotal: doc.data().subTotal
					}
				]
			}) 
		})
	})
*/

	// || 

</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>{ title }</h1>
<ExpenseCreate></ExpenseCreate>
<ExpenseTable { expenses }></ExpenseTable>
<ExpenseTotal></ExpenseTotal>
