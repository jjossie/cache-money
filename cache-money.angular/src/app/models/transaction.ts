export interface Transaction {
    name: string;
    amount: number;
    type: 'deposit' | 'withdrawal'; // Enforces deposit or withdrawal type
  }
  