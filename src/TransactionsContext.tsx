import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from './services/api';

interface Transaction {
  id: number,
  title: string,
  type: 'deposit' | 'withdraw'
  category: string,
  amount: number,
  createdAt: string
}

// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransactions: (transactions: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transitions')
    .then(response => setTransactions(response.data.transactions));
  }, [])

  function createTransactions(transactions: TransactionInput) {
    api.post('/transitions', transactions);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}