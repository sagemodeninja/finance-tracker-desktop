import '@larinonpm/components'
import { Expense } from '@/entities'
import { Frequency } from '@/enums'

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#container')

    const expenses = Array.from({ length: 10 }, (_, i) => {
        return {
            id: i.toString(),
            name: `Liability ${i}`,
            frequency: i % 2,
            amount: 1000,
        } as Expense
    })

    console.log(expenses)
    const items = expenses.map(e => {
        const div = document.createElement('div')
        div.innerText = `${e.id}: ${e.name}: ${Frequency[e.frequency]}: ${e.amount}`
        return div
    })

    container.replaceChildren(...items)
})