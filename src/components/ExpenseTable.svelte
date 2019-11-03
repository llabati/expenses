<script>
import { fade } from 'svelte/transition'
export let expenses

let fadeOptions = {
  duration: 1200
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
        <tr transition:fade={ fadeOptions }>
            <th scope="row">{ exp.id }</th>
            <td>{ exp.date }</td>
            <td>{ exp.paymentType }</td>
            <td>{ exp.category }</td>
            <td>{ exp.amount }</td>
            <td>{ exp.quantity }</td>
            <td>{ exp.subtotal }</td>
        </tr>
    { /each }
  </tbody>
</table>