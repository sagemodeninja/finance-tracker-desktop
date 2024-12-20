import '@larinonpm/components'
import { Liability } from '@/entities'

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#container')

    const liabilities = Array.from({ length: 10 }, (_, i) => {
        return {
            id: i.toString(),
            name: `Liability ${i}`,
            startDate: new Date(10000),
            endDate: new Date(10001),
            total: 1000
        } as Liability
    })

    console.log(liabilities)
    const items = liabilities.map(l => {
        const div = document.createElement('div')
        div.innerText = `${l.id}: ${l.name}`
        return div
    })

    container.replaceChildren(...items)
})