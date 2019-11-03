<script>
	import ExpenseTable from './components/ExpenseTable.svelte'
	import ExpenseCreate from './components/ExpenseCreate.svelte'
	import ExpenseTotal from './components/ExpenseTotal.svelte'
	import store from './shared/ExpenseStore.js'

	export let title
	let expenses = []

	store.subscribe(data => {
		expenses = data
	})


	// || 

	console.log('TOTAL', ExpenseTotal)
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
