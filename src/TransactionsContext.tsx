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

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transitions')
    .then(response => setTransactions(response.data.transactions));
  }, [])

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}