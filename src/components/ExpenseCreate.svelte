<script>
  import store from "../shared/ExpenseStore.js";
  //import expenseService from "../shared/ExpenseService.js";
  let date;
  let paymentType;
  let category;
  let amount = "00.00";
  let quantity;
  $: subtotal = amount * quantity;

  function createExpense() {
    store.update(data => {
    let id = data.length + 1
    let newExpense = {
      id: data.length + 1,
      date,
      paymentType,
      category,
      amount: parseFloat(amount),
      quantity,
      subtotal
        }
    return [ ...data, newExpense ]

      })

    /*expenseService.createExpense(newExpense).then(docRef => {
      store.update(data => {
        newExpense.id = docRef.id;
        return [...data, newExpense];
      });
      initForm();
    }); */
  }

  function initForm() {
    date = getCurrentDate();
    paymentType = "cash";
    category = "food";
    amount = "00.00";
    quantity = 1;
  }

  function getCurrentDate() {
    var today = new Date();
    return (
      today.getFullYear() +
      "-" +
      ("0" + (today.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + today.getDate()).slice(-2)
    );
  }
  initForm();  
</script>

<style>
</style>

<form on:submit|preventDefault={createExpense}>
  <div class="form-group">
    <label for="date">Date</label>
    <input
      type="date"
      class="form-control"
      id="date"
      placeholder="jj/mm/aaaa"
      bind:value={ date } />
  </div>
  <div class="form-group">
    <label for="paymentType">Mode de paiement</label>
    <select class="form-control" id="paymentType" bind:value={ paymentType }>
      <option value="cash">Liquide</option>
      <option value="card">Carte</option>
      <option value="direct-debit">Prélèvement</option>
      <option value="cheque">Chèque</option>
    </select>
  </div>
  <div class="form-group">
    <label for="category">Catégorie</label>
    <select class="form-control" id="category" bind:value={ category }>
      <option value="rent">Logement</option>
      <option value="electricity">Energie</option>
      <option value="food">Quotidien</option>
      <option value="phone">Télécom</option>
      <option value="clothes">Habillement</option>
      <option value="leisure">Loisirs</option>
    </select>
  </div>
  <div class="form-group">
    <label for="amount">Montant</label>
    <input
      type="text"
      class="form-control"
      id="amount"
      bind:value={ amount } />
  </div>
  <div class="form-group">
    <label for="quantity">Quantité</label>
    <input
      type="number"
      class="form-control"
      id="quantity"
      bind:value={ quantity } />
  </div>
  <button class="btn btn-success">Entrez</button>
</form>