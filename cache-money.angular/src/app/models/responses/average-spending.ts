/**
 * Response from /api/average-spending, which shoould be called when
 * the user hits the main "Planning" page (still not sure what to call
 * it, it used to be called "Budgets")
 */
export type AverageSpendingResponse = {
    categories: {
        name: string;
        amount: string;
    }[];
}