import { Frequency } from '@/enums'

export interface Expense {
    id: string
    name: string
    frequency: Frequency
    amount: number
    discount: number
    offset: number
    bank: number
}