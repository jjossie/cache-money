/**
 * Response from /api/current-spending, which should be called when
 * the user loads the "Current Financial Picture" page or whatever 
 * we want to call it
 */
export type CurrentSpendingResponse = {
    transactions: {
        merchant: string;
        amount: number;
        category: string;
        account: string;
        date: string;
    }[];
    categories: {
        // name: string;
        // currentAmount: number;
        // budgetAmount: number;
        [category: string]: {
            dollar_amount: number;
            amount_trans: number;
            budget: number;
        }
    }[];
    total: {
        total_spend: number;
        total_budget: number;
    };
}