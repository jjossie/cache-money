/**
 * Response from /api/generate-budget, which is called every time the user
 * types a message into the chat box. This contains the OpenAI chatbot's 
 * response in addition to a suggested budget, if the AI identified that 
 * one was requested.
 */
export type GenerateBudgetResponse = {
    budget?: {
        categories: {
            name: string;
            amount: number;
        }[];
    };
    message: string;
}