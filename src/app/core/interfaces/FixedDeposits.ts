export interface FixedDeposit {
    userId: number;
    accountId: number;
    amount: number;
    creation_date: Date;
    closing_date: Date;
}

export interface FixedDepositCreated {
    id: number;
    userId: number;
    accountId: number;
    amount: number;
    creation_date: Date;
    closing_date: Date;
    updatedAt: Date;
    createdAt: Date;
}
