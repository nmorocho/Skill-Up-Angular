export interface ResultAccounts {
    previousPage: null;
    nextPage: null;
    data: [
      {
        id: number;
        amount: number;
        concept: string;
        date: Date;
        type: string;
        accountId: number;
        userId: number;
        to_account_id: number;
        createdAt: Date;
        updatedAt: Date;
      }
    ]
}
