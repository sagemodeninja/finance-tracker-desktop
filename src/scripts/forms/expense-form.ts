import { Expense } from '@/entities'
import { ModalDialog } from '@/components'
import { BoundForm, defaultItemValidator, FormItem } from '@larinonpm/components'

export class ExpenseForm {
    private readonly _dialog: ModalDialog
    private readonly _form: BoundForm<Expense>
    private readonly _saveBtn: HTMLButtonElement

    constructor() {
        this._dialog = document.querySelector('#form_dialog')
        this._form = this._dialog.querySelector('#form')
        this._saveBtn = this._dialog.querySelector('#submit-button')

        this.addEventListeners()
    }

    public open(expense: Partial<Expense>) {
        this._form.initialValues = {
            id: expense.id,
            name: expense.name,
            frequency: expense.frequency,
            amount: expense.amount
        }
        this._dialog.show()
    }

    private addEventListeners() {
        this._dialog.onclose = this.close.bind(this)
        this._form.onvalidate = async (value: any, item: FormItem) => {
            return defaultItemValidator(value, item)
        }
        this._form.onvalidated = async (valid: boolean) => {
            this._saveBtn.disabled = !valid 
        }
        this._saveBtn.onclick = this.save.bind(this)
    }

    private async save() {
        this._dialog.close()
    }

    private close() {
        // if (this._onclose) {
        //     const result = this._result
        //     window.setTimeout(() => this._onclose(result), 0)
        // }
        
        // this._result = undefined
        this._form.reset()
        // this._statusStrip.hide()
    }
}