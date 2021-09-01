import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';

import { GlobalStyle } from "./styles/global";

// Certifique-se de vincular o modal ao seu appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export function App() {
  const [isNewTranslationModalOpen, setIsNewTranslationModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTranslationModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTranslationModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header  onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTranslationModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
