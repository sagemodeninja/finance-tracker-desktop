import '@/components'
import '@larinonpm/components'

import { Expense } from '@/entities'
import { Frequency } from '@/enums'
import { ExpenseForm } from '@/forms'

class ExpenseScheduleView {
    private readonly _addExpenseBtn: HTMLButtonElement
    private readonly _container: HTMLDivElement
    private readonly _form: ExpenseForm

    private _expenses: Expense[]

    constructor() {
        this._addExpenseBtn = document.querySelector('#add_expense_btn')
        this._container = document.querySelector('#container')
        this._form = new ExpenseForm()
        this.addEventListeners()
    }

    public init() {
        this._expenses = Array.from({ length: 10 }, (_, i) => {
            return {
                id: i.toString(),
                name: `Liability ${i}`,
                frequency: i % 2,
                amount: 1000,
            } as Expense
        })
    }

    public render() {
        const items = this._expenses.map(e => {
            const div = document.createElement('div')
            div.innerText = `${e.id}: ${e.name}: ${Frequency[e.frequency]}: ${e.amount}`
            return div
        })
        this._container.replaceChildren(...items)
    }

    private addEventListeners() {
        this._addExpenseBtn.onclick = this.onAddBtnClick.bind(this)
    }

    private onAddBtnClick() {
        this._form.open({})
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const view = new ExpenseScheduleView()
    view.init()
    view.render()
})