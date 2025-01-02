import { customComponent } from '@sagemodeninja/custom-component'
import { html, unsafeCSS, LitElement, PropertyValues } from 'lit'
import { query, property } from 'lit/decorators.js'
import styles from './modal-dialog.component.scss'

@customComponent('modal-dialog')
export class ModalDialog extends LitElement {
    static styles = unsafeCSS(styles)

    @query('.control')
    private _control: HTMLDialogElement

    @property()
    public width?: string

    @property()
    public height?: string

    public render() {
        return html`
            <dialog class="control" @close=${this.handleClose}>
                <button class="close-button" @click=${this.close}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M12.12,10l4.07-4.06a1.5,1.5,0,1,0-2.11-2.12L10,7.88,5.94,3.81A1.5,1.5,0,1,0,3.82,5.93L7.88,10,3.81,14.06a1.5,1.5,0,0,0,0,2.12,1.51,1.51,0,0,0,2.13,0L10,12.12l4.06,4.07a1.45,1.45,0,0,0,1.06.44,1.5,1.5,0,0,0,1.06-2.56Z"></path>
                    </svg>
                </button>
                <slot></slot>
            </dialog>
        `
    }

    public show() {
        this._control.showModal()
    }

    public close() {
        this._control.close()
    }

    protected updated(changes: PropertyValues): void {
        if (changes.has('width'))
            this.setSize('width')

        if (changes.has('height'))
            this.setSize('height')
    }

    private setSize(prop: string) {
        this.style.setProperty(`--${prop}`, this[prop] ?? 'max-content')
    }

    private handleClose() {
        this.dispatchEvent(new CustomEvent('close'))
    }
}