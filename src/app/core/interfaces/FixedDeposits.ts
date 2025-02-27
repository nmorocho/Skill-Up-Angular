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

export interface AccountUser  {
  id: number;
  creationDate: Date;
  money: number;
  isBlocked: boolean;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ResponseFixedDeposits {
  previousPage: null,
  nextPage: null,
  data: FixedDepositCreated[]
}
