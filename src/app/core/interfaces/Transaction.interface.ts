
export interface Transactions {
    nextPage?: string
    previousPage?: string,
    data: Transaction[]
}

export interface Transaction {
    id?:string
    amount: number,
    concept: string,
    date: string,
    type: string,
    accountId: number,
    userId: number,
    to_account_id: number
}