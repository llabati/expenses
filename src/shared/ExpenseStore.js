import { writable } from 'svelte/store'
import { tweened } from 'svelte/motion'
import { cubicOut } from 'svelte/easing'

//easing.net
const store = writable([
    {
        id: 1,
        date: '1er',
        paymentType: 'prélèvement automatique',
        category: 'loyer',
        amount: 600,
        quantity: 1,
        subtotal: 600
    },
    {
        id: 2,
        date: '3',
        paymentType: 'prélèvement automatique',
        category: 'abonnement internet',
        amount: 39,
        quantity: 1,
        subtotal: 39
    }
])

export const totalTweenStore = tweened(0, {
    delay: 1200,
    duration: 1000,
    easing: cubicOut
})

export default store