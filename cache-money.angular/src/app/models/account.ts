
export interface Account {
    name: string;
    value: number;
    type: 'bank' | 'investment' | 'credit card'; // Enforced account types
  }
  